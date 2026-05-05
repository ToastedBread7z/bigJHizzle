'use client';

import React from 'react';

import { faqs, homeContent, pollsData } from '../content';
import type { EggType, PageId } from '../types';
import { AnimatedTitleChars } from '../components/AnimatedTitleChars';
import { PollGrid } from '../components/PollGrid';

export function HomePage({
  active,
  showPage,
  vote,
  pollPcts,
  pollChosen,
  pollVotesText,
  fallbackVotesText,
  openFaqs,
  setOpenFaqs,
  copyText,
  triggerEgg,
}: {
  active: boolean;
  showPage: (id: PageId) => void;
  vote: (pollId: string, chosenIdx: number) => void;
  pollPcts: Record<string, number[]>;
  pollChosen: Record<string, number | undefined>;
  pollVotesText: Record<string, string>;
  fallbackVotesText: (pollId: string) => string;
  openFaqs: Record<number, boolean>;
  setOpenFaqs: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
  copyText: (text: string, okMsg: string) => Promise<boolean>;
  triggerEgg: (type: EggType) => void;
}) {
  const tickerItems = [...homeContent.tickerItems, ...homeContent.tickerItems];

  return (
    <div id="page-home" className={`page ${active ? 'active' : ''}`}>
      <div className="ticker">
        <div className="ticker-label">{homeContent.tickerLabel}</div>
        <div className="ticker-track">
          {tickerItems.map((item, idx) => (
            <span key={idx}>{item}</span>
          ))}
        </div>
      </div>

      <div className="hero">
        <div className="hero-inner">
          <div className="hero-grid" />
          <div className="hero-glow" />
          <div className="hero-content">
            <div className="hero-eyebrow">{homeContent.heroEyebrow}</div>
            <div className="hero-title" id="hero-title">
              <span id="jake-chars">
                <AnimatedTitleChars text={homeContent.heroTitle.line1} delayBase={0.2} />
              </span>
              <br />
              <span className="line2" id="holbein-chars">
                <AnimatedTitleChars text={homeContent.heroTitle.line2} delayBase={0.6} />
              </span>
            </div>
            <div className="hero-subtitle">
              {homeContent.heroSubtitleLines.map((l, i) => (
                <React.Fragment key={i}>
                  {l}
                  <br />
                </React.Fragment>
              ))}
            </div>
            <div className="hero-stats">
              {homeContent.heroStats.map((s) => (
                <div className="hstat" title={'title' in s ? s.title : undefined} key={s.label}>
                  <div className={`hstat-v ${s.valueClass ?? ''}`.trim()}>{s.value}</div>
                  <div className="hstat-k">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="section">
          <div className="sec-head reveal">
            <span className="sec-label">[+] overview</span>
            <span className="sec-tag">the numbers</span>
          </div>
          <hr className="sec-rule" />
          <div className="stats reveal">
            {homeContent.overviewStats.map((s) => (
              <div className="stat" key={`${s.value}-${s.label}`}>
                <div className={`stat-v ${s.valueClass}`.trim()}>{s.value}</div>
                <div className="stat-k">
                  {s.label.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <div className="sec-head reveal">
            <span className="sec-label">[!] quote of the year</span>
          </div>
          <hr className="sec-rule" />
          <div
            className="quote reveal"
            onClick={() => copyText(homeContent.quoteOfYear.copyText, homeContent.quoteOfYear.copyOkToast)}
            title="click to copy"
          >
            <p>{homeContent.quoteOfYear.quote}</p>
            <small>{homeContent.quoteOfYear.meta}</small>
          </div>
        </div>

        <div className="section">
          <div className="sec-head reveal">
            <span className="sec-label">[+] quick lore</span>
            <span className="sec-tag">documented incidents</span>
          </div>
          <hr className="sec-rule" />
          <div className="lore-grid reveal">
            {homeContent.quickLore.map((c) => (
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
            <span className="sec-label">[+] polls</span>
            <span className="sec-tag">click to vote · results update live</span>
          </div>
          <hr className="sec-rule" />
          <div className="polls reveal" id="polls-container">
            <PollGrid
              data={pollsData}
              vote={vote}
              pollPcts={pollPcts}
              pollChosen={pollChosen}
              pollVotesText={pollVotesText}
              fallbackVotesText={fallbackVotesText}
            />
          </div>
        </div>

        <div className="section">
          <div className="sec-head reveal">
            <span className="sec-label">[+] ratings</span>
            <span className="sec-tag">ratemyprofessor · allen isd edition</span>
          </div>
          <hr className="sec-rule" />
          <div className="ratings reveal">
            {homeContent.ratings.map((r) => (
              <div className="rating" key={r.label}>
                <div className={`r-num ${r.valueClass ?? ''}`.trim()}>{r.value}</div>
                <div className="r-lbl">{r.label}</div>
              </div>
            ))}
          </div>
          <div className="reveal">
            {homeContent.reviews.map((rev) => (
              <div className="rev" key={rev.tag}>
                <div className="rev-head">
                  <span className="rev-stars">{rev.stars}</span>
                  <span className={`rev-tag ${rev.tagClass ?? ''}`.trim()}>{rev.tag}</span>
                </div>
                <div className="rev-body">{rev.body}</div>
                <div className="rev-src">{rev.src}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <div className="sec-head reveal">
            <span className="sec-label">[+] threat assessment</span>
          </div>
          <hr className="sec-rule" />
          <table className="threat reveal">
            <tbody>
              {homeContent.threatRows.map((row) => (
                <tr key={row.left}>
                  <td>{row.left}</td>
                  <td className={row.rightClass}>{row.right}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="section">
          <div className="sec-head reveal">
            <span className="sec-label">[?] investigation</span>
            <span className="sec-tag">click to expand · all unanswered · ongoing</span>
          </div>
          <hr className="sec-rule" />
          <div className="reveal" id="faq-container">
            {faqs.map((f, i) => {
              const open = !!openFaqs[i];
              return (
                <div className="faq" key={i}>
                  <div
                    className="faq-q"
                    onClick={() => setOpenFaqs((s) => ({ ...s, [i]: !s[i] }))}
                    role="button"
                    tabIndex={-1}
                  >
                    <span className="faq-m">?</span>
                    <span className="faq-label">{f.q}</span>
                  </div>
                  <div className={`faq-a ${open ? 'open' : ''}`} id={`faq-${i}`}>
                    {f.a}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <footer>
        <div className="foot-inner">
          <div className="foot-links">
            <button onClick={() => showPage('home')}>home</button>
            <button onClick={() => showPage('aliases')}>names (21)</button>
            <button onClick={() => showPage('lore')}>lore</button>
            <button onClick={() => showPage('memes')}>memes</button>
            <button onClick={() => showPage('linkedin')}>linkedin · sep 0</button>
            <button onClick={() => showPage('fight')}>⚔ fight night</button>
          </div>
          <div className="foot-bottom">
            <span>{homeContent.footer.copyright}</span>
            <span
              className="foot-secret"
              onClick={() => triggerEgg('void')}
              title="..."
              role="button"
              tabIndex={-1}
            >
              {homeContent.footer.secret}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
