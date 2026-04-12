import type { pSize, StarConfig } from "../type";
import type { Star } from "./Star";

interface StarFieldProps {
  starConfigs: StarConfig[];
  pSize: pSize;
}

interface StarRuntimeConfig extends StarConfig {
  maxCount: number;
}

export class StarField {
  private stars: Star[] = [];
  private runtimeConfigs: StarRuntimeConfig[] = [];

  // 리사이즈 이벤트 대응용 컨스트럭터
  // 부모 요소 크기 변경시 density 기반 최대 개수 조절
  // 각 별은 absol 기반 고정 위치
  constructor(props: StarFieldProps) {
    const { pSize, starConfigs } = props;
    const { height, width } = pSize;
    const area = width * height;

    this.runtimeConfigs = starConfigs.map((config) => ({
      ...config,
      maxCount: area * config.density,
    }));
  }

  // 과연 올바른 해결인가?
  // 그리고 리사이즈 마다 constructor 호출이면 매번 새로운 this.stars 생성 아닌가?
  // 리사이즈 되어도 객체는 유지 필요
  // 유동적인 값 참조 필요함
}
