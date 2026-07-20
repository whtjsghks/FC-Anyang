import React, { useState } from 'react';
import { Map, Sofa, ChevronDown, MapPin, Search, Ticket } from 'lucide-react';

interface SearchPanelProps {
  onSubmit: (startId: string, endId: string) => void;
}

// 💡 좌석 권종에 따른 하위 구역 데이터 매핑
const SEAT_MAP: Record<string, { id: string; label: string }[]> = {
  general: [
    { id: 'gen_1-17', label: '지정석 1번-17번' },
    { id: 'gen_18-55', label: '지정석 18번-55번' },
    { id: 'gen_56-105', label: '지정석 56번-105번' },
    { id: 'gen_106-160', label: '지정석 106번-160번' },
    { id: 'gen_2f', label: '2층 자유석' },
    { id: 'gen_s', label: '남측 자유석' },
  ],
  variable: [
    { id: 'var_r1', label: 'R1' },
    { id: 'var_r2', label: 'R2' },
    { id: 'var_r3', label: 'R3' },
    { id: 'var_r4', label: 'R4' },
    { id: 'var_r5', label: 'R5' },
    { id: 'var_r6', label: 'R6' },
    { id: 'var_r7', label: 'R7' },
    { id: 'var_r8', label: 'R8' },
    { id: 'var_r9', label: 'R9' },
    { id: 'var_r15', label: 'R15' },
    { id: 'var_r16', label: 'R16' },
    { id: 'var_r17', label: 'R17' },
    { id: 'var_r18', label: 'R18' },
    { id: 'var_r19', label: 'R19' },
    { id: 'var_r20', label: 'R20' },
    { id: 'var_r21', label: 'R21' },
    { id: 'var_r22', label: 'R22' },
    { id: 'var_r23', label: 'R23' },
    { id: 'var_r24', label: 'R24' },
    { id: 'var_r25', label: 'R25' },
    { id: 'var_r26', label: 'R26' },
  ],
  supporters: [
    { id: 'sup_f1', label: 'F1' },
    { id: 'sup_f2', label: 'F2' },
    { id: 'sup_f3', label: 'F3' },
    { id: 'sup_f4', label: 'F4' },
    { id: 'sup_f5', label: 'F5' },
    { id: 'sup_f6', label: 'F6' },
    { id: 'sup_f7', label: 'F7' },
    { id: 'sup_s1', label: 'S1' },
    { id: 'sup_s2', label: 'S2' },
    { id: 'sup_s3', label: 'S3' },
    { id: 'sup_r10', label: 'R10' },
    { id: 'sup_r11', label: 'R11' },
    { id: 'sup_r12', label: 'R12' },
    { id: 'sup_r13', label: 'R13' },
    { id: 'sup_r14', label: 'R14' },
  ],
  tables: [
    { id: 'table_t3', label: 'T3' },
  ],
  away: [
    { id: 'away', label: '원정석' },
  ],
  picnic: [
    { id: 'picnic', label: '피크닉존' },
  ],
  neutral: [
    { id: 'neutral', label: '중립 응원석' },
  ],
};

export const SearchPanel: React.FC<SearchPanelProps> = ({ onSubmit }) => {
  const [startPoint, setStartPoint] = useState<string>('출발지점');
  const [ticketType, setTicketType] = useState<string>('좌석권종');
  const [seatZone, setSeatZone] = useState<string>('좌석구역');

  // 좌석 권종 변경 핸들러
  const handleTicketTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTicketType(e.target.value);
    setSeatZone('좌석구역'); // 권종이 바뀌면 기존 구역 선택 초기화
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // 1. 출발지점 필수 선택 검사
    if (startPoint === '출발지점') {
      alert("출발지점을 선택해 주세요!");
      return;
    }

    // 2. 도착지점(좌석) 필수 선택 검사
    if (ticketType === '좌석권종' || seatZone === '좌석구역') {
      alert("좌석 권종과 구역을 모두 선택해 주세요!");
      return;
    }
    
    // 최종적으로 상위 컴포넌트로 데이터 전달 (최종 도착지점은 상세 구역 id를 전달)
    onSubmit(startPoint, seatZone);
  };

  return (
    <div className="w-full max-w-md mx-auto min-h-screen bg-[#111111] text-white">
      {/* 상단 엠블럼 배경 및 영역 */}
      <div className="w-full bg-[#502878] pt-12 pb-10 flex justify-center relative rounded-b-[2.5rem] shadow-lg shadow-[#502878]/20">
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 w-24 h-24 bg-[#111111] rounded-full p-2 flex items-center justify-center border-4 border-[#111111] shadow-xl z-10">
          <img 
            src="/fc-anyang-emblem.png" 
            alt="FC 안양" 
            className="w-full h-full object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              if ((e.target as HTMLImageElement).parentElement) {
                (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="text-xs font-bold text-[#502878] text-center">ANYANG</span>';
              }
            }}
          />
        </div>
      </div>

      {/* 본문 영역 */}
      <div className="px-6 pt-16 pb-8">
        <h1 className="text-2xl font-bold text-center mb-6 tracking-tight">경기장 길찾기</h1>

        {/* 상단 퀵 버튼 2개 */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button type="button" className="flex flex-col items-center justify-center bg-[#1e1e1e] border border-gray-800 py-4 rounded-2xl hover:bg-[#2a2a2a] active:scale-95 transition-all">
            <Map className="w-6 h-6 text-gray-300 mb-2" strokeWidth={1.5} />
            <span className="text-sm font-medium text-gray-300">지도</span>
          </button>
          <button type="button" className="flex flex-col items-center justify-center bg-[#1e1e1e] border border-gray-800 py-4 rounded-2xl hover:bg-[#2a2a2a] active:scale-95 transition-all">
            <Sofa className="w-6 h-6 text-gray-300 mb-2" strokeWidth={1.5} />
            <span className="text-sm font-medium text-gray-300">좌석정보찾기</span>
          </button>
        </div>

        {/* 검색 폼 */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* 1. 출발지점 */}
          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <MapPin className="w-5 h-5 text-[#502878]" />
            </div>
            <select
              value={startPoint}
              onChange={(e) => setStartPoint(e.target.value)}
              className="w-full bg-[#1a1a1a] text-white text-base pl-12 pr-12 py-4 rounded-xl border border-gray-800 appearance-none focus:outline-none focus:border-[#502878] focus:ring-1 focus:ring-[#502878] transition-all"
            >
              <option value="출발지점" disabled hidden>출발지점</option>
              <option value="main_gate">정문</option>
              <option value="north_gate">북문</option>
              <option value="south_gate">남문</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
          </div>

          {/* 2. 좌석권종 */}
          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Ticket className="w-5 h-5 text-[#502878]" />
            </div>
            <select
              value={ticketType}
              onChange={handleTicketTypeChange}
              className="w-full bg-[#1a1a1a] text-white text-base pl-12 pr-12 py-4 rounded-xl border border-gray-800 appearance-none focus:outline-none focus:border-[#502878] focus:ring-1 focus:ring-[#502878] transition-all"
            >
              <option value="좌석권종" disabled hidden>좌석권종</option>
              <option value="general">일반석</option>
              <option value="variable">가변석</option>
              <option value="supporters">서포터즈석</option>
              <option value="tables">테이블석</option>
              <option value="picnic">피크닉존</option>
              <option value="neutral">중립 응원석</option>
              <option value="away">원정석</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
          </div>

          {/* 3. 좌석구역 (권종에 따라 동적 렌더링) */}
          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Sofa className="w-5 h-5 text-[#502878]" />
            </div>
            <select
              value={seatZone}
              onChange={(e) => setSeatZone(e.target.value)}
              disabled={ticketType === '좌석권종'} // 권종을 선택하기 전에는 비활성화
              className={`w-full bg-[#1a1a1a] text-white text-base pl-12 pr-12 py-4 rounded-xl border border-gray-800 appearance-none focus:outline-none focus:border-[#502878] focus:ring-1 focus:ring-[#502878] transition-all ${ticketType === '좌석권종' ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <option value="좌석구역" disabled hidden>좌석구역</option>
              {ticketType !== '좌석권종' && SEAT_MAP[ticketType].map((zone) => (
                <option key={zone.id} value={zone.id}>
                  {zone.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
          </div>

          {/* 검색 버튼 */}
          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-2 bg-[#502878] hover:bg-[#3a1d59] text-white font-bold text-lg py-4 rounded-xl mt-6 transition-all active:scale-[0.98] shadow-lg shadow-[#502878]/30"
          >
            <Search className="w-5 h-5" />
            <span>경로 찾기</span>
          </button>
        </form>
      </div>
    </div>
  );
};