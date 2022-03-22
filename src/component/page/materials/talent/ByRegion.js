import React, { Fragment } from 'react';

import { Space, Title } from '@mantine/core';

import ByDomain from './ByDomain';

const ByRegion = ({ region, materials }) => {
  return (
    <div className='ascent_material_region' >
      <Title order={1} className="region_title" >
        {region}
      </Title>

      {
        Object.entries(materials)
          .sort((a, b) => a[1][0].days[0].localeCompare(b[1][0].days[0]))
          .map((entry) => {
            return (
              <Fragment key={entry[0]} >
                <Space h='xl' />

                <ByDomain key={entry[0]}
                  domain={entry[0]}
                  materials={entry[1]} />
              </Fragment>
            );
          })
      }
    </div>
  );
};

export default ByRegion;