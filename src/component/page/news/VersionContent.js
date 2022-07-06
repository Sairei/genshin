import React from 'react';

import NewCharacters from './character/NewCharacters';
import NewArtifacts from './artefact/NewArtifacts';

const VersionContent = ({ characterList, artifactList }) => {
  return (
    <div className='version_content'>
        <NewCharacters characters={characterList} />

        {
          (artifactList && artifactList.length > 0) &&
          <NewArtifacts artifact={artifactList} />
        }

        <div className='recipes_version'>
          
        </div>

        <div className='bestiary_version'>
          
        </div>
      </div>
  );
};

export default VersionContent;