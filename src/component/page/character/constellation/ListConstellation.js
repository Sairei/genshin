import React from 'react';

import { Space } from '@mantine/core';

import ItemConstellation from './ItemConstellation';

const ListConstellation = ({ constellations }) => {
  const c1 = constellations.c1;
  const c2 = constellations.c2;
  const c3 = constellations.c3;
  const c4 = constellations.c4;
  const c5 = constellations.c5;
  const c6 = constellations.c6;

  return (
    <div className='constellation_list_container'>
      <ItemConstellation constellation={c1}
        img={constellations.images.c1} />

      <Space h='xl' />
      <hr />
      <Space h="md" />

      <ItemConstellation constellation={c2}
        img={constellations.images.c2} />

      <Space h='xl' />
      <hr />
      <Space h="md" />

      <ItemConstellation constellation={c3}
        img={constellations.images.c3} />

      <Space h='xl' />
      <hr />
      <Space h="md" />

      <ItemConstellation constellation={c4}
        img={constellations.images.c4} />

      <Space h='xl' />
      <hr />
      <Space h="md" />

      <ItemConstellation constellation={c5}
        img={constellations.images.c5} />

      <Space h='xl' />
      <hr />
      <Space h="md" />

      <ItemConstellation constellation={c6}
        img={constellations.images.c6} />
    </div>
  );
};

export default ListConstellation;