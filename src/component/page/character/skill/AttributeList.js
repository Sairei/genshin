import React from 'react';

import { findValueInParam } from '../../../../utils/finder/findValueInParam';

const AttributeList = ({ attributes, lvl }) => {
  return (
    <div className='attribute_list_container'>
      <ul>
        {
          attributes.labels.map((a, index) => {
            let name = a.substring(0, a.indexOf('|'));
            let param = a.substring(a.indexOf('|')+1);

            return (
              <li key={index}>
                <b>
                  {`${name} : `}
                </b>
                {
                  findValueInParam(param, attributes.parameters, lvl)
                }
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default AttributeList;