import React from 'react';

import { Space, Title } from '@mantine/core';

import { capitalize } from '../../../../utils/converter/capitalizeText';
import ByDay from './ByDay';

const ByRegion = ({ region, materials }) => {
  return (
    <div className='weapon_material_region' >
      <Title order={1} className="region_title" >
        {capitalize(region)}
      </Title>

      <Space h='xl' />

      <ByDay
        materials={materials['Lundi']} />
    
      <Space h='xl' />

      <ByDay
        materials={materials['Mardi']} />
    
      <Space h='xl' />

      <ByDay
        materials={materials['Mercredi']} />
    </div>
  );
};

export default ByRegion;