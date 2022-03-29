// Possible values : ChineseSimplified, ChineseTraditional, English, French, German, Indonesian, Japanese, Korean, Portuguese, Russian, Spanish, Thai, Vietnamese.
const wantedLanguage = "French";

const genshindb = require('genshin-db');
genshindb.setOptions({
  queryLanguages: [wantedLanguage],
  resultLanguage: wantedLanguage
});

export const GenshinDB = {
  getElement: (name) => {
    // Les élément n'existe que en version anglaise
    genshindb.setOptions({ queryLanguages: ["English"], resultLanguage: "English" });

    let elt = genshindb.elements(name);
    
    genshindb.setOptions({ queryLanguages: [wantedLanguage], resultLanguage: wantedLanguage });
    return elt;
  },

  getAllCharactersNames: () => {
    return genshindb.characters('name', { matchCategories: true });
  },

  findCharacter: (name) => {
    return genshindb.characters(name);
  },

  findTalents: (characterName) => {
    let search = characterName;
    // if (characterName && characterName.startsWith('Traveler')){
    //   let open = characterName.indexOf('(') + 1;
    //   let close = characterName.indexOf(')');
    //   search = characterName.substring(open, close)
    // }

    return genshindb.talents(search);
  },

  findConstellations: (characterName) => {
    let search = characterName;
    // if (characterName && characterName.startsWith('Traveler')){
    //   let open = characterName.indexOf('(') + 1;
    //   let close = characterName.indexOf(')');
    //   search = characterName.substring(open, close)
    // }

    return genshindb.constellations(search);
  },

  findOutfits: (characterName) => {
    return genshindb.outfits(characterName, { matchCategories: true });
  },
  
  findMaterials: (name) => {
    return genshindb.materials(name);
  }
}