import React from 'react';

import { Title } from '@mantine/core';

import ItemsList from './ItemsList';

const NewItems = ({ rarity, title, items, finder }) => {
  return (
    <div className='items_version'>
      <Title order={3}>
        { title }
      </Title>

      <ItemsList rarity={rarity} items={items} finder={finder} />
    </div>
  );
};

export default NewItems;