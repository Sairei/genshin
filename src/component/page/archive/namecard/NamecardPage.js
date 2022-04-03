import React, { useEffect, useState } from 'react';

import { Card, Image } from '@mantine/core';

import { findImage } from '../../../../utils/finder/findImage';

import { GenshinDB } from '../../../../utils/database/genshinbd';

const NamecardPage = () => {
  const [namecard, setList] = useState([]);

  useEffect(() => {
    let list = [];

    GenshinDB.getAllNamecardsNames().map((elt) => {
      let obj = GenshinDB.findNamecard(elt)
      list.push(obj);

      return ''
    });

    setList(list);
  }, [])

  return (
    <div className='namecard_container'>
      {
        namecard
          .sort((a, b) => a.sortorder - b.sortorder)
          .map((elt) => {
            return (
              <Card key={elt.name}
                className="namecard_card" shadow >

                <Card.Section className='img_name'>
                  <Image
                    src={findImage(elt.images.namebackground)}
                    fit='contain'
                    height={180}
                  />
                  <p>{elt.name}</p>
                </Card.Section>

              </Card>
            );
          })
      }
    </div>
  );
};

export default NamecardPage;