import React, { useEffect } from 'react';

import { Provider } from 'react-redux';

import { store } from './Store';
import { InitDB } from '../../utils/database/genshinbd';

const GenshinProdiver = ({ children }) => {
  useEffect(() => {
    let r = InitDB();
    console.log(r);
  }, [])
  
  return (
    <Provider store={store} >
      {children}
    </Provider>
  );
};

export default GenshinProdiver;