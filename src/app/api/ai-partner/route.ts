import { aiChatPartnerFlow } from '@/ai/dev';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { studentMessage, unitNumber } = body;

    if (!studentMessage || !unitNumber) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Call the Genkit flow
    const result = await aiChatPartnerFlow({
      studentMessage,
      unitNumber,
    });

    return NextResponse.json({
      aiResponse: result.aiResponse,
    });
  } catch (error) {
    console.error('Error in AI partner endpoint:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
