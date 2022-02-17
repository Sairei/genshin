import React from 'react';

import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import GenshinProdiver from './provider/GenshinProvider';
import MainPage from '../component/MainPage';
import HomePage from '../component/page/home/HomePage';

const AppRouter = () => {
  return (
    <>
      <GenshinProdiver >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />}>
              <Route index element={<HomePage />} />
            </Route>

            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </BrowserRouter>
      </GenshinProdiver >
    </>
  );
};

export default AppRouter;