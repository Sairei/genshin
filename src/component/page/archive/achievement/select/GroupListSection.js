import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Group, Image, ScrollArea, Stack } from '@mantine/core';

import { findImage } from '../../../../../utils/finder/findImage';

const GroupListSection = ({ select, groups }) => {
  const nav = useNavigate();

  return (
    <ScrollArea className='group_list'>
      <Stack spacing='xs'>

        {
          groups
            .sort((a, b) => a.sortorder - b.sortorder)
            .map((elt) => {
              let selectedClass = '';
              let link = '/archive/achievements/' + elt.name;
              if (elt.name === select) {
                selectedClass = 'select';
                link = '#';
              }

              return (
                <div key={elt.name}
                  onClick={() => nav(link)} >
                  <Group className={`group_item ${selectedClass}`} spacing='md'>
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

export default GroupListSection;