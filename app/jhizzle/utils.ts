export function randomVotes(): string {
  return (Math.floor(Math.random() * 30000) + 10000).toLocaleString();
}

export function distributeVote(optionCount: number, chosenIdx: number): number[] {
  const base = Array.from({ length: optionCount }, (_, i) =>
    i === chosenIdx ? 50 : Math.floor((100 - 50) / (optionCount - 1)),
  );
  const sum = base.reduce((a, b) => a + b, 0);
  return base.map((p) => Math.round((p * 100) / sum));
}

export function pad2(n: number): string {
  return String(n).padStart(2, '0');
}
