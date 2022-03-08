import { simplifyText } from '../converter/simplifyElementText';

export const sortWeapon = (sourceWeaponList) => {
  let regionWeaponList = {}
  let weaponList = {};

  // Init
  sourceWeaponList.map((o) => {
    regionWeaponList[simplifyText(o.region)] = [];
    weaponList[simplifyText(o.region)] = {};
    return '';
  })

  // Tri par region
  sourceWeaponList.map((weapon) => {
    regionWeaponList[simplifyText(weapon.region)].push(weapon);
    weaponList[simplifyText(weapon.region)][weapon.daysofweek[0]] = [];
    return '';
  })

  // Tri par jour
  Object.entries(regionWeaponList).map((entry) => {
    let region = simplifyText(entry[0]);
    let weapons = entry[1];
    weapons.map((weapon) => {
      weaponList[region][weapon.daysofweek[0]].push(weapon);
      return '';
    })
    return '';
  })

  return weaponList;
}