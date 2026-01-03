'use server';

/**
 * @fileOverview Provides AI feedback on Slovak pronunciation, rhythm, and intonation.
 *
 * - getPronunciationFeedback - A function that handles the pronunciation feedback process.
 * - PronunciationFeedbackInput - The input type for the getPronunciationFeedback function.
 * - PronunciationFeedbackOutput - The return type for the getPronunciationFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PronunciationFeedbackInputSchema = z.object({
  audioDataUri: z
    .string()
    .describe(
      "A recording of the user pronouncing Slovak words or phrases, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  text: z.string().describe('The Slovak text that the user is pronouncing.'),
});
export type PronunciationFeedbackInput = z.infer<typeof PronunciationFeedbackInputSchema>;

const PronunciationFeedbackOutputSchema = z.object({
  pronunciationFeedback: z.string().describe('AI feedback on the user\'s pronunciation, rhythm, and intonation.'),
});
export type PronunciationFeedbackOutput = z.infer<typeof PronunciationFeedbackOutputSchema>;

export async function getPronunciationFeedback(input: PronunciationFeedbackInput): Promise<PronunciationFeedbackOutput> {
  return pronunciationFeedbackFlow(input);
}

const pronunciationFeedbackPrompt = ai.definePrompt({
  name: 'pronunciationFeedbackPrompt',
  input: {schema: PronunciationFeedbackInputSchema},
  output: {schema: PronunciationFeedbackOutputSchema},
  prompt: `You are a Slovak language tutor providing feedback on a student\'s pronunciation.

You will be given the text the student is reading, and an audio recording of their attempt.

Provide detailed feedback on their pronunciation, rhythm, and intonation.

Text: {{{text}}}
Audio: {{media url=audioDataUri}}
`,
});

const pronunciationFeedbackFlow = ai.defineFlow(
  {
    name: 'pronunciationFeedbackFlow',
    inputSchema: PronunciationFeedbackInputSchema,
    outputSchema: PronunciationFeedbackOutputSchema,
  },
  async input => {
    const {output} = await pronunciationFeedbackPrompt(input);
    return output!;
  }
);
