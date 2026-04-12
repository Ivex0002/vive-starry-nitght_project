import type { MinMax, Position, pSize, StarInfo, StarProps } from "../type";

function random() {
  return Math.random();
}

export class Star {
  public info: StarInfo;

  constructor(props: StarProps) {
    this.info = this.init(props);
  }

  private init(props: StarProps): StarInfo {
    const info = {
      ...this.createInfo(props).static,
      ...this.createInfo(props).state,
    };

    return info;
  }

  public reset(props: StarProps) {
    this.info = {
      ...this.info,
      ...this.createInfo(props).state,
    };
  }

  private createInfo(props: StarProps) {
    return {
      static: {
        color: props.color,
        sparkle: props.sparkle,
      },
      state: {
        position: this.getRandomPosition(props.pSize),
        size: this.getRandomAtt(props.size),
        lifeCycle: this.getRandomAtt(props.lifeCycle),
        createdAt: performance.now(),
      },
    };
  }

  private getRandomPosition(range: pSize): Position {
    return {
      x: random() * range.width,
      y: random() * range.height,
    };
  }

  private getRandomAtt<T extends MinMax>(att: T): number {
    return att.min + random() * (att.max - att.min);
  }
}
