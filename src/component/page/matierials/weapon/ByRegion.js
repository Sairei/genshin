import React, { Fragment } from 'react';

import { Space, Title } from '@mantine/core';

import ByDay from './ByDay';

const ByRegion = ({ region, materials }) => {
  return (
    <div className='ascent_material_region' >
      <Title order={1} className="region_title" >
        {region}
      </Title>

      {
        Object.entries(materials).map((entry) => {
          return (
            <Fragment key={entry[0]} >
              <Space h='md' />

              <ByDay
                materials={entry[1]} />
            </Fragment>
          );
        })
      }
    </div>
  );
};

export default ByRegion;