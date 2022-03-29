import { serveurDeFranchise } from "./serveur";

export const restaurant = (nbServeur: number) => {
  return serveurDeFranchise(nbServeur, 1.0);
};

export const restaurantCalcul = (x: number, y: number) => {
  return x * y;
};
