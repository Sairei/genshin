import React, { useEffect, useState } from 'react';

import { Card, Image } from '@mantine/core';

import { findImage } from '../../../../utils/finder/findImage';

import { GenshinDB } from '../../../../utils/database/genshinbd';

const GroupAchievementPage = () => {
  const [achievementgroups, setList] = useState([]);

  useEffect(() => {
    let list = [];

    GenshinDB.getAllGroupAchievementNames().map((elt) => {
      let obj = GenshinDB.findGroupAchievement(elt)
      list.push(obj);

      return ''
    });

    setList(list);
  }, [])
console.log(achievementgroups);
  return (
    <div className='achievement_groups_container'>
      {
        achievementgroups
          .sort((a, b) => a.sortorder - b.sortorder)
          .map((elt) => {
            return (
              <Card key={elt.name}

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