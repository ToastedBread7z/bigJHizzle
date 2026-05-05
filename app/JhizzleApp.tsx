'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';

import { defaultEgg, eggs, fightPollsData, pollsData } from './jhizzle/content';
import { EggOverlay } from './jhizzle/components/EggOverlay';
import { NavBar } from './jhizzle/components/NavBar';
import { Toast } from './jhizzle/components/Toast';
import { AliasesPage } from './jhizzle/pages/AliasesPage';
import { FightPage } from './jhizzle/pages/FightPage';
import { HomePage } from './jhizzle/pages/HomePage';
import { LinkedInPage } from './jhizzle/pages/LinkedInPage';
import { LorePage } from './jhizzle/pages/LorePage';
import { MemesPage } from './jhizzle/pages/MemesPage';
import type { CountdownState, EggType, PageId } from './jhizzle/types';
import { distributeVote, pad2, randomVotes } from './jhizzle/utils';

const ALL_POLLS = [...pollsData, ...fightPollsData];
const ALL_POLL_IDS = ALL_POLLS.map((p) => p.id);

export function JhizzleApp() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  const [toastMsg, setToastMsg] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimerRef = useRef<number | undefined>(undefined);

  const [eggOpen, setEggOpen] = useState(false);
  const [eggTitle, setEggTitle] = useState(defaultEgg.title);
  const [eggBodyHtml, setEggBodyHtml] = useState(defaultEgg.bodyHtml);

  const [pollVotesText, setPollVotesText] = useState<Record<string, string>>(() => {
    const entries = ALL_POLL_IDS.map((id) => [id, `${randomVotes()} VOTES · RESULTS UPDATE ON VOTE`] as const);
    return Object.fromEntries(entries);
  });

  const [pollChosen, setPollChosen] = useState<Record<string, number | undefined>>({});
  const [pollPcts, setPollPcts] = useState<Record<string, number[]>>(() => {
    const initial: Record<string, number[]> = {};
    for (const p of ALL_POLLS) {
      initial[p.id] = p.options.map((o) => o.pct);
    }
    return initial;
  });

  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({});

  const [countdown, setCountdown] = useState<CountdownState>(() => {
    return {
      days: '--',
      hours: '--',
      mins: '--',
      secs: '--',
      statusText: 'loading...',
      statusClass: 'fight-status',
      numClass: '',
    };
  });

  const revealObserverRef = useRef<IntersectionObserver | null>(null);

  const showToast = useCallback((msg: string) => {
    setToastMsg(msg);
    setToastVisible(true);
    if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    toastTimerRef.current = window.setTimeout(() => setToastVisible(false), 2200);
  }, []);

  const triggerEgg = useCallback((type: EggType) => {
    const egg = eggs[type] ?? eggs.void;
    setEggTitle(egg.title);
    setEggBodyHtml(egg.bodyHtml);
    setEggOpen(true);
  }, []);

  const closeEgg = useCallback(() => setEggOpen(false), []);

  const toggleMobile = useCallback(() => {
    setMobileOpen((o) => !o);
  }, []);

  const showPage = useCallback((id: PageId) => {
    setActivePage(id);
    window.scrollTo(0, 0);
  }, []);

  const onLogoClick = useCallback(() => {
    showPage('home');
    if (Math.random() < 0.3) triggerEgg('logo');
  }, [showPage, triggerEgg]);

  const copyText = useCallback(
    async (text: string, okMsg: string) => {
      try {
        if (!navigator.clipboard) throw new Error('no clipboard');
        await navigator.clipboard.writeText(text);
        showToast(okMsg);
        return true;
      } catch {
        showToast('copy: failed (try manually)');
        return false;
      }
    },
    [showToast],
  );

  const fallbackVotesText = useCallback((_pollId: string) => `${randomVotes()} VOTES · RESULTS UPDATE ON VOTE`, []);

  const vote = useCallback(
    (pollId: string, chosenIdx: number) => {
      const poll = ALL_POLLS.find((p) => p.id === pollId);
      if (!poll) return;

      const prev = pollChosen[pollId];
      if (prev === chosenIdx) {
        showToast('already voted for this option');
        return;
      }

      const newPcts = distributeVote(poll.options.length, chosenIdx);
      setPollChosen((s) => ({ ...s, [pollId]: chosenIdx }));
      setPollPcts((s) => ({ ...s, [pollId]: newPcts }));
      setPollVotesText((s) => ({
        ...s,
        [pollId]: `${randomVotes()} VOTES · YOU VOTED · LIVE RESULTS`,
      }));
      showToast('vote registered');
    },
    [pollChosen, showToast],
  );

  useEffect(() => {
    revealObserverRef.current?.disconnect();

    const els = document.querySelectorAll<HTMLElement>('.page.active .reveal');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('on');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05 },
    );

    els.forEach((el) => {
      el.classList.remove('on');
      obs.observe(el);
    });

    revealObserverRef.current = obs;
    return () => obs.disconnect();
  }, [activePage]);

  useEffect(() => {
    const konami = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'b',
      'a',
    ];
    let kIdx = 0;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === konami[kIdx]) {
        kIdx++;
        if (kIdx === konami.length) {
          kIdx = 0;
          triggerEgg('konami');
        }
      } else {
        kIdx = 0;
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [triggerEgg]);

  useEffect(() => {
    const target = new Date('2026-05-20T08:45:00');
    const fightDay = new Date('2026-05-20');
    fightDay.setHours(0, 0, 0, 0);

    const update = () => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);

        if (days === 0) {
          setCountdown({
            days: pad2(days),
            hours: pad2(hours),
            mins: pad2(mins),
            secs: pad2(secs),
            statusText: '● FIGHT DAY',
            statusClass: 'fight-status live',
            numClass: 'urgent',
          });
        } else {
          setCountdown({
            days: pad2(days),
            hours: pad2(hours),
            mins: pad2(mins),
            secs: pad2(secs),
            statusText: `upcoming · ${days} day${days !== 1 ? 's' : ''} away`,
            statusClass: 'fight-status upcoming',
            numClass: '',
          });
        }
      } else {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (+today === +fightDay) {
          setCountdown({
            days: '00',
            hours: '00',
            mins: '00',
            secs: '00',
            statusText: "● IT'S HAPPENING",
            statusClass: 'fight-status live',
            numClass: 'live',
          });
        } else {
          setCountdown({
            days: '00',
            hours: '00',
            mins: '00',
            secs: '00',
            statusText: '● FIGHT COMPLETE — VOID KING WINS (OBVIOUSLY)',
            statusClass: 'fight-status over',
            numClass: 'done',
          });
        }
      }
    };

    update();
    const t = window.setInterval(update, 1000);
    return () => window.clearInterval(t);
  }, []);

  return (
    <>
      <Toast message={toastMsg} visible={toastVisible} />
      <EggOverlay open={eggOpen} title={eggTitle} bodyHtml={eggBodyHtml} onClose={closeEgg} />

      <NavBar
        activePage={activePage}
        mobileOpen={mobileOpen}
        showPage={showPage}
        toggleMobile={toggleMobile}
        onLogoClick={onLogoClick}
      />

      <HomePage
        active={activePage === 'home'}
        showPage={showPage}
        vote={vote}
        pollPcts={pollPcts}
        pollChosen={pollChosen}
        pollVotesText={pollVotesText}
        fallbackVotesText={fallbackVotesText}
        openFaqs={openFaqs}
        setOpenFaqs={setOpenFaqs}
        copyText={copyText}
        triggerEgg={triggerEgg}
      />

      <FightPage
        active={activePage === 'fight'}
        countdown={countdown}
        vote={vote}
        pollPcts={pollPcts}
        pollChosen={pollChosen}
        pollVotesText={pollVotesText}
        fallbackVotesText={fallbackVotesText}
        triggerEgg={triggerEgg}
      />

      <AliasesPage active={activePage === 'aliases'} />
      <LorePage active={activePage === 'lore'} />
      <MemesPage active={activePage === 'memes'} copyText={copyText} showToast={showToast} />
      <LinkedInPage active={activePage === 'linkedin'} />
    </>
  );
}
