'use client';

import React from 'react';

import { loreContent } from '../content';

export function LorePage({ active }: { active: boolean }) {
  return (
    <div id="page-lore" className={`page lore-page ${active ? 'active' : ''}`}>
      <div className="lore-hero wrap">
        <div className="mb-4 text-[11px] uppercase tracking-[2px] text-(--mute)">{loreContent.eyebrow}</div>
        <div className="lore-hero-title">
          {loreContent.titleLine1}
          <br />
          <span className={loreContent.titleLine2Class}>{loreContent.titleLine2}</span>
        </div>
      </div>
      <div className="wrap pb-20">
        <div className="section">
          <div className="banned reveal">
            <div className="banned-t">{loreContent.bannedTitle}</div>
            <p className="banned-body">
              {loreContent.bannedBodyLines.map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>

        <div className="section">
          <div className="sec-head reveal">
            <span className="sec-label">[!] all documented incidents</span>
          </div>
          <hr className="sec-rule" />
          <div className="lore-grid reveal">
            {loreContent.incidentCards.map((c) => (
              <div className="lore-card" key={c.title}>
                <div className={`lore-tag ${c.tagClass ?? ''}`.trim()}>{c.tag}</div>
                <div className="lore-h">{c.title}</div>
                <div className="lore-b">{c.body}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <div className="sec-head reveal">
            <span className="sec-label">[+] live feed</span>
          </div>
          <hr className="sec-rule" />
          <div className="feed reveal">
            {loreContent.liveFeed.map((f) => (
              <div className="feed-i" key={`${f.who}-${f.time}`}>
                <div>
                  <div className="feed-who">{f.who}</div>
                  <div className="feed-time">{f.time}</div>
                </div>
                <div className="feed-txt">{f.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
