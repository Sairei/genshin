import React, { useEffect, useState } from 'react';

import { Image, Space, Title, Tooltip } from '@mantine/core';

import { findImage } from '../../../utils/finder/findImage';

import { GenshinDB } from '../../../utils/database/genshinbd'

const Reward = ({ select }) => {
  const [reward, setReward] = useState([])

  useEffect(() => {
    let rewardTmp = select.rewardpreview;
    select.rewardpreview.map((elt, index) => {
      let mat = GenshinDB.findMaterials(elt.name);
      let art = GenshinDB.findArtifact(elt.name);

      let image = mat ? mat.images.nameicon : undefined;
      if (!image) {
        let imgArt = art.images;
        image = imgArt.flower ? imgArt.flower : imgArt.circlet
      }
      rewardTmp[index]["img"] = image;

      let rarity = mat ?
        mat.rarity : elt.rarity ?
          elt.rarity : undefined;
      rewardTmp[index]["rarity"] = rarity;

      return '';
    })

    setReward(rewardTmp);
  }, [select])

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
                label={elt.name} position="top"
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