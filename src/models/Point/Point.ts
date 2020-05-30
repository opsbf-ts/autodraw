import Glyph from '../Glyph/Glyph';

export default class Point extends Glyph {
  static pointCount = 0;

  readonly lat: number;

  readonly lng: number;

  /**
   * Creates an instance of Point.
   * @param {number} lat
   * @param {number} lng
   * @memberof Point
   */
  constructor(lat: number, lng: number) {
    super();
    Point.pointCount += 1;
    this.lat = lat;
    this.lng = lng;
  }

  /**
   * Check if Lat is on Earth
   *
   * @param {number} lat
   * @static
   * @memberof Point
   */
  public static checkLat = (lat: number): boolean => {
    if (lat > -85.05112878 && lat < 85.05112878) {
      return true;
    }
    return false;
  };

  /**
   * Check if Lng is on Earth
   *
   * @param {number} lng
   * @static
   * @memberof Point
   */
  public static checkLng = (lng: number): boolean => {
    if (lng > -180 && lng < 180) {
      return true;
    }
    return false;
  };

  /**
   * Check if Point is on Earth
   *
   * @param {number} lat
   * @param {number} lng
   * @static
   * @memberof Point
   */
  static checkPoint = (lat: number, lng: number) => {
    if (Point.checkLat(lat) && Point.checkLng(lng)) {
      return true;
    }
    return false;
  };

  /**
   * Check if Point is on Earth
   *
   * @param {number} lat
   * @param {number} lng
   * @memberof Point
   */
  public checkPoint = (lat = this.lat, lng = this.lng) => Point.checkPoint(lat, lng);

  /**
   * Return an Array with [lat, lng]
   *
   * @memberof Point
   */
  public getArr = (): number[] => [this.lat, this.lng];

  /**
   * Returns an Oject with {lat, lng}
   *
   * @memberof Point
   */
  public getObj = () => ({
    lat: this.lat,
    lng: this.lng,
  });
}
