import Glyph from '../Glyph/Glyph';
// eslint-disable-next-line no-unused-vars
import Point from '../Point/Point';

// eslint-disable-next-line no-unused-vars
import { Area } from '../../interfaces/Area';

export default class Portal extends Glyph {
  static portalCount = 0;

  readonly point: Point;

  readonly area: Area;

  readonly areaId: number;

  constructor(point: Point) {
    super();
    Portal.portalCount += 1;
    this.point = point;
    this.area = Area.X;
    this.areaId = -1;
  }

  public lat = () => this.point.lat;

  public lng = () => this.point.lng;
}
