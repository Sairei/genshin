import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Anchor, Image } from '@mantine/core';

import Page from '../../../UI/Page';
import { findImage } from '../../../../utils/finder/findImage';
import { convertTextWithGender } from '../../../../utils/converter/convertTextWithGender';


const nbPerPage = 30;

const MaterialsList = ({ list }) => {
  const [page, onChangePage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [activeRows, setRows] = useState([])

  useEffect(() => {
    var tmp = list.length / nbPerPage;
    setTotalPage((Math.floor(tmp) < tmp)
      ? Math.floor(tmp) + 1
      : Math.floor(tmp));
  }, [list]);

  useEffect(() => {
    const min = (page - 1) * nbPerPage;
    const max = page * nbPerPage;
    setRows(list.slice(min, max));
  }, [page, list]);

  return (
    <div className='materials_list_container'>
      <div className='vertical_align_text'>
        <ul>
          {
            activeRows
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
        
        <Page totalPage={totalPage} onChangePage={onChangePage} />
      </div>
    </div>
  );
};

export default MaterialsList;