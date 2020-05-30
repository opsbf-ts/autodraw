import Portal from './Portal';
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
const portal1: Portal = new Portal();
const portal2: Portal = new Portal();

// uuidv4 test
// https://gist.github.com/johnelliott/cf77003f72f889abbc3f32785fa3df8d
const v4 = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);

test('public Portal.toString()', () => {
   expect(portal1.toString()).toMatch(v4);
   expect(portal2.toString()).toMatch(v4);
   expect(testGlyph.toString()).toMatch(v4);
});

test('static portalCount', () => {
  expect(Portal.portalCount).toBe(2);
});

test('static count', () => {
  expect(Portal.count).toBe(3);
  expect(Glyph.count).toBe(3);
});
