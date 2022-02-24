import { simplifyText } from "./simplifyElementText";

export const convertElemToColor = (color) => {
  color = simplifyText(color)

  switch (color) {
    case "anemo":
      return "#7bddce";
    case "cryo":
      return "#00e6e6";
    case "dendro":
      return "green";
    case "electro":
      return "#d17eda";
    case "geo":
      return "#dfc179";
    case "hydro":
      return "#79c9df";
    case "pyro":
      return "#de867a";
    default:
      return "black";
  }
}