import { names, uniqueNamesGenerator } from "unique-names-generator";
import { addServer, Serveur, serverTable } from "./serveur";

type Franchise = {
  restaurant: number;
  serveur: number;
};
export const sum = serverTable.reduce((sum, server) => sum + server.command, 0);

export const createFranchise = (franchise: Franchise, command: number) => {
  while (serverTable.length > 0) {
    serverTable.pop();
  }
  for (let index = 0; index < franchise.serveur; index++) {
    const randomName: string = uniqueNamesGenerator({
      dictionaries: [names],
    });
    addServer({ name: randomName, command: command });
  }
  return revenueFranchiseCalcul(franchise, sum);
};

export const revenueFranchiseCalcul = (franchise: Franchise, sum: number) => {
  return franchise.restaurant * franchise.serveur * sum;
};
