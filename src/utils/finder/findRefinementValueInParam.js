export const findRefinementValueInParam = (s, params) => {
  let tmp = s;

  while (tmp.indexOf('}') > 0) {
    let open = tmp.indexOf('{');
    let close = tmp.indexOf('}');

    let paramNB = tmp.substring(open+1, close);

    tmp = tmp.substring(0, open) + "**" + params[paramNB] + "**" + tmp.substring(close+1);
  }

  return tmp;
}