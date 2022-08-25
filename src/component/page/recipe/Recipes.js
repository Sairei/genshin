import React, { useEffect, useState } from 'react';

import { Space, Tabs } from '@mantine/core';

import Recipe from './Recipe';

import { GenshinDB } from '../../../utils/database/genshinbd';

const Recipes = () => {
  const [recipeList, setList] = useState();

  useEffect(() => {
    let list = {};
    GenshinDB.getAllFoodsNames().forEach(name => {
      let obj = GenshinDB.findFood(name);

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

  return (
    <div className='recipe_list_container'>
      <Tabs className='list_recipe' defaultValue={Object.entries(recipeList)[0][0]}>
        <Tabs.List grow>
          {
            Object.entries(recipeList).map((entry) => {
              return (
                <Tabs.Tab key={entry[0]} value={entry[0]}>{entry[0]}</Tabs.Tab>
              )
            })
          }
        </Tabs.List>

        {
          Object.entries(recipeList).map((entry) => {
            return (
              <Tabs.Panel key={entry[0]}
                value={entry[0]}>
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
              </Tabs.Panel>
            )
          })
        }
      </Tabs>
    </div>
  );
};

export default Recipes;