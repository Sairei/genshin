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
      } else if (partUrl.includes("item")) {
        name = "Matériaux";
      } else if (partUrl === "local_specialty") {
        name = "Spécialités locales";
      } else if (partUrl === "talent") {
        name = "Talents";
      } else if (partUrl === "weapon") {
        name = "Armes";
      } else if (partUrl === "monster") {
        name = "Monstres";
      } else if (partUrl === "boss") {
        name = "Boss";
      } else if (partUrl === "bestiary") {
        name = "Bestiaire";
      } else if (partUrl === "equipment") {
        name = "Equipement";
      } else if (partUrl === "artifact") {
        name = "Artéfacts";
      } else if (partUrl === "recipes") {
        name = "Recettes";
      } else if (partUrl === "archive") {
        name = "Archive";
      } else if (partUrl === "achivements") {
        name = "Succès";
      } else if (partUrl === "geographies") {
        name = "Panoramas";
      } else if (partUrl === "namecards") {
        name = "Thèmes";
      } else if (partUrl === "windgliders") {
        name = "Ailes";
      } else {
        name = partUrl;
      }

      link = tmp[0];
      for (let i = 0; i < index; i++) {
        link += "/" + tmp[i + 1];
      }

      return { name: decodeURI(name), link: link };
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