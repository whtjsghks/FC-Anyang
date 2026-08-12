import { useState, useEffect } from 'react'; // ✅ useEffect 추가
import type { StepData, IRouteApiService} from './types'; //
import { LocalJsonRouteAdapter } from './services'; //
import { SearchPanel } from './components/SearchPanel'; //[cite: 1]
import { RouteViewer } from './components/RouteViewer'; //[cite: 1]

// [의존성 주입] 컨테이너 외부에서 구현체를 생성 (결합도 최소화)[cite: 1]
const routeApiService: IRouteApiService = new LocalJsonRouteAdapter(); //[cite: 1]

export default function WayfinderContainer() { //[cite: 1]
  // [Model] 상태 관리 영역[cite: 1]
  const [routeData, setRouteData] = useState<StepData[]>([]); //[cite: 1]
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0); //[cite: 1]
  const [isLoading, setIsLoading] = useState<boolean>(false); //[cite: 1]

  // ✅ [추가된 로직] 경로 데이터가 들어오면 바로 이미지 프리로딩 시작
  useEffect(() => {
    // 경로 데이터가 비어있으면 실행하지 않음
    if (!routeData || routeData.length === 0) return;

    // StepData에서 이미지 주소(baseImageUrl)만 추출
    // (주의: StepData 타입에 정의된 실제 이미지 속성명에 맞게 'baseImageUrl'을 수정해 주세요)
    const imagesToPreload = routeData.map((step) => step.baseImageUrl);

    imagesToPreload.forEach((url) => {
      if (url) { // 이미지 경로가 존재하는 경우에만 다운로드
        const img = new Image();
        img.src = url;
      }
    });
  }, [routeData]); // routeData가 업데이트될 때마다 실행됨

  // [Controller] 로직: 경로 검색 실행[cite: 1]
  const handleSearch = async (startId: string, endId: string) => { //[cite: 1]
    setIsLoading(true); //[cite: 1]
    try {
      const data = await routeApiService.fetchRouteData(startId, endId); //[cite: 1]
      setRouteData(data); //[cite: 1]
      setCurrentStepIndex(0); //[cite: 1]
    } catch (error) { //[cite: 1]
      alert("경로 데이터를 불러오는 데 실패했습니다."); //[cite: 1]
    } finally { //[cite: 1]
      setIsLoading(false); //[cite: 1]
    }
  }; //[cite: 1]

  // [Controller] 로직: 이전/다음 단계 이동[cite: 1]
  const handleNext = () => { //[cite: 1]
    if (currentStepIndex < routeData.length - 1) setCurrentStepIndex(prev => prev + 1); //[cite: 1]
  }; //[cite: 1]
  const handlePrev = () => { //[cite: 1]
    if (currentStepIndex > 0) setCurrentStepIndex(prev => prev - 1); //[cite: 1]
  }; //[cite: 1]

  const handleReset = () => { //[cite: 1]
    setRouteData([]); //[cite: 1]
    setCurrentStepIndex(0); //[cite: 1]
  } //[cite: 1]

  // 렌더링 분기[cite: 1]
  if (isLoading) return <div style={{ textAlign: 'center', padding: '50px' }}>로딩 중...</div>; //[cite: 1]

  return ( //[cite: 1]
      <main className="w-full min-h-screen bg-white p-0 m-0"> {/*[cite: 1] */}
        {routeData.length === 0 ? ( //[cite: 1]
          <SearchPanel onSubmit={handleSearch} /> //[cite: 1]
        ) : ( //[cite: 1]
          <RouteViewer  //[cite: 1]
            stepData={routeData[currentStepIndex]} //[cite: 1]
            onNext={handleNext} //[cite: 1]
            onPrev={handlePrev} //[cite: 1]
            onReset={handleReset} //[cite: 1]
            isFirst={currentStepIndex === 0} //[cite: 1]
            isLast={currentStepIndex === routeData.length - 1} //[cite: 1]
          /> //[cite: 1]
        )} {/*[cite: 1] */}
      </main> //[cite: 1]
  ); //[cite: 1]
} //[cite: 1]