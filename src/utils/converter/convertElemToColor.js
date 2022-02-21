export const convertElemToColor = (color) => {
  switch (color) {
    case"Anémo":
      return "#7bddce";
    case "Cryo":
      return "#00e6e6";
    case "Dendro":
      return "green";
    case "Électro":
      return "#d17eda";
    case "Géo":
      return "#dfc179";
    case "Hydro":
      return "#79c9df";
    case "Pyro":
      return "#de867a";
    default:
      return "black";
  }
}