import React from 'react';

import { Image } from '@mantine/core';
import NewFeature from '../../../UI/NewFeature';

const FourPieceSet = ({ artifacts }) => {
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
                  <NewFeature
                    version={elt.version} size={40} />

                  <Image
                    className={`image rarity_${elt.rarity[elt.rarity.length - 1]}`}
                    width={85} height={85}
                    src={elt.images.flower} />
                </div>

                <div className='description'>

                  <div className='name'>
                    {elt.name}
                  </div>
                  <div className='description'>
                    <b>{`2pc : `}</b> {elt['2pc']}
                  </div>
                  <div className='description'>
                    <b>{`4pc : `}</b> {elt['4pc']}
                  </div>
                </div>
              </div>
            );
          })
      }
    </div>
  );
};

export default FourPieceSet;