import type { MinMax, Position, pSize, StarProps } from "../type";

interface StarInfo {
  readonly color: string;
  readonly position: Position;
  readonly lifeCycle: number;
  readonly sparkle: number;
  readonly createdAt: number;
  readonly size: number;
}

function random() {
  return Math.random();
}

export class Star {
  public readonly info: StarInfo;

  constructor(props: StarProps) {
    const color = props.color;
    const position = this.getRandomPosition(props.pSize);
    const size = this.getRandomAtt(props.size);
    const lifeCycle = this.getRandomAtt(props.lifeCycle);
    const sparkle = props.sparkle;
    const createdAt = performance.now();

    this.info = Object.freeze({
      color,
      position: Object.freeze(position),
      size,
      lifeCycle,
      sparkle,
      createdAt,
    });
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
