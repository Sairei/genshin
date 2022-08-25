import React, { Fragment, useEffect, useState } from 'react';

import { Space } from '@mantine/core';

import { sortTalent } from '../../../../utils/sort/sortTalentMaterials';
import { categorie } from '../../../../utils/categorie/categorie';
import ByRegion from './ByRegion';

import { GenshinDB } from '../../../../utils/database/genshinbd';

const TalentMaterialPage = () => {
  const [talentLvlUpList, setTalentList] = useState([]);

  useEffect(() => {
    let sourceTalentList = [];

    // Récupération des valeurs
    categorie.materialtype.talent_lvl_up.map((val) => {
      GenshinDB.findMaterialsByCategorie(val).map((m) => {
        let obj = GenshinDB.findMaterials(m);

        // Evenement (A traiter plus tard)
        if (!obj.dropdomain) {
          return '';
        }
        let domain = GenshinDB.findDomain(obj.dropdomain.split(": ")[1]);

        obj['region'] = domain.region;
        obj['days'] = domain.daysofweek;
        sourceTalentList.push(obj)

        return '';
      })
      return '';
    })

    setTalentList(sortTalent(sourceTalentList));
    console.log(sourceTalentList);
  }, [])

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