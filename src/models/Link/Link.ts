/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
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
  static perimeter = 40000; // Perimeter in kilometers. For alternate way.

  /**
   * https://de.m.wikipedia.org/wiki/Radiant_(Einheit)
   * Rad = Radiant
   * range -3,14 - 3,14
   * @static
   * @memberof Link
   */
  static getRadiant = (degree: number): number => ((degree * Math.PI) / 180);

  /**
   * getAngle
   * range >0 - 1
   * @return number
   * @static
   * @memberof Link
   */
  static getAngle = (fromPortal: Portal, toPortal: Portal): number => (
    Math.acos(
      (
        Math.sin(Link.getRadiant(fromPortal.lat))
        * Math.sin(Link.getRadiant(toPortal.lat))
      )
      + (
        Math.cos(Link.getRadiant(fromPortal.lat))
        * Math.cos(Link.getRadiant(toPortal.lat))
        * (Math.cos(Link.getRadiant(toPortal.lng) - Link.getRadiant(fromPortal.lng)))
      )
    )
  )

  // static getAngle = (fromPortal: Portal, toPortal: Portal): number => (
  //   Math.acos(
  //     (
  //       Math.sin(fromPortal.lat)
  //       * Math.sin(toPortal.lat)
  //     )
  //     + (
  //       Math.cos(fromPortal.lat)
  //       * Math.cos(toPortal.lat)
  //       * (Math.cos(toPortal.lng - fromPortal.lng))
  //     )
  //   )
  // )

  /**
   * get curved length of link
   * Radians = Bogenmaß
   * https://de.m.wikipedia.org/wiki/Orthodrome#Strecke
   * http://www.arndt-bruenner.de/mathe/scripts/sphaerischr.htm#winkelconv
   *
   * @memberof Link
   */
  static getOrthodrome = (fromPortal: Portal, toPortal: Portal): number => {
    const angle = Link.getAngle(fromPortal, toPortal);
    // return (angle / 360) * Link.perimeter; // alternate way
    return angle * Link.radius; // length in km
  }

  /**
   *
   * curved Length
   * @memberof Link
   */
  public getOrthodrome = () => Link.getOrthodrome(this.from, this.to);

  /**
   * get Volume of Spherical Triangle of 3 linked portels aka MindUnits in km²
   * Spherical trigonometry
   * https://en.wikipedia.org/wiki/Spherical_trigonometry
   * https://de.wikipedia.org/wiki/Sph%C3%A4rische_Trigonometrie
   * http://numerical.recipes/whp/HuiliersTheorem.pdf
   * @static
   * @memberof Link
   */
  static getVolumeOfST = (aPortal: Portal, bPortal: Portal, cPortal: Portal) => {
    const abLength = Link.getOrthodrome(aPortal, bPortal);
    const bcLength = Link.getOrthodrome(bPortal, cPortal);
    const caLength = Link.getOrthodrome(cPortal, aPortal);

    // Halbumfang
    const s = (abLength + bcLength + caLength) / 2;

    // L’Huiliersche Formel
    // eslint-disable-next-line max-len
    const exzess = 4 * Math.atan(Math.sqrt(Math.tan(s / 2) * Math.tan((s - Link.getAngle(aPortal, bPortal)) / 2) * Math.tan((s - Link.getAngle(bPortal, cPortal)) / 2) * Math.tan((s - Link.getAngle(cPortal, aPortal)) / 2)));

    return exzess * Link.radius * Link.radius; // Quadrat KILO meter! km²

    // var scope=y0-(-y1)-(-y2);
    // scope /= 2;
    // Math.sqrt(s*(s-y0)*(s-y1)*(s-y2))
  }


  /**
   *
   * https://rechneronline.de/pi/dreieck.php
   * https://www.mathepower.com/dreieck.php
   * @static
   * @memberof Link
   */
  static getVolume2 = (aPortal: Portal, bPortal: Portal, cPortal: Portal): number => {
    const abLength = Link.getOrthodrome(aPortal, bPortal);
    const bcLength = Link.getOrthodrome(bPortal, cPortal);
    const caLength = Link.getOrthodrome(cPortal, aPortal);

    // eslint-disable-next-line max-len
    if (abLength + bcLength <= caLength || abLength + caLength <= bcLength || bcLength + caLength <= abLength) {
      // alert("Dieses Dreieck ist nicht moeglich!");
      return 0;
    }

    // eslint-disable-next-line max-len
    const alpha = ((180 / Math.PI) * Math.acos((bcLength * bcLength - (-caLength * caLength) - abLength * abLength) / (2 * bcLength * caLength)));
    // eslint-disable-next-line max-len
    const beta = ((180 / Math.PI) * Math.acos((abLength * abLength - (-caLength * caLength) - bcLength * bcLength) / (2 * abLength * caLength)));
    // eslint-disable-next-line max-len
    const gamma = ((180 / Math.PI) * Math.acos((abLength * abLength - (-bcLength * bcLength) - caLength * caLength) / (2 * abLength * bcLength)));

    // scope = umfang
    const scope = (abLength - (-bcLength) - (-caLength)) / 2;
    // eslint-disable-next-line max-len
    // return (Link.getRadiant(alpha) + Link.getRadiant(beta) + Link.getRadiant(gamma) - Math.PI) * Link.radius * Link.radius * 1000000;
    // eslint-disable-next-line max-len
    return Math.sqrt(scope * (scope - abLength) * (scope - bcLength) * (scope - caLength)) * 1000000; // good but not curved
  }
  // static getVolume = (aPortal: Portal, bPortal: Portal, cPortal: Portal) => {
  //   const abLength = Link.getOrthodrome(aPortal, bPortal);
  //   const bcLength = Link.getOrthodrome(bPortal, cPortal);
  //   const caLength = Link.getOrthodrome(cPortal, aPortal);
  // }

  /**
   *
   * get MID of TRIANGLE (3 Portals)
   * Schwerpunkt
   * @static
   * @memberof Link
   */
  static getMidField = (aPortal: Portal, bPortal: Portal, cPortal: Portal): IPoint => {
    const lat = 1 / (3 * (aPortal.lat + bPortal.lat + cPortal.lat));
    const lng = 1 / (3 * (aPortal.lng + bPortal.lng + bPortal.lng));

    return ({
      lat,
      lng,
    });
  }
}
