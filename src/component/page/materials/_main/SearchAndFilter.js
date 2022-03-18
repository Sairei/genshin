import { TextInput } from '@mantine/core';
import React from 'react';

const SearchAndFilter = ({ searchValue, onSearch }) => {
  return (
    <div className='search_material_container'>
      <TextInput
        label="Recherche"
        defaultValue={searchValue}
        onChange={(event) => onSearch(event)} />
    </div>
  );
};

export default SearchAndFilter;