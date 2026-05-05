'use client';

import React from 'react';

import { linkedInContent } from '../content';

export function LinkedInPage({ active }: { active: boolean }) {
  return (
    <div id="page-linkedin" className={`page li-page ${active ? 'active' : ''}`}>
      <div className="li-hero wrap">
        <div className="mb-4 text-[11px] uppercase tracking-[2px] text-(--mute)">{linkedInContent.eyebrow}</div>
        <div className="li-hero-title">{linkedInContent.title}</div>
      </div>
      <div className="wrap pb-20">
        <div className="section">
          <div className="li-profile reveal">
            <div className="li-avatar">{linkedInContent.profile.avatar}</div>
            <div>
              <div className="li-name">{linkedInContent.profile.name}</div>
              <div className="li-pronoun">{linkedInContent.profile.pronoun}</div>
              <div className="li-headline">{linkedInContent.profile.headline}</div>
              <div className="li-meta">{linkedInContent.profile.meta}</div>
              <div className="li-connections">{linkedInContent.profile.connections}</div>
            </div>
          </div>

          {linkedInContent.snips.map((s) => (
            <div className="snip reveal" key={s.cmd}>
              <span>
                <span className="snip-ps">$</span> {s.cmd}
              </span>
              <span className={`text-[11px] ${s.resultClass}`.trim()}>{s.result}</span>
            </div>
          ))}

          <div className="sec-head reveal mt-8">
            <span className="sec-label">{linkedInContent.experienceLabel}</span>
          </div>
          <hr className="sec-rule" />
          <table className="career reveal">
            <tbody>
              {linkedInContent.careerRows.map((row) => (
                <tr key={row.left}>
                  <td className={row.leftClass}>{row.left}</td>
                  <td>
                    <div className="c-role">{row.role}</div>
                    <div className="c-co">{row.company}</div>
                    <div className="c-desc">{row.desc}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="section">
          <div className="sec-head reveal">
            <span className="sec-label">{linkedInContent.activityLabel}</span>
            <span className="sec-tag">{linkedInContent.activityTag}</span>
          </div>
          <hr className="sec-rule" />
          <div className="feed reveal">
            {linkedInContent.activityFeed.map((f) => (
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
