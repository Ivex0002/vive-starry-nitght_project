import type { pSize } from "../type";
import type { Star } from "./Star";

interface StarFieldProps {
  // 여러 색상, 라이프사이클 등 다양한 커스터마이징을 위한 Star 모음
  // 인자를 안주면 디폴트값, 인자를 주면 그것으로 대체(덮어쓰기)
  starFactory: () => Star;
  pSize: pSize;
  density: number;
}

export class StarField {
  private stars: Star[] = [];
  private maxCount: number;

  constructor(props: StarFieldProps) {
    const { pSize, density } = props;
    const { height, width } = pSize;
    this.maxCount = height * width * density;
  }

  // 과연 올바른 해결인가?
  // 그리고 리사이즈 마다 constructor 호출이면 매번 새로운 this.stars 생성 아닌가?
  // 리사이즈 되어도 객체는 유지 필요
  // 유동적인 값 참조 필요함
  //   private getMaxCount() {
  //     return this.size.width * this.size.height * this.density;
  //   }
}
