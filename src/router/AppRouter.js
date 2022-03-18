import React from 'react';

import { BrowserRouter, Navigate, Routes, Route, Outlet } from "react-router-dom";

import GenshinProdiver from './provider/GenshinProvider';
import MainPage from '../component/MainPage';
import HomePage from '../component/page/home/HomePage';
import ListCharactersPage from '../component/page/characters/ListCharactersPage';
import CharacterPage from '../component/page/character/CharacterPage';
import MaterialsPage from '../component/page/materials/MaterialsPage';
import LocalSpecialtyPage from '../component/page/materials/specialty/LocalSpecialtyPage';
import TalentMaterialPage from '../component/page/materials/talent/TalentMaterialPage';
import WeaponMaterialPage from '../component/page/materials/weapon/WeaponMaterialPage';
import MonsterMaterialPage from '../component/page/materials/monster/MonsterMaterialPage';
import ItemPage from '../component/page/materials/item/ItemPage';
import BestiaryPage from '../component/page/bestiary/BestiaryPage';
import MonsterPage from '../component/page/monster/MonsterPage';
import EquipmentPage from '../component/page/equipment/EquipmentPage';
import WeaponPage from '../component/page/equipment/weapon/WeaponPage';
import ArtifactPage from '../component/page/equipment/artifact/ArtifactPage';

const AppRouter = () => {
  // Dans le return, il y a des '{/**/}'.
  // S'il y a ça à la fin d'un ligne, il s'agit d'une ligne faite pour corriger les problème de lien lié au fil d'arianne.

  return (
    <>
      <GenshinProdiver >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />}>
              {/******************/}
              {/* Page d'accueil */}
              {/******************/}
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
                <Route path='monster' element={<MonsterMaterialPage />} />
                <Route path='boss' element={<MonsterMaterialPage />} />
              </Route>
              <Route path='item/:name' element={<ItemPage />} />
              {/**/} <Route path="item" element={<Navigate replace to="/categories_items" />} />

              {/******************/}
              {/* Page bestiaire */}
              {/******************/}
              <Route path='bestiary' >
                <Route index element={<BestiaryPage />} />
                <Route path=':name' element={<MonsterPage />} />
              </Route>

              {/*******************/}
              {/* Page equipement */}
              {/*******************/}
              <Route path='equipment' >
                <Route index element={<EquipmentPage />} />
                <Route path='weapon' element={<WeaponPage />} />
                <Route path='artifact' element={<ArtifactPage />} />
              </Route>

            </Route>

            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </BrowserRouter>
      </GenshinProdiver >
    </>
  );
};

export default AppRouter;