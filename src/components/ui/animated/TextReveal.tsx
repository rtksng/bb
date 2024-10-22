import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface LetterFillingTextProps {
  text: string;
  centerText?: boolean; // New prop
}

const LetterFillingText: React.FC<LetterFillingTextProps> = ({
  text,
  centerText = true, // Default to true
}) => {
  const [progress, setProgress] = useState(0);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current) return;

      const elementTop = textRef.current.getBoundingClientRect().top;
      const elementHeight = textRef.current.getBoundingClientRect().height;
      const windowHeight = window.innerHeight;

      const scrollPosition = windowHeight - elementTop;
      const maxScrollDistance = windowHeight + elementHeight;
      const newProgress = Math.min(
        Math.max(scrollPosition / maxScrollDistance, 0),
        1
      );

      setProgress(newProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const singleLetterVariant = (index: number) => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: progress >= index / 5 ? 1 : 1,
      transition: { duration: 0.01 },
    },
  });

  const lines = text.split("<br>").map((line, lineIndex) => (
    <div
      key={lineIndex}
      className={`flex flex-wrap max-w-[1057px] mx-auto ${
        centerText ? "justify-center" : ""
      }`}
    >
      {line.split("").map((letter, index) => (
        <motion.span
          key={index}
          variants={singleLetterVariant(lineIndex * 100 + index)}
          initial="hidden"
          animate="visible"
          className={
            progress >= (lineIndex * 100 + index) / 45
              ? "filled-letter"
              : "outlined-letter"
          }
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  ));

  return (
    <div ref={textRef} className="overflow-hidden">
      <motion.h1
        initial="hidden"
        className="text-[100px] font-bold w-full outlined-text pointer-events-none"
      >
        {lines}
      </motion.h1>
    </div>
  );
};

export default LetterFillingText;
