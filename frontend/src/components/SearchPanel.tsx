import React, { useState } from 'react';
import { Map, Sofa, ChevronDown, MapPin, Search, Ticket } from 'lucide-react';
import { SEAT_MAP } from '../../public/data/routes'; // 💡 routes.ts 파일 경로에 맞게 임포트

interface SearchPanelProps {
  onSubmit: (startId: string, endId: string) => void;
}

export const SearchPanel: React.FC<SearchPanelProps> = ({ onSubmit }) => {
  const [startPoint, setStartPoint] = useState<string>('출발지점');
  const [ticketType, setTicketType] = useState<string>('좌석권종');
  const [seatZone, setSeatZone] = useState<string>('좌석구역');

  const handleTicketTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTicketType(e.target.value);
    setSeatZone('좌석구역');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (startPoint === '출발지점') {
      alert("출발지점을 선택해 주세요!");
      return;
    }

    if (ticketType === '좌석권종' || seatZone === '좌석구역') {
      alert("좌석 권종과 구역을 모두 선택해 주세요!");
      return;
    }
    
    onSubmit(startPoint, seatZone);
  };

  return (
    <div className="w-full max-w-md mx-auto min-h-screen bg-[#111111] text-white">
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

      <div className="px-6 pt-16 pb-8">
        <h1 className="text-2xl font-bold text-center mb-6 tracking-tight">경기장 길찾기</h1>

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

        <form onSubmit={handleSubmit} className="space-y-4">
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
              <option value="firststanding">퍼스트 스탠딩</option>
              <option value="first">퍼스트석</option>
              <option value="standing">스탠딩석</option>
              <option value="supporters">서포터즈석</option>
              <option value="harrington">해링턴플레이스존</option>
              <option value="general">일반 지정석(2층)</option>
              <option value="general_2f">일반 자유석(2층)</option>
              <option value="variable">가변석</option>
              <option value="tables">테이블석</option>
              <option value="picnic">피크닉존</option>
              <option value="neutral">중립 응원석</option>
              <option value="away">원정석</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Sofa className="w-5 h-5 text-[#502878]" />
            </div>
            <select
              value={seatZone}
              onChange={(e) => setSeatZone(e.target.value)}
              disabled={ticketType === '좌석권종'}
              className={`w-full bg-[#1a1a1a] text-white text-base pl-12 pr-12 py-4 rounded-xl border border-gray-800 appearance-none focus:outline-none focus:border-[#502878] focus:ring-1 focus:ring-[#502878] transition-all ${ticketType === '좌석권종' ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <option value="좌석구역" disabled hidden>좌석구역</option>
              {ticketType !== '좌석권종' && SEAT_MAP[ticketType]?.map((zone) => (
                <option key={zone.id} value={zone.id}>
                  {zone.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
          </div>

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