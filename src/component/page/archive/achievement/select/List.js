import React from 'react';

const List = ({ list }) => {
  console.log(list);

  return (
    <div className='list'>

      {
        list.map((elt) => {
          return (
            <div key={elt.name}>
              {elt.name}
            </div>
          )
        })
      }

    </div>
  );
};

export default List;