import React from 'react';

import { Link } from 'react-router-dom';
import { Anchor, Image, Table, Title } from '@mantine/core';

import { ascentLvl } from '../../../../utils/enum/enumAscent';
import { findImage } from '../../../../utils/finder/findImage';
import { simplifyText } from '../../../../utils/converter/simplifyElementText';

const genshindb = require('genshin-db');

const AscentWeapon = ({ weapon }) => {
  if (!weapon) {
    return (
      <div></div>
    );
  }


  const trAscent = Object.entries(weapon.costs).map((val, index) => {
    let en = genshindb.weapons(simplifyText(weapon.link));

    return (
      <tr key={index}>
        <th>
          Ascension
          <br />
          lvl {ascentLvl[index]}
        </th>
        <td>
          {
            val[1].map((item, i) => {
              let enName = en.costs[val[0]][i].name;
              let material = genshindb.materials(enName)
              return (
                <div className='ascent_item' key={`${index}_${i}`}>
                  <Image
                    className='ascent_item_image'
                    src={findImage(material.images.nameicon)}
                    height={30} width={30} />

                  <div className='vertical_align_text'>
                    <div>
                      <Anchor component={Link} to={`/item/${enName}`} >
                        {`${item.name} `}
                      </Anchor>
                      {`x${item.count}`}
                    </div>
                  </div>
                </div>
              )
            })
          }
        </td>
      </tr>
    );
  })

  return (
    <div className='ascent_container'>
      <Title order={3} className='tabs_sub_title'>
        Ascensions
      </Title>

      <div className='ascent_table_container'>
        <Table highlightOnHover
          className='ascent_table'>
          <tbody>
            {trAscent}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AscentWeapon;