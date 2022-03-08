import React from 'react';

import { Image, Table, Title } from '@mantine/core';

import { findImage } from '../../../../utils/finder/findImage';

const genshindb = require('genshin-db');

const ByDay = ({ materials }) => {
  const date = 
    materials[0].daysofweek[0] + " / " +
    materials[0].daysofweek[1] + " / " +
    materials[0].daysofweek[2]
  const dropDomain = materials[0].dropdomain.split(": ")[1];
  
  let domainImage = genshindb.domains(materials[0].domainLink, { resultLanguage: 'French' }).images.namepic;
  
  return (
    <div className='weapon_material_day' >
      <Table className='weapon_table'>
        <tbody>
          {
            materials.sort((a, b) => a.rarity - b.rarity).map((i) => {
              return (
                <tr key={i.name}>
                  <td>
                    <Image
                      className='weapon_item_icon'
                      src={findImage(i.images.nameicon)}
                      height={40}
                      fit='contain' />

                    <div className='vertical_align_text'>
                      {i.name}
                    </div>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </Table>

      <div className='domain_image_name' >
        <Title order={3} className='domain_title' >
          {dropDomain}
        </Title>
        <Title order={4} className='domain_title' >
          {date}
        </Title>

        <Image
          src={findImage(domainImage)} 
          height={300} />
      </div>
    </div>
  );
};

export default ByDay;