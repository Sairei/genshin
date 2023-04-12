import React from 'react';

import { Link } from 'react-router-dom';
import { Anchor, Image } from '@mantine/core';

import { findImage } from '../../../../utils/finder/findImage';
import { convertTextWithGender } from '../../../../utils/converter/convertTextWithGender';

const MaterialsList = ({ list }) => {
  return (
    <div className='materials_list_container'>
      <ul>
        {
          list
            .sort((a, b) => { return a.name.localeCompare(b.name) })
            .map((mat, index) => {
              var name = mat.dupealias ? mat.dupealias : mat.name;

              convertTextWithGender(name);
              return (
                <li key={`${name}_${index}`}>
                  <Image
                    fit='contain'
                    width={40} height={40}
                    src={findImage(mat.images.nameicon)} />

                  <Anchor className='item_link vertical_align_text'
                    component={Link} to={`/item/${convertTextWithGender(name)}`} >
                    {convertTextWithGender(name)}
                  </Anchor>
                </li>
              );
            })
        }
      </ul>
    </div>
  );
};

export default MaterialsList;