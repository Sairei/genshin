import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import GroupList from './GroupList';

import { GenshinDB } from '../../../../../utils/database/genshinbd';
import AchievementList from './AchievementList';

const AchievementPage = () => {
  const { name } = useParams();
  const [oldName, setOldName] = useState("");
  const [achievement, setList] = useState([]);
  const [achievementgroups, setGroupList] = useState([]);
  const [groupReward, setGroupReward] = useState({});

  useEffect(() => {
    let list = [];

    let groupNamesList = GenshinDB.getAllGroupAchievementNames();
    (groupNamesList ? groupNamesList : [])
      .map((elt) => {
        let obj = GenshinDB.findGroupAchievement(elt)
        list.push(obj);

        if (elt === name) {
          setGroupReward(obj.reward ? obj.reward : {});
        }

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
    if (oldName !== name) {
      if (namesList && namesList.length > 0) {
        setOldName(name)
      }
      setList(list);
    }
  }, [name, achievementgroups, oldName])

  if (achievementgroups.length === 0 || achievement === 0) {
    return (
      <div></div>
    );
  }

  // console.log(achievementgroups);
  return (
    <div className='achievement_container'>
      <GroupList select={name} groups={achievementgroups} />

      <AchievementList list={achievement}
        groupReward={groupReward} />
    </div>
  );
};

export default AchievementPage;