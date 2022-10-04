import React from 'react';

import { Link } from 'react-router-dom';
import { Anchor, Image, Space, Table, Title } from '@mantine/core';

import { simplifyText } from '../../../../utils/converter/simplifyElementText';
import { findImage } from '../../../../utils/finder/findImage';

const SpecialtyRegion = ({ name, items }) => {
  if (!items || (items.length < 1)) {
    return (
      <div></div>
    );
  }

  const regionName = name.substring(name.indexOf('(') + 1, name.indexOf(')'))

  return (
    <div className='specialty_region'>
      <Title order={1}>
        {items[0].materialtype}
      </Title>

      <Space h='lg' />

      <div className='specialty_table_img'>
        <Table className='specialty_table'>
          <tbody>
            {
              items.map((i) => {
                return (
                  <tr key={i.name}>
                    <td>
                      <Image
                        className='specialty_item_icon'
                        src={findImage(i.images.nameicon)}
                        height={40} width={40}
                        fit='contain' />

                      <div className='vertical_align_text'>
                        <Anchor component={Link} to={`/item/${i.name}`} >
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

        <Image
          className='region_image' width={350}
          src={require(`../../../../assets/images/region/${simplifyText(regionName)}.png`)} />
      </div>
    </div>
  );
};

export default SpecialtyRegion;