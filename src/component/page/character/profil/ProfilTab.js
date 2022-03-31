import React from 'react';

import { useLocation } from 'react-router-dom';
import { Anchor, Space } from '@mantine/core';

import { convertTextWithGender } from '../../../../utils/converter/convertTextWithGender';

import { GenshinDB } from '../../../../utils/database/genshinbd';

const ProfilTab = ({ character, outfit }) => {
  const url = useLocation().pathname;
  const gender = url.toLocaleLowerCase().includes('lumine') ? "Female" : "Male";

  if (!character) {
    return (
      <div></div>
    );
  }

  return (
    <div className='profil_container'>
      <div>
        <b className='elem_color_text'>{`Anniversaire : `}</b> {character.birthday}
      </div>

      <Space h='md' />

      <div>
        <b className='elem_color_text'>{`Région d'origine : `}</b> {character.region ? character.region : "Aucune connue"}
      </div>

      <Space h='md' />

      <div>
        <b className='elem_color_text'>{`Affiliation : `}</b> {character.affiliation}
      </div>

      <Space h='md' />

      <div>
        <b className='elem_color_text'>{`Doublage (Cover Voice) :`}</b>
        <ul>
          {
            Object.entries(character.cv).map((entry) => {
              let lang = entry[0];
              let cover = entry[1];

              return (
                <li key={lang}>
                  <i className='elem_color_text'>{`${lang} : `}</i> {cover}
                </li>
              );
            })
          }
        </ul>
      </div>

      <Space h='md' />

      <div>
        <div>
          <b className='elem_color_text'>Description :</b>
        </div>
        {`${convertTextWithGender(character.description, gender)}`}
      </div>

      <Space h='md' />

      {
        outfit &&
        <div>
          <b className='elem_color_text'>{`Tenues :`}</b>
          <ul>
            {
              outfit.map((tenue) => {
                let res = GenshinDB.findOutfits(tenue);

                return (
                  <li key={tenue}>
                    {`${tenue} `}
                    {
                      res.url.modelviewer &&
                      <Anchor target='_blank'
                        href={res.url.modelviewer} >
                        {"(Lien vers le model 3D)"}
                      </Anchor>
                    }
                  </li>
                );
              })
            }
          </ul>
        </div>
      }
    </div>
  );
};

export default ProfilTab;