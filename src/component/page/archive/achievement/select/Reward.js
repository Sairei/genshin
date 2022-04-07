import React, { useEffect, useState } from 'react';

import { Image } from '@mantine/core';

import { findImage } from '../../../../../utils/finder/findImage';

import { GenshinDB } from '../../../../../utils/database/genshinbd';

const Reward = ({ reward }) => {
  const [rewardImage, setRewardImage] = useState();
  useEffect(() => {
    let namecard = GenshinDB.findNamecard(reward.name);
    if (namecard) {
      setRewardImage(namecard.images.nameicon)
    }
  }, [reward])

  return (
    <>
      {
        reward.name &&
        <div className='group_reward'>
          <Image
            width={124}
            src={findImage(rewardImage)} />

          <p className='text vertical_align_text'>
            Terminez tous les succès suivants pour obtenir le thème
          </p>
        </div>
      }
    </>
  );
};

export default Reward;