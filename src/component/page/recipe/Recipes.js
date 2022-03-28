import React, { useEffect, useState } from 'react';

import { Space, Tabs } from '@mantine/core';

import Recipe from './Recipe';

const genshindb = require('genshin-db');

const Recipes = () => {
  const [recipeList, setList] = useState();

  useEffect(() => {
    let list = {};
    genshindb.foods('name', { matchCategories: true }).forEach(name => {
      let obj = genshindb.foods(name, { resultLanguage: "French" });

      if (!list[obj.foodfilter]) {
        list[obj.foodfilter] = [];
      }

      list[obj.foodfilter].push(obj);
    });
    setList(list);
  }, [])

  if (!recipeList) {
    return (
      <div></div>
    );
  }
  console.log(recipeList);

  return (
    <div className='recipe_list_container'>
      <Tabs grow
        className='list_recipe'>
        {
          Object.entries(recipeList).map((entry) => {
            return (
              <Tabs.Tab
                label={entry[0]}>
                {
                  entry[1]
                    .sort((a, b) => {
                      if (a.rarity[0] === b.rarity[0]) {
                        return a.name.localeCompare(b.name);
                      }
                      return a.rarity[0] - b.rarity[0];
                    })
                    .map((recipe, index) => {
                      let e = recipe.name
                      return (
                        <li key={e}>
                          {
                            index !== 0 &&
                            <>
                              <Space h='md' />
                              <hr/>
                              <Space h='md' />
                            </>
                          }
                          <Recipe recipe={recipe} />
                        </li>
                      );
                    })
                }
              </Tabs.Tab>
            )
          })
        }
      </Tabs>
    </div>
  );
};

export default Recipes;