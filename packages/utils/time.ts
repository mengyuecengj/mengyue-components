export function toTimeStr(h: number, m: number) {
  return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`;
}
export function parseTimeStr(ts: string) {
  const [h, m] = ts.split(':').map(Number);
  return { h, m };
}
