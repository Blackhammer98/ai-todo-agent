
interface MessageBubbleProps {
    text : string;
    isUser : boolean;
}

export default function MessageBubble({text, isUser} : MessageBubbleProps) {
    return (
    <div
    className={`max-w-[70%] m-2 p-3 rounded-xl ${
        isUser
          ? 'bg-blue-500 text-white self-end'
          : 'bg-gray-200 text-black self-start'
      }`}
    >
        <p>{text}</p>
    </div>
    );
}