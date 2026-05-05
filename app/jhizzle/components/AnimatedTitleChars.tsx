'use client';

export function AnimatedTitleChars({ text, delayBase }: { text: string; delayBase: number }) {
  return (
    <>
      {text.split('').map((c, i) => (
        <span key={`${c}-${i}`} className="char" style={{ animationDelay: `${delayBase + i * 0.06}s` }}>
          {c}
        </span>
      ))}
    </>
  );
}
