import { slug } from 'github-slugger';

// Turn any saved or typed address into a safe URL path, keeping nested segments.
const cleanId = value => String(value || '')
  .split('/').map(part => slug(part.trim())).filter(Boolean).join('/');

// Page addresses are generated, never typed in Pages CMS.
// Saved addresses keep shared links working; new or clashing entries get a unique one
// built from the title, then the year or full date, then a number.
export function assignEntryIds(entries) {
  const ids = new Array(entries.length);
  const taken = new Set();
  entries.forEach((entry, index) => {
    const saved = cleanId(entry?.id);
    if (saved && !taken.has(saved)) { ids[index] = saved; taken.add(saved); }
  });
  entries.forEach((entry, index) => {
    if (ids[index]) return;
    const base = cleanId(entry?.title) || 'entry';
    const date = String(entry?.date || '').slice(0, 10);
    const candidates = [base];
    if (/^\d{4}/.test(date)) candidates.push(`${base}-${date.slice(0, 4)}`);
    if (/^\d{4}-\d{2}-\d{2}$/.test(date)) candidates.push(`${base}-${date}`);
    let id = candidates.find(candidate => !taken.has(candidate));
    for (let suffix = 2; !id; suffix++) if (!taken.has(`${base}-${suffix}`)) id = `${base}-${suffix}`;
    ids[index] = id;
    taken.add(id);
  });
  return ids;
}
