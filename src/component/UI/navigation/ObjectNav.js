import React from 'react';

import { Link } from 'react-router-dom';
import { Space } from '@mantine/core';

const ObjectNav = () => {
  return (
    <ul className='sub_list_items'>
      <Space h="sm" />

      <li>
        <Link to="/categorie_items/local_specialty" className="link">
          Spécialités locales
        </Link>
      </li>
      
      <Space h="sm" />

      <li>
        <Link to="/categorie_items/talent" className="link">
          Ascension de talent
        </Link>
      </li>

      <Space h="sm" />

      <li>
        <Link to="/categorie_items/weapon" className="link">
          Ascension d'arme
        </Link>
      </li>

      <Space h="sm" />

      <li>
        <Link to="/categorie_items/monster" className="link">
          Par monstre
        </Link>
      </li>
    </ul>
  );
};

export default ObjectNav;