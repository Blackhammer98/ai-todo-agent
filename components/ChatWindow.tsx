'use client';

import { Message } from "@/types/definitions";
import { useState } from "react";
import MessageBubble from "./MessageBubble";
import InputBar from "./InputBar";


export default function ChatWindow() {
 const [messages, setMessages] = useState<Message[]>([
    {text : 'Hello! how can i assist you today?', isUser: false}
 ]);
 
   const handleSendMessage = (text: string) => {
     setMessages((prev) => [...prev, { text, isUser: true }]);
     setTimeout(() => {
       setMessages((prev) => [
         ...prev,
         { text: 'Got it! Working on your request...', isUser : false },
       ]);
     }, 500);
   };
 
   return (
     <div className="w-[400px] h-[500px] border border-gray-300 rounded-lg flex flex-col overflow-hidden">
       <div className="flex-1 p-4 overflow-y-auto">
         {messages.map((msg, index) => (
           <MessageBubble key={index} text={msg.text} isUser={msg.isUser} />
         ))}
       </div>
       <InputBar onSend={handleSendMessage} />
     </div>
   );
 }
