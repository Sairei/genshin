import React from 'react';

import { Image } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const MaterialsPage = () => {
  const nav = useNavigate();

  return (
    <div className='materials_list_container'>
      <Image
        src={require('../../../assets/images/items/produits.png')}
        onClick={() => nav()}
        height={150} width={150}
        fit='contain' />

      <Image
        src={require('../../../assets/images/items/ascension_personnages.png')}
        height={150} width={150}
        fit='contain' />

      <Image
        src={require('../../../assets/images/items/ascension_armes.png')}
        height={150} width={150}
        fit='contain' />
    </div>
  );
};

export default MaterialsPage;