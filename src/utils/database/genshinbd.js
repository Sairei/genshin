const genshindb = require('genshin-db');
genshindb.setOptions({
  queryLanguages: ["French"],
  resultLanguage: "French"
});

export const GenshinDB = {
  getAllCharactersNames: () => {
    return genshindb.characters('name', { matchCategories: true });
  },

  findCharacter: (name) => {
    return genshindb.characters(name);
  }
}