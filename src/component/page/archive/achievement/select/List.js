import React from 'react';

import Achievement from './Achievement';

const List = ({ list }) => {

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