import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { Card, Image } from '@mantine/core';

import { findImage } from '../../../../utils/finder/findImage';

import { GenshinDB } from '../../../../utils/database/genshinbd';

const GroupAchievementPage = () => {
  const nav = useNavigate()
  const [achievementgroups, setList] = useState([]);

  useEffect(() => {
    let list = [];

    let namesList = GenshinDB.getAllGroupAchievementNames();
    (namesList ? namesList : [])
      .map((elt) => {
        let obj = GenshinDB.findGroupAchievement(elt)
        list.push(obj);

        return ''
      });
      
    setList(list);
  }, [])

  return (
    <div className='achievement_groups_container'>
      {
        achievementgroups
          .sort((a, b) => a.sortorder - b.sortorder)
          .map((elt) => {
            return (
              <Card key={elt.name}
                onClick={() => nav(`/archive/achievements/${elt.name}`)}
                className="achievement_groups_card" shadow >

                <Card.Section className='img_name'>
                  <div className='img'>
                    <Image
                      src={findImage(elt.images.nameicon)}
                      fit='contain'
                      width={250}
                    />
                  </div>

                  <p>{elt.name}</p>
                </Card.Section>

              </Card>
            );
          })
      }
    </div>
  );
};

export default GroupAchievementPage;