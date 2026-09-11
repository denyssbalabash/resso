import { NextResponse } from 'next/server';
import crypto from 'crypto';
import * as admin from 'firebase-admin';

// Инициализация Firebase Admin Singleton
function getFirebaseAdminApp() {
  if (admin.apps.length > 0) {
    return admin.apps[0] as admin.app.App;
  }
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  let privateKey = process.env.FIREBASE_PRIVATE_KEY;
  if (privateKey) {
    privateKey = privateKey.replace(/\\n/g, '\n');
  }
  if (!projectId || !clientEmail || !privateKey) {
    console.error('Missing Firebase Admin environment variables.');
  }
  return admin.initializeApp({
    credential: admin.credential.cert({
      projectId,
      clientEmail,
      privateKey,
    }),
  });
}

const adminDb = getFirebaseAdminApp().firestore();

export type TelegramUser = {
  id: number;
  first_name: string;
  username?: string;
  photo_url?: string;
};

// Валидация подписи Telegram
function validateInitData(initData: string, botToken: string): TelegramUser | null {
  try {
    const urlParams = new URLSearchParams(initData);
    const hash = urlParams.get('hash');
    if (!hash) return null;
    urlParams.delete('hash');
    const dataCheckString = Array.from(urlParams.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, value]) => `${key}=${value}`)
      .join('\n');
    const secretKey = crypto.createHmac('sha256', 'WebAppData').update(botToken).digest();
    const calculatedHash = crypto.createHmac('sha256', secretKey).update(dataCheckString).digest('hex');
    if (calculatedHash === hash) {
      const userString = urlParams.get('user');
      if (userString) {
        return JSON.parse(userString) as TelegramUser;
      }
    }
  } catch (error) {
    console.error('Error validating initData:', error);
  }
  return null;
}

export async function POST(req: Request) {
  try {
    const { initData } = await req.json();
    const botToken = process.env.BOT_TOKEN;
    if (!botToken) {
      return NextResponse.json({ error: 'Server not configured properly' }, { status: 500 });
    }

    const telegramUser = validateInitData(initData, botToken);
    if (!telegramUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userIdStr = telegramUser.id.toString();
    const userRef = adminDb.collection('users').doc(userIdStr);
    const userSnap = await userRef.get();
    const now = new Date().toISOString();

    if (!userSnap.exists) {
      const newProfile = {
        telegramId: telegramUser.id,
        firstName: telegramUser.first_name,
        username: telegramUser.username || null,
        photoUrl: telegramUser.photo_url || null,
        spinsLeft: 1, // Приветственный спин
        hasSpunWheel: false,
        isIgSubscribed: false,
        isMapsReviewed: false,
        createdAt: now,
        lastActiveAt: now,
      };
      await userRef.set(newProfile);
      return NextResponse.json(newProfile);
    } else {
      await userRef.update({
        lastActiveAt: now,
        firstName: telegramUser.first_name,
        username: telegramUser.username || null,
        photoUrl: telegramUser.photo_url || null,
      });
      const data = userSnap.data();
      return NextResponse.json({
        ...data,
        lastActiveAt: now,
        firstName: telegramUser.first_name,
        username: telegramUser.username || null,
        photoUrl: telegramUser.photo_url || null,
      });
    }
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
