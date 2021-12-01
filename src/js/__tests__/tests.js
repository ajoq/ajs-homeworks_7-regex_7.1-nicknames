import Validator from '../app';

test.each([
  ['Василий', false],
  ['ajБoq', false],
  ['我的天使', false],
  ['ajoq-ajoq', true],
  ['ajoq_ajoq', true],
  ['ajoq123aj12oq', true],
  ['ajoq12345aj1234oq', false],
  ['1ajoq', false],
  ['ajoq1', false],
  ['_ajoq', false],
  ['ajoq_', false],
  ['-ajoq', false],
  ['ajoq-', false],
  ['aj$oq', false],
])('regexp', (obj, expected) => {
  const result = new Validator(obj).validateUsername();
  expect(result).toBe(expected);
});
