'use server';

/**
 * @fileOverview An AI agent that provides real-time grammatical feedback on written Slovak.
 *
 * - correctSlovakWriting - A function that handles the writing correction process.
 * - CorrectSlovakWritingInput - The input type for the correctSlovakWriting function.
 * - CorrectSlovakWritingOutput - The return type for the correctSlovakWriting function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CorrectSlovakWritingInputSchema = z.object({
  text: z.string().describe('The Slovak text to be corrected.'),
});
export type CorrectSlovakWritingInput = z.infer<typeof CorrectSlovakWritingInputSchema>;

const CorrectSlovakWritingOutputSchema = z.object({
  correctedText: z.string().describe('The corrected Slovak text.'),
  feedback: z.string().describe('Explanation of the corrections made.'),
});
export type CorrectSlovakWritingOutput = z.infer<typeof CorrectSlovakWritingOutputSchema>;

export async function correctSlovakWriting(input: CorrectSlovakWritingInput): Promise<CorrectSlovakWritingOutput> {
  return correctSlovakWritingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'correctSlovakWritingPrompt',
  input: {schema: CorrectSlovakWritingInputSchema},
  output: {schema: CorrectSlovakWritingOutputSchema},
  prompt: `You are an expert Slovak language tutor. Your task is to correct the given Slovak text and provide feedback on the errors.

Text to correct: {{{text}}}

Corrected Text and Feedback:
`, // Removed Handlebars logic
});

const correctSlovakWritingFlow = ai.defineFlow(
  {
    name: 'correctSlovakWritingFlow',
    inputSchema: CorrectSlovakWritingInputSchema,
    outputSchema: CorrectSlovakWritingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
