import { Space } from '@mantine/core';
import React from 'react';

import ItemPassive from './ItemPassive';

const PassiveTab = ({ talent }) => {
  if (!talent) {
    return (
      <div>Traitement particulier à faire</div>
    );
  }

  const passive1 = talent.passive1;
  const passive2 = talent.passive2;
  const passive3 = talent.passive3;
  const passive4 = talent.passive4;

  console.log(talent);

  return (
    <div className='passive_container'>
      <ItemPassive passive={passive1}
        image={talent.images.passive1} />

      <Space h="xl" />

      <ItemPassive passive={passive2}
        image={talent.images.passive2} />

      {
        passive3 &&
        <>
          <Space h="xl" />
          <ItemPassive passive={passive3}
            image={talent.images.passive3} />
        </>
      }

      {
        passive4 &&
        <>
          <Space h="xl" />
          <ItemPassive passive={passive4}
            image={talent.images.passive4} />
        </>
      }
    </div>
  );
};

export default PassiveTab;