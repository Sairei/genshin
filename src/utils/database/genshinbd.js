// Possible values : ChineseSimplified, ChineseTraditional, English, French, German, Indonesian, Japanese, Korean, Portuguese, Russian, Spanish, Thai, Vietnamese.
const wantedLanguage = "French";

const genshindb = require('genshin-db');

export const InitDB = () => {
  let oReq1 = new XMLHttpRequest();
  oReq1.open('GET', 'https://gitcdn.link/cdn/theBowja/genshin-db/main/dist/data/gzips/all-achievements.min.json.gzip');
  oReq1.responseType = "arraybuffer";
  oReq1.onloadend = function (e) {
    var arraybuffer = oReq1.response;
    genshindb.addData(arraybuffer);
  }
  oReq1.send();

  let oReq2 = new XMLHttpRequest();
  oReq2.open('GET', 'https://gitcdn.link/cdn/theBowja/genshin-db/main/dist/data/gzips/all-achievementgroups.min.json.gzip');
  oReq2.responseType = "arraybuffer";
  oReq2.onloadend = function (e) {
    var arraybuffer = oReq2.response;
    genshindb.addData(arraybuffer);
  }
  oReq2.send();

}

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
  getAllArtifactNames: () => {
    return genshindb.artifacts('name', { matchCategories: true });
  },

  findArtifact: (name) => {
    return genshindb.artifacts(name);
  },

  /***** Armes *****/
  getAllWeaponsNames: () => {
    return genshindb.weapons('name', { matchCategories: true });
  },

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

  /***** Succès *****/
  getAllGroupAchivementNames: () => {
    return genshindb.achievementgroups('name', { matchCategories: true });
  },

  findGroupAchivement: (elt) => {
    return genshindb.achievementgroups(elt);
  },

  getAllAchivementNames: () => {
    return genshindb.achievements('name', { matchCategories: true });
  },

  /***** Panoramas *****/
  getAllGeographiesNames: () => {
    return genshindb.geographies('name', { matchCategories: true });
  },

  findGeographie: (elt) => {
    return genshindb.geographies(elt);
  },

  /***** Thèmes *****/
  getAllNamecardsNames: () => {
    return genshindb.namecards('name', { matchCategories: true });
  },

  findNamecard: (elt) => {
    return genshindb.namecards(elt);
  },

  /***** Ailes *****/
  getAllWindglidersNames: () => {
    return genshindb.windgliders('name', { matchCategories: true });
  },
}