import React from 'react';
import { GenshinDB } from '../../../utils/database/genshinbd';

import NewCharacters from './character/NewCharacters';
import NewItems from './item/NewItems';

const VersionContent = ({ characterList, artifactList, recipeList, enemiesList, bestiaryList }) => {
  return (
    <div className='version_content'>
        <NewCharacters characters={characterList} />

        {
          (artifactList && artifactList.length > 0) &&
          <NewItems title="Artefacts" items={artifactList}
            finder={GenshinDB.findArtifact} />
        }

        {
          (recipeList && recipeList.length > 0) &&
          <NewItems title="Recettes" items={recipeList} 
            rarity={true} finder={GenshinDB.findFood} />
        }

        {
          (enemiesList && enemiesList.length > 0) &&
          <NewItems title="Enemies" items={enemiesList} 
            finder={GenshinDB.findEnemies} />
        }

        {
          (bestiaryList && bestiaryList.length > 0) &&
          <NewItems title="Bestiaire" items={bestiaryList} 
            finder={GenshinDB.findAnimals} />
        }
      </div>
  );
};

export default VersionContent;