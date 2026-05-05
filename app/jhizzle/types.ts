import type { ReactNode } from 'react';

export type PageId = 'home' | 'aliases' | 'lore' | 'memes' | 'linkedin' | 'fight';

export type PollOption = {
  label: string;
  pct: number;
  color: '' | 'r' | 'o' | 'g';
};

export type PollData = {
  id: string;
  question: string;
  options: PollOption[];
};

export type EggType = 'void' | 'joker' | 'logo' | 'konami';

export type Egg = {
  title: string;
  bodyHtml: string;
};

export type CountdownState = {
  days: string;
  hours: string;
  mins: string;
  secs: string;
  statusText: string;
  statusClass: string;
  numClass: string;
};

export type LoreCard = {
  tag: string;
  tagClass?: '' | 'r' | 'o' | 'g';
  title: string;
  body: string;
};

export type RatingItem = {
  value: string;
  valueClass?: '' | 'r' | 'o' | 'g';
  label: string;
};

export type ReviewItem = {
  stars: string;
  tag: string;
  tagClass?: '' | 'r' | 'o' | 'g';
  body: string;
  src: string;
};

export type ThreatRow = {
  left: string;
  right: string;
  rightClass?: 't-o' | 't-m' | 't-g' | 't-r';
};

export type AliasItem = {
  num: string;
  name: string;
  nameClass?: '' | 'r' | 'o' | 'g' | 'p';
  desc: string;
};

export type FeedItem = {
  who: string;
  time: string;
  text: string;
};

export type MemeItem = {
  tag: string;
  tagClass?: '' | 'r' | 'o' | 'g' | 'p';
  emoji: string;
  name: string;
  desc: string;
  quote: string;
  template: string;
  buttonLabel: string;
};

export type CareerRow = {
  left: string;
  leftClass?: string;
  role: string;
  company: string;
  desc: ReactNode;
};
