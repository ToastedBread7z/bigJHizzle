'use client';

import { memesContent } from '../content';
import { MemeCard } from '../components/MemeCard';

export function MemesPage({
  active,
  copyText,
  showToast,
}: {
  active: boolean;
  copyText: (text: string, okMsg: string) => Promise<boolean>;
  showToast: (msg: string) => void;
}) {
  return (
    <div id="page-memes" className={`page memes-page ${active ? 'active' : ''}`}>
      <div className="memes-hero wrap">
        <div className="mb-4 text-[11px] uppercase tracking-[2px] text-(--mute)">{memesContent.eyebrow}</div>
        <div className="memes-title">
          {memesContent.titleLine1}
          <br />
          <span className={memesContent.titleLine2Class}>{memesContent.titleLine2}</span>
        </div>
      </div>
      <div className="wrap pb-20">
        <div className="section">
          <div className="sec-head reveal">
            <span className="sec-label">{memesContent.sectionLabel}</span>
            <span className="sec-tag">{memesContent.sectionTag}</span>
          </div>
          <hr className="sec-rule" />
          <div className="meme-grid reveal">
            {memesContent.memes.map((m) => (
              <MemeCard key={m.name} meme={m} copyText={copyText} showToast={showToast} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
