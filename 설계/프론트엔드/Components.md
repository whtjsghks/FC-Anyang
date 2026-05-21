📁 App (최상위 앱 컨테이너)
- 📁 WayfinderContainer (핵심 상태 관리 및 제어 - Controller 역할)
    - 📄 SearchPanel (검색 화면 컴포넌트 - View 역할)
        - LocationSelectBox (출발지/도착지 드롭다운)
        - SubmitButton (경로 찾기 실행 버튼)
    - 📄 RouteViewer (단계별 안내 화면 컴포넌트 - View 역할)
        - PhotoRenderer (현장 배경 사진 렌더링)
        - ArrowOverlay (SVG 방향 화살표 오버레이 렌더링)
        - InstructionBoard (하단 안내 텍스트 표시)
        - NavigationControls (이전/다음 버튼 및 스와이프 감지)

###  컨테이너 컴포넌트
- WayfinderContainer : 백엔드와의 통신을 담당하고 하위 컴포넌트들에게 데이터 전송
  - 관리하는 상태:
      - routeData: 전체 경로 JSON 데이터
      - currentStepIndex: 사용자가 현재 보고 있는 사진의 순서
      - isLoading: 데이터 로딩 상태
  - 동작 방식: SearchPanel에서 이벤트가 발생하면 API를 호출해 routeData를 채우고 하위의 RouteViewer에게 현재 단계에 해당하는 사진과 화살표 데이터만 잘라서 전달

 ### UI 담당 컴포넌트
 - SearchPanel: 출발지와 도착지를 선택할 수 있는 폼 구조만 렌더링
 - PhotoRenderer: 전달받은 이미지를 화면 중앙에 띄워줌
 - ArrowOverlay: 전달받은 방향 데이터에 따라 화살표 아이콘을 사진 중앙에 띄워줌
 - InstructionBoard: 길찾기에 도움을 주는 텍스트를 표시
 - NavigationControls: 사용자의 터치나 클릭을 감지하여 상위 컨테이너에게 신호를 보냄


<img width="705" height="696" alt="frontend_architecture drawio" src="https://github.com/user-attachments/assets/eb056b14-89c5-4c41-8e17-e2449b04de53" />
