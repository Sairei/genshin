import React, { useEffect, useState } from 'react';

import { Slider, Switch, Table, Title } from '@mantine/core';

import { ascent } from '../../../../utils/enum/enumAscent';

const genshindb = require('genshin-db');

const BaseStats = ({ name }) => {
  const [ascentPlusOne, setAscentPlusOne] = useState(false);
  const [lvl, setLvl] = useState(1);
  const [stats, setStats] = useState({ attack: 0, defense: 0, hp: 0 });

  useEffect(() => {
    let s = genshindb.characters(name).stats(lvl);
    if(ascentPlusOne) {
      s = genshindb.characters(name).stats(lvl, '+');
    }
    
    setStats(s);
  }, [name, ascentPlusOne, lvl])

  return (
    <div className='base_stats_container'>
      <Title order={2} className='tabs_sub_title'>
        Statistiques de base par niveau
      </Title>

      <Table className='base_stats_table'>
        <thead>
          <tr>
            <th></th>
            <th>Attaque de base</th>
            <th>Défense de base</th>
            <th>PV de base</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>lvl {lvl}</th>
            <td>{Math.round(stats.attack)}</td>
            <td>{Math.round(stats.defense)}</td>
            <td>{Math.round(stats.hp)}</td>
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
  );
};

export default BaseStats;