import React from 'react';

import { findRefinementValueInParam } from '../../../../utils/finder/findRefinementValueInParam';
import { convertInfo } from '../../../../utils/converter/convertInfoToHTML';
import { Title } from '@mantine/core';

const PassifWeapon = ({ weapon }) => {
  if (!weapon) {
    return (
      <div></div>
    );
  }

  let refinementList = [];
  refinementList.push(weapon.r1);
  refinementList.push(weapon.r2);
  refinementList.push(weapon.r3);
  refinementList.push(weapon.r4);
  refinementList.push(weapon.r5);

  return (
    <div className='refinement_container'>
      <Title order={3}>
        Effet par raffinement d'arme
      </Title>

      {
        refinementList.map((elt, index) => {
          return (
            <div className='rafinement' key={index}>
              {
                convertInfo(findRefinementValueInParam(weapon.effect, elt, 1))
              }
            </div>
          )
        })
      }
    </div>
  );
};

export default PassifWeapon;