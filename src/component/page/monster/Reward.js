import React, { useEffect, useState } from 'react';

import { Image, Space, Title, Tooltip } from '@mantine/core';

import { findImage } from '../../../utils/finder/findImage';

const genshindb = require('genshin-db');

const Reward = ({ select }) => {
  const [reward, setReward] = useState([])

  useEffect(() => {
    let rewardEn = genshindb.enemies(select.link).rewardpreview;
    rewardEn.map((elt, index) => {
      let mat = genshindb.materials(elt.name, { resultLanguage: "French" });
      let art = genshindb.artifacts(elt.name, { resultLanguage: "French" });

      let image = mat ? mat.images.nameicon : undefined;
      if (!image) {
        let imgArt = art.images;
        image = imgArt.flower ? imgArt.flower : imgArt.circlet
      }
      rewardEn[index]["img"] = image;

      let rarity = mat ?
        mat.rarity : elt.rarity ?
          elt.rarity : undefined;
      rewardEn[index]["rarity"] = rarity;
      
      let nameFr = mat ? mat.name : art.name;
      rewardEn[index]["fr"] = nameFr;

      return '';
    })

    setReward(rewardEn);
  }, [select])

  console.log(reward);
  return (
    <div className='monster_reward'>
      <Title order={3}>
        Récompenses
      </Title>
      <Space h='md' />

      <div className='reward_container'>
        {
          reward.map((elt, index) => {
            let src = elt.img.startsWith("https") ? elt.img : findImage(elt.img);
            

            return (
              <Tooltip key={elt.name + '_' + index}
                label={elt.fr} position="top"
                transition="slide-up"
              >
                <Image fit='contain'
                  className={`img_reward rarity_${elt.rarity}`}
                  width={75} height={75}
                  src={src} />
              </Tooltip>
            );
          })
        }
      </div>
    </div>
  );
};

export default Reward;