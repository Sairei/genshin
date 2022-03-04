import React, { Fragment, useEffect, useState } from 'react';

import { Space } from '@mantine/core';

import { sortTalent } from '../../../../utils/sort/sortTalentMaterials';
import { categorie } from '../../../../utils/categorie/categorie';
import ByRegion from './ByRegion';

const genshindb = require('genshin-db');

const TalentMaterialPage = () => {
  const [talentLvlUpList, setTalentList] = useState([]);

  useEffect(() => {
    let sourceTalentList = [];

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
        o['domainLink'] = enObj.dropdomain;
        o['region'] = domain.region;
        sourceTalentList.push(o)

        return '';
      })
      return '';
    })

    setTalentList(sortTalent(sourceTalentList));
  }, [])

  console.log(talentLvlUpList);

  return (
    <div className='character_ascent_material_container'>
      {
        Object.entries(talentLvlUpList).map((entry, index) => {
          return (
            <Fragment key={entry[0]} >
              {
                index !== 0 &&
                <>
                  <Space h="xl" />
                  <hr />
                  <Space h="xl" />
                </>
              }

              <ByRegion key={entry[0]}
                region={entry[0]}
                materials={entry[1]} />

            </Fragment>
          )
        })
      }
    </div>
  );
};

export default TalentMaterialPage;