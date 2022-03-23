import React from 'react';

import { Link } from 'react-router-dom';

const EquipmentPage = () => {
  return (
    <div className='equipment_main_container'>
      <Link to='/equipment/weapon' >
        <div>
          Armes
        </div>
      </Link>

      <div className='vertical_separator'></div>

      <Link to='/equipment/artifact' >
        <div>
          Artefact
        </div>
      </Link>
    </div>
  );
};

export default EquipmentPage;