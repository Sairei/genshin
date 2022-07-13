import React from 'react';

import { Title } from '@mantine/core';

import ItemsList from './ItemsList';

const NewItems = ({ title, items, finder }) => {
  return (
    <div className='artifacts_version'>
      <Title order={3}>
        { title }
      </Title>

      <ItemsList items={items} finder={finder} />
    </div>
  );
};

export default NewItems;