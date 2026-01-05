"use client";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Sparkles, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Separator } from "./ui/separator";

export interface CorrectSlovakWritingOutput {
  correctedText: string;
  feedback: string;
}

export function WritingCorrection() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CorrectSlovakWritingOutput | null>(null);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!text.trim()) {
      toast({
        title: "Text je prázdny",
        description: "Prosím, napíšte nejaký text na opravu.",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    setResult(null);
    try {
      const response = await fetch("/api/check-writing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      if (!response.ok) {
        throw new Error("Failed to correct text");
      }
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error(error);
      toast({
        title: "Chyba",
        description: "Nepodařilo sa získať opravu. Skúste to prosím znova.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline">Automatická oprava textu</CardTitle>
        <CardDescription>Napíšte text po slovensky a naša AI ho opraví a poskytne vám spätnú väzbu.</CardDescription>
      </CardHeader>
      <CardContent>
        <Textarea
          placeholder="Napríklad: Ja ísť do obchod a kúpiť mlieko..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={6}
          disabled={loading}
          className="text-base"
        />
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit} disabled={loading} size="lg">
          {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
          Skontrolovať text
        </Button>
      </CardFooter>
      {loading && (
        <CardContent>
          <div className="flex items-center justify-center p-8 space-x-2 text-muted-foreground">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Analyzujem text...</span>
          </div>
        </CardContent>
      )}
      {result && (
        <>
          <Separator />
          <CardContent className="space-y-6 pt-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center">
                <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                Opravený text
              </h3>
              <div className="p-4 rounded-md border bg-secondary/50">
                <p className="text-base">{result.correctedText}</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-primary" />
                Spätná väzba
              </h3>
              <div className="p-4 rounded-md border">
                <p className="text-base leading-relaxed">{result.feedback}</p>
              </div>
            </div>
          </CardContent>
        </>
      )}
    </Card>
  );
}
