/** Paramètres **/
export const isNavbarOpen = () => ({ 
  type: "isNavbarOpen"
});


/** Filtres dans la liste des personnages **/
export const changeElement = (element) => ({ 
  type: "changeElement",
  payload: { element: element },
});

export const changeWeapon = (weapon) => ({ 
  type: "changeWeapon",
  payload: { weapon: weapon },
});

export const changeRegion = (region) => ({ 
  type: "changeRegion",
  payload: { region: region },
});

export const changeGender = (gender) => ({ 
  type: "changeGender",
  payload: { gender: gender } 
});