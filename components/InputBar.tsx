'use client';

import { FormEvent, useState } from "react";

interface InputBarProps {
onSend :(text:string) => void;
} 
 
export default function InputBar({onSend} : InputBarProps) {

    const [input, setInput] = useState<string>("");

    const handleSubmit = (e:FormEvent) => {
       e.preventDefault();
       if(input.trim()) {
        onSend(input);
        setInput("");
       }
    }
    return (
        <form 
        onSubmit={handleSubmit}
        className="flex p-4 border-t border-gray-300"
         >
        <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message...."
              className="flex-1 p-2 border border-gray-300 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
           Send
        </button>
        </form>
    )
}