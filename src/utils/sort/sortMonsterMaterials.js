import { categorie } from '../categorie/categorie';

const genshindb = require('genshin-db');

export const sortMonsterMaterials = (sourceList) => {
  let material = {};
  material["exp"] = [];
  material["mora"] = [];
  material["cristal"] = [];
  material["artifact"] = [];
  material["materials"] = [];
  material["others"] = [];

  let filterList = sourceList.filter((e) => {
    return e.rewardpreview.length > 0;
  })

  let list = {}
  filterList.map((m) => {
    m.rewardpreview.map((r, index) => {
      let name = r.name;

      if (!list[name]) {
        list[name] = {};
        list[name]["name"] = m.rewardpreview[index]["name"];
        list[name]["monsters"] = [];
      }

      let o = {
        obj: m,
        name: m.name,
        category: m.category,
        image: m.images.nameicon,
        count: m.rewardpreview[index]["count"]
      }

      if (list[name]["monsters"].findIndex(obj => obj.name === o.name) === -1) {
        list[name]["monsters"].push(o);
      }

      return '';
    })
    return '';
  })

  Object.entries(list).map((entry) => {
    let key = entry[0];
    let values = entry[1];
    values.monsters.sort((a, b) => { return a["name"].localeCompare(b["name"]) });

    let mat = genshindb.materials(key);
    let art = genshindb.artifacts(key.split("_")[0]);
    
    if (key.toLocaleLowerCase().includes("exp")) {
      material["exp"].push({ name: key, img: mat.images.nameicon, values: values });
    } 
    else if (key.toLocaleLowerCase().includes("mora")) {
      material["mora"].push({ name: key, img: mat.images.nameicon, values: values });
    } 
    else if (art) {
      material["artifact"].push({ name: key, img: art.images, rarity: art.rarity, values: values });
    }
    else if (categorie.cristal.some(v => key.toLocaleLowerCase().includes(v))) {
      material["cristal"].push({ name: key, rarity: mat.rarity, img: mat.images.nameicon, values: values });
    }
    else if (!mat.rarity) {
      material['others'].push({ name: key, rarity: mat.rarity, img: mat.images.nameicon, values: values });
    }
    else {
      material['materials'].push({ name: key, rarity: mat.rarity, img: mat.images.nameicon, values: values });
    }

    return '';
  })

  return material;
}