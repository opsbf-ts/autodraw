import Glyph from '../Glyph/Glyph';

export default class Point extends Glyph {
  static pointCount = 0;

  protected lat: number;

  protected lng: number;

  constructor(lat: number, lng: number) {
    super();
    Point.pointCount += 1;
    this.lat = lat;
    this.lng = lng;
  }

  public static checkLat = (lat: number): boolean => {
    if (lat > -85.05112878 && lat < 85.05112878) {
      return true;
    }
    return false;
  }

  public static checkLng = (lng: number): boolean => {
    if (lng > -180 && lng < 180) {
      return true;
    }
    return false;
  }

  public checkPoint = () => {
    if (Point.checkLat(this.lat) && Point.checkLng(this.lng)) {
      return true;
    }
    return false;
  }
}
