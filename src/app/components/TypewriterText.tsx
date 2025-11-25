// components/TypewriterText.tsx
'use client';

import { useEffect, useState } from 'react';

interface TypewriterTextProps {
  texts: string[];              // Array teks yang mau di-loop
  className?: string;
  typingSpeed?: number;         // ms per huruf
  deletingSpeed?: number;       // ms per huruf saat hapus
  pauseBetween?: number;        // jeda setelah selesai ngetik (ms)
  startDelay?: number;          // delay sebelum mulai
}

export default function TypewriterText({
  texts,
  className = "",
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseBetween = 2000,
  startDelay = 500,
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);   // index teks saat ini
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopStarted, setLoopStarted] = useState(false);

  useEffect(() => {
    // Mulai setelah delay
    const initialTimer = setTimeout(() => {
      setLoopStarted(true);
    }, startDelay);

    return () => clearTimeout(initialTimer);
  }, [startDelay]);

  useEffect(() => {
    if (!loopStarted) return;

    const currentText = texts[currentIndex % texts.length];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Mode ngetik
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.substring(0, displayedText.length + 1));
        } else {
          // Selesai ngetik → pause, lalu hapus
          setTimeout(() => setIsDeleting(true), pauseBetween);
        }
      } else {
        // Mode hapus
        if (displayedText.length > 0) {
          setDisplayedText(currentText.substring(0, displayedText.length - 1));
        } else {
          // Selesai hapus → ganti teks berikutnya
          setIsDeleting(false);
          setCurrentIndex(prev => prev + 1);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentIndex, loopStarted, texts, typingSpeed, deletingSpeed, pauseBetween]);

  return (
    <h2 className={`relative inline-block ${className}`}>
      <span>{displayedText}</span>

      {/* Cursor Kedip — Selalu Kelihatan */}
      <span
        className="inline-block w-1 bg-cyan-400 ml-1 align-middle"
        style={{
          height: "0.9em",
          animation: "blink 1s infinite",
          boxShadow: "0 0 10px #06b6d4",
        }}
      />

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </h2>
  );
}