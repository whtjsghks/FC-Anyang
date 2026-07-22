// src/data/routes.ts
export type StepData = {
  step: number;
  locationName: string;
  baseImageUrl: string;
  arrowType?: string;
  instructionText?: string;
};

// 1. 공통 경로 정의 (북문 ~ GATE3까지 Step 1~7)
const baseNorthto3Route = [
  { step: 1, locationName: "북문", baseImageUrl: "/images/north_gate/north_left.jpg" },
  { step: 2, locationName: "북문 주차장", baseImageUrl: "/images/north_gate/n_parking_left.jpg" },
  { step: 3, locationName: "클럽하우스 앞", baseImageUrl: "/images/north_gate/clubhouse.jpg" },
  { step: 4, locationName: "메인 게이트", baseImageUrl: "/images/north_gate/mediaroom.jpg" },
  { step: 5, locationName: "사무국 주차장", baseImageUrl: "/images/north_gate/officelot.jpg" },
  { step: 6, locationName: "티켓 판매처 앞", baseImageUrl: "/images/north_gate/ticketto3.jpg" },
  { step: 7, locationName: "GATE 3", baseImageUrl: "/images/north_gate/n_3.jpg" }
];

// 북문 ~ GATE11
const baseNorthto11Route = [
  { step: 1, locationName: "북문", baseImageUrl: "/images/north_gate/north_right.jpg" },
  { step: 2, locationName: "북문 주차장", baseImageUrl: "/images/north_gate/north_to_11_1.jpg" },
  { step: 3, locationName: "GATE 11", baseImageUrl: "/images/north_gate/north_to_11_2.jpg" },
  { step: 4, locationName: "GATE 11 계단", baseImageUrl: "/images/north_gate/north_to_11_3.jpg" },
  { step: 5, locationName: "중립 응원석 입구", baseImageUrl: "/images/north_gate/north_to_11_4.jpg" },
];

// 북문 ~ 2층 GATE
const baseNorthto2ndGATERoute = [
  { step: 1, locationName: "북문", baseImageUrl: "/images/north_gate/north_right.jpg" },
  { step: 2, locationName: "북문 주차장", baseImageUrl: "/images/north_gate/north_to_11_1.jpg" },
  { step: 3, locationName: "경기장 북쪽", baseImageUrl: "/images/north_gate/north_to_2nd_1.jpg" },
  { step: 4, locationName: "북쪽 조명탑", baseImageUrl: "/images/north_gate/north_to_2nd_2.jpg" },
  { step: 5, locationName: "암벽장", baseImageUrl: "/images/north_gate/north_to_2nd_3.jpg" },
  { step: 6, locationName: "복싱장", baseImageUrl: "/images/north_gate/north_to_2nd_4.jpg" },
  { step: 7, locationName: "안양도시공사", baseImageUrl: "/images/north_gate/north_to_2nd_5.jpg" },
  { step: 8, locationName: "운동장 후문", baseImageUrl: "/images/north_gate/north_to_2nd_6.jpg" },
  { step: 9, locationName: "2층 GATE", baseImageUrl: "/images/north_gate/north_to_2nd_7.jpg" },
];

// 북문 ~ 원정GATE(원정석)
const baseNorthtoAwayRoute = [
  { step: 1, locationName: "북문", baseImageUrl: "/images/north_gate/north_left.jpg" },
  { step: 2, locationName: "북문 주차장", baseImageUrl: "/images/north_gate/n_parking_left.jpg" },
  { step: 3, locationName: "원정 GATE 입구", baseImageUrl: "/images/north_gate/north_to_away_1.jpg" },
  { step: 4, locationName: "원정 GATE", baseImageUrl: "/images/north_gate/north_to_away_2.jpg" },
  { step: 5, locationName: "원정 복도 1", baseImageUrl: "/images/north_gate/north_to_away_3.jpg" },
  { step: 6, locationName: "원정 복도 2", baseImageUrl: "/images/north_gate/north_to_away_4.jpg" },
  { step: 7, locationName: "19번 입구", baseImageUrl: "/images/north_gate/north_to_away_5.jpg" },
  { step: 8, locationName: "원정 복도 3", baseImageUrl: "/images/north_gate/north_to_away_6.jpg" },
  { step: 9, locationName: "원정 복도 4", baseImageUrl: "/images/north_gate/north_to_away_7.jpg" },
  { step: 10, locationName: "18번 입구", baseImageUrl: "/images/north_gate/north_to_away_8.jpg" },
  { step: 11, locationName: "17번 입구", baseImageUrl: "/images/north_gate/north_to_away_9.jpg" }
];

// 2. 도착지 그룹별 추가 경로 정의
const specificRoutes = {
  // F1 ~ F4 그룹 (모두 동일한 끝 경로)
  f1_to_f4: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 9, locationName: "좌석 입구", baseImageUrl: "/images/north_gate/f1_entry.jpg" }
  ],
  // F5 ~ F7 그룹
  f5_to_f7: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 9, locationName: "서포터즈석 뒤", baseImageUrl: "/images/3tof5_1.jpg" },
    { step: 10, locationName: "푸드트럭 앞", baseImageUrl: "/images/3tof5_2.jpg" },
    { step: 11, locationName: "좌석 입구", baseImageUrl: "/images/3tof5_3.jpg" }
  ],
  // R10
  r10: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 9, locationName: "좌석 입구", baseImageUrl: "/images/3tor10_1.jpg" }
  ],
  // R11, R12, S1
  r11_r12_s1: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 9, locationName: "서포터즈석 뒤", baseImageUrl: "/images/3tof5_1.jpg"},
    { step: 10, locationName: "좌석 입구", baseImageUrl: "/images/3tor11_1.jpg"}
  ],
  // R13, S2
  r13_s2: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 9, locationName: "서포터즈석 뒤", baseImageUrl: "/images/3tof5_1.jpg"},
    { step: 10, locationName: "좌석 입구", baseImageUrl: "/images/3tor13_1.jpg"}
  ],
  // R14, S3
  r14_s3: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 9, locationName: "서포터즈석 뒤", baseImageUrl: "/images/3tof5_1.jpg"},
    { step: 10, locationName: "푸드트럭 앞", baseImageUrl: "/images/3tof5_2.jpg" },
    { step: 11, locationName: "좌석 입구", baseImageUrl: "/images/3tor14_1.jpg"}
  ],
  // R9
  r9: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/photozone_right.jpg" },
    { step: 9, locationName: "좌석 입구", baseImageUrl: "/images/3tor9_1.jpg"}
  ],
  // R7, R8
  r7_r8: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/photozone_right.jpg" },
    { step: 9, locationName: "가변석 뒤", baseImageUrl: "/images/behind_r9.jpg"},
    { step: 10, locationName: "좌석 입구", baseImageUrl: "/images/r7.jpg" }
  ],
  // R6
  r6: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/photozone_right.jpg" },
    { step: 9, locationName: "가변석 뒤", baseImageUrl: "/images/behind_r9.jpg"},
    { step: 10, locationName: "2층 계단 앞", baseImageUrl: "/images/gate2.jpg" },
    { step: 11, locationName: "좌석 입구", baseImageUrl: "/images/r6.jpg"}
  ],
  // R4, R5
  r4_r5: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/photozone_right.jpg" },
    { step: 9, locationName: "가변석 뒤", baseImageUrl: "/images/behind_r9.jpg"},
    { step: 10, locationName: "2층 계단 앞", baseImageUrl: "/images/gate2.jpg" },
    { step: 11, locationName: "구령대 계단", baseImageUrl: "/images/center_stairs.jpg"},
    { step: 12, locationName: "구령대", baseImageUrl: "/images/center.jpg"},
    { step: 13, locationName: "좌석 입구", baseImageUrl: "/images/r4.jpg" }
  ],
  // R2, R3
  r2_r3: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/photozone_right.jpg" },
    { step: 9, locationName: "가변석 뒤", baseImageUrl: "/images/behind_r9.jpg"},
    { step: 10, locationName: "2층 계단 앞", baseImageUrl: "/images/gate2.jpg" },
    { step: 11, locationName: "구령대 계단", baseImageUrl: "/images/center_stairs.jpg"},
    { step: 12, locationName: "구령대", baseImageUrl: "/images/center.jpg"},
    { step: 13, locationName: "좌석 입구", baseImageUrl: "/images/r2.jpg"}
  ],
  // R1
  r1: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/photozone_right.jpg" },
    { step: 9, locationName: "가변석 뒤", baseImageUrl: "/images/behind_r9.jpg"},
    { step: 10, locationName: "2층 계단 앞", baseImageUrl: "/images/gate2.jpg" },
    { step: 11, locationName: "구령대 계단", baseImageUrl: "/images/center_stairs.jpg"},
    { step: 12, locationName: "구령대", baseImageUrl: "/images/center.jpg"},
    { step: 13, locationName: "좌석 입구", baseImageUrl: "/images/r1.jpg"}
  ],
  // T3
  t3: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/photozone_right.jpg" },
    { step: 9, locationName: "가변석 뒤", baseImageUrl: "/images/behind_r9.jpg"},
    { step: 10, locationName: "2층 입구 앞", baseImageUrl: "/images/gate2_front.jpg" },
    { step: 11, locationName: "2층 입구", baseImageUrl: "/images/gate2_entry.jpg"},
    { step: 12, locationName: "2층 계단", baseImageUrl: "/images/2nd_stairs.jpg"},
    { step: 13, locationName: "좌석 입구", baseImageUrl: "/images/t3_entry.jpg"},
    { step: 14, locationName: "좌석", baseImageUrl: "/images/t3.jpg"}
  ],
  // R15, R16
  r15_r16: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 9, locationName: "서포터즈석 뒤", baseImageUrl: "/images/3tof5_1.jpg" },
    { step: 10, locationName: "푸드트럭 앞", baseImageUrl: "/images/3tof5_2.jpg" },
    { step: 11, locationName: "좌석 입구 옆", baseImageUrl: "/images/r15_entry.jpg" },
    { step: 12, locationName: "좌석 입구", baseImageUrl: "/images/r15.jpg" }
  ],
  // R17, R18, R19
  r17_to_r19: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 9, locationName: "서포터즈석 뒤", baseImageUrl: "/images/3tof5_1.jpg" },
    { step: 10, locationName: "푸드트럭 앞", baseImageUrl: "/images/3tof5_2.jpg" },
    { step: 11, locationName: "가변석 옆", baseImageUrl: "/images/gate8.jpg" },
    { step: 12, locationName: "가변석 뒤", baseImageUrl: "/images/r17_entry.jpg" },
    { step: 13, locationName: "좌석 입구", baseImageUrl: "/images/r17.jpg" }
  ],
  // R20, R21, R22
  r20_to_r22: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 9, locationName: "서포터즈석 뒤", baseImageUrl: "/images/3tof5_1.jpg" },
    { step: 10, locationName: "푸드트럭 앞", baseImageUrl: "/images/3tof5_2.jpg" },
    { step: 11, locationName: "가변석 옆", baseImageUrl: "/images/gate8.jpg" },
    { step: 12, locationName: "가변석 뒤", baseImageUrl: "/images/r20_entry.jpg" },
    { step: 13, locationName: "좌석 입구", baseImageUrl: "/images/r20.jpg" }
  ],
  // R23, R24, R25
  r23_to_r25: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 9, locationName: "서포터즈석 뒤", baseImageUrl: "/images/3tof5_1.jpg" },
    { step: 10, locationName: "푸드트럭 앞", baseImageUrl: "/images/3tof5_2.jpg" },
    { step: 11, locationName: "가변석 옆", baseImageUrl: "/images/gate8.jpg" },
    { step: 12, locationName: "가변석 뒤", baseImageUrl: "/images/r23_entry.jpg" },
    { step: 13, locationName: "좌석 입구", baseImageUrl: "/images/r23.jpg" }
  ],
  // R26
  r26: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 9, locationName: "서포터즈석 뒤", baseImageUrl: "/images/3tof5_1.jpg" },
    { step: 10, locationName: "푸드트럭 앞", baseImageUrl: "/images/3tof5_2.jpg" },
    { step: 11, locationName: "가변석 옆", baseImageUrl: "/images/gate8.jpg" },
    { step: 12, locationName: "가변석 뒤", baseImageUrl: "/images/behind_r20.jpg" },
    { step: 13, locationName: "가변석 좌측", baseImageUrl: "/images/r26_entry.jpg" },
    { step: 14, locationName: "좌석 입구", baseImageUrl: "/images/r26.jpg" }
  ],
};

// 3. 최종 경로 데이터 조립 (... 배열 전개 연산자 사용)
const routeData = {
  north_gate_to_sup_f1: [...baseNorthto3Route, ...specificRoutes.f1_to_f4],
  north_gate_to_sup_f2: [...baseNorthto3Route, ...specificRoutes.f1_to_f4],
  north_gate_to_sup_f3: [...baseNorthto3Route, ...specificRoutes.f1_to_f4],
  north_gate_to_sup_f4: [...baseNorthto3Route, ...specificRoutes.f1_to_f4],

  north_gate_to_sup_f5: [...baseNorthto3Route, ...specificRoutes.f5_to_f7],
  north_gate_to_sup_f6: [...baseNorthto3Route, ...specificRoutes.f5_to_f7],
  north_gate_to_sup_f7: [...baseNorthto3Route, ...specificRoutes.f5_to_f7],

  north_gate_to_sup_r10: [...baseNorthto3Route, ...specificRoutes.r10],

  north_gate_to_sup_r11: [...baseNorthto3Route, ...specificRoutes.r11_r12_s1],
  north_gate_to_sup_r12: [...baseNorthto3Route, ...specificRoutes.r11_r12_s1],
  north_gate_to_sup_s1: [...baseNorthto3Route, ...specificRoutes.r11_r12_s1],

  north_gate_to_sup_r13: [...baseNorthto3Route, ...specificRoutes.r13_s2],
  north_gate_to_sup_s2: [...baseNorthto3Route, ...specificRoutes.r13_s2],

  north_gate_to_sup_r14: [...baseNorthto3Route, ...specificRoutes.r14_s3],
  north_gate_to_sup_s3: [...baseNorthto3Route, ...specificRoutes.r14_s3],

  north_gate_to_var_r9: [...baseNorthto3Route, ...specificRoutes.r9],

  north_gate_to_var_r7: [...baseNorthto3Route, ...specificRoutes.r7_r8],
  north_gate_to_var_r8: [...baseNorthto3Route, ...specificRoutes.r7_r8],
  
  north_gate_to_var_r6: [...baseNorthto3Route, ...specificRoutes.r6],
  
  north_gate_to_var_r4: [...baseNorthto3Route, ...specificRoutes.r4_r5],
  north_gate_to_var_r5: [...baseNorthto3Route, ...specificRoutes.r4_r5],
  
  north_gate_to_var_r2: [...baseNorthto3Route, ...specificRoutes.r2_r3],
  north_gate_to_var_r3: [...baseNorthto3Route, ...specificRoutes.r2_r3],
  
  north_gate_to_var_r1: [...baseNorthto3Route, ...specificRoutes.r1],

  north_gate_to_var_r15: [...baseNorthto3Route, ...specificRoutes.r15_r16],
  north_gate_to_var_r16: [...baseNorthto3Route, ...specificRoutes.r15_r16],
  
  north_gate_to_var_r17: [...baseNorthto3Route, ...specificRoutes.r17_to_r19],
  north_gate_to_var_r18: [...baseNorthto3Route, ...specificRoutes.r17_to_r19],
  north_gate_to_var_r19: [...baseNorthto3Route, ...specificRoutes.r17_to_r19],
  
  north_gate_to_var_r20: [...baseNorthto3Route, ...specificRoutes.r20_to_r22],
  north_gate_to_var_r21: [...baseNorthto3Route, ...specificRoutes.r20_to_r22],
  north_gate_to_var_r22: [...baseNorthto3Route, ...specificRoutes.r20_to_r22],

  north_gate_to_var_r23: [...baseNorthto3Route, ...specificRoutes.r23_to_r25],
  north_gate_to_var_r24: [...baseNorthto3Route, ...specificRoutes.r23_to_r25],
  north_gate_to_var_r25: [...baseNorthto3Route, ...specificRoutes.r23_to_r25],
  
  north_gate_to_var_r26: [...baseNorthto3Route, ...specificRoutes.r26],

  north_gate_to_table_t3: [...baseNorthto3Route, ...specificRoutes.t3],
};