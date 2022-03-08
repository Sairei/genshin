import React, { Fragment, useEffect, useState } from 'react';

import { Space } from '@mantine/core';

import { categorie } from '../../../../utils/categorie/categorie';
import { sortWeapon } from '../../../../utils/sort/sortWeaponMaterials';
import ByRegion from './ByRegion';

const genshindb = require('genshin-db');

const WeaponMaterialPage = () => {
  const [weaponLvlUpList, setWeaponMatList] = useState([]);

  useEffect(() => {
    let sourceWeaponList = [];

    // Récupération des valeurs
    categorie.materialtype.weapon_lvl_up.map((val) => {
      genshindb.materials(val, { matchCategories: true }).map((m) => {
        let enObj = genshindb.materials(m);

        let domain = genshindb.domains(enObj.dropdomain.split(": ")[1], { resultLanguage: 'French' });

        let o = genshindb.materials(m, { resultLanguage: 'French' });
        o['link'] = m;
        o['domainLink'] = enObj.dropdomain;
        o['region'] = domain.region;
        sourceWeaponList.push(o)

        return '';
      });
      return '';
    });

    setWeaponMatList(sortWeapon(sourceWeaponList));
  }, []);

  return (
    <div className='weapon_ascent_material_container'>
      {
        categorie.region.map((region, index) => {
          if (!weaponLvlUpList[region]) {
            console.log(weaponLvlUpList[region]);
            return '';
          }

          return (
            <Fragment key={region}>
              {
                index !== 0 &&
                <>
                  <Space h="xl" />
                  <hr />
                  <Space h="xl" />
                </>
              }

              <ByRegion
                region={region}
                materials={weaponLvlUpList[region]} />

            </Fragment>
          );
        })
      }
    </div>
  );
};

export default WeaponMaterialPage;