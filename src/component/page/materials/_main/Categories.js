import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Image } from '@mantine/core';

const Categories = () => {
  const nav = useNavigate();

  return (
    <div className='materials_categories_container'>
      <Image
        src={require('../../../../assets/images/items/produits.png')}
        onClick={() => nav('/categorie_items/local_specialty')}
        height={150} width={150}
        fit='contain' />

      <Image
        src={require('../../../../assets/images/items/ascension_personnages.png')}
        onClick={() => nav('/categorie_items/talent')}
        height={150} width={150}
        fit='contain' />

      <Image
        src={require('../../../../assets/images/items/ascension_armes.png')}
        onClick={() => nav('/categorie_items/weapon')}
        height={150} width={150}
        fit='contain' />

      <Image
        src={require('../../../../assets/images/items/ressources_monstres.png')}
        onClick={() => nav('/categorie_items/monster')}
        height={150} width={150}
        fit='contain' />

      <Image
        src={require('../../../../assets/images/items/ressources_boss.png')}
        onClick={() => nav('/categorie_items/boss')}
        height={150} width={150}
        fit='contain' />
    </div>
  );
};

export default Categories;