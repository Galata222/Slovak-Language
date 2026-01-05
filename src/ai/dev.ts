import { config } from 'dotenv';
config();

export { aiChatPartnerFlow } from '@/ai/flows/ai-chat-partner';
export { correctSlovakWritingFlow } from '@/ai/flows/automated-writing-correction';
export { pronunciationFeedbackFlow } from '@/ai/flows/pronunciation-feedback';
