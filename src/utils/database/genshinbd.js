// Possible values : ChineseSimplified, ChineseTraditional, English, French, German, Indonesian, Japanese, Korean, Portuguese, Russian, Spanish, Thai, Vietnamese.
const wantedLanguage = "French";

const genshindb = require('genshin-db');
genshindb.setOptions({
  queryLanguages: ["English", wantedLanguage],
  resultLanguage: wantedLanguage
});

export const GenshinDB = {
  /***** Element *****/
  getElement: (name) => {
    // Les élément n'existe que en version anglaise
    genshindb.setOptions({ queryLanguages: ["English"], resultLanguage: "English" });

    let elt = genshindb.elements(name);

    genshindb.setOptions({ queryLanguages: [wantedLanguage], resultLanguage: wantedLanguage });
    return elt;
  },

  /***** Personnage *****/
  getAllCharactersNames: () => {
    return genshindb.characters('name', { matchCategories: true });
  },

  findCharacter: (name) => {
    return genshindb.characters(name);
  },

  /***** Talent *****/
  getAllTalentsNames: () => {
    return genshindb.talents('name', { matchCategories: true });
  },

  findTalents: (characterName) => {
    return genshindb.talents(characterName);
  },

  /***** Constellations *****/
  findConstellations: (characterName) => {
    return genshindb.constellations(characterName);
  },

  /***** Tenues *****/
  findOutfits: (characterName) => {
    return genshindb.outfits(characterName, { matchCategories: true });
  },

  /***** Animaux *****/
  findAnimalByCategorie: (catego) => {
    return genshindb.animals(catego, { matchCategories: true });
  },

  findAnimals: (name) => {
    return genshindb.animals(name);
  },

  /***** Enemies *****/
  getAllEnemiesNames: () => {
    return genshindb.enemies('name', { matchCategories: true });
  },

  findEnemiesByCategorie: (catego) => {
    return genshindb.enemies(catego, { matchCategories: true });
  },

  findEnemies: (name) => {
    return genshindb.enemies(name);
  },

  /***** Matériaux *****/
  getAllMaterialsNames: () => {
    return genshindb.materials('name', { matchCategories: true });
  },

  findMaterialsByCategorie: (catego) => {
    return genshindb.materials(catego, { matchCategories: true });
  },

  findMaterials: (name) => {
    return genshindb.materials(name);
  },

  /***** Artefact *****/
  findArtifact: (name) => {
    return genshindb.artifacts(name);
  },

  /***** Armes *****/
  findWeapon: (name) => {
    return genshindb.weapons(name);
  },

  /***** Recettes *****/
  getAllFoodsNames: () => {
    return genshindb.foods('name', { matchCategories: true });
  },

  findFood: (name) => {
    return genshindb.food(name);
  },

  /***** Domaines *****/
  findDomain: (name) => {
    return genshindb.domains(name);
  },
}