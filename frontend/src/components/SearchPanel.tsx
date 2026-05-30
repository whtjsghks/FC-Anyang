import React, { useState } from 'react';
import { Map, Sofa, ChevronDown, Ticket, MapPin, Search, Store } from 'lucide-react';

interface SearchPanelProps {
  onSubmit: (startId: string, endId: string) => void;
}

export const SearchPanel: React.FC<SearchPanelProps> = ({ onSubmit }) => {
  const [ticketType, setTicketType] = useState<string>('좌석권종');
  const [seatZone, setSeatZone] = useState<string>('좌석구역');
  const [startPoint, setStartPoint] = useState<string>('출발지점');
  const [endPoint, setEndPoint] = useState<string>('도착지점'); 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // 🚨 1. 출발지점 필수 선택 검사
    if (startPoint === '출발지점') {
      alert("출발지점을 선택해 주세요!");
      return;
    }

    let finalEndId = '';

    // 🚨 2. 목적지 유효성 검사 (편의시설 vs 좌석)
    if (endPoint !== '도착지점') {
      // 편의시설을 선택한 경우
      finalEndId = endPoint; 
    } else {
      // 편의시설을 선택하지 않았다면 좌석 정보가 모두 선택되었는지 확인
      if (ticketType === '좌석권종' || seatZone === '좌석구역') {
        alert("도착지점(편의시설)을 선택하거나, 좌석 권종 및 구역을 모두 선택해 주세요!");
        return;
      }
      finalEndId = `${ticketType}_${seatZone}`; // 예: 'variable_a_block'
    }
    
    // 최종적으로 App.tsx로 데이터 전달 (예: 'gate_1', 'variable_a_block')
    onSubmit(startPoint, finalEndId);
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
          {/* 1. 좌석권종 */}
          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Ticket className="w-5 h-5 text-[#502878]" />
            </div>
            <select
              value={ticketType}
              onChange={(e) => {
                setTicketType(e.target.value);
                setEndPoint('도착지점'); // 좌석 선택 시 편의시설 선택 초기화
              }}
              className="w-full bg-[#1a1a1a] text-white text-base pl-12 pr-12 py-4 rounded-xl border border-gray-800 appearance-none focus:outline-none focus:border-[#502878] focus:ring-1 focus:ring-[#502878] transition-all"
            >
              <option value="좌석권종" disabled hidden>좌석권종</option>
              <option value="general">일반석</option>
              <option value="variable">가변석</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
          </div>

          {/* 2. 좌석구역 */}
          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Sofa className="w-5 h-5 text-[#502878]" />
            </div>
            <select
              value={seatZone}
              onChange={(e) => {
                setSeatZone(e.target.value);
                setEndPoint('도착지점'); // 좌석 선택 시 편의시설 선택 초기화
              }}
              className="w-full bg-[#1a1a1a] text-white text-base pl-12 pr-12 py-4 rounded-xl border border-gray-800 appearance-none focus:outline-none focus:border-[#502878] focus:ring-1 focus:ring-[#502878] transition-all"
            >
              <option value="좌석구역" disabled hidden>좌석구역</option>
              <option value="a_block">A블록</option>
              <option value="w_block">W블록</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
          </div>

          {/* 3. 출발지점 */}
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
              
              <optgroup label="게이트 (입장 시)" className="bg-[#2a2a2a] text-gray-400 font-semibold">
                <option value="gate_1" className="text-white font-normal">1번 게이트</option>
                <option value="away_gate" className="text-white font-normal">원정석 게이트</option>
              </optgroup>
              
              <optgroup label="좌석 (관람 중)" className="bg-[#2a2a2a] text-gray-400 font-semibold mt-2">
                <option value="variable_a_block" className="text-white font-normal">가변석 A블록</option>
                <option value="w_block" className="text-white font-normal">본부석 W블록</option>
              </optgroup>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
          </div>

          {/* 4. 도착지점 (편의시설) */}
          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Store className="w-5 h-5 text-[#502878]" />
            </div>
            <select
              value={endPoint}
              onChange={(e) => {
                setEndPoint(e.target.value);
                setTicketType('좌석권종'); // 편의시설 선택 시 좌석 선택 초기화
                setSeatZone('좌석구역');
              }}
              className="w-full bg-[#1a1a1a] text-white text-base pl-12 pr-12 py-4 rounded-xl border border-gray-800 appearance-none focus:outline-none focus:border-[#502878] focus:ring-1 focus:ring-[#502878] transition-all"
            >
              <option value="도착지점" disabled hidden>도착지점 (편의시설 선택 가능)</option>
              <option value="toilet_north">북측 화장실</option>
              <option value="toilet_south">남측 화장실</option>
              <option value="convenience_store">편의점</option>
              <option value="food_truck_zone">푸드트럭 존</option>
              <option value="md_shop">MD 샵</option>
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