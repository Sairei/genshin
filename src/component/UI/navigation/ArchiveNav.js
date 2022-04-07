import React from 'react';

import { Link } from 'react-router-dom';
import { Space } from '@mantine/core';

const ArchiveNav = () => {
  return (
    <ul className='sub_list_items'>
      <Space h="sm" />

      <li>
        <Link to="/archive/geographies" className="link">
          Panoramas
        </Link>
      </li>
    </ul>
  );
};

export default ArchiveNav;