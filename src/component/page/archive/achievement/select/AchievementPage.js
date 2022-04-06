import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import GroupList from './GroupList';

import { GenshinDB } from '../../../../../utils/database/genshinbd';

const AchievementPage = () => {
  const { name } = useParams();
  const [achievement, setList] = useState([]);
  const [achievementgroups, setGroupList] = useState([]);

  useEffect(() => {
    let list = [];

    let groupNamesList = GenshinDB.getAllGroupAchievementNames();
    (groupNamesList ? groupNamesList : [])
      .map((elt) => {
        let obj = GenshinDB.findGroupAchievement(elt)
        list.push(obj);

        return ''
      });
    if (achievementgroups.length < 1) {
      setGroupList(list);
    }

    list = [];
    let namesList = GenshinDB.getAllAchievementNamesByGroup(name);
    (namesList ? namesList : [])
      .map((elt) => {
        let obj = GenshinDB.findAchievement(elt);
        list.push(obj);

        return '';
      })
    if (achievement.length < 1) {
      setList(list);
    }
  }, [name, achievementgroups, achievement])

  if (achievementgroups.length === 0 || achievement === 0) {
    return (
      <div></div>
    );
  }

  console.log(achievement);
  return (
    <div className='achievement_container'>
      <GroupList select={name} groups={achievementgroups} />
    </div>
  );
};

export default AchievementPage;