import React from 'react';

import { Provider } from 'react-redux';

import { store } from './Store';

const GenshinProdiver = ({ children }) => {
  return (
    <Provider store={store} >
      {children}
    </Provider>
  );
};

export default GenshinProdiver;