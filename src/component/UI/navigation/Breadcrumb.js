import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Breadcrumb = () => {
  const url = useLocation().pathname.slice(1);

  let filAriane = [];
  if (url !== '') {
    let tmp = url.split('/');
    filAriane = tmp.map((partUrl, index) => {
      let name, link;
      if (partUrl.startsWith("chara")) {
        name = "Personnages";
      } else {
        name = partUrl;
      }

      link = tmp[0];
      for (let i=0; i<index; i++) {
        link += "/" + tmp[i+1];
      }

      return { name: name, link: link };
    });
  }


  return (
    <ul className='breadcrumb'>
      <li className="ariane-list-item">
        <Link to={"/"} className="ariane-link">
          <FontAwesomeIcon icon={faHome} size="1x" />
        </Link>
      </li>
      {filAriane.map((value, index) => {
        return (
          <li key={value.name + "_" + index} className="ariane-list-item">
            <Link to={value.link} className="ariane-link">
              {value.name}
            </Link>
            {filAriane[index + 1] && <span>&gt;</span>}
          </li>
        )
      })}
    </ul>
  );
};

export default Breadcrumb;