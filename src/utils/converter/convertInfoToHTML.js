export const convertInfo = (info) => {
  let split = info.split(/\n/g);

  let res = split.map((elt, index) => {
    let element = elt;
    if (element.startsWith('**')) {
      element = element.replaceAll('**', '')
      element = <b>{element}</b>
    }

    if (elt === "") {
      return <br key={index} />
    }

    return (
      <div key={index}>
        {element}
      </div>
    );
  })

  return res;
};