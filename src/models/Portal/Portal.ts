import Glyph from '../Glyph/Glyph';

// eslint-disable-next-line no-unused-vars
import { Area } from '../../interfaces/Area';

export default class Portal extends Glyph {
  static portalCount = 0;

  readonly lat: number;

  readonly lng: number;

  readonly area: Area;

  readonly areaId: number;

  constructor(lat: number, lng: number) {
    super();
    Portal.portalCount += 1;
    this.lat = lat;
    this.lng = lng;
    this.area = Area.X;
    this.areaId = -1;
  }

  public getLat = () => this.lat;

  public getLng = () => this.lng;

  /**
   * Check if Lat is on Earth
   *
   * @param {number} lat
   * @static
   * @memberof Portal
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
   * @memberof Portal
   */
  public static checkLng = (lng: number): boolean => {
    if (lng > -180 && lng < 180) {
      return true;
    }
    return false;
  };

  /**
   * Check if Portal is on Earth
   *
   * @param {number} lat
   * @param {number} lng
   * @static
   * @memberof Portal
   */
  static checkLatLng = (lat: number, lng: number) => {
    if (Portal.checkLat(lat) && Portal.checkLng(lng)) {
      return true;
    }
    return false;
  };

  /**
   * Check if Portal is on Earth
   *
   * @param {number} lat
   * @param {number} lng
   * @memberof Portal
   */
  public checkLatLng = (lat: number = this.lat, lng: number = this.lng) => (
    Portal.checkLatLng(lat, lng));

  /**
   * Return an Array with [lat, lng]
   *
   * @memberof Portal
   */
  public getArr = (): number[] => [this.lat, this.lng];

  /**
   * Returns an Oject with {lat, lng}
   *
   * @memberof Portal
   */
  public getObj = () => ({
    lat: this.lat,
    lng: this.lng,
  });
}
