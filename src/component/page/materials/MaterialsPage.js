import React, { useEffect, useState } from 'react';

import { Space } from '@mantine/core';

import Categories from './_main/Categories';
import SearchAndFilter from './_main/SearchAndFilter';
import MaterialsList from './_main/MaterialsList';

import { GenshinDB } from '../../../utils/database/genshinbd';

const MaterialsPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [list, setList] = useState([]);
  const [searchList, setSearchListArray] = useState(null);

  useEffect(() => {
    let l = [];
    GenshinDB.getAllMaterialsNames().map((elt) => {
      let m = GenshinDB.findMaterials(elt);
      let index = 0

      if (!l.includes(m)) {
        l.push(m);
      } else {
        let isInclude = l.includes(m);
        let tmp = m;
        while (isInclude) {
          tmp = GenshinDB.findMaterials(elt + " " + index);
          isInclude = l.includes(tmp) && (tmp || index<10);
          if (tmp) {
            m = tmp;
            index++;
          }
        }
        l.push(m);
      }

      return '';
    })

    setList(l);
  }, []);

  const handleSearchValue = (event) => {
    const value = event.target.value;
    setSearchValue(value);

    let searchArr = [];
    if (value.length > 0) {
      searchArr = list.filter(elt => {
        return elt.name.toLowerCase().includes(value.toLowerCase())
      })
    }

    value.length === 0 ?
      setSearchListArray(null) : setSearchListArray(searchArr);
  }

  const materialsArr = searchList === null ? list : searchList;

  return (
    <>
      <Categories />

      <Space h={"xl"} />

      <SearchAndFilter 
        searchValue={searchValue} 
        onSearch={handleSearchValue} />

      <Space h={"xl"} />

      <MaterialsList list={materialsArr} />
    </>
  );
};

export default MaterialsPage;