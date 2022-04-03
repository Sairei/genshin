import React from 'react';

import { Image } from '@mantine/core';

import { findImage } from '../../../../utils/finder/findImage';

const GeographieList = ({ list }) => {
  return (
    <div>
      {
        list
          .sort((a, b) => a.sortorder - b.sortorder)
          .map((elt) => {
            return (
              <Image
                width={250}
                fit='contain'
                src={findImage(elt.images.nameimage)}
              />
            )
          })
      }
    </div>
  );
};

export default GeographieList;