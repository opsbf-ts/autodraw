import Glyph from '../Glyph/Glyph';

// eslint-disable-next-line no-unused-vars
import Portal from '../Portal/Portal';

// eslint-disable-next-line no-unused-vars
import { IPoint } from '../../interfaces/IPoint';

export default class Link extends Glyph {
  static linkCount = 0;

  readonly from: Portal;

  readonly to: Portal;

  constructor(from: Portal, to: Portal) {
    super();
    Link.linkCount += 1;
    this.from = from;
    this.to = to;
  }

  // TODO: CONFIG use alternate r
  static radius = 6371; // Radius of earth in kilometer. alternate 6378.137
  // TODO: CONFIG use alternate way
  // const p = 40000; // Perimeter in kilometers. For alternate way. There are alternate perimters

  /**
   * https://de.m.wikipedia.org/wiki/Radiant_(Einheit)
   * Rad = Radiant
   *
   * @static
   * @memberof Link
   */
  static getRadiant = (degree: number): number => (degree * Math.PI) / 180

  /**
   *
   * Radians = Bogenmaß
   * @static
   * @memberof Link
   */
  // eslint-disable-next-line max-len
  static getRadians = (fromPortal: Portal, toPortal: Portal): number => Math.acos((Math.sin(Link.getRadiant(fromPortal.lat)) * Math.sin(Link.getRadiant(toPortal.lat))) + ((Math.cos(Link.getRadiant(fromPortal.lat)) * Math.cos(Link.getRadiant(toPortal.lat))) * Math.cos(Link.getRadiant(toPortal.lng) - Link.getRadiant(fromPortal.lng))))

  /**
   * get curved length of link
   * https://de.m.wikipedia.org/wiki/Orthodrome#Strecke
   * http://www.arndt-bruenner.de/mathe/scripts/sphaerischr.htm#winkelconv
   *
   * @memberof Link
   */
  static orthodrome = (fromPortal: Portal, toPortal: Portal): number => {
    const rad = Link.getRadians(fromPortal, toPortal);

    // return rad / 360 * p // alternate way
    return rad * Link.radius * 1000; // length in meters
  }

  /**
   *
   * curved Length
   * @memberof Link
   */
  public orthodrom = () => Link.orthodrome(this.from, this.to);

  /**
   * get sphreic volume of 3 linked portels aka MindUnits in km²
   * https://de.wikipedia.org/wiki/Sph%C3%A4rische_Trigonometrie
   * http://numerical.recipes/whp/HuiliersTheorem.pdf
   * @static
   * @memberof Link
   */
  static volume = (aPortal: Portal, bPortal: Portal, cPortal: Portal) => {
    const abLength = Link.orthodrome(aPortal, bPortal);
    const bcLength = Link.orthodrome(bPortal, cPortal);
    const caLength = Link.orthodrome(cPortal, aPortal);

    const s = (abLength + bcLength + caLength) / 2;

    // eslint-disable-next-line max-len
    const exzess = 4 * Math.atan(Math.sqrt(Math.tan(s / 2) * Math.tan((s - Link.getRadians(aPortal, bPortal)) / 2) * Math.tan((s - Link.getRadians(bPortal, cPortal)) / 2) * Math.tan((s - Link.getRadians(cPortal, aPortal)) / 2)));

    return exzess * Link.radius * Link.radius; // Quadrat KILO meter! km²
  }

  /**
   *
   * get MID of TRIANGLE (3 Portals)
   * Schwerpunkt
   * @static
   * @memberof Link
   */
  static getMid = (aPortal: Portal, bPortal: Portal, cPortal: Portal): IPoint => {
    const lat = 1 / (3 * (aPortal.lat + bPortal.lat + cPortal.lat));
    const lng = 1 / (3 * (aPortal.lng + bPortal.lng + bPortal.lng));

    return ({
      lat,
      lng,
    });
  }
}
