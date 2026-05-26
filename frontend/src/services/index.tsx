import React from 'react';
import type { IRouteApiService, IOverlayStrategy, StepData } from '../types';

// [어댑터 패턴] FastAPI와 통신하는 구체적인 구현체 (현재는 MVP 테스트용 Mock 데이터 반환)
export class FastApiRouteAdapter implements IRouteApiService {
  async fetchRouteData(startId: string, endId: string): Promise<StepData[]> {
    console.log(`[API Call] Fetching route from ${startId} to ${endId}...`);
    // 실제 환경에서는 fetch(`api/routes?start=${startId}&end=${endId}`) 호출
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            step: 1,
            locationName: "1번 게이트",
            baseImageUrl: "/assets/images/gate1.jpg",
            arrowType: "straight",
            instructionText: "1번 게이트 입장 후 약 50m 직진하세요.",
          },
          {
            step: 2,
            locationName: "푸드트럭 앞 교차로",
            baseImageUrl: "/assets/images/foodtruck.jpg",
            arrowType: "left",
            instructionText: "푸드트럭 앞 교차로에서 좌회전하세요.",
          },
          {
            step: 3,
            locationName: "가변석 출입구",
            baseImageUrl: "/assets/images/block_a.jpg",
            arrowType: "straight",
            instructionText: "가변석 A블록 출입구에 도착했습니다.",
          }
        ]);
      }, 500); // 네트워크 지연 시뮬레이션
    });
  }
}

// [전략 패턴] SVG 화살표를 렌더링하는 구체적인 알고리즘(전략)
export class SVGArrowStrategy implements IOverlayStrategy {
  renderOverlay(arrowType: string): React.ReactNode {
    const arrowStyles = {
      position: 'absolute' as const,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '4rem',
      color: '#FCANYANG_PURPLE', // 구단 컬러 적용
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
      zIndex: 10,
    };

    switch (arrowType) {
      case 'left':
        return <div style={arrowStyles}>⬅️</div>; // 실제 환경에서는 정교한 SVG 코드로 교체
      case 'right':
        return <div style={arrowStyles}>➡️</div>;
      case 'straight':
      default:
        return <div style={arrowStyles}>⬆️</div>;
    }
  }
}