import React from 'react';
import type { StepData } from '../types';

// 💡 텍스트 대신 실제 <img> 태그를 사용하도록 수정
const PhotoRenderer: React.FC<{ imageUrl: string }> = ({ imageUrl }) => (
  <div style={{ width: '100%', height: '300px', backgroundColor: '#ddd', position: 'relative', overflow: 'hidden' }}>
    <img 
      src={imageUrl} 
      alt="경로 안내 이미지" 
      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
      // 이미지를 찾을 수 없을 때 엑스박스 대신 대체 텍스트나 기본 배경을 띄우는 에러 처리
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = 'none';
        if ((e.target as HTMLImageElement).parentElement) {
          const fallbackDiv = document.createElement('div');
          fallbackDiv.style.width = '100%';
          fallbackDiv.style.height = '100%';
          fallbackDiv.style.display = 'flex';
          fallbackDiv.style.alignItems = 'center';
          fallbackDiv.style.justifyContent = 'center';
          fallbackDiv.style.color = '#666';
          fallbackDiv.innerText = `[이미지 없음: ${imageUrl}]`;
          (e.target as HTMLImageElement).parentElement?.appendChild(fallbackDiv);
        }
      }}
    />
  </div>
);

interface RouteViewerProps {
  stepData: StepData;
  onNext: () => void;
  onPrev: () => void;
  onReset: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export const RouteViewer: React.FC<RouteViewerProps> = ({ stepData, onNext, onPrev, onReset, isFirst, isLast }) => {
  return (
    <div className="route-viewer" style={{ maxWidth: '400px', margin: '0 auto', border: '1px solid #ccc', position: 'relative' }}>

      <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 20 }}>
        <button 
          onClick={onReset} 
          style={{ padding: '8px 12px', background: 'rgba(255, 255, 255, 0.8)', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          🔄 처음으로
        </button>
      </div>

      <div style={{ position: 'relative' }}>
        <PhotoRenderer imageUrl={stepData.baseImageUrl} />
      </div>
      <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f9f9f9', minHeight: '80px' }}>
        <h3>{stepData.locationName}</h3>
        <p>{stepData.instructionText}</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
        <button onClick={onPrev} disabled={isFirst} style={{ padding: '10px' }}>이전</button>
        <button onClick={onNext} disabled={isLast} style={{ padding: '10px' }}>다음</button>
      </div>
    </div>
  );
};