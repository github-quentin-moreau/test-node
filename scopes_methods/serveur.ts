import { restaurantCalcul } from "./restaurant";

export type Serveur = {
  name: string;
  command: number;
};

export const serverTable: Serveur[] = [];

export const serveurDeFranchise = (serveur: number, montant: number) => {
  return restaurantCalcul(serveur, montant);
};

export const addServer = (serveur: Serveur) => {
  serverTable.push(serveur);
  return serveur;
};

export const takeNewCommand = (serveurName: string, newAmount: number) => {
  let takeServer!: Serveur;
  serverTable.map((serveur) => {
    if (serveur.name.includes(serveurName)) {
      serveur.command += newAmount;
      takeServer = serveur;
    }
  });
  return takeServer;
};
