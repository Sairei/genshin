import React from 'react';

import { convertElemToColor } from '../../../utils/converter/convertElemToColor';

const CharacterStyle = ({ elt }) => {
  const style = `
    .character_container, 
    .pres_info_container .info_image > * {
      border: 7px solid ${convertElemToColor(elt)};
    }

    .tabs_sub_title,
    .character_tab_label {
      color: ${convertElemToColor(elt)};
    }
  `

  return (
    <style>
      {style}
    </style>
  );
};

export default CharacterStyle;