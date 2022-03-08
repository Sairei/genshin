import { simplifyText } from '../converter/simplifyElementText';

export const sortWeapon = (sourceWeaponList) => {
  let regionWeaponList = {}
  let dayWeaponList = {};
  let weaponList = {};

  // Init
  sourceWeaponList.map((o) => {
    regionWeaponList[simplifyText(o.region)] = [];
    dayWeaponList[simplifyText(o.region)] = [];
    weaponList[simplifyText(o.region)] = {}
    return '';
  })

  // Tri par region
  sourceWeaponList.map((weapon) => {
    regionWeaponList[simplifyText(weapon.region)].push(weapon);
    dayWeaponList[simplifyText(weapon.region)][weapon.daysofweek[0]] = [];
    weaponList[simplifyText(weapon.region)][weapon.daysofweek[0]] = {}
    return '';
  })

  // Tri par jour
  Object.entries(regionWeaponList).map((entry) => {
    let region = simplifyText(entry[0]);
    let weapons = entry[1];
    weapons.map((weapon) => {
      dayWeaponList[region][weapon.daysofweek[0]].push(weapon);
      weaponList[region][weapon.daysofweek[0]][weapon.dropdomain] = []
      return '';
    })
    return '';
  })

  // Tri par donjon
  Object.entries(dayWeaponList).map((entry) => {
    let region = simplifyText(entry[0]);
    let days = entry[1];
    Object.entries(days).map((dayEntry) => {
      let day = dayEntry[0];
      let weapons = dayEntry[1];
      weapons.map((weapon) => {
        weaponList[region][day][weapon.dropdomain].push(weapon);
        return '';
      })
      return '';
    })
    return '';
  })

  return weaponList;
}