import { genshin_versions } from '../database/version';

export const sortByVersion = (sourceList) => {
  let list = []

  genshin_versions.map(version => {
    list[version.num] = [];
    return '';
  });

  sourceList.map(elt => {
    list[elt.version].push(elt);
    return '';
  })

  return list;
}