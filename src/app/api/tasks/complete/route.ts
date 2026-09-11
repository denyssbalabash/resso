import { NextResponse } from 'next/server';
import * as admin from 'firebase-admin';

const adminDb = admin.apps[0]?.firestore() || admin.initializeApp().firestore();

export async function POST(req: Request) {
  try {
    const { telegramId, taskType } = await req.json();
    if (!telegramId || !taskType || !['instagram', 'maps'].includes(taskType)) {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }

    const userIdStr = telegramId.toString();
    const userRef = adminDb.collection('users').doc(userIdStr);
    
    await adminDb.runTransaction(async (transaction) => {
      const userSnap = await transaction.get(userRef);
      if (!userSnap.exists) {
        throw new Error('User not found');
      }
      
      const userData = userSnap.data();
      
      if (taskType === 'instagram' && !userData?.isIgSubscribed) {
        transaction.update(userRef, {
          isIgSubscribed: true,
          spinsLeft: userData!.spinsLeft + 1,
        });
      } else if (taskType === 'maps' && !userData?.isMapsReviewed) {
        transaction.update(userRef, {
          isMapsReviewed: true,
          spinsLeft: userData!.spinsLeft + 1,
        });
      }
    });
    
    const updatedUserSnap = await userRef.get();
    return NextResponse.json(updatedUserSnap.data());
  } catch (error: any) {
    console.error('Task Complete Error:', error);
    if (error.message === 'User not found') {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
