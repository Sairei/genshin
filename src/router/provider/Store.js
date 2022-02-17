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

  return state;
}


export const store = createStore(reducer);