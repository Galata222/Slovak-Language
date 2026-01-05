import { correctSlovakWritingFlow } from '@/ai/dev';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { text } = body;

    if (!text) {
      return NextResponse.json(
        { error: 'Missing text field' },
        { status: 400 }
      );
    }

    // Call the Genkit flow
    const result = await correctSlovakWritingFlow({
      text,
    });

    return NextResponse.json({
      correctedText: result.correctedText,
      feedback: result.feedback,
    });
  } catch (error) {
    console.error('Error in text correction endpoint:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
