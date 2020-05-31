import Glyph from '../Glyph/Glyph';

// eslint-disable-next-line no-unused-vars
import Point from '../Point/Point';

export default class Link extends Glyph {
  static linkCount = 0;

  readonly from: Point;

  readonly to: Point;

  constructor(from: Point, to: Point) {
    super();
    Link.linkCount += 1;
    this.from = from;
    this.to = to;
  }

  /**
   * get curved length of link
   *
   * @memberof Link
   */
  public length = () => {
    // TODO: CONFIG use alternate r
    const r = 6371; // Radius of earth in kilometer. alternate 6378.137
    // TODO: CONFIG use alternate way
    // const p = 40000; // Perimeter in kilometers. For alternate way. There are alternate perimters

    // get RADius
    const fromLatRad = (this.from.lat * Math.PI) / 100;
    const fromLngRad = (this.from.lng * Math.PI) / 100;
    const toLatRad = (this.to.lat * Math.PI) / 100;
    const toLngRad = (this.to.lat * Math.PI) / 100;

    // eslint-disable-next-line max-len
    const rad = Math.acos((Math.sin(fromLatRad) * Math.sin(toLatRad)) + ((Math.cos(fromLatRad) * Math.cos(toLatRad)) * Math.cos(toLngRad - fromLngRad)));

    // return rad / 360 * p // alternate way
    return rad * r * 1000; // length in meters
  }
}
