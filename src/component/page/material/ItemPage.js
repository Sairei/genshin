import React from 'react';

import { useParams } from 'react-router-dom';

const genshindb = require('genshin-db');

const ItemPage = () => {
  const { name } = useParams()
  const data = genshindb.materials(name);

  return (
    <div className='item_container'>
      
    </div>
  );
};

export default ItemPage;