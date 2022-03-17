/** @param text le texte à trnasformer **/
/** @param gender le genre choisi (male / female) **/

export const convertTextWithGender = (text, gender) => {
  if (!gender) {
    gender = "Male";
  }
  let characterGender = gender[0].toUpperCase();

  let tmpSplit = text.split(/[{}]/)

  if (tmpSplit.length > 1) {
    let res = "";
    tmpSplit.map((tmp, index) => {
      if (tmp.startsWith('#')) {
        res += tmp.substring(1);
      }
      else if (tmp.charAt(1) === '#') {
        if (tmp.startsWith(`${characterGender}#`)) {
          res += tmp.substring(2)
        }
      }
      else {
        res += tmp;
      }
      return '';
    })
    return res;
  }
  else {
    return text;
  }
}