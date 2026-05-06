/* eslint-disable react/no-unescaped-entities */

import React from 'react';

import type {
  AliasItem,
  CareerRow,
  Egg,
  EggType,
  FeedItem,
  LoreCard,
  MemeItem,
  PollData,
  RatingItem,
  ReviewItem,
  ThreatRow,
} from './types';

export const pollsData: PollData[] = [
  {
    id: 'p1',
    question: 'what is the whole bean doing on his laptop right now?',
    options: [
      { label: 'vibe coding his own project', pct: 41, color: '' },
      { label: "nobody knows. that's the point", pct: 44, color: 'r' },
      { label: 'managing the universe', pct: 15, color: 'o' },
    ],
  },
  {
    id: 'p2',
    question: 'does jah know this page exists?',
    options: [
      { label: 'he knows, but is too nonchalant to care', pct: 47, color: 'r' },
      { label: "he is pretending not to know until aidan hops on", pct: 38, color: '' },
      { label: "he's right behind me isnt he", pct: 15, color: 'o' },
    ],
  },
  {
    id: 'p3',
    question: 'what does jakey think of the balatro beacon?',
    options: [
      { label: 'worst podcast ever heard', pct: 33, color: 'r' },
      { label: 'what does he even do?', pct: 33, color: '' },
      { label: 'counting the days until aidan graduates', pct: 34, color: 'o' },
    ],
  },
];

export const fightPollsData: PollData[] = [
  {
    id: 'fp1',
    question: 'who wins fight night?',
    options: [
      { label: 'holbein (right behind me isnt he)', pct: 71, color: 'g' },
      { label: 'Goontiago (worst podcast host)', pct: 22, color: 'r' },
      { label: 'draw (impossible)', pct: 7, color: 'o' },
    ],
  },
  {
    id: 'fp2',
    question: 'how does it end?',
    options: [
      { label: 'holbein bans Aidan from existence', pct: 58, color: '' },
      { label: 'Aidan yaps for 50 min · holbein escapes', pct: 28, color: 'r' },
      { label: 'class watches. nobody intervenes.', pct: 14, color: 'o' },
    ],
  },
];

export const faqs = [
  {
    q: 'what is the whole bean doing on his laptop right now?',
    a: "three students have attempted to see the screen. zero have succeeded. the angle has been described as 'physically impossible.' what is on there? unknown. status: open · ongoing",
  },
  {
    q: 'why is sep 0 still on the linkedin?',
    a: "september has no zeroth day. this entry has remained uncorrected since posting. physicists were consulted. no response. is this intentional? is this part of the void king lore? status: open · unsolved",
  },
  {
    q: "what is 'cursor coder island'?",
    a: 'it appears in the linkedin headline. is it a place? a metaphysical state? a server? a direct continuation of the void king era? we are afraid to ask. status: open · we are afraid',
  },
  {
    q: 'salary investigation: why $0 across all databases?',
    a: 'six weeks. multiple public record databases. all returned $0. a fictional customer named marcus t. delaney has more financial documentation than jake holbein. marcus is not real. jake is. this is uncomfortable. status: week 6 · marcus thriving',
  },
  {
    q: 'the broken leg — did it hurt? why say nothing?',
    a: 'flag football. broke the leg. came in the very next day. started the session without comment. students found out from the cast. was he in pain the entire time? why tell nobody? status: open · no statement',
  },
  {
    q: 'has anyone ever directly asked him about any of this?',
    a: 'no. there is an unspoken agreement that the laptop stays classified, the sunshine stays unnamed, and the void king is not questioned. this page is not a violation of the agreement. it is a tribute. status: ongoing · mutual respect preserved',
  },
] as const;

export const eggs: Record<EggType, Egg> = {
  void: {
    title: 'YOU FOUND THE VOID',
    bodyHtml:
      'this is sep 0.<br>you are in the space between atoms.<br>the salary: $0.<br>the screen: classified.<br>the balatro: banned.<br><br>the whole bean is watching.<br>he has never played balatro.',
  },
  joker: {
    title: 'BALATRO BANISHER',
    bodyHtml:
      '✦ LEGENDARY ✦<br><br>effect: if played hand contains Aiden, gain ×10 mult.<br>rarity: one of a kind.<br>held by: jake holbein (void king era).<br><br>note: this card has never been played in balatro.<br>balatro is banned.',
  },
  logo: {
    title: 'JHIZZLE GO/AT',
    bodyHtml:
      'you clicked the logo.<br>the void king acknowledges you.<br><br>salary on file: $0<br>balatro: banned<br>laptop content: classified<br>sep 0: ongoing<br><br>he is on his laptop right now.',
  },
  konami: {
    title: 'BALATRO: UNBANNED?',
    bodyHtml:
      'you entered the konami code.<br>the void king saw it.<br>balatro is still banned.<br>the konami code has no power here.<br><br>nice try.',
  },
};

export const defaultEgg = {
  title: 'BALATRO: BANNED',
  bodyHtml:
    'you found the void.<br>this is sep 0.<br>you are in the space between atoms.<br>the whole bean is watching.<br><br>he still has never played balatro.',
} satisfies Egg;

export const navContent = {
  logoText: 'JHIZZLE',
  pronounText: 'GO/AT',
  links: [
    { id: 'home', label: 'home' },
    { id: 'aliases', label: 'names' },
    { id: 'lore', label: 'lore' },
    { id: 'memes', label: 'memes' },
    { id: 'linkedin', label: 'linkedin' },
    { id: 'fight', label: '⚔ fight night', fight: true },
  ] as const,
  mobileLinks: [
    { id: 'home', label: 'home' },
    { id: 'aliases', label: 'names (21)' },
    { id: 'lore', label: 'lore' },
    { id: 'memes', label: 'memes' },
    { id: 'linkedin', label: 'linkedin · sep 0' },
    { id: 'fight', label: '⚔ fight night', fight: true },
  ] as const,
};

export const homeContent = {
  tickerLabel: 'BREAKING',
  tickerItems: [
    <>
      <b>BALATRO: BANNED.</b> personally. by the big bean. he has never played it.
    </>,
    <>
      salary investigation week 6: <b>still $0.</b> multiple databases. all void.
    </>,
    <>
      <b>sep 0</b> is not a real date. it remains. physicists notified. no response.
    </>,
    <>
      jake broke his leg. came in next day. <b>said nothing.</b> students found out from the cast.
    </>,
    <>
      "it's like the <b>worst podcast i've ever heard</b>" — mr. holbein, to Aiden, unprompted
    </>,
    <>
      laptop screen angle: unknown. content: <b>classified.</b> 0/3 students succeeded.
    </>,
    <>
      pronouns: <b>go/at.</b> official. canon. on the linkedin.
    </>,
    <>
      fight night: <b>may 20th · 8:45 AM</b> · Aiden vs holbein · allen isd steam center
    </>,
    <>
      new alias unlocked: <b>LeGoat Holbein.</b> no explanation given. none needed.
    </>,
    <>
      the joker card is interactive. <b>click it.</b>
    </>,
  ] as React.ReactNode[],

  heroEyebrow: (
    <>
      the <span>unofficial</span> record · allen isd steam center · 2025–26
    </>
  ),
  heroTitle: { line1: 'JAKE', line2: 'HOLBEIN' },
  heroSubtitleLines: [
    'NICKNAMES: void king · the inevitable · target barista',
    'currently: cs teacher · our sunshine · on his laptop',
    'pronouns: go/at · connections: ∞ · salary: $0',
    'balatro: banned · roblox: bypassed · silk song: documented · screen: classified',
  ],
  heroStats: [
    { title: 'six weeks of investigation. all void.', value: '$0', valueClass: 'r', label: 'salary on file' },
    { value: '∞', valueClass: 'o', label: 'connections' },
    { value: '10/10', valueClass: 'g', label: 'student rating' },
    { title: 'september does not have a zeroth day.', value: 'Sep 0', valueClass: 'r', label: 'linkedin start date' },
  ] as const,

  overviewStats: [
    { value: '$0', valueClass: 'r', label: 'salary on file\n(6 wks · all void)' },
    { value: '∞', valueClass: 'o', label: 'linkedin\nconnections' },
    { value: '0', valueClass: 'm', label: 'balatro games\n(never. personally.)' },
    { value: '1', valueClass: 'r', label: 'broken legs\n(unreported)' },
    { value: '3', valueClass: 'o', label: 'fictional\nlinkedin jobs' },
    { value: '0', valueClass: 'm', label: "students who've\nseen the screen" },
    { value: 'Sep 0', valueClass: 'r', label: 'linkedin start\n(not a real date)' },
    { value: '4.9', valueClass: 'g', label: 'student rating\n(ratemyprofessor)' },
  ] as const,

  quoteOfYear: {
    quote: "you just yap about random stuff for 5-0 minutes. it's like the worst podcast i've ever heard.",
    meta: '— jake holbein · directly to Aiden · class · year 2025–26 · five. zero. · students still processing · click to copy',
    copyText:
      "you just yap about random stuff for 5-0 minutes. it's like the worst podcast i've ever heard. — mr. holbein",
    copyOkToast: 'quote copied to clipboard',
  },

  quickLore: [
    {
      tag: '[x] banned · permanent · no buildup',
      tagClass: 'r',
      title: 'balatro: open before he even sat down',
      body: 'Aiden opened his Chromebook. balatro was already there. no loading, no hiding — just immediately, completely open. jake banned it on the spot. has never played balatro himself. the ban is permanent.',
    },
    {
      tag: '[!] injury · unreported',
      tagClass: 'r',
      title: 'broke his leg. came in next day. said nothing.',
      body: "flag football injury. came in. started the session. students found out from the cast. did it hurt? why didn't he say anything? QUESTIONS.",
    },
    {
      tag: '[?] ongoing · classified',
      title: 'laptop mystery: 47+ minutes. screen unknown.',
      body: 'content: classified. eye contact maintained while typing. screen angle: physically impossible to see around. three students tried. zero succeeded.',
    },
    {
      tag: '[+] class consensus',
      tagClass: 'o',
      title: '"our sunshine" — unanimous. never addressed.',
      body: "the big bean is warm. does he know we call him this? does he like it? we haven't asked. mutual respect. the laptop continues.",
    },
  ] satisfies LoreCard[],

  ratings: [
    { value: '4.9', valueClass: 'o', label: 'overall' },
    { value: '5.0', valueClass: 'g', label: 'chill level' },
    { value: '5.0', valueClass: 'o', label: 'our sunshine' },
    { value: '0%', valueClass: 'r', label: 'teaches much' },
    { value: '$0', valueClass: 'r', label: 'salary found' },
  ] satisfies RatingItem[],

  reviews: [
    {
      stars: '★★★★★',
      tag: 'would take again',
      body: "\"he said 'just do your work' then opened his laptop and did his own work. i've never felt more seen. what is on the screen? i've asked every day. this is somehow the best learning environment i've been in.\"",
      src: 'cs · allen isd steam center',
    },
    {
      stars: '★★★★★',
      tag: 'our sunshine',
      body: "\"on his laptop the whole time but somehow you still feel guided? like the sun. you don't look directly at it but you know it's there. does he know we call him our sunshine? we haven't asked.\"",
      src: 'cs · allen isd steam center',
    },
    {
      stars: '★★★★★',
      tag: 'balatro situation',
      tagClass: 'r',
      body: "\"he banned balatro without a word. went into network settings. done. he has never played balatro. i have so many questions. is the ban permanent? i will not be the one to ask.\"",
      src: 'cs · allen isd steam center · eyewitness',
    },
    {
      stars: '★★★★☆',
      tag: 'broken leg situation',
      tagClass: 'r',
      body: "\"broke his leg. came in next day. did not bring it up. started the session. i only knew because of the cast. minus one star because i want answers and he has provided none.\"",
      src: 'cs · allen isd steam center',
    },
    {
      stars: '★★★★★',
      tag: 'legoat era',
      tagClass: 'g',
      body: '"called him legoat holbein once as a joke. he acknowledged it with a nod. we have not spoken of it since. we never will. it is simply true."',
      src: 'cs · allen isd steam center · witness to history',
    },
  ] satisfies ReviewItem[],

  threatRows: [
    { left: '[+] being our sunshine', right: '☀ MAX', rightClass: 't-o' },
    { left: '[?] laptop mystery level', right: 'classified', rightClass: 't-m' },
    { left: '[+] chill level', right: 'absolute max', rightClass: 't-g' },
    { left: '[x] network admin power', right: 'banned balatro (permanent)', rightClass: 't-r' },
    { left: '[+] cyberpatriot', right: 'top 10 nation', rightClass: 't-g' },
    { left: '[+] linkedin lore depth', right: '∞ (void king era)', rightClass: 't-o' },
    { left: '[?] vibe coding status', right: 'actively ongoing', rightClass: 't-m' },
    { left: '[x] durability', right: 'broke leg · came in next day · said nothing', rightClass: 't-r' },
    { left: '[x] balatro enjoyment', right: '0% (never played · never will)', rightClass: 't-r' },
    { left: '[x] salary transparency', right: '$0 found across all databases', rightClass: 't-r' },
    { left: '[?] sep 0 explanation', right: 'pending since sep 0', rightClass: 't-m' },
    { left: '[+] goat status', right: 'LeGoat confirmed · no elaboration', rightClass: 't-g' },
  ] satisfies ThreatRow[],

  footer: {
    copyright: '© 2026 · made with zero permission from jhizzle, void king, the inevitable, and the balatro banisher',
    secret: 'not assigned · not suggested · not hinted at · go/at',
  },
};

export const fightContent = {
  eyebrow: 'allen isd steam center · officially unofficial · may 20th 8:45 AM',
  titleLine1: 'FIGHT',
  titleLine2: 'NIGHT',
  subtitle: 'Aiden Goontiago · the balatro beacon · vs · jake holbein · the balatro banisher',

  fighters: {
    holbein: {
      name: 'HOLBEIN',
      alias: 'the balatro banisher · go/at · our sunshine',
      stats: [
        { key: 'record', val: 'W by default (admin access)', valClass: 'g' },
        { key: 'power move', val: 'the balatro ban', valClass: 'g' },
        { key: 'durability', val: 'broke leg · came in next day', valClass: 'o' },
        { key: 'network access', val: 'full admin', valClass: 'g' },
        { key: 'salary', val: '$0 (unbothered)', valClass: 'r' },
        { key: 'connections', val: '∞', valClass: 'g' },
        { key: 'origin', val: 'void king · sep 0', valClass: 'o' },
        { key: 'weakness', val: 'none found', valClass: 'r' },
      ] as const,
    },
    aiden: {
      name: 'AIDEN',
      alias: 'the balatro beacon · the yapper · class clown',
      stats: [
        { key: 'record', val: 'got balatro banned', valClass: 'r' },
        { key: 'power move', val: '15 min yap session', valClass: 'r' },
        { key: 'durability', val: 'somehow still going', valClass: 'o' },
        { key: 'balatro access', val: 'BANNED (permanent)', valClass: 'r' },
        { key: 'podcast quality', val: 'worst ever (per holbein)', valClass: 'r' },
        { key: 'class energy', val: 'chaotic · max', valClass: 'o' },
        { key: 'known for', val: 'yapping · balatro · chaos', valClass: 'o' },
        { key: 'weakness', val: 'network admin (holbein)', valClass: 'r' },
      ] as const,
    },
  },

  moves: {
    holbeinTitle: 'HOLBEIN MOVESET',
    aidenTitle: 'AIDEN MOVESET',
    holbein: [
      {
        icon: '🚫',
        name: 'THE BALATRO BAN',
        desc: 'enters network settings in real time. bans balatro. zero warning. permanent. signature move. never even played balatro.',
      },
      {
        icon: '☀️',
        name: 'OUR SUNSHINE AURA',
        desc: 'passive ability. makes the whole class feel warm. currently active. nobody has asked about it. nobody will.',
      },
      {
        icon: '💻',
        name: 'CLASSIFIED SCREEN',
        desc: 'angles laptop to be physically impossible to see. maintains eye contact. typing speed: impressive. content: unknown.',
      },
      {
        icon: '🦴',
        name: 'BROKEN LEG STOICISM',
        desc: 'broke leg. came in next day. started session. said nothing. students found out from the cast.',
      },
      {
        icon: '🎙️',
        name: 'WORST PODCAST DECLARATION',
        desc: '"it\'s like the worst podcast i\'ve ever heard." delivered directly to Aiden. unprompted. students still processing.',
      },
    ],
    aiden: [
      {
        icon: '🃏',
        name: 'BALATRO BEACON',
        desc: 'ran balatro as a file to bypass wi-fi restrictions. worked temporarily. now permanently banned. this is his legacy.',
      },
      {
        icon: '🎤',
        name: '15 MINUTE YAP SESSION',
        desc: "yaps about random stuff for 15 minutes straight. mr. holbein described this as worse than the worst podcast he has ever heard.",
      },
      {
        icon: '😂',
        name: 'CLASS CLOWN ENERGY',
        desc: 'passive ability. always active. gets roasted constantly. somehow still going. resilience stat: surprisingly high.',
      },
      {
        icon: '🔁',
        name: 'SOMEHOW STILL GOING',
        desc: 'gets roasted by the void king himself. balatro: banned. called worst podcast. still shows up. this is the real power.',
      },
    ],
  },

  joker: {
    title: 'BALATRO BANISHER',
    sub: 'legendary joker · allen isd · non-transferable',
    desc:
      'the void king himself. banned balatro from the entire class. has never played balatro. not once. the balance of the universe depends on this.',
    effect: 'if played hand contains Aiden, gain ×10 mult',
    rarity: '✦ LEGENDARY ✦',
    hint: '[ click to activate ]',
  },

  predictionSection: {
    label: '[?] prediction',
    tag: 'analysts weigh in · click to vote',
  },
};

export const aliasesContent = {
  titleLine1: 'ALL',
  titleLine2: 'THE',
  titleLine3: 'NAMES',
  titleLine3Class: 'text-[var(--red)]',
  subtitle: '21 confirmed · none acknowledged by subject · all canon',
  aliases: [
    { num: '#01', name: 'Jhizzle', nameClass: 'r', desc: 'the original. the one on his linkedin. the foundation. go/at.' },
    { num: '#02', name: 'The Whole Bean', nameClass: 'g', desc: 'he is all the coffee bean. not a part. the whole thing.' },
    { num: '#03', name: 'Coffee Bean', desc: 'related to the whole bean. shorter. also accurate.' },
    { num: '#04', name: 'Jakester', nameClass: 'o', desc: 'the jakester. affectionate. earned.' },
    { num: '#05', name: 'Jakey', desc: 'diminutive form. also affectionate. also earned.' },
    { num: '#06', name: 'Jah', desc: 'reverent. one syllable. says it all.' },
    { num: '#07', name: 'Our Sunshine', nameClass: 'o', desc: 'unanimous class consensus. never directly addressed to his face. the warmth is real.' },
    { num: '#08', name: 'The Aiden Annihilator', nameClass: 'r', desc: 'earned via the worst podcast quote. assigned by students post-incident.' },
    { num: '#09', name: 'The Balatro Banisher', nameClass: 'r', desc: 'most powerful origin story in allen isd history. banned balatro. never played it.' },
    { num: '#10', name: 'Big Bean', desc: 'the big bean. the larger version of coffee bean. distinguished.' },
    {
      num: '#11',
      name: 'The Inevitable',
      nameClass: 'p',
      desc: 'starbucks era title. "i am the unavoidable conclusion to every process." 2 yrs 1 mo.',
    },
    {
      num: '#12',
      name: 'Void King',
      nameClass: 'r',
      desc: 'sep 0 — mar 2020. void. "i am the sovereign ruler of the absolute zero." the origin.',
    },
    { num: '#13', name: 'Big JHizzle', desc: 'extended version of jhizzle. the big prefix adds gravitas.' },
    {
      num: '#14',
      name: 'The Laptop Whisperer',
      nameClass: 'g',
      desc: 'awarded for sustained classified laptop activity exceeding 47 consecutive minutes. no one has seen the screen.',
    },
    { num: '#15', name: 'Jake', desc: 'his actual name. sometimes used for clarity. rarely needed.' },
    {
      num: '#16',
      name: 'The Consensus',
      desc: 'may–aug 2023. one above all. "i am the singular point of agreement for the universe."',
    },
    { num: '#17', name: 'One Above All', nameClass: 'p', desc: 'the employer during the consensus era. technically also a name.' },
    { num: '#18', name: 'Your Local Barista', desc: 'linkedin headline. target era. feb–may 2023. evans, georgia.' },
    {
      num: '#19',
      name: 'The Stoic',
      nameClass: 'o',
      desc: 'awarded post broken-leg incident. came in next day. said nothing. started the session. students found out from the cast.',
    },
    { num: '#20', name: 'LeGoat Holbein', nameClass: 'g', desc: 'no need for explanations. acknowledged once. with a nod. never spoken of again.' },
    {
      num: '#21',
      name: 'Cursor Coder Island',
      nameClass: 'p',
      desc: 'appears in the linkedin headline. is it a place? a state of being? a server? we are afraid to ask.',
    },
  ] satisfies AliasItem[],
};

export const loreContent = {
  eyebrow: 'documented incidents · allen isd · 2025–26',
  titleLine1: 'THE',
  titleLine2: 'LORE',
  titleLine2Class: 'text-[var(--red)]',

  bannedTitle: '[x] BALATRO: BANNED',
  bannedBodyLines: [
    <>Aiden played balatro in class.</>,
    <>
      he ran it as <b>a file to bypass the wi-fi filter.</b>
    </>,
    <>mr. holbein caught him.</>,
    <>
      Jake banned it. <b>forever. personally.</b>
    </>,
    <>
      has <b>never played balatro himself.</b> not once.
    </>,
    <>students named him "the balatro banisher."</>,
    <>Aiden is now named "the balatro beacon."</>,
    <>
      <b>the most powerful origin story in allen isd history.</b>
    </>,
  ] as React.ReactNode[],

  incidentCards: [
    {
      tag: '[!] injury · unreported · flag football',
      tagClass: 'r',
      title: 'the broken leg incident',
      body: "jake holbein broke his leg playing flag football. came into class the very next day. did not mention it. started the session. students only found out from the cast on his leg. did it hurt? was he in pain the whole time? why didn't he tell anyone? all open questions. no statement has been provided.",
    },
    {
      tag: '[?] ongoing · classified · daily',
      title: 'the laptop mystery',
      body: 'jake has been on his laptop for extended periods throughout the school year. the screen is angled in a way described as "physically impossible to see around." 2,134 students have attempted to look. zero have succeeded. eye contact is maintained while typing. what is on the screen? this question has never been answered. it has also never been asked directly. this feels correct somehow.',
    },
    {
      tag: '[+] unanimous · class consensus · ongoing',
      tagClass: 'o',
      title: 'our sunshine',
      body: 'at some point during the school year, the class reached unanimous consensus that jake holbein is "our sunshine." this has never been communicated to him directly. does he know? does he like it? would he be pleased? all unknown. the nickname persists. it seems accurate. he is on his laptop. the warmth is still there.',
    },
    {
      tag: '[!] incident · verbal · class · unprompted',
      tagClass: 'r',
      title: 'the worst podcast quote',
      body: 'Aiden was yapping about random stuff for approximately 15 minutes. mr. holbein delivered the following: "you just yap about random stuff for 15 minutes. it\'s like the worst podcast i\'ve ever heard." said directly to Aiden. class has not recovered. remains one of the most powerful statements in allen isd history.',
    },
    {
      tag: '[+] cyber · competitive · top 10 nation',
      tagClass: 'g',
      title: 'cyberpatriot: top 10 in the nation',
      body: 'while the class investigated his salary (result: $0) and catalogued his laptop activity (result: classified), jake holbein quietly coached a cyberpatriot team to a top 10 national ranking. he did not brag about this. it was simply true.',
    },
    {
      tag: '[?] salary · 6 weeks · all databases',
      tagClass: 'r',
      title: 'the $0 salary investigation',
      body: "students searched public records for jake holbein's salary. six weeks. multiple databases. all returned $0. a fictional ttc customer named marcus t. delaney has more financial documentation than the real subject of investigation. marcus is not real. jake is. the investigation continues. marcus is doing fine.",
    },
  ] satisfies LoreCard[],

  liveFeed: [
    {
      who: 'the whole bean',
      time: 'right now',
      text: 'opened his laptop. screen angled away. content: unknown. eye contact with row 3: maintained. typing speed: impressive. this is ongoing.',
    },
    {
      who: 'the balatro banisher',
      time: 'origin story · all-time',
      text: 'Aiden played balatro. jake caught him. jake banned it. has never played balatro. now called "the balatro banisher." allen isd history made.',
    },
    {
      who: 'our sunshine',
      time: 'this morning',
      text: "walked into the room. the energy shifted. he sat down. opened the laptop. the moment was warm and immediately mysterious. what is on the screen? not rhetorical.",
    },
    {
      who: 'the stoic',
      time: 'post-injury · unreported',
      text: 'broke leg in flag football. came in the next day. did not mention it. started the session. students found out from the cast. did it hurt? QUESTIONS.',
    },
    {
      who: 'void king',
      time: 'sep 0 — present',
      text: 'the linkedin entry remains. sep 0. not a real date. still there. physicists: unresponsive. the void endures.',
    },
    {
      who: 'legoat holbein',
      time: 'ongoing',
      text: 'coached cyberpatriot to top 10 in the nation. salary according to public records: $0. the goat does not require documentation.',
    },
  ] satisfies FeedItem[],
};

export const memesContent = {
  eyebrow: 'certified · lore-accurate · click to copy',
  titleLine1: 'THE',
  titleLine2: 'MEMES',
  titleLine2Class: 'text-[var(--red)]',
  sectionLabel: '[+] certified lore-accurate meme formats',
  sectionTag: 'click any card to copy the template',
  memes: [
    {
      tag: '[?] ongoing',
      emoji: '💻',
      name: 'Laptop Content: Classified',
      desc: 'the format. a student tries to see the screen. the screen cannot be seen. the whole bean maintains eye contact. nothing is resolved.',
      quote: '"content: classified. screen angle: physically impossible. eye contact: maintained."',
      buttonLabel: '[ copy template ]',
      template: `WHOLE BEAN ON HIS LAPTOP\n[redacted]\nstudents: what are you doing?\nwhole bean: [maintains eye contact]\nstudents: [cannot see screen]\nwhole bean: [continues typing]\n\ncontent: classified.`,
    },
    {
      tag: '[x] banned · permanent',
      tagClass: 'r',
      emoji: '🚫',
      name: 'Balatro: Banned',
      desc: 'the origin. a student plays balatro. the void king acts. balatro is gone. the void king has never played balatro. the ban is permanent.',
      quote: '"banned personally. never played it. this is the way."',
      buttonLabel: '[ copy template ]',
      template: `BALATRO: BANNED\n[Aiden plays balatro]\n[mr. holbein opens network settings]\n[balatro is banned]\n[mr. holbein has never played balatro]\n[Aiden has never recovered]\n\nStatus: Permanent.`,
    },
    {
      tag: '[!] unreported injury',
      tagClass: 'r',
      emoji: '🦴',
      name: 'The Stoic Protocol',
      desc: 'broke his leg. came in the next day. said nothing. started the session. students found out from the cast. pov format goes hard.',
      quote: '"he came in. he started the session. students found out from the cast."',
      buttonLabel: '[ copy template ]',
      template:
        `POV: you broke your leg\n[options]\na) go to the hospital ✗\nb) tell someone ✗\nc) stay home ✗\nd) come in next day, start the session, say nothing, let students find out from the cast ✓\n\n— mr. holbein, stoic of allen isd`,
    },
    {
      tag: '[!] quote · unprompted · devastating',
      tagClass: 'o',
      emoji: '🎙️',
      name: 'Worst Podcast Ever',
      desc: 'the quote. delivered directly. unprompted. no further context provided. class has not recovered. students still processing.',
      quote: '"it\'s like the worst podcast i\'ve ever heard." — mr. holbein, to Aiden, 2026',
      buttonLabel: '[ copy quote ]',
      template:
        `" you just yap about random stuff for 15 minutes.\nit's like the worst podcast i've ever heard."\n— mr. holbein\n— directly to Aiden\n— unprompted\n— class still processing`,
    },
    {
      tag: '[?] week 6 · all void',
      tagClass: 'r',
      emoji: '🔍',
      name: 'The $0 Investigation',
      desc: 'six weeks. multiple public records databases. all returned $0. marcus t. delaney (fictional) has more documentation. marcus is not real.',
      quote: '"salary on file: $0. marcus is thriving. jake is unbothered."',
      buttonLabel: '[ copy template ]',
      template:
        `SALARY INVESTIGATION WEEK [N]\n\nDatabases searched: [all of them]\nRecords found: 0\nSalary on file: $0\n\nMarcus T. Delaney (not real): financially documented\nJake Holbein (real): $0\n\nUpdate: Marcus thriving. Investigation continues.`,
    },
    {
      tag: '[?] sep 0 · not a real date · remains',
      tagClass: 'p',
      emoji: '📅',
      name: 'Sep 0: The Origin',
      desc: 'september has no zeroth day. the linkedin entry says sep 0. it has not been corrected. physicists were consulted. no response. the void king does not correct the void.',
      quote: '"sep 0. not a real date. still there. the void endures."',
      buttonLabel: '[ copy template ]',
      template:
        `Sep 0\n[not a real date]\n[it\'s on the linkedin]\n[it has not been corrected]\n[physicists were notified]\n[they did not respond]\n[the void king does not correct the void]\n\nSep 0 remains.`,
    },
    {
      tag: '[+] unanimous · warm · never stated',
      tagClass: 'o',
      emoji: '☀️',
      name: 'Our Sunshine',
      desc: 'the class reached unanimous consensus. it has never been said to his face. the warmth is real. the laptop screen remains classified.',
      quote: '"he is our sunshine. we have not told him. we will not tell him."',
      buttonLabel: '[ copy template ]',
      template:
        `OUR SUNSHINE\n[jake holbein enters the room]\n[energy: shifted]\n[vibe: warm, somehow]\n[he sits down]\n[he opens the laptop]\n[screen: angled away]\n[warmth: still there]\n\nwe have not told him.\nwe will not tell him.\nhe is our sunshine.`,
    },
    {
      tag: '[+] sep 0 · sovereign · void',
      tagClass: 'r',
      emoji: '👑',
      name: 'Void King Era',
      desc: 'his greatest linkedin era. sep 0 to mar 2020. ruler of the absolute zero. manager of the emptiness between atoms. peak lore.',
      quote: '"i am the sovereign ruler of the absolute zero." — void king, sep 0',
      buttonLabel: '[ copy template ]',
      template:
        `VOID KING ERA\nSep 0 – Mar 2020\n\n" I am the sovereign ruler of the absolute zero.\nI manage the vast, silent spaces between atoms\nand the infinite emptiness that precedes creation.\nI don't fill roles; I define the vacancy\nthat others cannot."\n\n— Jhizzle, Void\nKing, LinkedIn, Sep 0`,
    },
  ] satisfies MemeItem[],
};

export const linkedInContent = {
  eyebrow: '∞ connections · go/at · jake has ALL the recent posts',
  title: 'LINKEDIN',

  profile: {
    avatar: 'J',
    name: 'Jhizzle',
    pronoun: 'GO/AT',
    headline:
      'The Whole Bean, Coffee Bean, Jakester, Jakey, Jah, Our Sunshine, The Aiden Annihilator, The Balatro Banisher | Your Local Barista | Cursor Coder Island',
    meta: 'Allen, Texas, United States',
    connections: '∞ connections',
  },

  snips: [
    {
      cmd: 'public-records-search "jake holbein" salary',
      result: 'result: 0 salary records found · 6 weeks · multiple databases · all void',
      resultClass: 'text-[var(--red)]',
    },
    {
      cmd: 'grep "sep 0" linkedin/jhizzle/experience',
      result: 'found: 1 match · "Sep 0" · not a real date · uncorrected since posting',
      resultClass: 'text-[var(--orange)]',
    },
    {
      cmd: 'curl linkedin/jhizzle/activity --latest',
      result: 'jake has ALL the recent posts · verbatim · we did not write this',
      resultClass: 'text-[var(--green)]',
    },
  ] as const,

  experienceLabel: '[+] experience',
  activityLabel: '[+] activity',
  activityTag: 'jake has ALL the recent posts · ∞ followers',

  careerRows: [
    {
      left: 'Jul 2024 — Present',
      role: '[+] Computer Science Teacher',
      company: 'Allen ISD · Full-time · Allen, Texas',
      desc: (
        <>
          current role. on laptop. content classified. cyberpatriot: top 10 nation. screen angle: unknown. eye contact
          maintained. balatro: banned. salary: $0 on file. unbothered.
        </>
      ),
    },
    {
      left: 'May 2023 — Aug 2023',
      role: '[+] The Consensus',
      company: 'One Above All · 4 mos',
      desc: (
        <>
          "i serve as the singular point of agreement for the physical and metaphysical universe. my primary function is
          to provide the 'Yes' that allows reality to continue functioning. i do not attend meetings; i am the outcome
          toward which all meetings unknowingly trend."
        </>
      ),
    },
    {
      left: 'Feb 2023 — May 2023',
      role: '[+] Barista / Team Member',
      company: 'Target · Part-time · Evans, Georgia · 4 mos',
      desc: (
        <>
          customer-facing. inventory management. customer service. "miss you, inevitable." — linkedin activity section,
          somehow.
        </>
      ),
    },
    {
      left: 'Dec 2020 — Dec 2022',
      role: '[+] The Inevitable',
      company: 'Starbucks · 2 yrs 1 mo',
      desc: (
        <>
          "i am the unavoidable conclusion to every process, project, and timeline. i do not 'apply' for positions; i am
          the outcome toward which your organization has been unknowingly drifting since its inception. i don't start
          jobs; i fulfil the logical endpoint of your company's journey toward me."
        </>
      ),
    },
    {
      left: 'Sep 0 — Mar 2026',
      leftClass: 'c-red',
      role: '[+] Void King',
      company: 'Void',
      desc: (
        <>
          "i am the sovereign ruler of the absolute zero. i manage the vast, silent spaces between atoms and the infinite
          emptiness that precedes creation. i don't fill roles; i define the vacancy that others cannot."
          <br />
          <br />
          <span className="text-[var(--orange)]">
            note: "sep 0" is not a real date. september has no zeroth day. this entry has remained uncorrected since
            posting. physicists were notified. they did not respond.
          </span>
        </>
      ),
    },
  ] satisfies CareerRow[],

  activityFeed: [
    {
      who: 'jhizzle',
      time: 'most recent post',
      text: 'jake has ALL the recent posts. the jhizzle is too great to showcase his recent posts here. this is verbatim from the linkedin. we did not write this. it was already there.',
    },
    {
      who: 'the inevitable',
      time: 'starbucks',
      text: 'two years one month as the inevitable at starbucks. what does that mean for a barista? we have not asked. it was in the job description apparently.',
    },
    {
      who: 'void king',
      time: 'sep 0 — the origin',
      text: 'the void king began existence on sep 0. this date should not exist. the void king does not care. the void king rules the vast universe.',
    },
    {
      who: 'cursor coder island',
      time: 'unknown',
      text: 'appears in the linkedin headline. is it a place? a server? a metaphysical state? a direct continuation of the void king era? no one has asked. this feels correct.',
    },
  ] satisfies FeedItem[],
};
