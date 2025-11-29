import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useToast } from "@/components/ui/use-toast";

// Inisialisasi Gemini API
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY || "");

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Chat = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your ArcaneRigs assistant. I can help you with parts, builds, or compatibility checks. How can I assist you today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    if (!API_KEY) {
      toast({
        title: "Configuration Error",
        description: "Gemini API Key is missing in .env file.",
        variant: "destructive"
      });
      return;
    }

    // 1. Tambahkan pesan user ke UI
    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput(""); // Clear input segera
    setIsLoading(true);

    try {
      // 2. Siapkan Model
      const model = genAI.getGenerativeModel({ 
        model: "gemini-2.5-flash",
        systemInstruction: "You are a helpful, expert AI assistant for ArcaneRigs, a custom PC building company. You act as a PC hardware expert. You help customers verify compatibility, suggest PC builds (Gaming, Workstation, Streaming), and explain technical terms (CPU, GPU, RAM, etc). Keep your answers concise, professional, and friendly. Do not answer questions unrelated to computers or technology."
      });

      // 3. Siapkan History Chat untuk Konteks
      // Gemini SDK membutuhkan format history yang spesifik
      const history = messages
      .filter((_, index) => index > 0) 
      .map(msg => ({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.content }],
      }));

      // Mulai Chat Session
      const chat = model.startChat({
        history: history,
      });

      // 4. Kirim Pesan ke Gemini
      const result = await chat.sendMessage(currentInput);
      const response = result.response.text();

      // 5. Tambahkan balasan AI ke UI
      const assistantMessage: Message = {
        role: "assistant",
        content: response
      };
      setMessages(prev => [...prev, assistantMessage]);

    } catch (error) {
      console.error("Error generating AI response:", error);
      toast({
        title: "Error",
        description: "Failed to get response from AI. Please try again.",
        variant: "destructive"
      });
      // Opsional: Hapus pesan user terakhir jika gagal, atau biarkan agar user bisa copy-paste
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">AI <span className="text-gradient-primary">Assistant</span></h1>
          <p className="text-center text-muted-foreground mb-8">Get instant answers about PC builds, components, and orders powered by Gemini</p>
        </motion.div>

        <motion.div className="glass-card rounded-2xl overflow-hidden flex flex-col h-[600px]" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
          
          {/* Chat Area - Flex Grow untuk mengisi ruang */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <AnimatePresence initial={false}>
              {messages.map((message, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
                  className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  {message.role === "assistant" && (
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-primary" />
                    </div>
                  )}
                  <div className={`max-w-[80%] rounded-2xl p-4 ${message.role === "user" ? "bg-gradient-to-r from-primary to-secondary text-background" : "glass-card border border-primary/20"}`}>
                    <p className="text-sm md:text-base whitespace-pre-wrap">{message.content}</p>
                  </div>
                  {message.role === "user" && (
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-secondary" />
                    </div>
                  )}
                </motion.div>
              ))}
              {isLoading && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3 justify-start">
                   <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-primary" />
                    </div>
                    <div className="glass-card border border-primary/20 rounded-2xl p-4 flex items-center">
                      <Loader2 className="w-4 h-4 animate-spin text-primary mr-2" />
                      <span className="text-sm text-muted-foreground">Thinking...</span>
                    </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Input Area */}
          <div className="border-t border-border p-4 bg-background/20 backdrop-blur-md">
            <div className="flex gap-2">
              <Input 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                onKeyPress={(e) => e.key === "Enter" && !isLoading && handleSend()}
                disabled={isLoading}
                placeholder="Ask about RTX 4090, compatible CPUs, or build advice..." 
                className="flex-1 bg-background/50 border-primary/20 focus:border-primary" 
              />
              <Button 
                onClick={handleSend} 
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background" 
                size="icon"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Chat;