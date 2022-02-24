export const simplifyText = (txt) => {
  let res = txt;
  
  res = res.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  res = res.toLowerCase();

  return res;
}