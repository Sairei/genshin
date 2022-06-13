export const sortByVersion = (sourceList, version) => {
  let list = []

  sourceList.map(elt => {
    if(elt.version === version) {
      list.push(elt);
    }
    return '';
  })

  return list;
}