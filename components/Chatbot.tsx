import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Cpu, Sparkles, Minimize2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Hello! I am Xen. Ask me about our Delta 5.0 Web Dev batch, Alpha DSA course, or any coding questions!',
      timestamp: Date.now()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Format history for Gemini
    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    try {
      const responseText = await sendMessageToGemini(userMessage.text, history);
      
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: Date.now()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "I encountered a neural disruption. Please try again.",
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-primary rounded-full shadow-lg shadow-primary/30 hover:scale-110 transition-transform duration-300 group"
        aria-label="Open Chat"
      >
        <MessageSquare className="w-6 h-6 text-white group-hover:animate-pulse" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
        </span>
      </button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 w-full max-w-[380px] transition-all duration-300 ${isMinimized ? 'h-16' : 'h-[600px]'}`}>
      <div className="flex flex-col h-full bg-card border border-white/10 rounded-2xl shadow-2xl overflow-hidden glass-panel">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-primary/10 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Cpu className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-white">Xen AI</h3>
              <p className="text-xs text-gray-400 flex items-center gap-1">
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
                Gemini 3.0 Pro
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
             <button 
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1 hover:bg-white/10 rounded-md transition-colors text-gray-400 hover:text-white"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/10 rounded-md transition-colors text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-primary text-white rounded-tr-none'
                        : 'bg-white/5 text-gray-200 border border-white/5 rounded-tl-none'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{msg.text}</div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start w-full">
                  <div className="bg-white/5 border border-primary/20 p-3 rounded-2xl rounded-tl-none flex items-center gap-3 shadow-[0_0_10px_rgba(0,166,255,0.1)]">
                    <Sparkles className="w-4 h-4 text-secondary animate-spin" />
                    <span className="text-xs text-secondary font-mono animate-pulse tracking-widest">REASONING...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-dark/50 border-t border-white/5">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-2 focus-within:border-primary/50 transition-colors">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about courses..."
                  className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-500 text-sm px-2"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="p-2 bg-primary rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Chatbot;