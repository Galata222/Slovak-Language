'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function GrammarExplainer({ recommendedResources }: { recommendedResources: string }) {
  const [query, setQuery] = useState('');
  const [explanation, setExplanation] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateExplanation = async () => {
    setIsLoading(true);
    // In a real application, you would use an AI model to generate the explanation
    // based on the query and recommended resources.
    // For this example, we'll just simulate a response.
    const simulatedResponse = `
      Based on the recommended resource "${recommendedResources}", here is a detailed explanation for your query "${query}":
      (This is a simulated response. In a real application, this would be a detailed explanation based on the recommended resources.)
    `;
    setExplanation(simulatedResponse);
    setIsLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ask a Grammar Question</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <Input
            placeholder="e.g., Explain the use of prepositions with the locative case."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button onClick={handleGenerateExplanation} disabled={isLoading}>
            {isLoading ? 'Generating...' : 'Generate Explanation'}
          </Button>
        </div>
        {explanation && (
          <div className="mt-4">
            <h3 className="text-lg font-bold">Explanation</h3>
            <p>{explanation}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
