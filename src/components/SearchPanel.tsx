import React from 'react';

export const SearchPanel: React.FC<{ onSubmit: (start: string, end: string) => void }> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit('gate_1', 'block_a_variable');
  };

  return (
    <div className="search-panel" style={{ padding: '20px', textAlign: 'center' }}>
      <h2>출발지와 목적지를 선택하세요</h2>
      <form onSubmit={handleSubmit}>
        <select defaultValue="gate_1" style={{ padding: '10px', margin: '5px' }}>
          <option value="gate_1">1번 게이트</option>
          <option value="away_gate">원정석 게이트</option>
        </select>
        <select defaultValue="block_a_variable" style={{ padding: '10px', margin: '5px' }}>
          <option value="block_a_variable">가변석 A블록</option>
          <option value="block_w">본부석 W블록</option>
        </select>
        <button type="submit" style={{ padding: '10px 20px', background: '#502878', color: '#fff', border: 'none' }}>
          경로 찾기
        </button>
      </form>
    </div>
  );
};