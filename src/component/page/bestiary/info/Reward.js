import React, { useEffect, useState } from 'react';

import { Image, Title } from '@mantine/core';
import { findImage } from '../../../../utils/finder/findImage';

const genshindb = require('genshin-db');

const Reward = ({ select }) => {
  const [reward, setReward] = useState([])

  useEffect(() => {
    let rewardEn = genshindb.enemies(select.link).rewardpreview;
    rewardEn.map((elt, index) => {
      let mat = genshindb.materials(elt.name);
      let art = genshindb.artifacts(elt.name);

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

      return '';
    })

    setReward(rewardEn);
  }, [select])

  return (
    <div className='monster_reward'>
      <Title order={4}>
        Récompenses
      </Title>

      <div className='reward_container'>
        {
          reward.map((elt, index) => {
            let src = elt.img.startsWith("https") ? elt.img : findImage(elt.img);

            return (
              <Image key={elt.name + '_' + index}
                className={`img_reward rarity_${elt.rarity}`}
                fit='contain'
                width={40} height={40}
                src={src} />
            );
          })
        }
      </div>
    </div>
  );
};

export default Reward;