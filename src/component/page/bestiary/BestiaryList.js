import React, { Fragment } from 'react';

import { ScrollArea, Space } from '@mantine/core';
import ImageList from './ImageList';

const BestiaryList = ({ list }) => {
  if (!list) {
    return (
      <div></div>
    );
  }

  return (
    <ScrollArea className='list_bestiary_container' >
      {
        Object.entries(list).map((entry, index) => {
          let key = entry[0];
          let items = entry[1];

          return (
            <Fragment key={key} >
              {
                index !== 0 &&
                <>
                  <Space h='lg' />
                </>
              }

              <ImageList
                type={key}
                bestiaryList={items} />
            </Fragment>
          )
        })
      }
    </ScrollArea>
  );
};

export default BestiaryList;