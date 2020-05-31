/* eslint-disable comma-dangle */
import Glyph from './models/Glyph/Glyph';
import Point from './models/Point/Point';
import Portal from './models/Portal/Portal';
import Link from './models/Link/Link';

// eslint-disable-next-line no-unused-vars
import { IPoint } from './interfaces/IPoint';

class Autodraw extends Glyph {
  private portals: Portal[] = [];

  private links: Link[] = [];

  // constructor() {
  //   // this.portals = [];
  //   // this.links = [];
  // }

  /**
   * addPortal
   *
   * @memberof Autodraw
   */
  public addPortal = (portal: any): void => {
    this.portals.push(new Portal(new Point(portal.lat, portal.lng)));

    // TODO set OPSBF IDS -> a1, b2...
  }

  /**
   * Add an Link
   *
   * @memberof Autodraw
   */
  public addLink = (link: any): void => {
    this.links.push(
      new Link(
        new Point(
          link.from.lat,
          link.from.lng,
        ),
        new Point(
          link.to.lat,
          link.to.lng,
        ),
      ),
    );
  }

  /**
   * Simple test
   * @returns true
   * @memberof Autodraw
   */
  public test = (): boolean => {
    const muh = true;
    return muh;
  }

  /**
   * getMidLat
   * TODO: CONFIG custom mid
   * @memberof Autodraw
   */
  public getMidLat = (): number => {
    if (this.portals.length > 0) {
      const sumMidLat: number = this.portals
        .map((portal: Portal): number => portal.lat())
        .reduce((total: number, num: number) => total + num);
      return sumMidLat / this.portals.length;
    }
    return 0;
  }

  /**
   * getMidLng
   * TODO: CONFIG CUSTOM MID
   * @memberof Autodraw
   */
  public getMidLng = (): number => {
    if (this.portals.length > 0) {
      const sumMidLng: number = this.portals
        .map((portal: Portal): number => portal.lng())
        .reduce((total: number, num: number) => total + num);
      return sumMidLng / this.portals.length;
    }
    return 0;
  }

  /**
   * getMid
   *
   * @memberof Autodraw
   */
  public getMid = (): IPoint => (
    {
      lat: this.getMidLat(),
      lng: this.getMidLng(),
    }
  )

  public getDraw = () => {
    // dd
  }

  // OUTPUTS
  // TODO:
  // getDraw
  // getCsv // export excle like
  // getBookmarks
}

export default Autodraw;
