import { Space } from '@mantine/core';
import React, { Fragment, useEffect, useState } from 'react';

import { categorie } from '../../../../utils/categorie/categorie';
import SpecialtyRegion from './SpecialtyRegion';

import { GenshinDB } from '../../../../utils/database/genshinbd';

const LocalSpecialtyPage = () => {
  const [specialtyList, setList] = useState([]);

  useEffect(() => {
    let list = {};
    categorie.materialtype.local_specialty.map((val) => {
      list[val] = []

      GenshinDB.findMaterialsByCategorie(val).map((m) => {
        list[val].push(GenshinDB.findMaterials(m));
        return '';
      })
      return '';
    })
    setList(list);
  }, [])

  return (
    <div className='local_specialty_container'>
      {
        Object.entries(specialtyList).filter(e => {
          return e[1].length > 0
        })
          .map((entry, index) => {
            let list = entry[1];

            return (
              <Fragment key={entry[0]} >
                {
                  index !== 0 &&
                  <>
                    <Space h="xl" />
                    <hr />
                    <Space h="xl" />
                  </>
                }

                <SpecialtyRegion key={entry[0]} 
                  name={entry[0]} items={list} />
              </Fragment>
            );
          })
      }
    </div>
  );
};

export default LocalSpecialtyPage;