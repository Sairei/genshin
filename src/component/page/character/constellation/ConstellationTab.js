import React from 'react';

const ConstellationTab = ({ constellation }) => {
  if (!constellation) {
    return (
      <div>Traitement particulier à faire</div>
    );
  }

  console.log(constellation);

  return (
    <div className='constellation_container'>
      
    </div>
  );
};

export default ConstellationTab;