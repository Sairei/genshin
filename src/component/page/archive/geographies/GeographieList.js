import React from 'react';

import { Card, Image } from '@mantine/core';

import { findImage } from '../../../../utils/finder/findImage';

const GeographieList = ({ list }) => {
  return (
    <div className='geographie_list'>
      {
        list
          .sort((a, b) => a.sortorder - b.sortorder)
          .map((elt) => {
            return (
              <Card key={elt.name}
                className="geographie_card" shadow >

                <Card.Section className='area_name'>
                  {`| ${elt.area}`}
                </Card.Section>

                <Card.Section className='img_name'>
                  <Image
                    src={findImage(elt.images.nameimage)}
                    fit='contain'
                    height={128}
                  />
                  <p>{elt.name}</p>
                </Card.Section>

              </Card>
            )
          })
      }
    </div>
  );
};

export default GeographieList;