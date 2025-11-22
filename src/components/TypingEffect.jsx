import useTyping from "../hooks/useTyping";

export default function TypingEffect({ texts }) {
  const text = useTyping(texts, 70, 1200);
  return <span className="text-indigo-400 font-medium">{text}<span className="blinker">|</span></span>;
}
