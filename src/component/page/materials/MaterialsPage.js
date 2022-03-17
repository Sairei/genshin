import { Space } from '@mantine/core';
import React from 'react';

import Categories from './_main/Categories';
import MaterialsList from './_main/MaterialsList';

const MaterialsPage = () => {

  return (
    <>
      <Categories />

      <Space h={"xl"} />

      <MaterialsList />
    </>
  );
};

export default MaterialsPage;