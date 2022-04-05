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
import WeaponListPage from '../component/page/equipment/weapon/WeaponListPage';
import WeaponPage from '../component/page/equipment/weapon/WeaponPage';
import ArtifactListPage from '../component/page/equipment/artifact/ArtifactListPage';
import Recipes from '../component/page/recipe/Recipes';
import ArchivePage from '../component/page/archive/ArchivePage';
import GeographiesPage from '../component/page/archive/geographies/GeographiesPage';
import NamecardPage from '../component/page/archive/namecard/NamecardPage';
import WindgliderPage from '../component/page/archive/windglider/WindgliderPage';
import GroupAchievementPage from '../component/page/archive/achievement/GroupAchievementPage';

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
                <Route path='weapon/:name' element={<WeaponPage />} />
                <Route path='weapon' element={<WeaponListPage />} />
                <Route path='artifact/:name' element={<ArtifactListPage />} />
                <Route path='artifact' element={<ArtifactListPage />} />
              </Route>

              {/******************/}
              {/* Page recette */}
              {/******************/}
              <Route path='recipes' element={<Recipes />} />

              {/******************/}
              {/* Page Archive */}
              {/******************/}
              <Route path='archive'>
                <Route index element={<ArchivePage />} />
                <Route path='achievements_groups' element={<GroupAchievementPage />} />
                <Route path='geographies' element={<GeographiesPage />} />
                <Route path='namecards' element={<NamecardPage />} />
                <Route path='windgliders' element={<WindgliderPage />} />
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