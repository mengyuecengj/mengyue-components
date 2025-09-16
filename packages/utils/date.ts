// ISO <-> Date 及展示格式
export function toISOYear(y: number) {
  return `${y.toString().padStart(4,'0')}-01-01`;
}
export function toISOYMD(year: number, month: number, day: number) {
  return `${year.toString().padStart(4,'0')}-${(month).toString().padStart(2,'0')}-${day.toString().padStart(2,'0')}`;
}
export function isoToYMD(iso: string | null | undefined) {
  if (!iso || typeof iso !== 'string') {
    return { year: NaN, month: NaN, day: NaN }; // 或者返回 null，看你业务需要
  }

  const [y, m, d] = iso.split('-').map(Number);
  return { year: y, month: m, day: d };
}
export function renderDate(iso: string, monthOnly = false) {
  const { year, month, day } = isoToYMD(iso);
  if (monthOnly) return `${year}年${month}月`;
  return `${year}年${month}月${day}日`;
}
export function renderYear(iso: string) {
  return `${iso.split('-')[0]}年`;
}
export function renderYearRange(startIso: string, endIso: string) {
  return `${startIso.split('-')[0]}年 至 ${endIso.split('-')[0]}年`;
}
