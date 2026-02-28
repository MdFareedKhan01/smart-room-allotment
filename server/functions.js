export function compatibility(a, b) {
  return (
    Math.abs(a[0] - b[0]) +
    Math.abs(a[1] - b[1]) +
    Math.abs(a[2] - b[2]) +
    Math.abs(a[3] - b[3])
  );
}
export function preferenceMatch(pref1, pref2) {
  let score = 0;

  if (pref1.food === pref2.food) score++;
  if (pref1.time === pref2.time) score++;
  if (pref1.room === pref2.room) score++;
  if (pref1.study === pref2.study) score++;
  if (pref1.social === pref2.social) score++;

  return score;
}