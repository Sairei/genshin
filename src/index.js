import React from 'react';
import { createRoot } from 'react-dom/client';

import './styles/style.scss';
import AppRouter from './router/AppRouter';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
);