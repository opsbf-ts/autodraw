import Glyph from '../Glyph/Glyph';

export default class Portal extends Glyph {
  static portalCount = 0;

  constructor() {
    super();
    Portal.portalCount += 1;
  }
}
