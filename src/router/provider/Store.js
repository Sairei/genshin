import { createStore } from "redux";
import { initialState } from "./InitialState";

function reducer(state = initialState, action) {
  /** Paramètrage **/
  // Gestion de l'aouverture de la navigation
  if (action.type === "isNavbarOpen") {
    return {
      ...state,
      isNavbarOpen: !(state.isNavbarOpen),
    };
  }

  /** Filtres dans le pokedex **/
  // Changement de l'élément 
  if (action.type === "changeElement") {
    const element = action.payload.element;
    return {
      ...state,
      element: element,
    };
  }

  // Changement de l'arme 
  if (action.type === "changeWeapon") {
    const weapon = action.payload.weapon;
    return {
      ...state,
      weapon: weapon,
    };
  }

  // Changement de la region 
  if (action.type === "changeRegion") {
    const region = action.payload.region;
    return {
      ...state,
      region: region,
    };
  }

  // Changement du genre 
  if (action.type === "changeGender") {
    const gender = action.payload.gender;
    return {
      ...state,
      gender: gender,
    };
  }

  return state;
}


export const store = createStore(reducer);