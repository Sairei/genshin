import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { NativeSelect } from '@mantine/core';

import { changeElement, changeGender, changeRegion, changeWeapon } from '../../../router/provider/Dispatcher';
import { ConvertFR } from '../../../utils/categorie/convertByLang';
import { categorie } from '../../../utils/categorie/categorie';

const SortElement = () => {
  const dispatch = useDispatch();

  const eltData = [''];
  categorie.element.map((e) => {
    eltData.push({ value: e, label: ConvertFR.elementLabel(e) });
    return '';
  });
  const elementValue = useSelector((state) => state.element);

  const weaponData = [''];
  categorie.weapontype.map((w) => {
    weaponData.push({ value: w, label: ConvertFR.weaponLabel(w) });
    return '';
  });
  const weaponValue = useSelector((state) => state.weapon);

  const regionData = [''];
  categorie.region.map((r) => {
    regionData.push({ value: r, label: ConvertFR.regionLabel(r) });
    return '';
  });
  const regionValue = useSelector((state) => state.region);

  const genderData = [''];
  categorie.gender.map((g) => {
    genderData.push({ value: g, label: ConvertFR.genderLabel(g) });
    return '';
  });
  const genderValue = useSelector((state) => state.gender);

  return (
    <div className='character_list_filter_container'>
      <NativeSelect
        data={eltData} label="Element"
        value={elementValue}
        onChange={(v) => dispatch(changeElement(v.currentTarget.value))} />

      <NativeSelect
        data={weaponData} label="Arme"
        value={weaponValue}
        onChange={(v) => dispatch(changeWeapon(v.currentTarget.value))} />

      <NativeSelect
        data={regionData} label="Région"
        value={regionValue}
        onChange={(v) => dispatch(changeRegion(v.currentTarget.value))} />

      <NativeSelect
        data={genderData} label="Genre"
        value={genderValue}
        onChange={(v) => dispatch(changeGender(v.currentTarget.value))} />
    </div>
  );
};

export default SortElement;