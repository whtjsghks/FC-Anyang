import React from 'react';
import type { StepData, IOverlayStrategy } from '../types';

const PhotoRenderer: React.FC<{ imageUrl: string }> = ({ imageUrl }) => (
  <div style={{ width: '100%', height: '300px', backgroundColor: '#ddd', position: 'relative' }}>
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>
      [배경 사진 영역: {imageUrl}]
    </div>
  </div>
);

interface RouteViewerProps {
  stepData: StepData;
  overlayStrategy: IOverlayStrategy;
  onNext: () => void;
  onPrev: () => void;
  onReset: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export const RouteViewer: React.FC<RouteViewerProps> = ({ stepData, overlayStrategy, onNext, onPrev, onReset, isFirst, isLast }) => {
  return (
    <div className="route-viewer" style={{ maxWidth: '400px', margin: '0 auto', border: '1px solid #ccc' }}>

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
        {overlayStrategy.renderOverlay(stepData.arrowType)}
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