import { Star } from "../class/Star";
import type { StarBucket, StarConfig } from "../type";

export class StarStore {
  buckets: StarBucket[];
  private canvasSize: number;

  constructor(starConfigs: StarConfig[], canvasSize: number) {
    this.canvasSize = canvasSize;
    this.buckets = this.createBuckets(starConfigs);
  }

  private createBuckets(starConfigs: StarConfig[]): StarBucket[] {
    return starConfigs.map((config) => this.createBucket(config));
  }

  private createBucket(config: StarConfig): StarBucket {
    return {
      config,
      stars: this.createStars(config),
    };
  }

  createStars(starConfig: StarConfig): Star[] {
    const maxCount = this.getMaxCount(starConfig.density);
    return Array.from({ length: maxCount }, () => new Star(starConfig));
  }

  private getMaxCount(density: number) {
    return Math.floor((this.canvasSize / 1000) * density);
  }

  update(now: number) {
    for (const bucket of this.buckets) {
      for (const star of bucket.stars) {
        const { createdAt, lifeCycle } = star.info;
        const age = now - createdAt;

        // console.log(age, lifeCycle);

        if (age >= lifeCycle * 1000) {
          star.reset(bucket.config);
        }
      }
    }
  }
}
