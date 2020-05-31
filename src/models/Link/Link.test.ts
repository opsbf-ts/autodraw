import Glyph from '../Glyph/Glyph';
import Portal from '../Portal/Portal';
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
const portal1: Portal = new Portal(50.929868,6.37841);
const portal2: Portal = new Portal(50.930219,6.378516);
const portal3: Portal = new Portal(50.930053,6.377672);

const link1: Link = new Link(portal1, portal2);
const link2: Link = new Link(portal2, portal3);
const link3: Link = new Link(portal3, portal1);

// uuidv4 test
// https://gist.github.com/johnelliott/cf77003f72f889abbc3f32785fa3df8d
const v4 = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);

test('public toString', () => {
  expect(testGlyph.toString()).toMatch(v4);
  expect(portal1.toString()).toMatch(v4);
  expect(portal2.toString()).toMatch(v4);
  expect(portal3.toString()).toMatch(v4);
  expect(link1.toString()).toMatch(v4);
  expect(link2.toString()).toMatch(v4);
  expect(link3.toString()).toMatch(v4);
});

test('static portalCount', () => {
  expect(Portal.portalCount).toBe(3);
});

test('static count', () => {
  expect(Glyph.count).toBe(7);
  expect(Portal.portalCount).toBe(3);
  expect(Link.linkCount).toBe(3);
});

test('public & checkportal', () => {
  expect(portal1.checkLatLng()).toBe(true);
  expect(portal2.checkLatLng()).toBe(true);
  expect(portal3.checkLatLng()).toBe(true);
});



