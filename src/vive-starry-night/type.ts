/**
 * parent element's size
 */
export interface pSize {
  width: number;
  height: number;
}

export interface MinMax {
  min: number;
  max: number;
}

/**
 * star's size range
 */
export interface Size extends MinMax {
  min: number;
  max: number;
}

/**
 * star's life cycle time range
 */
export interface LifeCycle extends MinMax {
  min: number;
  max: number;
}

/**
 * generating star atts
 *
 * used in Star class
 */
export interface StarProps {
  color: string;
  size: Size;
  pSize: pSize;
  lifeCycle: LifeCycle;
  sparkle: number;
}

/**
 * managing star quantity
 *
 * used in StarField class
 */
export interface StarConfig extends StarProps {
  density: number;
}

export interface Position {
  x: number;
  y: number;
}

/**
 * each star's info
 */
export interface StarInfo {
  color: string;
  position: Position;
  lifeCycle: number;
  sparkle: number;
  createdAt: number;
  size: number;
}
