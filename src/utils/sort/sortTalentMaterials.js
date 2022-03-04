export const sortTalent = (sourceTalentList) => {
  let regionTalentList = {};
  let talentList = {};

  // Init
  sourceTalentList.map((o) => {
    regionTalentList[o.region] = [];
    talentList[o.region] = {}
    return '';
  })

  // Tri par region
  sourceTalentList.map((talent) => {
    regionTalentList[talent.region].push(talent);
    talentList[talent.region][talent.dropdomain] = []
    return '';
  })

  // Tri par donjon
  Object.entries(regionTalentList).map((entry) => {
    let region = entry[0];
    let talents = entry[1]
    talents.map((talent) => {
      talentList[region][talent.dropdomain].push(talent)
      return '';
    })
    return '';
  })

  return talentList;
}