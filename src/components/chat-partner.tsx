"use client";

import { aiChatPartner } from "@/ai/flows/ai-chat-partner";
import { useState, useRef, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { Bot, Loader2, Send, User } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
    role: 'user' | 'ai';
    text: string;
};

export function ChatPartner({ unitId }: { unitId: number }) {
    const [messages, setMessages] = useState<Message[]>([
        { role: 'ai', text: `Ahoj! Som tvoj AI partner pre konverzáciu. Som pripravený precvičiť si s tebou Lekciu ${unitId}. O čom sa chceš rozprávať?` }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage: Message = { role: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setLoading(true);

        try {
            const response = await aiChatPartner({ studentMessage: input, unitNumber: unitId });
            const aiMessage: Message = { role: 'ai', text: response.aiResponse };
            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            console.error("Error with AI chat partner:", error);
            const errorMessage: Message = { role: 'ai', text: "Prepáč, mám technický problém. Skús to prosím znova." };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTo({
                top: scrollAreaRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [messages]);

    return (
        <div className="flex flex-col h-full max-w-4xl mx-auto w-full">
            <ScrollArea className="flex-1 p-4 md:p-6" ref={scrollAreaRef}>
                <div className="space-y-6">
                    {messages.map((message, index) => (
                        <div key={index} className={cn("flex items-start gap-4", message.role === 'user' ? "justify-end" : "justify-start")}>
                            {message.role === 'ai' && (
                                <Avatar className="w-8 h-8 border">
                                    <AvatarFallback><Bot className="w-5 h-5 text-primary" /></AvatarFallback>
                                </Avatar>
                            )}
                            <div className={cn("max-w-[75%] rounded-lg p-3 text-sm", message.role === 'user' ? "bg-primary text-primary-foreground" : "bg-muted")}>
                                <p>{message.text}</p>
                            </div>
                             {message.role === 'user' && (
                                <Avatar className="w-8 h-8 border">
                                    <AvatarFallback><User className="w-5 h-5" /></AvatarFallback>
                                </Avatar>
                            )}
                        </div>
                    ))}
                    {loading && (
                         <div className="flex items-start gap-4 justify-start">
                            <Avatar className="w-8 h-8 border">
                                    <AvatarFallback><Bot className="w-5 h-5 text-primary" /></AvatarFallback>
                            </Avatar>
                            <div className="bg-muted rounded-lg p-3">
                                <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
                            </div>
                         </div>
                    )}
                </div>
            </ScrollArea>
            <div className="p-4 border-t bg-background">
                <div className="flex items-center gap-2">
                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && !loading && handleSend()}
                        placeholder="Napíšte správu..."
                        disabled={loading}
                        className="flex-1"
                    />
                    <Button onClick={handleSend} disabled={loading}>
                        <Send className="w-4 h-4" />
                        <span className="sr-only">Odoslať</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}
