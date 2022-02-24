import React from 'react';

import { Image, Space } from '@mantine/core';

import { findConstellationClassnameByElt } from '../../../../utils/finder/findConstellationBG';
import { findImage } from '../../../../utils/finder/findImage';
import ListConstellation from './ListConstellation';

const ConstellationTab = ({ elt, constellation }) => {
  if (!constellation) {
    return (
      <div>Traitement particulier à faire</div>
    );
  }

  const constellationImg = constellation.images.constellation;

  return (
    <div className='constellation_container'>
      <div className='constellation_background'>
        <Image
          className={`${findConstellationClassnameByElt(elt)}`}
          src={findImage(constellationImg)}
          fit='contain' />
      </div>

      <Space h="xl" />
      <hr />
      <Space h="xl" />

      <ListConstellation
        constellations={constellation} />
    </div>
  );
};

export default ConstellationTab;