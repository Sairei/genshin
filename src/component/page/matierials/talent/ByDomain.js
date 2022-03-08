import React from 'react';

import { Image, Table, Title } from '@mantine/core';

import { findImage } from '../../../../utils/finder/findImage';

const genshindb = require('genshin-db');

const ByDomain = ({ domain, materials }) => {
  let domainImage = genshindb.domains(materials[0].domainLink, { resultLanguage: 'French' }).images.namepic;

  return (
    <div className='ascent_material_domain' >
      <Table className='talent_table'>
        <tbody>
          {
            materials.sort((a, b) => a.rarity - b.rarity).map((i) => {
              return (
                <tr key={i.name}>
                  <td>
                    <Image
                      className='talent_item_icon'
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
          {domain.split(": ")[1]}
        </Title>

        <Image
          src={findImage(domainImage)} 
          width={350} />
      </div>
    </div>
  );
};

export default ByDomain;