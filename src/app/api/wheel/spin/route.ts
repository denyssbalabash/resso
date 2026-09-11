import { NextResponse } from 'next/server';
import * as admin from 'firebase-admin';

const adminDb = admin.apps[0]?.firestore() || admin.initializeApp().firestore();

export async function POST(req: Request) {
  try {
    const { telegramId } = await req.json();
    if (!telegramId) {
      return NextResponse.json({ error: 'Missing telegramId' }, { status: 400 });
    }

    const userIdStr = telegramId.toString();
    const userRef = adminDb.collection('users').doc(userIdStr);
    
    const result = await adminDb.runTransaction(async (transaction) => {
      const userSnap = await transaction.get(userRef);
      if (!userSnap.exists) {
        throw new Error('User not found');
      }
      
      const userData = userSnap.data();
      
      if (userData?.spinsLeft <= 0) {
        throw new Error('No spins left');
      }
      
      const isShopper = userData?.isIgSubscribed && userData?.isMapsReviewed && userData?.spinsLeft === 1;
      const targetId = isShopper ? 'tote' : 'cookie';
      const targetLabel = isShopper ? 'Шопер Resso' : 'Печиво з передбаченням';
      
      const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
      const pick = (n: number) => Array.from({ length: n }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join('');
      const code = `RS-${pick(4)}-${pick(2)}`;
      
      transaction.update(userRef, {
        spinsLeft: userData!.spinsLeft - 1,
        hasSpunWheel: true,
      });
      
      return { prizeId: targetId, label: targetLabel, code, wonAt: new Date().toISOString() };
    });
    
    return NextResponse.json({ success: true, prize: result });
  } catch (error: any) {
    console.error('Spin Error:', error);
    if (error.message === 'User not found' || error.message === 'No spins left') {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
