const restaurant = require('../methods/restaurant');


test('use case X = 0 & Y = 1.0 to equal 0', () => {
    expect(restaurant(0, 1.0)).toBe(0);
});

test('use case X = 1 & Y = 1.0 to equal 1', () => {
    expect(restaurant(1, 1.0)).toBe(1);
});

test('use case X = 2 & Y = 1.0 to equal 2', () => {
    expect(restaurant(2, 1.0)).toBe(2);
});

test('use case X = 100 & Y = 1.0 to equal 100', () => {
    expect(restaurant(100, 1.0)).toBe(100);
});