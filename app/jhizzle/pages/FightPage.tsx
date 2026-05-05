'use client';

import { fightContent, fightPollsData } from '../content';
import type { CountdownState, EggType } from '../types';
import { PollGrid } from '../components/PollGrid';

export function FightPage({
  active,
  countdown,
  vote,
  pollPcts,
  pollChosen,
  pollVotesText,
  fallbackVotesText,
  triggerEgg,
}: {
  active: boolean;
  countdown: CountdownState;
  vote: (pollId: string, chosenIdx: number) => void;
  pollPcts: Record<string, number[]>;
  pollChosen: Record<string, number | undefined>;
  pollVotesText: Record<string, string>;
  fallbackVotesText: (pollId: string) => string;
  triggerEgg: (type: EggType) => void;
}) {
  return (
    <div id="page-fight" className={`page fight-page ${active ? 'active' : ''}`}>
      <div className="fight-hero">
        <div className="fight-bg" />
        <div className="fight-eyebrow">{fightContent.eyebrow}</div>
        <div className="fight-title">
          {fightContent.titleLine1}
          <br />
          <span className="vs">{fightContent.titleLine2}</span>
        </div>
        <div className="fight-subtitle">{fightContent.subtitle}</div>
        <div className={countdown.statusClass} id="fight-status">
          {countdown.statusText}
        </div>
        <div className="countdown" id="countdown">
          <div className="cd-block">
            <span className={`cd-num ${countdown.numClass}`} id="cd-days">
              {countdown.days}
            </span>
            <div className="cd-label">days</div>
          </div>
          <div className="cd-sep">:</div>
          <div className="cd-block">
            <span className={`cd-num ${countdown.numClass}`} id="cd-hours">
              {countdown.hours}
            </span>
            <div className="cd-label">hours</div>
          </div>
          <div className="cd-sep">:</div>
          <div className="cd-block">
            <span className={`cd-num ${countdown.numClass}`} id="cd-mins">
              {countdown.mins}
            </span>
            <div className="cd-label">minutes</div>
          </div>
          <div className="cd-sep">:</div>
          <div className="cd-block">
            <span className={`cd-num ${countdown.numClass}`} id="cd-secs">
              {countdown.secs}
            </span>
            <div className="cd-label">seconds</div>
          </div>
        </div>
      </div>

      <div className="wrap pt-12 pb-20">
        <div className="fight-cards reveal">
          <div className="fighter holbein">
            <div className="fighter-name">{fightContent.fighters.holbein.name}</div>
            <div className="fighter-alias">{fightContent.fighters.holbein.alias}</div>
            <div className="fighter-stats">
              {fightContent.fighters.holbein.stats.map((s) => (
                <div className="f-stat" key={s.key}>
                  <span className="f-key">{s.key}</span>
                  <span className={`f-val ${s.valClass}`.trim()}>{s.val}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="vs-col">
            <div className="vs-text">VS</div>
          </div>
          <div className="fighter aiden">
            <div className="fighter-name">{fightContent.fighters.aiden.name}</div>
            <div className="fighter-alias">{fightContent.fighters.aiden.alias}</div>
            <div className="fighter-stats">
              {fightContent.fighters.aiden.stats.map((s) => (
                <div className="f-stat" key={s.key}>
                  <span className="f-key">{s.key}</span>
                  <span className={`f-val ${s.valClass}`.trim()}>{s.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="fight-moves reveal">
          <div className="move-col">
            <div className="move-title g">{fightContent.moves.holbeinTitle}</div>
            {fightContent.moves.holbein.map((m) => (
              <div className="move" key={m.name}>
                <div className="move-icon">{m.icon}</div>
                <div>
                  <div className="move-name">{m.name}</div>
                  <div className="move-desc">{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="move-col">
            <div className="move-title r">{fightContent.moves.aidenTitle}</div>
            {fightContent.moves.aiden.map((m) => (
              <div className="move" key={m.name}>
                <div className="move-icon">{m.icon}</div>
                <div>
                  <div className="move-name">{m.name}</div>
                  <div className="move-desc">{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="joker-section reveal">
          <div className="joker-card" onClick={() => triggerEgg('joker')} title="click me" role="button" tabIndex={-1}>
            <div className="joker-title">{fightContent.joker.title}</div>
            <div className="joker-sub">{fightContent.joker.sub}</div>
            <div className="joker-desc">{fightContent.joker.desc}</div>
            <div className="joker-effect">{fightContent.joker.effect}</div>
            <br />
            <div className="joker-rarity">{fightContent.joker.rarity}</div>
            <div className="joker-hint">{fightContent.joker.hint}</div>
          </div>
        </div>

        <div className="section reveal">
          <div className="sec-head">
            <span className="sec-label">{fightContent.predictionSection.label}</span>
            <span className="sec-tag">{fightContent.predictionSection.tag}</span>
          </div>
          <hr className="sec-rule" />
          <div className="polls" id="fight-polls-container">
            <PollGrid
              data={fightPollsData}
              vote={vote}
              pollPcts={pollPcts}
              pollChosen={pollChosen}
              pollVotesText={pollVotesText}
              fallbackVotesText={fallbackVotesText}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
