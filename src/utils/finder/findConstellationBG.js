import { simplifyText } from "../converter/simplifyElementText";

export const findConstellationClassnameByElt = (elt) => {
  elt = simplifyText(elt);
  
  switch (elt) {
    case"anemo":      
      return "constellation_anemo";
    case "cryo":      
      return "constellation_cryo";
    case "electro":      
      return "constellation_electro";
    case "geo":      
      return "constellation_geo";
    case "hydro":      
      return "constellation_hydro";
    case "pyro":      
      return "constellation_pyro";
    default:      
      return "constellation_dendro";
  }
}