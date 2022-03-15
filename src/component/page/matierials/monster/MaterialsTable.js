import React from 'react';

import { Image, Table } from '@mantine/core';

import { findImage } from '../../../../utils/finder/findImage';

const MaterialsTable = ({ values }) => {
  return (
    <Table className='monster_table'>
      <tbody>
        {
          Object.entries(values.objects).map((elt) => {
            let obj = elt[1];

            return (
              <tr key={obj.name}>
                <td>
                  <Image
                    width={50}
                    src={findImage(obj.img)}
                  />

                  <div className='vertical_align_text'>
                    {obj.name}
                  </div>
                </td>
              </tr>
            );
          })
        }
      </tbody>
    </Table>
  );
};

export default MaterialsTable;