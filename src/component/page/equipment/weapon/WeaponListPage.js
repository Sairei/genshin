import React, { useEffect, useState } from 'react';

import { useMediaQuery } from '@mantine/hooks';
import { Tabs } from '@mantine/core';

import { categorie } from '../../../../utils/categorie/categorie';
import { ConvertFR } from '../../../../utils/categorie/convertByLang';
import WeaponsByType from './WeaponsByType';

import { GenshinDB } from '../../../../utils/database/genshinbd';

const WeaponListPage = () => {
  const matches = useMediaQuery('(max-width: 720px)');

  const [weapons, setWeapons] = useState([]);
  useEffect(() => {
    let list = {};

    GenshinDB.getAllWeaponsNames().map((elt) => {
      let o = GenshinDB.findWeapon(elt);

      let weaponType = o.weapontype;
      if (!list[weaponType]) {
        list[weaponType] = []
      }
      list[weaponType].push(o);

      return '';
    });

    setWeapons(list);
  }, []);

  return (
    <div className='weapon_list_container'>
      <Tabs
        classNames={{
          tabsListWrapper: "weapon_tabs_list",
          tabControl: "control_tab",
          body: "weapon_tabs_body"
        }}
        grow={matches}
        orientation={matches ? "horizontal" : "vertical"} >
        {
          categorie.weapontype.map((elt) => {
            return (
              <Tabs.Tab key={elt} label={ConvertFR.weaponLabel(elt)} >
                <WeaponsByType weapons={weapons[ConvertFR.weaponLabel(elt)]} />
              </Tabs.Tab>
            );
          })
        }
      </Tabs>
    </div>
  );
};

export default WeaponListPage;