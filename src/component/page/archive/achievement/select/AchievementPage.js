import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import GroupList from './GroupList';

import { GenshinDB } from '../../../../../utils/database/genshinbd';

const AchievementPage = () => {
  const { name } = useParams();
  const [achievement, setList] = useState();

  useEffect(() => {
    let list = [];

    GenshinDB.getAllAchievementNamesByGroup(name).map((elt) => {
      let obj = GenshinDB.findAchievement(elt);
      list.push(obj);

      return '';
    })
    setList(list);
  }, [name]);
  console.log(achievement);

  return (
    <div className='achievement_container'>
      <GroupList select={name} />
    </div>
  );
};

export default AchievementPage;