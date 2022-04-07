import React, { useEffect, useState } from 'react';

import { Space, Switch } from '@mantine/core';

import List from './List';
import Reward from './Reward';

const AchievementList = ({ list, groupReward }) => {
  const [hidden, setHidden] = useState(false);
  const [filterList, setList] = useState([]);

  useEffect(() => {
    let tmp = list.filter((e) => {
      if (!e.ishidden) {
        return true;
      }

      return e.ishidden === hidden;
    })

    setList(tmp);
  }, [list, hidden])

  if (!list || !groupReward) {
    return (
      <div></div>
    )
  }

  return (
    <div className='achievement_list'>
      <Switch
        checked={hidden} 
        onChange={(event) => setHidden(event.currentTarget.checked)}
        label="Afficher les succès cachés"
      />

      <Space h='lg'/>

      <Reward reward={groupReward} />

      <List list={filterList} />
    </div>
  );
};

export default AchievementList;