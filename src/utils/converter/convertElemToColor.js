export const convertElemToColor = (color) => {
  switch (color) {
    case"Anémo":
      return "#99ffef";
    case "Cryo":
      return "#99ffff";
    case "Dendro":
      return "green";
    case "Électro":
      return "#f19efa";
    case "Géo":
      return "#ffe199";
    case "Hydro":
      return "#99d9ff";
    case "Pyro":
      return "#fea69a";
    default:
      return "black";
  }
}