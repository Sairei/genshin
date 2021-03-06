import { Fragment } from "react";

export const convertInfo = (info) => {
  let split = info.split(/\n/g);

  let res = split.map((elt, index) => {
    if (!elt) {
      return <br key={index} />
    }

    let element = elt;
    while (element.includes('**')) {
      element = element.replace('**', ' $ <b>')
      element = element.replace('**', '</b> $ ')
    }
    
    let eltSplit = [];
    element.split(" $ ").forEach((e, index) => {
      let tmp = e;
      if (tmp.startsWith("<b>")) {
        tmp = tmp.replace('<b>', '')
        tmp = tmp.replace('</b>', '')

        tmp = <b>{tmp}</b>
      }

      eltSplit.push(<Fragment key={index}>{tmp}</Fragment> );
    })

    return (
      <div key={index}>
        {eltSplit}
      </div>
    );
  })

  return res;
};