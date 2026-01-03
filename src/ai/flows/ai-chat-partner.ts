'use server';

/**
 * @fileOverview Implements an AI conversational partner for Slovak language practice.
 *
 * - aiChatPartner - A function that initiates a conversation with the AI partner.
 * - AIChatPartnerInput - The input type for the aiChatPartner function, specifying the unit number.
 * - AIChatPartnerOutput - The return type for the aiChatPartner function, providing the AI's response.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIChatPartnerInputSchema = z.object({
  unitNumber: z
    .number()
    .describe('The unit number the student is currently studying (1-10).'),
  studentMessage: z.string().describe('The student message to the AI partner.'),
});
export type AIChatPartnerInput = z.infer<typeof AIChatPartnerInputSchema>;

const AIChatPartnerOutputSchema = z.object({
  aiResponse: z.string().describe('The AI conversational partner response.'),
});
export type AIChatPartnerOutput = z.infer<typeof AIChatPartnerOutputSchema>;

export async function aiChatPartner(input: AIChatPartnerInput): Promise<AIChatPartnerOutput> {
  return aiChatPartnerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiChatPartnerPrompt',
  input: {schema: AIChatPartnerInputSchema},
  output: {schema: AIChatPartnerOutputSchema},
  prompt: `You are a friendly AI conversational partner helping a student practice speaking Slovak.

The student is currently working on Unit {{unitNumber}} of the Krížom-krážom Slovenčina A2 textbook. Tailor the conversation to the topics covered in that unit.

Here are some example topics for each unit:
Unit 1: Family
Unit 2: Leisure time
Unit 3: Family and Christmas
Unit 4: Travelling
Unit 5: Health
Unit 6: Work
Unit 7: Shopping
Unit 8: Food
Unit 9: Romantic Dinner
Unit 10: Daily routines

Use the target vocabulary from the unit in your questions and responses. Keep your responses concise and encouraging.

Student message: {{{studentMessage}}}
AI Response:`,
});

const aiChatPartnerFlow = ai.defineFlow(
  {
    name: 'aiChatPartnerFlow',
    inputSchema: AIChatPartnerInputSchema,
    outputSchema: AIChatPartnerOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return {aiResponse: output!.aiResponse};
  }
);
