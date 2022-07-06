import React from 'react';

import { Image, Tooltip } from '@mantine/core';

import { GenshinDB } from '../../../../utils/database/genshinbd';

const ArtifactList = ({ artifact }) => {
  if (!artifact) {
    return <></>
  }

  return (
    <div>
      {
        artifact.map((art, index) => {
          let artifactName = art.name;

          let tmp = GenshinDB.findArtifact(artifactName);
          let img = tmp.images.circlet;
          if (tmp['2pc']) {
            img = tmp.images.flower
          }

          return (
            <Tooltip key={index}
            label={artifactName} position="bottom"
            transition="slide-down"
            >
              <Image
                fit='contain'
                className={`new_artifact`}
                width={100} height={100}
                src={img} alt={artifactName}
              />
            </Tooltip>
          )
        })
      }
    </div>
  );
};

export default ArtifactList;