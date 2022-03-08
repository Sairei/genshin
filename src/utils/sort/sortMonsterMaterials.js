export const sortMonsterMaterials = (sourceList) => {
  let filterList = sourceList.filter((e) => {
    return e.rewardpreview.length > 0;
  })

  let list = {}
  filterList.map((m) => {
    m.rewardEn.map((r, index) => {
      let name = r.name;
      if (r.rarity) {
        name += "_" + r.rarity;
      }

      if (!list[name]) {
        list[name] = {};
        list[name]["name"] = m.rewardpreview[index]["name"];
        list[name]["monsters"] = [];
      }
      if (r.rarity) {
        list[name]["rarity"] = r.rarity;
      }

      list[name]["monsters"].push({
        obj: m,
        name: m.name,
        category: m.category,
        image: m.images.nameicon,
        count: m.rewardpreview[index]["count"]
      });

      return '';
    })
    return '';
  })

  return list;
}