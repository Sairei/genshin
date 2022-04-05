import React, { useEffect, useState } from 'react';

import { Group, Image, ScrollArea, Stack } from '@mantine/core';

import { GenshinDB } from '../../../../../utils/database/genshinbd';
import { findImage } from '../../../../../utils/finder/findImage';

const GroupList = ({ select }) => {
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