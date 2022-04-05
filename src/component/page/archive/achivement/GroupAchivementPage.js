import React, { useEffect, useState } from 'react';

import { Card, Image } from '@mantine/core';

import { findImage } from '../../../../utils/finder/findImage';

import { GenshinDB } from '../../../../utils/database/genshinbd';

const GroupAchivementPage = () => {
  const [achivementgroups, setList] = useState([]);

  useEffect(() => {
    let list = [];

    GenshinDB.getAllGroupAchivementNames().map((elt) => {
      let obj = GenshinDB.findGroupAchivement(elt)
      list.push(obj);

      return ''
    });

    setList(list);
  }, [])
console.log(achivementgroups);
  return (
    <div className='achivement_container'>
      {
        achivementgroups
          .sort((a, b) => a.sortorder - b.sortorder)
          .map((elt) => {
            return (
              <Card key={elt.name}
                className="achivement_card" shadow >

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

export default GroupAchivementPage;