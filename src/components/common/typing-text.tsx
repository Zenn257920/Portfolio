import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cursor01Icon } from "@hugeicons/core-free-icons";

interface Props {
  texts: string[];
  className?: string;
}

const TypingText = ({ texts, className = "" }: Props) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!texts.length) return;

    const current = texts[index];

    const timer = setTimeout(
      () => {
        if (!deleting) {
          // Typing
          if (text.length < current.length) {
            setText(current.slice(0, text.length + 1));
          } else {
            setDeleting(true);
          }
        } else {
          // Deleting
          if (text.length > 0) {
            setText(current.slice(0, text.length - 1));
          } else {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      deleting ? 50 : text.length === current.length ? 1500 : 100,
    );

    return () => clearTimeout(timer);
  }, [text, deleting, index, texts]);

  return (
    <h1 className={className}>
      {text}
      <HugeiconsIcon
        icon={Cursor01Icon}
        size={24}
        className="ml-1 inline-block animate-pulse text-blue-500"
      />
    </h1>
  );
};

export default TypingText;
