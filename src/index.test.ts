import Autodraw from './index';

// import { IPoint } from './interfaces/IPoint';

const autodraw: Autodraw = new Autodraw();
const v4 = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);

test('public Portal.toString()', () => {
  expect(autodraw.toString()).toMatch(v4);
});

test('first test', () => {
   expect(autodraw.test()).toBe(true);
});

test('mid', () => {
  expect(autodraw.getMidLat()).toBe(0);
  expect(autodraw.getMidLng()).toBe(0);
  expect(autodraw.getMidPortals()).toMatchObject({lat:0, lng:0});

  autodraw.addPortal({lat: 1,lng: 1});
  autodraw.addPortal({lat: 2,lng: 2});
  autodraw.addPortal({lat: 3,lng: 3});

  expect(autodraw.getMidLat()).toBe(2);
  expect(autodraw.getMidLng()).toBe(2);
  expect(autodraw.getMidPortals()).toMatchObject({lat:2, lng:2});
});

