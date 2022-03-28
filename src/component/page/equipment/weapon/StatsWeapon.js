import React, { useEffect, useState } from 'react';

import { Slider, Switch, Table, Title } from '@mantine/core';
import { ascent } from '../../../../utils/enum/enumAscent';
import { convertNumberToSubstat } from '../../../../utils/converter/convertNumberToSubstats';

const StatsWeapon = ({ weaponData, substat }) => {
  const [ascentPlusOne, setAscentPlusOne] = useState(false);
  const [lvl, setLvl] = useState(1);
  const [stats, setStats] = useState({ attack: 0, specialized: 0 });

  useEffect(() => {
    let s = weaponData.stats(lvl);
    if (ascentPlusOne) {
      s = weaponData.stats(lvl, '+');
    }

    setStats(s);
  }, [weaponData, ascentPlusOne, lvl])

  return (
    <div className='base_stats_container'>
      <Title order={3} className='tabs_sub_title'>
        Statistiques de base par niveau
      </Title>

      <div className='tab_and_lvl' >
        <Table className='base_stats_table'>
          <thead>
            <tr>
              <th></th>
              <th>Attaque de base</th>
              {
                stats.specialized.length > 0 &&
                <th>{weaponData.substat}</th>
              }
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>lvl {lvl}</th>
              <td>{Math.round(stats.attack)}</td>
              {
                stats.specialized.length > 0 &&
                <td>{convertNumberToSubstat(substat, stats.specialized)}</td>
              }
            </tr>
          </tbody>
        </Table>

        <div className='base_stats_level'>
          <Slider
            classNames={{
              root: 'base_stats_slider',
              bar: 'base_stats_slider_bar',
              thumb: 'base_stats_slider_pointer',
              mark: 'base_stats_slider_mark'
            }}
            min={1} max={90}
            label={null} marks={ascent}
            value={lvl} onChange={setLvl} />

          <Switch
            classNames={{
              root: 'base_stats_switch',
              input: 'base_stats_switch_input',
              label: 'base_stats_switch_label'
            }}
            checked={ascentPlusOne} onChange={(event) => setAscentPlusOne(event.currentTarget.checked)}
            label="Ascension ?" size="xs"
          />
        </div>
      </div>
    </div>
  );
};

export default StatsWeapon;