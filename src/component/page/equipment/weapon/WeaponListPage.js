import React, { useEffect, useState } from 'react';

import { useMediaQuery } from '@mantine/hooks';
import { Tabs } from '@mantine/core';

import { categorie } from '../../../../utils/categorie/categorie';
import { ConvertFR } from '../../../../utils/categorie/convertByLang';
import WeaponsByType from './WeaponsByType';

const genshindb = require('genshin-db');

const WeaponListPage = () => {
  const matches = useMediaQuery('(max-width: 720px)');

  const [weapons, setWeapons] = useState([]);
  useEffect(() => {
    let list = {};

    genshindb.weapons('name', { matchCategories: true }).map((elt) => {
      let o = genshindb.weapons(elt, { resultLanguage: 'French' });
      o['link'] = elt;

      let enType = genshindb.weapons(elt).weapontype.toLocaleLowerCase();
      if (!list[enType]) {
        list[enType] = []
      }
      list[enType].push(o);

      return '';
    });

    setWeapons(list);
  }, []);

  console.log(weapons);

  return (
    <div className='weapon_container'>
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
                <WeaponsByType weapons={weapons[elt]} />
              </Tabs.Tab>
            );
          })
        }
      </Tabs>
    </div>
  );
};

export default WeaponListPage;