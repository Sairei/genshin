import React from 'react';

import { Link } from 'react-router-dom';
import { Anchor, Image, Table, Title } from '@mantine/core';

import { findImage } from '../../../../utils/finder/findImage';

import { GenshinDB } from '../../../../utils/database/genshinbd';

const Costs = ({ talent, name }) => {
  if (!talent) {
    return (
      <div></div>
    );
  }
  

  const trCost = Object.entries(talent.costs).map((val, index) => {
    return (
      <tr key={index}>
        <th>
          Skill
          <br />
          {val[0].replace('lvl', 'lvl ')}
        </th>
        <td>
          {
            val[1].map((item, i) => {
              let material = GenshinDB.findMaterials(item.name)
              return (
                <div className='skill_cost_item' key={`${index}_${i}`}>
                  <Image
                    className='skill_cost_item_image'
                    src={findImage(material.images.nameicon)}
                    height={30} width={30} />

                  <div className='vertical_align_text'>
                    <div>
                      <Anchor component={Link} to={`/item/${item.name}`} >
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
    <div className='skill_cost_container'>
      <Title order={2} className='tabs_sub_title'>
        Coût d'amélioration des compétences
      </Title>

      <div className='skill_cost_table_container'>
        <Table highlightOnHover
          className='skill_cost_table'>
          <tbody>
            {trCost}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Costs;