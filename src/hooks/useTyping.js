import { useEffect, useState } from "react";

export default function useTyping(texts = [], speed = 70, pause = 1200) {
  const [i, setI] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!texts.length) return;
    const current = texts[i % texts.length];
    const tick = () => setDisplay(prev => deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1));
    const id = setInterval(tick, deleting ? speed / 2 : speed);

    if (!deleting && display === current) {
      clearInterval(id);
      const t = setTimeout(() => setDeleting(true), pause);
      return () => { clearTimeout(t); clearInterval(id); };
    }
    if (deleting && display === "") {
      setDeleting(false);
      setI(v => v + 1);
    }
    return () => clearInterval(id);
  }, [display, deleting, i, texts, speed, pause]);

  return display;
}
