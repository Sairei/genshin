import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import { GenshinDB } from '../../../utils/database/genshinbd';
const ArchivePage = () => {

  useEffect(() => {
    
  }, [])

  return (
    <div className='archive_container'>
      <div className='archive_vertical'>
        <Link to='#' >
          <div>
            Succès
          </div>
        </Link>

        <hr />

        <Link to='#' >
          <div>
            Thèmes
          </div>
        </Link>
      </div>

      <div className='vertical_separator'></div>

      <div className='archive_vertical'>
        <Link to='#' >
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