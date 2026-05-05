'use client';

import type { PollData } from '../types';

export function PollGrid({
  data,
  vote,
  pollPcts,
  pollChosen,
  pollVotesText,
  fallbackVotesText,
}: {
  data: PollData[];
  vote: (pollId: string, chosenIdx: number) => void;
  pollPcts: Record<string, number[]>;
  pollChosen: Record<string, number | undefined>;
  pollVotesText: Record<string, string>;
  fallbackVotesText: (pollId: string) => string;
}) {
  return (
    <>
      {data.map((poll) => (
        <div className="poll" id={`poll-${poll.id}`} key={poll.id}>
          <div className="poll-q">{poll.question}</div>
          {poll.options.map((o, i) => {
            const pct = pollPcts[poll.id]?.[i] ?? o.pct;
            const chosen = pollChosen[poll.id];
            const voted = chosen === i;
            return (
              <div className="poll-o" id={`opt-${poll.id}-${i}`} key={`${poll.id}-${i}`}>
                <div className="poll-row">
                  <span className="poll-lbl">{o.label}</span>
                  <span className="poll-pct" id={`pct-${poll.id}-${i}`}>
                    {pct}%
                  </span>
                </div>
                <div className="poll-bar-bg">
                  <div
                    className={`poll-bar ${o.color}`}
                    id={`bar-${poll.id}-${i}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <button
                  className={`poll-btn ${voted ? 'voted' : ''}`}
                  onClick={() => vote(poll.id, i)}
                  id={`btn-${poll.id}-${i}`}
                >
                  {voted ? '[ ✓ voted ]' : `[ vote: ${o.label} ]`}
                </button>
              </div>
            );
          })}
          <div className="poll-votes" id={`votes-${poll.id}`}>
            {pollVotesText[poll.id] ?? fallbackVotesText(poll.id)}
          </div>
        </div>
      ))}
    </>
  );
}
