import React, { Fragment } from 'react';

import { Space, Title } from '@mantine/core';

import ByDomain from './ByDomain';

const ByDay = ({ materials }) => {
  return (
    <div className='ascent_material_region' >
      {/* <Title order={1} className="region_title" >
        {materials.get(0)}
      </Title>

      {
        Object.entries(materials).map((entry) => {
          return (
            <Fragment key={entry[0]} >
              <Space h='md' />

              <ByDomain key={entry[0]}
                domain={entry[0]}
                materials={entry[1]} />
            </Fragment>
          );
        })
      } */}
    </div>
  );
};

export default ByDay;