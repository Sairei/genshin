import React from 'react';

import { Image } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const MaterialsPage = () => {
  const nav = useNavigate();

  return (
    <div className='materials_list_container'>
      <Image
        src={require('../../../assets/images/items/produits.png')}
        onClick={() => nav('/categorie_items/local_specialty')}
        height={150} width={150}
        fit='contain' />

      <Image
        src={require('../../../assets/images/items/ascension_personnages.png')}
        onClick={() => nav('/categorie_items/talent')}
        height={150} width={150}
        fit='contain' />

      <Image
        src={require('../../../assets/images/items/ascension_armes.png')}
        onClick={() => nav('/categorie_items/weapon')}
        height={150} width={150}
        fit='contain' />
    </div>
  );
};

export default MaterialsPage;