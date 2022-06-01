import React, { useEffect, useState } from 'react';

import { Image, Title } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import { findImage } from '../../../../../utils/finder/findImage';
import { convertTextWithGender } from '../../../../../utils/converter/convertTextWithGender';

import { GenshinDB } from '../../../../../utils/database/genshinbd';

const Achievement = ({ elt }) => {
  const [rewardImg, setImg] = useState({})

  useEffect(() => {
    let mat = GenshinDB.findMaterials(elt.stage1.reward.name);
    if (mat) {
      setImg(mat.images);
    }
  }, [elt])
  console.log(rewardImg);

  return (
    <div className='achievement_item'>
      <Title order={3}>
        {convertTextWithGender(elt.name)}
      </Title>

      <div className='stage_1'>
        {elt.stage1.description}

        <div className='reward'>
          {`${elt.stage1.reward.count} x \u00a0`}

          <Image
            width={15}
            src={findImage(rewardImg.nameicon)} />
        </div>
      </div>

      {
        elt.stage2 &&
        <div className='stage_2'>
          <div>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            {`\u00a0 ${elt.stage2.description}`}
          </div>

          <div className='reward'>
            {`${elt.stage2.reward.count} x \u00a0`}

            <Image
              width={15}
              src={findImage(rewardImg.nameicon)} />
          </div>
        </div>
      }

      {
        elt.stage3 &&
        <div className='stage_3'>
          <div>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            {`\u00a0 ${elt.stage3.description}`}
          </div>

          <div className='reward'>
            {`${elt.stage3.reward.count} x \u00a0`}

            <Image
              width={15}
              src={findImage(rewardImg.nameicon)} />
          </div>
        </div>
      }
    </div>
  );
};

export default Achievement;