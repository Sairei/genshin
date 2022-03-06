import React from 'react';

import { BrowserRouter, Navigate, Routes, Route, Outlet } from "react-router-dom";

import GenshinProdiver from './provider/GenshinProvider';
import MainPage from '../component/MainPage';
import HomePage from '../component/page/home/HomePage';
import ListCharactersPage from '../component/page/characters/ListCharactersPage';
import CharacterPage from '../component/page/character/CharacterPage';
import MaterialsPage from '../component/page/matierials/MaterialsPage';
import LocalSpecialtyPage from '../component/page/matierials/specialty/LocalSpecialtyPage';
import TalentMaterialPage from '../component/page/matierials/talent/TalentMaterialPage';
import WeaponMaterialPage from '../component/page/matierials/weapon/WeaponMaterialPage';

const AppRouter = () => {
  // Dans le return, il y a des '{/**/}'.
  // S'il y a ça à la fin d'un ligne, il s'agit d'une ligne faite pour corriger les problème de lien lié au fil d'arianne.

  return (
    <>
      <GenshinProdiver >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />}>
              <Route index element={<HomePage />} />

              {/*******************/}
              {/* Page personnage */}
              {/*******************/}
              <Route path='characters' element={<ListCharactersPage />} />
              <Route path='character/:name' element={<CharacterPage />} />
              {/**/} <Route path="character" element={<Navigate replace to="/characters" />} />
              
              {/******************/}
              {/* Page materials */}
              {/******************/}
              <Route path='categories_items' element={<MaterialsPage />} />
              <Route path='categorie_items' element={<Outlet />} >
                {/**/} <Route index element={<Navigate replace to="/categories_items" />} />
                <Route path='local_specialty' element={<LocalSpecialtyPage />} />
                <Route path='talent' element={<TalentMaterialPage />} />
                <Route path='weapon' element={<WeaponMaterialPage />} />
              </Route>          
              {/**/} <Route path="item" element={<Navigate replace to="/categories_items" />} />

            </Route>

            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </BrowserRouter>
      </GenshinProdiver >
    </>
  );
};

export default AppRouter;