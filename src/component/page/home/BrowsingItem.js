import { Title } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BrowsingItem = (props) => {
  const nav = useNavigate();

  const title = props.title;
  const link = props.link;
    
  return (
    <div className='browsing_item' onClick={() => nav(link)}> 
      <Title order={2} >
        {title}
      </Title>
    </div>
  );
};

export default BrowsingItem;