import Glyph from '../Glyph/Glyph';
import Point from '../Point/Point';
import Link from './Link';


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
const point2: Point = new Point(50.930219,6.378516);
const point3: Point = new Point(50.930053,6.377672);

const link1: Link = new Link(point1, point2);
const link2: Link = new Link(point2, point3);
const link3: Link = new Link(point3, point1);

// uuidv4 test
// https://gist.github.com/johnelliott/cf77003f72f889abbc3f32785fa3df8d
const v4 = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);

test('public toString', () => {
  expect(testGlyph.toString()).toMatch(v4);
  expect(point1.toString()).toMatch(v4);
  expect(point2.toString()).toMatch(v4);
  expect(point3.toString()).toMatch(v4);
  expect(link1.toString()).toMatch(v4);
  expect(link2.toString()).toMatch(v4);
  expect(link3.toString()).toMatch(v4);
});

test('static pointCount', () => {
  expect(Point.pointCount).toBe(3);
});

test('static count', () => {
  expect(Glyph.count).toBe(7);
  expect(Point.pointCount).toBe(3);
  expect(Link.linkCount).toBe(3);
});

test('public & checkPoint', () => {
  expect(point1.checkPoint()).toBe(true);
  expect(point2.checkPoint()).toBe(true);
  expect(point3.checkPoint()).toBe(true);
});



