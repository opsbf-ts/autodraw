import Glyph from '../Glyph/Glyph';
import Portal from '../Portal/Portal';
import Link from './Link';


// create Portals
const portal1: Portal = new Portal(50.929868,6.37841);  // germany
const portal2: Portal = new Portal(50.930219,6.378516); // germany
const portal3: Portal = new Portal(50.930053,6.377672); // germany

const portal4: Portal = new Portal(51.54013,3.436925);  // netherlands beach
const portal5: Portal = new Portal(49.632343,17.056175);  // tchechien
const portal6: Portal = new Portal(37.551227,126.990942);  // Sout Korea / Seoul / Namsen Park

const portal7: Portal = new Portal(39.098248,-94.594357); // North America / Mid USA / Kansas City / Mulkey Square
const portal8: Portal = new Portal(40.689189,-74.044668); // North America / East USA / New York / Statue of Liberty
const portal9: Portal = new Portal(34.134484,-118.321877); // North America / West USA / Los Angeles / Hollywood Sign

const portal10: Portal = new Portal(34.546152,-58.451374); // South Amerika / Argentinia / Buenos Aires / Estadio Antonio Vespucio Liberti
const portal11: Portal = new Portal(-25.343365,131.024546); // Australia / Uluru




// Links (small field)
const link1: Link = new Link(portal1, portal2);
const link2: Link = new Link(portal2, portal3);
const link3: Link = new Link(portal3, portal1);

// Distance Check
const link4: Link = new Link(portal1, portal4);
const link5: Link = new Link(portal1, portal5);
const link6: Link = new Link(portal1, portal6);
const link7: Link = new Link(portal1, portal7);
const link8: Link = new Link(portal1, portal8);
const link9: Link = new Link(portal1, portal9);
const link10: Link = new Link(portal1, portal10);
const link11: Link = new Link(portal1, portal11);

// uuidv4 test
// https://gist.github.com/johnelliott/cf77003f72f889abbc3f32785fa3df8d
const v4 = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);

test('public toString', () => {
  expect(link1.toString()).toMatch(v4);
  expect(link2.toString()).toMatch(v4);
  expect(link3.toString()).toMatch(v4);
});

test('static count', () => {
  expect(Portal.portalCount).toBe(11);
  expect(Link.linkCount).toBe(11);

  // ALL
  expect(Link.count).toBe(22);
});

// https://de.wikipedia.org/wiki/Radiant_(Einheit)
// docu/images/degreeToRadiant_tableOfTruth.jpg
test('getRadiant', () => {
  // Pi
  expect(Link.getRadiant(180)).toBeCloseTo(3.1416, 4);
  expect(Link.getRadiant(-180)).toBeCloseTo(-3.1416, 4);

  // 1/2 PI
  expect(Link.getRadiant(90)).toBeCloseTo(1.5708, 4);
  expect(Link.getRadiant(-90)).toBeCloseTo(-1.5708, 4);
  
  // 1/4 PI
  expect(Link.getRadiant(45)).toBeCloseTo(0.7854, 4);
  expect(Link.getRadiant(-45)).toBeCloseTo(-0.7854, 4);
  
  // 1
  expect(Link.getRadiant(57.29577951)).toBeCloseTo(1);
  expect(Link.getRadiant(-57.29577951)).toBeCloseTo(-1);

  // PI / 180
  expect(Link.getRadiant(1)).toBeCloseTo(0.0175, 4);
  expect(Link.getRadiant(-1)).toBeCloseTo(-0.0175, 4);
});

// test('getAngle', () => {

//   expect(Link.getAngle(portal1, portal2)).toBe(3.1416);
  


// });


test('getOrthodrome', () => {

  // 40 meter
  expect(Link.getOrthodrome(portal1, portal2)).toBeCloseTo(0.04, 2);
  expect(link1.getOrthodrome()).toBeCloseTo(0.04, 2);

  // 61 meter
  expect(Link.getOrthodrome(portal2, portal3)).toBeCloseTo(0.061, 2);
  expect(link2.getOrthodrome()).toBeCloseTo(0.061, 2);

  // 67 meter
  expect(Link.getOrthodrome(portal3, portal1)).toBeCloseTo(0.055, 2);
  expect(link3.getOrthodrome()).toBeCloseTo(0.055, 2);

  // germany - netherlands
  expect(link4.getOrthodrome()).toBeCloseTo(215.724, 2);

  // germany - 
  expect(link5.getOrthodrome()).toBeCloseTo(771.59, 2);

  // germany - south Korea
  expect(link6.getOrthodrome()).toBeCloseTo(8602.698, 2);

  // germany - North America / Mid USA / Kansas City / Mulkey Square
  expect(link7.getOrthodrome()).toBeCloseTo(7409.94, 2);

  // germany - North America / East USA / New York / Statue of Liberty
  expect(link8.getOrthodrome()).toBeCloseTo(6021.151, 2);

  // germany - North America / West USA / Los Angeles / Hollywood Sign
  expect(link9.getOrthodrome()).toBeCloseTo(9121.262, 2);

  // germany - South Amerika / Argentinia / Buenos Aires / Estadio Antonio Vespucio Liberti
  expect(link10.getOrthodrome()).toBeCloseTo(5406.282, 2);

  // germany - Australia / Uluru
  expect(link11.getOrthodrome()).toBeCloseTo(14567.302, 2);

});

test('getOrthodrome', () => {
  expect(Link.getVolume2(portal1, portal2, portal3)).toBeCloseTo(14567.302, 2);
});






