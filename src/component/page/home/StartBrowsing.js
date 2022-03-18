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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StartBrowsing;