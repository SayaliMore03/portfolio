import { useEffect, useState } from "react";

export default function Typewriter({ words, typingSpeed = 90, pauseTime = 1500 }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (!deleting && text === currentWord) {
      const pause = setTimeout(() => setDeleting(true), pauseTime);
      return () => clearTimeout(pause);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const speed = deleting ? typingSpeed / 2 : typingSpeed;
    const timeout = setTimeout(() => {
      setText((prev) =>
        deleting
          ? currentWord.slice(0, prev.length - 1)
          : currentWord.slice(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, pauseTime]);

  return (
    <span>
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-accent ml-1 align-middle animate-pulse" />
    </span>
  );
}
