import { Title } from '@mantine/core';
import React from 'react';
import BrowsingItem from './BrowsingItem';

const StartBrowsing = () => {
  return (
    <div className='browsing_container'>
      <Title order={1}>
        Start Browsing
      </Title>

      <div>
        <div className="list_browsing">
          <ul>
            <li>
              <BrowsingItem
                title="Character" link="/characters"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StartBrowsing;