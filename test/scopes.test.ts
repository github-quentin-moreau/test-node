import { restaurant } from "../scopes_methods/restaurant";
import { addServer, takeNewCommand } from "../scopes_methods/serveur";
import { createFranchise, sum } from "../scopes_methods/franchise";

describe("Scope Restaurant", () => {
  it("use case X = 0 & Y = 1.0 to equal 0", () => {
    expect(restaurant(0)).toBe(0);
  });

  it("use case X = 1 & Y = 1.0 to equal 1", () => {
    expect(restaurant(1)).toBe(1);
  });

  it("use case X = 2 & Y = 1.0 to equal 2", () => {
    expect(restaurant(2)).toBe(2);
  });

  it("use case X = 100 & Y = 1.0 to equal 100", () => {
    expect(restaurant(100)).toBe(100);
  });
});

describe("Scope Serveur", () => {
  it("add server without revenues", () => {
    expect(addServer({ name: "michel", command: 0 })).toEqual({
      name: "michel",
      command: 0,
    });
  });

  it("add server with revenue amount", () => {
    expect(addServer({ name: "gérard", command: 10 })).toEqual({
      name: "gérard",
      command: 10,
    });
  });

  it("add server with new revenue amount", () => {
    expect(takeNewCommand("gérard", 20)).toEqual({
      name: "gérard",
      command: 30,
    });
  });
});

describe("Scope Franchise", () => {
  it("Si la franchise a 0 restaurant, 0 serveur et 1.0 commande par serveur", () => {
    const expectedSum = 0 * 0 * sum;
    expect(
      createFranchise(
        {
          restaurant: 0,
          serveur: 0,
        },
        1.0
      )
    ).toBe(expectedSum);
  });
  it("Si la franchise a 1 restaurant, 1 serveur et 1.0 commande par serveur", () => {
    const expectedSum = 1 * 1 * sum;
    expect(
      createFranchise(
        {
          restaurant: 1,
          serveur: 1,
        },
        1.0
      )
    ).toBe(expectedSum);
  });
  it("Si la franchise a 2 restaurant, 2 serveur et 1.0 commande par serveur", () => {
    const expectedSum = 2 * 2 * sum;
    expect(
      createFranchise(
        {
          restaurant: 2,
          serveur: 2,
        },
        1.0
      )
    ).toBe(expectedSum);
  });
  it("Si la franchise a 1000 restaurant, 1000 serveur et 1.0 commande par serveur", () => {
    const expectedSum = 1000 * 1000 * sum;
    expect(
      createFranchise(
        {
          restaurant: 1000,
          serveur: 1000,
        },
        1
      )
    ).toBe(expectedSum);
  });
});
