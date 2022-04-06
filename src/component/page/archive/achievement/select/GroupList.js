import React, { useEffect, useState } from 'react';

import { Group, Image, ScrollArea, Stack } from '@mantine/core';

import { GenshinDB } from '../../../../../utils/database/genshinbd';
import { findImage } from '../../../../../utils/finder/findImage';

const GroupList = ({ select }) => {
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

    if (achievementgroups.length < 1) {
      setList(list);
    }
  }, [achievementgroups])

  return (
    <ScrollArea className='group_list'>
      <Stack spacing='xs'>

        {
          achievementgroups
            .sort((a, b) => a.sortorder - b.sortorder)
            .map((elt) => {
              return (
                <div>
                  <Group className='group_item' spacing='md'>
                    <Image
                      width={60}
                      src={findImage(elt.images.nameicon)} />

                    <p className='text'>
                      {elt.name}
                    </p>
                  </Group>
                </div>
              );
            })
        }

      </Stack>
    </ScrollArea>
  );
};

export default GroupList;