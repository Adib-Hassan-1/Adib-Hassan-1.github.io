import test from 'node:test';
import assert from 'node:assert/strict';
import { assignEntryIds } from '../src/lib/entry-ids.mjs';

test('saved addresses are kept and repeated titles get unique addresses', () => {
  const ids = assignEntryIds([
    { id: 'certificate-of-participation', title: 'Certificate of Participation', date: '2025-02-10' },
    { id: 'Certificate of Participation', title: 'Certificate of Participation', date: '2024-12-07' },
    { id: 'Certificate of Participation', title: 'Certificate of Participation', date: '2023-10-12' },
    { title: 'Certificate of Participation', date: '2023-10-12' },
    { title: 'Certificate of Participation', date: '2023-10-12' },
    { title: 'B.Sc Testimonial' },
    { title: '' },
  ]);
  assert.deepEqual(ids, [
    'certificate-of-participation',
    'certificate-of-participation-2024',
    'certificate-of-participation-2023',
    'certificate-of-participation-2023-10-12',
    'certificate-of-participation-2',
    'bsc-testimonial',
    'entry',
  ]);
  assert.equal(new Set(ids).size, ids.length);
});

test('a saved address wins over a new entry that would generate the same address', () => {
  assert.deepEqual(
    assignEntryIds([{ title: 'Award', date: '2026-01-01' }, { id: 'award', title: 'Old award' }]),
    ['award-2026', 'award'],
  );
});

test('typed addresses are made URL safe', () => {
  assert.deepEqual(assignEntryIds([{ id: ' ../My Award/Part 1 ' }]), ['my-award/part-1']);
});
