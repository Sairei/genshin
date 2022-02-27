export const ConvertFR = {
  elementLabel: (elt) => {
    switch (elt) {
      case "geo":
        return "Géo";
      case "dendro":
        return "Dendro";
      case "hydro":
        return "Hydro";
      case "anemo":
        return "Anémo";
      case "electro":
        return "Electro";
      case "cryo":
        return "Cryo";
      case "pyro":
        return "Pyro";
      case "adaptive":
        return "Adaptif";
      default:
        return "";
    }
  },

  weaponLabel: (weapon) => {
    switch (weapon) {
      case "claymore":
        return "Épée à deux mains";
      case "sword":
        return "Épée à une main";
      case "polearm":
        return "Arme d’hast";
      case "catalyst":
        return "Catalyseur";
      case "bow":
        return "Arc";
      default:
        return "";
    }
  },

  genderLabel: (gender) => {
    switch (gender) {
      case "male":
        return "Homme";
      case "female":
        return "Femme";
      default:
        return "";
    }
  },

  regionLabel: (region) => {
    switch (region) {
      case "mondstadt":
        return "Mondstadt";
      case "liyue":
        return "Liyue";
      case "snezhnaya":
        return "Snezhnaya";
      case "inazuma":
        return "Inazuma";
      default:
        return "";
    }
  }
}