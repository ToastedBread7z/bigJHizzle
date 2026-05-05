'use client';

import { aliasesContent } from '../content';

export function AliasesPage({ active }: { active: boolean }) {
  return (
    <div id="page-aliases" className={`page alias-page ${active ? 'active' : ''}`}>
      <div className="alias-hero wrap">
        <div className="alias-title">
          {aliasesContent.titleLine1}
          <br />
          {aliasesContent.titleLine2}
          <br />
          <span className={aliasesContent.titleLine3Class}>{aliasesContent.titleLine3}</span>
        </div>
        <div className="alias-sub mt-3">{aliasesContent.subtitle}</div>
      </div>
      <div className="wrap">
        <div className="alias-grid">
          {aliasesContent.aliases.map((a) => (
            <div className="alias-card" key={a.num}>
              <div className="alias-num">{a.num}</div>
              <div className={`alias-name ${a.nameClass ?? ''}`.trim()}>{a.name}</div>
              <div className="alias-desc">{a.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
