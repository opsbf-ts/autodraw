import { v4 as uuid } from 'uuid';

/**
 * Main Model of all Models
 *
 * @export
 * @abstract
 * @class Glyph
 */
export default abstract class Glyph {
  static count: number = 0;

  protected uuid: string;

  /**
   * Creates an instance of Glyph.
   * @memberof Glyph
   */
  constructor() {
    this.uuid = uuid();
    Glyph.count += 1;
  }

  /**
   * Returns uuid of this obj
   * @returns uuid<string>
   * @memberof Glyph
   */
  public toString = (): string => this.uuid;
}
