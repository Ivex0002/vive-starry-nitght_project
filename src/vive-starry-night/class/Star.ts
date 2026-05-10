import type { MinMax, Position, StarInfo, StarConfig } from "../type";

function random() {
  return Math.random();
}

export class Star {
  public info: StarInfo;

  constructor(config: StarConfig) {
    this.info = this.init(config);
  }

  public reset(config: StarConfig) {
    Object.assign(this.info, this.createState(config));
  }

  private init(config: StarConfig): StarInfo {
    return {
      ...this.createStatic(config),
      ...this.createState(config),
    };
  }

  private createStatic(config: StarConfig) {
    return {
      color: config.color,
      sparkle: config.sparkle,
    };
  }

  private createState(config: StarConfig) {
    return {
      position: this.getRandomPosition(),
      size: this.getRandomAtt(config.size),
      lifeCycle: this.getRandomAtt(config.lifeCycle),
      createdAt: performance.now(),
    };
  }

  private getRandomPosition(): Position {
    return {
      x: random(),
      y: random(),
    };
  }

  private getRandomAtt<T extends MinMax>(att: T): number {
    return att.min + random() * (att.max - att.min);
  }
}
