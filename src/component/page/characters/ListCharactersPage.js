import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { Space } from '@mantine/core';

import { simplifyText } from '../../../utils/converter/simplifyElementText';
import CharacterCard from './CharacterCard';
import SortElement from './SortElement';

import { GenshinDB } from '../../../utils/database/genshinbd'; 

const ListCharactersPage = () => {
  const [caracterList, setList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  
  useEffect(() => {
    let list = [];
    GenshinDB.getAllCharactersNames().forEach(name => {
      let c = GenshinDB.findCharacter(name);
      
      let obj = {};
      obj['name'] = name;
      obj['elt'] = simplifyText(c.element !== "None" ? c.element : 'adaptive');
      obj['weapon'] = simplifyText(c.weapontype);
      obj['region'] = simplifyText(c.region);
      obj['rarity'] = simplifyText(c.rarity);
      obj['gender'] = simplifyText(c.gender);
      
      list.push(obj);
    });
    setList(list);
    setFilterList(list);
  }, [])
  
  const elementValue = useSelector((state) => state.element);
  const weaponValue = useSelector((state) => state.weapon);
  const regionValue = useSelector((state) => state.region);
  const genderValue = useSelector((state) => state.gender);
  useEffect(() => {
    let l = caracterList;

    if (elementValue) {
      l = l.filter((e) => {
        return e.elt === simplifyText(elementValue);
      })
    }

    if (weaponValue) {
      l = l.filter((e) => {
        return e.weapon === simplifyText(weaponValue);
      })
    }

    if (regionValue) {
      l = l.filter((e) => {
        return e.region === simplifyText(regionValue);
      })
    }

    if (genderValue) {
      l = l.filter((e) => {
        return e.gender === simplifyText(genderValue);
      })
    }

    setFilterList(l);
  }, [caracterList, elementValue, weaponValue, regionValue, genderValue]);
  
  return (
    <div className='character_list_container'>
      <SortElement />

      <Space h='xl' />

      <div className='list_characters'>
        <ul>
          {
            filterList.map(character => {
              let e = character.name
              return (
                <li key={e}>
                  <CharacterCard name={e} />
                </li>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default ListCharactersPage;