import React, { useEffect, useState } from 'react';

import { Tabs } from '@mantine/core';

import { categorie } from '../../../../utils/categorie/categorie';
import { ConvertFR } from '../../../../utils/categorie/convertByLang';
import WeaponsByType from './WeaponsByType';

import { GenshinDB } from '../../../../utils/database/genshinbd';

const WeaponListPage = () => {
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
      <Tabs orientation="vertical"
        defaultValue={ConvertFR.weaponLabel(categorie.weapontype[0])}
        classNames={{
          tabsListWrapper: "weapon_tabs_list",
          tabControl: "control_tab",
          panel: "weapon_tabs_body"
        }}>
          <Tabs.List>
            {
              categorie.weapontype.map((elt) => {
                return (
                  <Tabs.Tab key={elt} value={ConvertFR.weaponLabel(elt)}>{ConvertFR.weaponLabel(elt)}</Tabs.Tab>
                );
              })
            }
          </Tabs.List>
          {
            categorie.weapontype.map((elt) => {
              return (
                <Tabs.Panel key={elt} value={ConvertFR.weaponLabel(elt)} >
                  <WeaponsByType weapons={weapons[ConvertFR.weaponLabel(elt)]} />
                </Tabs.Panel>
              );
            })
          }
      </Tabs>
    </div>
  );
};

export default WeaponListPage;