import React from 'react';

import { Title } from '@mantine/core';

import ArtifactList from './ArtifactList';

const NewArtifacts = ({ artifact }) => {
  return (
    <div className='artifacts_version'>
      <Title order={3}>
        Artefacts
      </Title>

      <ArtifactList artifact={artifact} />
    </div>
  );
};

export default NewArtifacts;