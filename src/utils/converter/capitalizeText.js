export const capitalize = (s) => {
  let res = s;
  if (s !== '') {
    res = s[0].toUpperCase() + s.slice(1);
  }

  return res;
}