import React, { useEffect, useState } from 'react';

import { Slider, Space, Table, Title } from '@mantine/core';

const BaseStats = ({ select }) => {
  const [lvl, setLvl] = useState(1);
  const [stats, setStats] = useState({ attack: 0, defense: 0, hp: 0 });

  useEffect(() => {
    let s = select.stats(lvl);
    setStats(s);
  }, [select, lvl])

  return (
    <div className='monster_stats'>
      <Title order={3} className='tabs_sub_title'>
        Statistiques de base par niveau
      </Title>
      <Space h='md' />

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
          min={1} max={100}
          label={null}
          value={lvl} onChange={setLvl} />
      </div>
    </div>
  );
};

export default BaseStats;