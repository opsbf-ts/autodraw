/* eslint-disable comma-dangle */
import Glyph from './models/Glyph/Glyph';
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
    this.portals.push(new Portal(portal.lat, portal.lng));

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
        new Portal(
          link.from.lat,
          link.from.lng,
        ),
        new Portal(
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
        .map((portal: Portal): number => portal.getLat())
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
        .map((portal: Portal): number => portal.getLng())
        .reduce((total: number, num: number) => total + num);
      return sumMidLng / this.portals.length;
    }
    return 0;
  }

  /**
   * getMid of ALL Portals
   *
   * @memberof Autodraw
   */
  public getMid = (): IPoint => (
    {
      lat: this.getMidLat(),
      lng: this.getMidLng(),
    }
  )

  /**
   * define the areas for each Portal
   * this is the old OPSBF ID a1, b2, c4...
   *
   * @private
   * @memberof Autodraw
   */
  private areaPortals = () => {
    if (this.portals.length < 3) {
      return;
    }

    // find A outest. It's the Portal that is farthest from Mid
    const midPortal = new Portal(this.getMidLng(), this.getMidLat());
    let aOutestPortal: Portal = this.portals[0];
    let aFarthestLengthCache: Number = 0;
    this.portals.forEach((portal: Portal) => {
      const curLength: number = new Link(portal, midPortal).orthodrom();
      if (curLength > aFarthestLengthCache) {
        aFarthestLengthCache = curLength;
        aOutestPortal = portal;
      }
    });

    // find B outest. It's the Portal that is farthest from aOutestPortal
    let bOutestPortal: Portal = this.portals[1];
    let bFarthestLengthCache: Number = 0;
    this.portals.forEach((portal: Portal) => {
      const curLength: number = new Link(portal, midPortal).orthodrom();
      if (curLength > bFarthestLengthCache) {
        bFarthestLengthCache = curLength;
        bOutestPortal = portal;
      }
    });

    // find C outest. It's the Portal that makes the biggest field with aOutestPortal + bOutestPortal
    let cOutestPortal: Portal = this.portals[2];
    let cHighestVolumeCache: number = 0;
    this.portals.forEach((portal: Portal) => {
      const curVolume: number = Link.volume(aOutestPortal, bOutestPortal, portal);
      if (curVolume > cHighestVolumeCache) {
        cHighestVolumeCache = curVolume;
        cOutestPortal = portal;
      }
    });

    const mid: IPoint = Link.getMid(aOutestPortal, bOutestPortal, cOutestPortal);
  }

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
