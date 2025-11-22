import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your ArcaneRigs assistant. I can help you with parts, builds, or tracking your order. How can I assist you today?"
    }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const responses = [
        "That's a great question! Our expert team can help you with that.",
        "Based on your requirements, I'd recommend checking out our Gaming PC builds with RTX 4090.",
        "The RTX 4090 is perfect for 4K gaming and can handle GTA V at 200+ FPS on ultra settings!",
        "For content creation, we recommend at least 32GB of DDR5 RAM and a Ryzen 9 processor."
      ];
      const assistantMessage: Message = {
        role: "assistant",
        content: responses[Math.floor(Math.random() * responses.length)]
      };
      setMessages(prev => [...prev, assistantMessage]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">AI <span className="text-gradient-primary">Assistant</span></h1>
          <p className="text-center text-muted-foreground mb-8">Get instant answers about PC builds, components, and orders</p>
          <p className="text-center text-sm text-muted-foreground/60 mb-8"> </p>
        </motion.div>

        <motion.div className="glass-card rounded-2xl overflow-hidden" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="h-[600px] overflow-y-auto p-6 space-y-4">
            <AnimatePresence initial={false}>
              {messages.map((message, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}
                  className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  {message.role === "assistant" && (
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-primary" />
                    </div>
                  )}
                  <div className={`max-w-[70%] rounded-2xl p-4 ${message.role === "user" ? "bg-gradient-to-r from-primary to-secondary text-background" : "glass-card"}`}>
                    <p className="text-sm md:text-base">{message.content}</p>
                  </div>
                  {message.role === "user" && (
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-secondary" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="border-t border-border p-4">
            <div className="flex gap-2">
              <Input value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me anything..." className="flex-1 bg-background/50 border-primary/20 focus:border-primary" />
              <Button onClick={handleSend} className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background" size="icon">
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Chat;
