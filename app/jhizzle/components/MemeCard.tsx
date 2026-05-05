'use client';

import { useState } from 'react';

import type { MemeItem } from '../types';

export function MemeCard({
  meme,
  copyText,
  showToast,
}: {
  meme: MemeItem;
  copyText: (text: string, okMsg: string) => Promise<boolean>;
  showToast: (msg: string) => void;
}) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    const ok = await copyText(meme.template, 'template copied to clipboard');
    if (ok) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } else {
      showToast('copy: failed (try manually)');
    }
  };

  return (
    <div className="meme-card" onClick={onCopy} role="button" tabIndex={-1}>
      <div className={`meme-tag ${meme.tagClass ?? ''}`.trim()}>{meme.tag}</div>
      <span className="meme-emoji">{meme.emoji}</span>
      <div className="meme-name">{meme.name}</div>
      <div className="meme-desc">{meme.desc}</div>
      <div className="meme-quote">{meme.quote}</div>
      <button className="meme-copy-btn">{copied ? '[ ✓ copied ]' : meme.buttonLabel}</button>
    </div>
  );
}
