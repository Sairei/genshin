import { Title } from '@mantine/core';
import React from 'react';
import BrowsingItem from './BrowsingItem';

const StartBrowsing = () => {
  return (
    <div className='browsing_container'>
      <Title order={1}>
        Commencer à naviguer
      </Title>

      <div>
        <div className="list_browsing">
          <ul>
            <li>
              <BrowsingItem
                title="Personnages" link="/characters"
              />
            </li>
            
            <li>
              <BrowsingItem
                title="Bestiaire" link="/bestiary"
              />
            </li>
            
            <li>
              <BrowsingItem
                title="Matériaux" link="/categories_items"
              />
            </li>
            
            <li>
              <BrowsingItem
                title="Recettes" link="/recipes"
              />
            </li>
            
            <li>
              <BrowsingItem
                title="Artéfacts" link="/equipment/artifact"
              />
            </li>
            
            <li>
              <BrowsingItem
                title="Armes" link="/equipment/weapon"
              />
            </li>
            
            <li>
              <BrowsingItem
                title="Archives" link="/archive"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StartBrowsing;