import React from 'react';

import { Link } from 'react-router-dom';

const ArchivePage = () => {
  return (
    <div className='archive_container'>
      <div className='archive_vertical'>
        <Link to='#' >
          <div>
            Succès
          </div>
        </Link>

        <hr />

        <Link to='/archive/namecards' >
          <div>
            Thèmes
          </div>
        </Link>
      </div>

      <div className='vertical_separator'></div>

      <div className='archive_vertical'>
        <Link to='/archive/geographies' >
          <div>
            Panoramas
          </div>
        </Link>

        <hr />

        <Link to='#' >
          <div>
            Ailes
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ArchivePage;