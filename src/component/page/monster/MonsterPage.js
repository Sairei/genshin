import React, { useEffect, useState } from 'react';

import { Image, Space, Title } from '@mantine/core';
import { useParams } from 'react-router-dom';

import { findImage } from '../../../utils/finder/findImage';
import { convertInfo } from '../../../utils/converter/convertInfoToHTML';
import BaseStats from './BaseStats';
import Reward from './Reward';
// import Resistances from './Resistances';

const genshindb = require('genshin-db');

const MonsterPage = () => {
  const { name } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    let obj = genshindb.enemies(name, { resultLanguage: "French" });
    obj["link"] = name;

    setData(obj);
  }, [name])

  if (!data) {
    return (
      <div></div>
    );
  }

  return (
    <div className='monster_container'>
      <div className='name_image'>
        <Image fit='contain'
          width={150} height={150}
          src={findImage(data.images.nameicon)} />

        <div className='name vertical_align_text'>
          <Title order={1}>
            {data.name}
          </Title>
        </div>
      </div>

      <div className='separator'>
        <Image
          src={require('../../../assets/images/horizontal_separator.png')} />
      </div>
      <Space h='md' />

      <div className='monster_description'>
        {convertInfo(data.description)}
      </div>

      <Space h='xl' />
      <Space h='md' />

      <BaseStats select={data} />

      {/* TODO
      <Space h='xl' />
      <Space h='md' />
      
      <Resistances select={data} /> */}

      <Space h='xl' />
      <Space h='md' />

      <Reward select={data} />
    </div>
  );
};

export default MonsterPage;