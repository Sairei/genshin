export const findConstellationClassnameByElt = (elt) => {
  switch (elt) {
    case"Anémo":      
      return "constellation_anemo";
    case "Cryo":      
      return "constellation_cryo";
    case "Électro":      
      return "constellation_electro";
    case "Géo":      
      return "constellation_geo";
    case "Hydro":      
      return "constellation_hydro";
    case "Pyro":      
      return "constellation_pyro";
    default:      
      return "constellation_dendro";
  }
}