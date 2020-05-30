import Glyph from './Glyph';


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

// uuidv4 test
// https://gist.github.com/johnelliott/cf77003f72f889abbc3f32785fa3df8d
const v4 = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);

test('public Glyph.toString()', () => {
   expect(testGlyph.toString()).toMatch(v4);
});

test('static Glyph.count', () => {
  expect(Glyph.count).toBe(1);
});
