import React from 'react';

import { Provider } from 'react-redux';

import { store } from './Store';
import { InitDB } from '../../utils/database/genshinbd';

const GenshinProdiver = ({ children }) => {
  InitDB();
  
  return (
    <Provider store={store} >
      {children}
    </Provider>
  );
};

export default GenshinProdiver;