import React from 'react';

import Achievement from './Achievement';

const List = ({ list }) => {
  console.log(list);

  return (
    <div className='list'>

      {
        list.map((elt) => {
          return (
            <div key={elt.name}>
              <Achievement elt={elt} />
            </div>
          )
        })
      }

    </div>
  );
};

export default List;