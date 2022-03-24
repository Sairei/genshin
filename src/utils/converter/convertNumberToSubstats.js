export const convertNumberToSubstat = (stat, value) => {
  let res = Math.round(value);
  
  if (stat !== "Elemental Mastery") {
    // pourcentage avec un chiffre après la virgule
    res = `${Math.round(value*1000) / 10} %`;
  }

  return `${res}`;
}