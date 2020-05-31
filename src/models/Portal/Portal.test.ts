import Glyph from '../Glyph/Glyph';
import Point from '../Point/Point';
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
const portal1: Portal = new Portal(new Point(50.929868, 6.37841));
const portal2: Portal = new Portal(new Point(50.123, 6.123));

// uuidv4 test
// https://gist.github.com/johnelliott/cf77003f72f889abbc3f32785fa3df8d
const v4 = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);

test('toString', () => {
   expect(portal1.toString()).toMatch(v4);
   expect(portal2.toString()).toMatch(v4);
   expect(testGlyph.toString()).toMatch(v4);
});

test('count', () => {
  expect(Glyph.count).toBe(5);
  expect(Point.count).toBe(5);
  expect(Portal.count).toBe(5);
  expect(Point.pointCount).toBe(2);
  expect(Portal.portalCount).toBe(2);
});

test('init vars', () => {
  expect(portal1.lat()).toBe(50.929868);
  expect(portal1.lng()).toBe(6.37841);
  expect(portal1.area).toBe('X');
  expect(portal1.areaId).toBe(-1);
  expect(portal2.lat()).toBe(50.123);
  expect(portal2.lng()).toBe(6.123);
  expect(portal2.area).toBe('X');
  expect(portal2.areaId).toBe(-1);
});

