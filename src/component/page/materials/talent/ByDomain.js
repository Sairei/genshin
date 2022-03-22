import React from 'react';

import { Link } from 'react-router-dom';
import { Anchor, Image, Table, Title } from '@mantine/core';

import { findImage } from '../../../../utils/finder/findImage';
import CharactersListByDomain from './CharactersListByDomain';

const genshindb = require('genshin-db');

const ByDomain = ({ domain, materials }) => {
  let domainImage = genshindb.domains(materials[0].domainLink, { resultLanguage: 'French' }).images.namepic;

  const date =
    materials[0].daysofweek[0] + " / " +
    materials[0].daysofweek[1] + " / " +
    materials[0].daysofweek[2]

  return (
    <div>
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
                        <Anchor component={Link} to={`/item/${i.link}`} >
                          {i.name}
                        </Anchor>
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
          <Title order={4} className='domain_title' >
            {date}
          </Title>

          <div>
            <Image
              src={findImage(domainImage)}
              width={350} />
          </div>
        </div>
      </div>

      <CharactersListByDomain
        materials={materials} />
    </div>
  );
};

export default ByDomain;