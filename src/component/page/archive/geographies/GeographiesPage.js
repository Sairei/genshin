import React, { Fragment, useEffect, useState } from 'react';

import { Accordion, Title } from '@mantine/core';

import { categorie } from '../../../../utils/categorie/categorie';
import { simplifyText } from '../../../../utils/converter/simplifyElementText';
import GeographieList from './GeographieList';

import { GenshinDB } from '../../../../utils/database/genshinbd';

const GeographiesPage = () => {
  const [geographies, setList] = useState({});

  useEffect(() => {
    let list = {};

    GenshinDB.getAllGeographiesNames().map((elt) => {
      let obj = GenshinDB.findGeographie(elt)

      let region = simplifyText(obj.region);
      if (!list[region]) {
        list[region] = [];
      }
      list[region].push(obj);

      return ''
    });

    setList(list);
  }, [])

  return (
    <div className='geographies_container'>
      <Accordion multiple>
        {
          categorie.region.map((elt) => {
            let list = geographies[elt];
            if (!list) {
              return (
                <Fragment key={elt} />
              )
            }

            let title =
              <Title order={2} >
                {list[0].region}
              </Title>

            return (
              <Accordion.Item key={elt} label={title} >
                <GeographieList list={list} />
              </Accordion.Item>
            )
          })
        }
      </Accordion>
    </div>
  );
};

export default GeographiesPage;