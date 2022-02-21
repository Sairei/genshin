import React from 'react';

import BaseStats from './BaseStats';

const AdvancementTab = ({ name }) => {
  return (
    <div className='advancement_container'>
      <BaseStats name={name} />
    </div>
  );
};

export default AdvancementTab;