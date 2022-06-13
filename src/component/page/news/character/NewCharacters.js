import React, { useEffect, useState } from 'react';

import { sortByVersion } from '../../../../utils/sort/sortByVersion';

import { GenshinDB } from '../../../../utils/database/genshinbd';

const NewCharacters = ({ version }) => {
  const [characterList, setList] = useState([]);
  
  useEffect(() => {
    let list = [];
    GenshinDB.getAllTalentsNames().forEach(name => {
      list.push(GenshinDB.findTalents(name));
    });
    setList(sortByVersion(list, version));
  }, [])

  console.log(characterList);
  return (
    <div className='characters_version'>

    </div>
  );
};

export default NewCharacters;