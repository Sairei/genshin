import React, { Fragment, useEffect, useState } from 'react';

import { Space } from '@mantine/core';

import { categorie } from '../../../../utils/categorie/categorie';
import { sortWeapon } from '../../../../utils/sort/sortWeaponMaterials';
import ByRegion from './ByRegion';

import { GenshinDB } from '../../../../utils/database/genshinbd';

const WeaponMaterialPage = () => {
  const [weaponLvlUpList, setWeaponMatList] = useState([]);

  useEffect(() => {
    let sourceWeaponList = [];

    // Récupération des valeurs
    categorie.materialtype.weapon_lvl_up.map((val) => {
      GenshinDB.findMaterialsByCategorie(val).map((m) => {
        let obj = GenshinDB.findMaterials(m);

        // Erreur
        if (!obj.dropdomain) {
          return '';
        }
        let domain = GenshinDB.findDomain(obj.dropdomain.split(": ")[1]);

        obj['region'] = domain.region;
        sourceWeaponList.push(obj)

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