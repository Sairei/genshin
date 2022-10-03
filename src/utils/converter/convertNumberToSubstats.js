import { ConvertEN } from "../categorie/convertByLang";

export const convertNumberToSubstat = (stat, value) => {
  let res = Math.round(value);

  if (ConvertEN.subStats(stat) !== "Elemental Mastery") {
    // pourcentage avec un chiffre après la virgule
    res = `${Math.round(value*1000) / 10} %`;
  }

  return `${res}`;
}