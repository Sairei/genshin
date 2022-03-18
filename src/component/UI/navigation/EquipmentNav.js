import React from 'react';

import { Link } from 'react-router-dom';
import { Space } from '@mantine/core';

const EquipmentNav = () => {
  return (
    <ul className='sub_list_items'>
      <Space h="sm" />

      <li>
        <Link to="/equipment/weapon" className="link">
          Armes
        </Link>
      </li>

      <Space h="sm" />

      <li>
        <Link to="/equipment/artifact" className="link">
          Artéfacts
        </Link>
      </li>
    </ul>
  );
};

export default EquipmentNav;