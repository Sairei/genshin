import React from 'react';

import NewCharacters from './character/NewCharacters';

const VersionContent = ({ characterList }) => {
  return (
    <div className='version_content'>
        <NewCharacters characters={characterList} />

        <div className='artifacts_version'>
          
        </div>

        <div className='recipes_version'>
          
        </div>

        <div className='bestiary_version'>
          
        </div>
      </div>
  );
};

export default VersionContent;