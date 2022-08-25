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
        return "Arme d'hast";
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
      case "sumeru":
        return "Sumeru";
      default:
        return "";
    }
  },

  animalAndEnemiesLabel: (animal) => {
    switch (animal) {
      case "birds":
        return "Oiseaux";
      case "beasts":
        return "Animal terrestre";
      case "fish":
        return "Animal aquatique";
      case "other":
        return "Divers";

      case "The Abyss":
        return "Ordre de l'Abîme";
      case "Elemental Lifeforms":
        return "Êtres élémentaires";
      case "Hilichurls":
        return "Brutocollinus";
      case "Enemies of Note":
        return "Boss";
      case "Mystical Beasts":
        return "Bêtes mystiques";
      case "Fatui":
        return "Fatui";
      case "Other Human Factions":
        return "Humains";
      case "Automatons":
        return "Automates";
        
      default:
        return "";
    }
  }
}