import type { Star } from "./class/Star";
import type { ShapeType } from "./draw/Shape";

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
export interface StarConfig {
  density: number;
  color: string;
  size: Size;
  lifeCycle: LifeCycle;
  sparkle: number;
  shape: ShapeType;
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

/**
 * store
 */
export interface StarBucket {
  config: StarConfig;
  stars: Star[];
}
