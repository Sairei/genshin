import React from 'react';

import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import GenshinProdiver from './provider/GenshinProvider';
import MainPage from '../component/MainPage';
import HomePage from '../component/page/home/HomePage';
import ListCharactersPage from '../component/page/characters/ListCharactersPage';
import CharacterPage from '../component/page/character/CharacterPage';

const AppRouter = () => {
  return (
    <>
      <GenshinProdiver >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />}>
              <Route index element={<HomePage />} />

              <Route path='characters' element={<ListCharactersPage />} />
              <Route path='character/:name' element={<CharacterPage />} />

              {/* Pour pallier les problème de lien dans le fil d'ariane */}
              <Route path="/character" element={<Navigate replace to="/characters" />} />
            </Route>

            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </BrowserRouter>
      </GenshinProdiver >
    </>
  );
};

export default AppRouter;