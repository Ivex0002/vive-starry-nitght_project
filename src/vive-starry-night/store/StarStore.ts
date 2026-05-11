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
      stars: this.createBucketStars(config),
    };
  }

  private createBucketStars(starConfig: StarConfig): Star[] {
    const maxCount = this.getMaxCount(starConfig.density);
    return this.createStars(maxCount, starConfig);
  }

  private createStars(count: number, config: StarConfig) {
    return Array.from({ length: count }, () => new Star(config));
  }

  private getMaxCount(density: number) {
    return Math.floor((this.canvasSize / 1000) * density);
  }

  public update(now: number) {
    for (const bucket of this.buckets) {
      for (const star of bucket.stars) {
        const { createdAt, lifeCycle } = star.info;
        const age = now - createdAt;

        if (age >= lifeCycle * 1000) {
          star.reset(bucket.config);
        }
      }
    }
  }

  public onResize(canvasSize: number) {
    this.canvasSize = canvasSize;

    for (const bucket of this.buckets) {
      const targetCount = this.getMaxCount(bucket.config.density);
      const diff = targetCount - bucket.stars.length;

      if (diff > 0) {
        bucket.stars.push(...this.createStars(diff, bucket.config));
      } else if (diff < 0) {
        bucket.stars.length = targetCount;
      }
    }
  }
}
