import React from 'react';

import { NativeSelect } from '@mantine/core';

import { ConvertFR } from '../../../utils/categorie/convertByLang';
import { categorie } from '../../../utils/categorie/categorie';

const SortElement = () => {
  const eltData = [''];
  categorie.element.map((e) => {
    eltData.push({ value: e, label: ConvertFR.elementLabel(e) });
    return '';
  });

  const weaponData = [''];
  categorie.weapontype.map((w) => {
    weaponData.push({ value: w, label: ConvertFR.weaponLabel(w) });
    return '';
  });

  const regionData = [''];
  categorie.region.map((r) => {
    regionData.push({ value: r, label: ConvertFR.regionLabel(r) });
    return '';
  });

  const genderData = [''];
  categorie.gender.map((g) => {
    genderData.push({ value: g, label: ConvertFR.genderLabel(g) });
    return '';
  });

  return (
    <div className='character_list_filter_container'>
      <NativeSelect
        disabled
        data={eltData}
        label="Element" />

      <NativeSelect
        disabled
        data={weaponData}
        label="Arme" />

      <NativeSelect
        disabled
        data={regionData}
        label="Région" />

      <NativeSelect
        disabled
        data={genderData}
        label="Genre" />
    </div>
  );
};

export default SortElement;