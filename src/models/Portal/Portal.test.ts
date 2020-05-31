import Glyph from '../Glyph/Glyph';
import Portal from './Portal';

/**
 * Create a Class to extend abstract Glyph
 *
 * @class TestGlyph
 * @extends {Glyph}
 */
class TestGlyph extends Glyph {
  constructor() {
    super();
  }
}

const testGlyph: Glyph = new TestGlyph();
const portal1: Portal = new Portal(50.929868, 6.37841);
const portal2: Portal = new Portal(50.929868, -190);
const portal3: Portal = new Portal(90, 6.37841);

// uuidv4 test
// https://gist.github.com/johnelliott/cf77003f72f889abbc3f32785fa3df8d
const v4 = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);

test('toString', () => {
   expect(portal1.toString()).toMatch(v4);
   expect(portal2.toString()).toMatch(v4);
   expect(portal3.toString()).toMatch(v4);
   expect(testGlyph.toString()).toMatch(v4);
});

test('count', () => {
  expect(Glyph.count).toBe(4);
  expect(Portal.count).toBe(4);
  expect(Portal.portalCount).toBe(3);
});

test('init vars', () => {
  expect(portal1.lat).toBe(50.929868);
  expect(portal1.lng).toBe(6.37841);
  expect(portal1.area).toBe('X');
  expect(portal1.areaId).toBe(-1);

  expect(portal2.lat).toBe(50.929868);
  expect(portal2.lng).toBe(-190);
  expect(portal2.area).toBe('X');
  expect(portal2.areaId).toBe(-1);

  expect(portal3.lat).toBe(90);
  expect(portal3.lng).toBe(6.37841);
  expect(portal3.area).toBe('X');
  expect(portal3.areaId).toBe(-1);
});

test('lat & lng as array', () => {
  expect(portal1.getArr()).toBeInstanceOf(Array);
  expect(portal2.getArr()).toBeInstanceOf(Array);
  expect(portal3.getArr()).toBeInstanceOf(Array);
  expect(portal1.getArr()).toStrictEqual([50.929868, 6.37841]);
  expect(portal2.getArr()).toStrictEqual([50.929868,-190]);
  expect(portal3.getArr()).toStrictEqual([90,6.37841]);
});

test('lat & lng as object', () => {
  expect(portal1.getObj()).toBeInstanceOf(Object);
  expect(portal2.getObj()).toBeInstanceOf(Object);
  expect(portal3.getObj()).toBeInstanceOf(Object);
  expect(portal1.getObj()).toStrictEqual({lat: 50.929868, lng: 6.37841});
  expect(portal2.getObj()).toStrictEqual({lat: 50.929868, lng: -190});
  expect(portal3.getObj()).toStrictEqual({lat: 90, lng: 6.37841});
});

test('public & checkportal', () => {
  expect(portal1.checkLatLng()).toBe(true);
  expect(portal2.checkLatLng()).toBe(false);
  expect(portal3.checkLatLng()).toBe(false);
  expect(Portal.checkLatLng(50.929868,6.37841)).toBe(true);
  expect(Portal.checkLatLng(50.929868,-190)).toBe(false);
  expect(Portal.checkLatLng(90,6.37841)).toBe(false);
});
