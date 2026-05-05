'use client';

import type { PageId } from '../types';
import { navContent } from '../content';

export function NavBar({
  activePage,
  mobileOpen,
  showPage,
  toggleMobile,
  onLogoClick,
}: {
  activePage: PageId;
  mobileOpen: boolean;
  showPage: (id: PageId) => void;
  toggleMobile: () => void;
  onLogoClick: () => void;
}) {
  return (
    <>
      <nav>
        <span className="nav-logo" onClick={onLogoClick} id="logo-click" title="click me">
          {navContent.logoText}
        </span>
        <span className="nav-pronoun">{navContent.pronounText}</span>
        <div className="nav-links">
          {navContent.links.map((l) => (
            <button
              key={l.id}
              onClick={() => showPage(l.id)}
              id={`nav-${l.id}`}
              className={
                'fight' in l && l.fight
                  ? `nav-fight ${activePage === 'fight' ? 'active' : ''}`
                  : activePage === l.id
                    ? 'active'
                    : ''
              }
            >
              {l.label}
            </button>
          ))}
        </div>
        <button className="nav-hamburger" onClick={toggleMobile} id="hamburger">
          {mobileOpen ? '✕' : '☰'}
        </button>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`} id="mobile-menu">
        {navContent.mobileLinks.map((l) => (
          <button
            key={l.id}
            className={'fight' in l && l.fight ? 'm-fight' : ''}
            onClick={() => {
              showPage(l.id);
              toggleMobile();
            }}
          >
            {l.label}
          </button>
        ))}
      </div>
    </>
  );
}
