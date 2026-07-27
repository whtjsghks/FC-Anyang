import type { IRouteApiService, StepData } from '../types';
import { getRouteSteps } from '../../public/data/routes';

// [어댑터 패턴] fetch 대신 routes.ts의 데이터를 직접 읽어오는 구현체로 교체
export class LocalJsonRouteAdapter implements IRouteApiService {
  async fetchRouteData(startId: string, endId: string): Promise<StepData[]> {
    console.log(`[Local Data] Fetching route from ${startId} to ${endId}...`);
    
    try {
      // 1. routes.ts에 만들어둔 함수를 통해 경로 배열을 바로 가져옵니다.
      const data = getRouteSteps(startId, endId);

      const routeKey = `${startId}_to_${endId}`;
      console.log("🔍 내가 찾으려는 키 이름:", routeKey);
      console.log("📦 불러온 데이터 길이:", data.length);

      // 2. 해당 경로 데이터가 존재하면(배열이 비어있지 않으면) 반환하고, 없으면 에러를 던집니다.
      if (data && data.length > 0) {
        return data;
      } else {
        throw new Error(`해당 경로 데이터(${routeKey})를 찾을 수 없습니다.`);
      }
    } catch (error) {
      console.error(error);
      throw error; // App.tsx (WayfinderContainer)의 catch 블록으로 에러를 넘김
    }
  }
}