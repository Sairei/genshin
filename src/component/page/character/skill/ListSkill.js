import React from 'react';

import { Space } from '@mantine/core';

import ItemSkill from './ItemSkill';

const ListSkill = ({ talent }) => {
  const baseAttack = talent.combat1;
  const skill = talent.combat2;
  const ult = talent.combat3;
  const special = talent.combatsp;
console.log(talent);
  return (
    <div className='skill_list_container'>
      <ItemSkill 
        skill={baseAttack} image={talent.images['combat1']} />

      <Space h="xl" />

      <ItemSkill 
        skill={skill} image={talent.images['combat2']} />

      <Space h="xl" />

      <ItemSkill 
        skill={ult} image={talent.images['combat3']} />

      {
        special &&
        <>
          <Space h="xl" />
          <ItemSkill 
            skill={special} image={talent.images['combatsp']} />
        </>
      }
    </div>
  );
};

export default ListSkill;