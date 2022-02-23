import React from 'react';

import { convertElemToColor } from '../../../utils/converter/convertElemToColor';

const CharacterStyle = ({ elt }) => {
  const style = `
    .character_container, 
    .pres_info_container .info_image > * {
      border: 7px solid ${convertElemToColor(elt)};
    }

    .tabs_sub_title,
    .info_name_elem,
    .character_tabs_label,
    .skill_name,
    .passive_name {
      color: ${convertElemToColor(elt)};
    }

    
    .base_stats_slider_pointer,
    .base_stats_slider_mark {
      border-color: ${convertElemToColor(elt)};
    }
    .base_stats_slider_bar,
    .base_stats_switch_input:checked {
      background-color: ${convertElemToColor(elt)};
      border-color: ${convertElemToColor(elt)};
    }
  `

  return (
    <style>
      {style}
    </style>
  );
};

export default CharacterStyle;