import React, { useEffect, useState } from 'react';

import { Space } from '@mantine/core';

import Categories from './_main/Categories';
import SearchAndFilter from './_main/SearchAndFilter';
import MaterialsList from './_main/MaterialsList';

const genshindb = require('genshin-db');

const MaterialsPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [list, setList] = useState([]);
  const [searchList, setSearchListArray] = useState(null);

  useEffect(() => {
    let l = [];
    let enList = genshindb.materials('name', { matchCategories: true });
    enList.map((elt) => {
      let o = genshindb.materials(elt, { resultLanguage: "French" });
      o['link'] = elt;
      
      l.push(o);

      return '';
    })

    setList(l);
  }, []);

  const handleSearchValue = (event) => {
    const value = event.target.value;
    setSearchValue(value);

    console.log(value);
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