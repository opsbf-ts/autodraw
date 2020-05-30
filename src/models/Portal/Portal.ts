import Glyph from '../Glyph/Glyph';
// eslint-disable-next-line no-unused-vars
import Point from '../Point/Point';

export default class Portal extends Glyph {
  static portalCount = 0;

  readonly point: Point;

  constructor(point: Point) {
    super();
    Portal.portalCount += 1;
    this.point = point;
  }
}
