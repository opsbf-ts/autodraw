import Point from './Point';
import Glyph from '../Glyph/Glyph';

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

// create testGlyph
const testGlyph: Glyph = new TestGlyph();

// create classic
const point1: Point = new Point(50.929868,6.37841);
const point2: Point = new Point(50.929868,-190);
const point3: Point = new Point(90,6.37841);

// uuidv4 test
// https://gist.github.com/johnelliott/cf77003f72f889abbc3f32785fa3df8d
const v4 = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);

test('public toString', () => {
   expect(point1.toString()).toMatch(v4);
   expect(point2.toString()).toMatch(v4);
   expect(point3.toString()).toMatch(v4);
   expect(testGlyph.toString()).toMatch(v4);
});

test('static pointCount', () => {
  expect(Point.pointCount).toBe(3);
});

test('static count', () => {
  expect(Point.count).toBe(4);
  expect(Glyph.count).toBe(4);
});

test('lat & lng', () => {
  expect(point1.lat).toBe(50.929868);
  expect(point1.lng).toBe(6.37841);
  expect(point2.lat).toBe(50.929868);
  expect(point2.lng).toBe(-190);
  expect(point3.lat).toBe(90);
  expect(point3.lng).toBe(6.37841);
});

test('lat & lng as array', () => {
  expect(point1.getArr()).toBeInstanceOf(Array);
  expect(point2.getArr()).toBeInstanceOf(Array);
  expect(point3.getArr()).toBeInstanceOf(Array);
  expect(point1.getArr()).toStrictEqual([50.929868, 6.37841]);
  expect(point2.getArr()).toStrictEqual([50.929868,-190]);
  expect(point3.getArr()).toStrictEqual([90,6.37841]);
});

test('lat & lng as object', () => {
  expect(point1.getObj()).toBeInstanceOf(Object);
  expect(point2.getObj()).toBeInstanceOf(Object);
  expect(point3.getObj()).toBeInstanceOf(Object);
  expect(point1.getObj()).toStrictEqual({lat: 50.929868, lng: 6.37841});
  expect(point2.getObj()).toStrictEqual({lat: 50.929868, lng: -190});
  expect(point3.getObj()).toStrictEqual({lat: 90, lng: 6.37841});
});

test('public & checkPoint', () => {
  expect(point1.checkPoint()).toBe(true);
  expect(point2.checkPoint()).toBe(false);
  expect(point3.checkPoint()).toBe(false);
  expect(Point.checkPoint(50.929868,6.37841)).toBe(true);
  expect(Point.checkPoint(50.929868,-190)).toBe(false);
  expect(Point.checkPoint(90,6.37841)).toBe(false);
});
