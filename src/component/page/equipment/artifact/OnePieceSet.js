import { Image } from '@mantine/core';
import React from 'react';

const OnePieceSet = ({ artifacts }) => {
  if (!artifacts) {
    return (
      <div></div>
    );
  }

  return (
    <div className='artifact_set'>
      {
        artifacts
          .sort((a, b) => {
            if (a.rarity[0] === b.rarity[0]) {
              return a.name.localeCompare(b.name);
            }
            return a.rarity[0] - b.rarity[0];
          })
          .map((elt) => {
            return (
              <div className='set' key={elt.link}>
                <div className='div_image'>
                  <Image
                    fit='contain'
                    className={`image rarity_${elt.rarity[elt.rarity.length - 1]}`}
                    width={85} height={85}
                    src={elt.images.circlet} />
                </div>

                <div className='description'>
                  <div className='name'>
                    {elt.name}
                  </div>
                  <div className='description'>
                    {elt['1pc']}
                  </div>
                </div>
              </div>
            );
          })
      }
    </div>
  );
};

export default OnePieceSet;