import React, { useState } from 'react';
import type { StepData, IRouteApiService, IOverlayStrategy } from './types';
import { LocalJsonRouteAdapter, SVGArrowStrategy } from './services';
import { SearchPanel } from './components/SearchPanel';
import { RouteViewer } from './components/RouteViewer';

// [의존성 주입] 컨테이너 외부에서 구현체를 생성 (결합도 최소화)
const routeApiService: IRouteApiService = new LocalJsonRouteAdapter();
const arrowOverlayStrategy: IOverlayStrategy = new SVGArrowStrategy();

export default function WayfinderContainer() {
  // [Model] 상태 관리 영역
  const [routeData, setRouteData] = useState<StepData[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // [Controller] 로직: 경로 검색 실행
  const handleSearch = async (startId: string, endId: string) => {
    setIsLoading(true);
    try {
      const data = await routeApiService.fetchRouteData(startId, endId);
      setRouteData(data);
      setCurrentStepIndex(0);
    } catch (error) {
      alert("경로 데이터를 불러오는 데 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  // [Controller] 로직: 이전/다음 단계 이동
  const handleNext = () => {
    if (currentStepIndex < routeData.length - 1) setCurrentStepIndex(prev => prev + 1);
  };
  const handlePrev = () => {
    if (currentStepIndex > 0) setCurrentStepIndex(prev => prev - 1);
  };

  const handleReset = () => {
    setRouteData([]);
    setCurrentStepIndex(0);
  }

  // 렌더링 분기
  if (isLoading) return <div style={{ textAlign: 'center', padding: '50px' }}>로딩 중...</div>;

  return (
      <main style={{ padding: '20px' }}>
        {routeData.length === 0 ? (
          <SearchPanel onSubmit={handleSearch} />
        ) : (
          <RouteViewer 
            stepData={routeData[currentStepIndex]}
            overlayStrategy={arrowOverlayStrategy}
            onNext={handleNext}
            onPrev={handlePrev}
            onReset={handleReset}
            isFirst={currentStepIndex === 0}
            isLast={currentStepIndex === routeData.length - 1}
          />
        )}
      </main>
  );
}