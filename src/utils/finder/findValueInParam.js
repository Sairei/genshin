export const findValueInParam = (s, params, lvl) => {
  let tmp = s;

  while (tmp.indexOf('}') > 0) {
    let open = tmp.indexOf('{');
    let close = tmp.indexOf('}');

    let p = tmp.substring(open+1, close).split(':');

    tmp = tmp.substring(0, open) + calcul(params[p[0]][lvl-1], p[1]) + tmp.substring(close+1);
  }

  return tmp;
}

const calcul = (val, typeVal) => {
  let res = '';
  
  if (typeVal.includes("P")) {
    val = val * 100;
    res = '%';
  }

  if (typeVal.includes("F1")) {
    val = Math.round(val*10) / 10;
  } else if (typeVal.includes("F2")) {
    val = Math.round(val*100) / 100;
  } else {
    val = Math.round(val);
  }

  res = val + res;

  return res;
} 