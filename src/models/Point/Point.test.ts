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

const testGlyph: Glyph = new TestGlyph();
const point1: Point = new Point();
const point2: Point = new Point();

// uuidv4 test
// https://gist.github.com/johnelliott/cf77003f72f889abbc3f32785fa3df8d
const v4 = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);

test('public toString', () => {
   expect(point1.toString()).toMatch(v4);
   expect(point2.toString()).toMatch(v4);
   expect(testGlyph.toString()).toMatch(v4);
});

test('static pointCount', () => {
  expect(Point.pointCount).toBe(2);
});

test('static count', () => {
  expect(Point.count).toBe(3);
  expect(Glyph.count).toBe(3);
});
