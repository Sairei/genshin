import React from 'react';

import { Space } from '@mantine/core';

import Costs from './Costs';
import ListSkill from './ListSkill';

const SkillTab = ({ talent, name }) => {
  if (!talent) {
    return (
      <div>Traitement particulier à faire</div>
    );
  }
  
  return (
    <div className='skill_container'>
      <ListSkill talent={talent} />

      <Space h="xl" />
      <Space h="xl" />

      <Costs talent={talent} name={name} />
    </div>
  );
};

export default SkillTab;