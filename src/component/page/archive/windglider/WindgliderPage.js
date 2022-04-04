import React, { useEffect, useState } from 'react';

import { Card, Image } from '@mantine/core';

import { findImage } from '../../../../utils/finder/findImage';

import { GenshinDB } from '../../../../utils/database/genshinbd';

const WindgliderPage = () => {
  const [windgliders, setList] = useState([]);

  useEffect(() => {
    let list = [];

    GenshinDB.getAllWindglidersNames().map((elt) => {
      let obj = GenshinDB.findWindgliders(elt)
      list.push(obj);

      return ''
    });

    setList(list);
  }, [])
console.log(windgliders);
  return (
    <div className='namecard_container'>
      {
        windgliders
          .sort((a, b) => a.sortorder - b.sortorder)
          .map((elt) => {
            return (
              <Card key={elt.name}
                className="namecard_card" shadow >

                <Card.Section className='img_name'>
                  <div className='img'>
                    <Image
                      src={findImage(elt.images.nameicon)}
                      fit='contain'
                      height={250}
                    />

                    <div className='hover_text vertical_align_text'>
                      {elt.source[0]}
                    </div>
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

export default WindgliderPage;