import type { IRouteApiService, StepData } from '../types';

// [어댑터 패턴] 기존 백엔드(FastAPI) 대신 로컬 JSON 파일을 읽어오는 구현체로 교체됨
export class LocalJsonRouteAdapter implements IRouteApiService {
  async fetchRouteData(startId: string, endId: string): Promise<StepData[]> {
    console.log(`[Local JSON] Fetching route from ${startId} to ${endId}...`);
    
    try {
      // 1. public/data/routes.json 파일을 불러옵니다.
      const response = await fetch('/data/routes.json');
      if (!response.ok) {
        throw new Error('데이터를 불러오지 못했습니다.');
      }
      const data = await response.json();

      // 2. 출발지와 도착지를 조합하여 JSON 안의 키(Key) 값을 만듭니다. (예: "gate_1_to_block_a_variable")
      const routeKey = `${startId}_to_${endId}`;

      console.log("🔍 내가 찾으려는 키 이름:", routeKey);
      console.log("📦 JSON 파일 안에 들어있는 데이터들:", data);

      // 3. 해당 경로 데이터가 존재하면 반환하고, 없으면 에러를 던집니다.
      if (data[routeKey]) {
        return data[routeKey];
      } else {
        throw new Error('해당 경로 데이터를 찾을 수 없습니다.');
      }
    } catch (error) {
      console.error(error);
      throw error; // App.tsx의 catch 블록으로 에러를 넘김
    }
  }
}
