import React, { useEffect, useState } from 'react';

import { categorie } from '../../../../utils/categorie/categorie';

const genshindb = require('genshin-db');

const TalentMaterialPage = () => {
  const [talentLvlUpList, setTalentList] = useState([]);

  useEffect(() => {
    let sourceTalentList = [];
    let regionTalentList = {};
    let talentList = {};

    // Récupération des valeurs
    categorie.materialtype.talent_lvl_up.map((val) => {
      genshindb.materials(val, { matchCategories: true }).map((m) => {
        let enObj = genshindb.materials(m);

        // Evenement (A traiter plus tard)
        if (!enObj.dropdomain) {
          return '';
        }

        let domain = genshindb.domains(enObj.dropdomain.split(": ")[1], { resultLanguage: 'French' });

        let o = genshindb.materials(m, { resultLanguage: 'French' });
        o['link'] = m;
        o['region'] = domain.region;
        sourceTalentList.push(o)

        regionTalentList[o.region] = [];
        talentList[o.region] = {};

        return '';
      })
      return '';
    })

    // Tri par region
    sourceTalentList.map((talent) => {
      regionTalentList[talent.region].push(talent);
      talentList[talent.region][talent.dropdomain] = []
      return '';
    })

    // Tri par region
    Object.entries(regionTalentList).map((entry) => {
      let region = entry[0];
      let talents = entry[1]
      talents.map((talent) => {
        talentList[region][talent.dropdomain].push(talent)
        return '';
      })
      return '';
    })

    setTalentList(talentList);
  }, [])

  console.log(talentLvlUpList);

  return (
    <div className='character_ascent_material_container'>
      
    </div>
  );
};

export default TalentMaterialPage;