import React from "react";

// 도메인 데이터 모델 (UML: RouteData, LocationNode, RouteEdge 등 통합)
export interface StepData {
  step: number;
  locationName: string;
  baseImageUrl: string;
  arrowType: 'straight' | 'left' | 'right';
  instructionText: string;
}

// [DIP] 백엔드 API 통신을 위한 인터페이스 추상화
export interface IRouteApiService {
  fetchRouteData(startId: string, endId: string): Promise<StepData[]>;
}

// [OCP] 오버레이 렌더링을 위한 전략 패턴 인터페이스 추상화
export interface IOverlayStrategy {
  renderOverlay(arrowType: string): React.ReactNode;
}