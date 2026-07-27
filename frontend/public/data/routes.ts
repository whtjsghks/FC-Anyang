// src/data/routes.ts
import type { StepData } from '../../src/types/index';

// 공통 경로 정의 (북문 ~ GATE3까지 Step 1~7)
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
  { step: 5, locationName: "중립 응원석 입구", baseImageUrl: "/images/north_gate/north_to_11_4.jpg" }
];

// 북문 ~ 2층 GATE
const baseNorthto2fGateRoute = [
  { step: 1, locationName: "북문", baseImageUrl: "/images/north_gate/north_right.jpg" },
  { step: 2, locationName: "북문 주차장", baseImageUrl: "/images/north_gate/north_to_11_1.jpg" },
  { step: 3, locationName: "경기장 북쪽", baseImageUrl: "/images/north_gate/north_to_2nd_1.jpg" },
  { step: 4, locationName: "북쪽 조명탑", baseImageUrl: "/images/north_gate/north_to_2nd_2.jpg" },
  { step: 5, locationName: "암벽장", baseImageUrl: "/images/north_gate/north_to_2nd_3.jpg" },
  { step: 6, locationName: "복싱장", baseImageUrl: "/images/north_gate/north_to_2nd_4.jpg" },
  { step: 7, locationName: "안양도시공사", baseImageUrl: "/images/north_gate/north_to_2nd_5.jpg" },
  { step: 8, locationName: "운동장 후문", baseImageUrl: "/images/north_gate/north_to_2nd_6.jpg" },
  { step: 9, locationName: "2층 GATE", baseImageUrl: "/images/2f_gate/2f_gate.jpg" }
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

// 공통 경로 정의 (남문 ~ GATE3까지)
const baseSouthto3Route = [
  { step: 1, locationName: "남문", baseImageUrl: "/images/south_gate/south_to_gate3.jpg" }
];

// 남문 ~ GATE11
const baseSouthto11Route = [
  { step: 1, locationName: "남문", baseImageUrl: "/images/south_gate/south_to_11_1.jpg" },
  { step: 2, locationName: "GATE3 앞", baseImageUrl: "/images/south_gate/south_to_11_2.jpg" },
  { step: 3, locationName: "티켓 판매처 앞", baseImageUrl: "/images/south_gate/south_to_11_3.jpg" },
  { step: 4, locationName: "메인 게이트 앞", baseImageUrl: "/images/south_gate/south_to_11_4.jpg" },
  { step: 5, locationName: "클럽 하우스 앞", baseImageUrl: "/images/south_gate/south_to_11_5.jpg" },
  { step: 6, locationName: "원정 게이트 앞", baseImageUrl: "/images/south_gate/south_to_11_6.jpg" },
  { step: 7, locationName: "북문 주차장", baseImageUrl: "/images/north_gate/north_to_11_1.jpg" },
  { step: 8, locationName: "GATE 11", baseImageUrl: "/images/north_gate/north_to_11_2.jpg" },
  { step: 9, locationName: "GATE 11 계단", baseImageUrl: "/images/north_gate/north_to_11_3.jpg" },
  { step: 10, locationName: "중립 응원석 입구", baseImageUrl: "/images/north_gate/north_to_11_4.jpg" }
];

// 남문 ~ 2층 GATE
const baseSouthto2fGateRoute = [
  { step: 1, locationName: "남문", baseImageUrl: "/images/south_gate/south_to_2f_1.jpg" },
  { step: 2, locationName: "GATE5 앞 ", baseImageUrl: "/images/south_gate/south_to_2f_2.jpg" },
  { step: 3, locationName: "GATE6 앞", baseImageUrl: "/images/south_gate/south_to_2f_3.jpg" },
  { step: 4, locationName: "2층 GATE", baseImageUrl: "/images/2f_gate/2f_gate.jpg" }
];

// 남문 ~ 원정GATE(원정석)
const baseSouthtoAwayRoute = [
  { step: 1, locationName: "남문", baseImageUrl: "/images/south_gate/south_to_11_1.jpg" },
  { step: 2, locationName: "GATE3 앞", baseImageUrl: "/images/south_gate/south_to_11_2.jpg" },
  { step: 3, locationName: "티켓 판매처 앞", baseImageUrl: "/images/south_gate/south_to_11_3.jpg" },
  { step: 4, locationName: "메인 게이트 앞", baseImageUrl: "/images/south_gate/south_to_11_4.jpg" },
  { step: 5, locationName: "클럽 하우스 앞", baseImageUrl: "/images/south_gate/south_to_11_5.jpg" },
  { step: 6, locationName: "원정 GATE 입구", baseImageUrl: "/images/north_gate/north_to_away_1.jpg" },
  { step: 7, locationName: "원정 GATE", baseImageUrl: "/images/north_gate/north_to_away_2.jpg" },
  { step: 8, locationName: "원정 복도 1", baseImageUrl: "/images/north_gate/north_to_away_3.jpg" },
  { step: 9, locationName: "원정 복도 2", baseImageUrl: "/images/north_gate/north_to_away_4.jpg" },
  { step: 10, locationName: "19번 입구", baseImageUrl: "/images/north_gate/north_to_away_5.jpg" },
  { step: 11, locationName: "원정 복도 3", baseImageUrl: "/images/north_gate/north_to_away_6.jpg" },
  { step: 12, locationName: "원정 복도 4", baseImageUrl: "/images/north_gate/north_to_away_7.jpg" },
  { step: 13, locationName: "18번 입구", baseImageUrl: "/images/north_gate/north_to_away_8.jpg" },
  { step: 14, locationName: "17번 입구", baseImageUrl: "/images/north_gate/north_to_away_9.jpg" }
];

// 공통 경로 정의 (정문 ~ GATE3까지)
const baseMainto3Route = [
  { step: 1, locationName: "정문", baseImageUrl: "/images/main_gate/main_to_gate3_1.jpg" },
  { step: 2, locationName: "티켓 판매처 앞", baseImageUrl: "/images/main_gate/main_to_gate3_2.jpg" },
  { step: 3, locationName: "GATE 3", baseImageUrl: "/images/north_gate/n_3.jpg" }
];

// 정문 ~ GATE11
const baseMainto11Route = [
  { step: 1, locationName: "정문", baseImageUrl: "/images/main_gate/main_to_11_1.jpg" },
  { step: 2, locationName: "메인 게이트 앞", baseImageUrl: "/images/main_gate/main_to_11_2.jpg" },
  { step: 3, locationName: "클럽 하우스 앞", baseImageUrl: "/images/south_gate/south_to_11_5.jpg" },
  { step: 4, locationName: "원정 게이트 앞", baseImageUrl: "/images/south_gate/south_to_11_6.jpg" },
  { step: 5, locationName: "북문 주차장", baseImageUrl: "/images/north_gate/north_to_11_1.jpg" },
  { step: 6, locationName: "GATE 11", baseImageUrl: "/images/north_gate/north_to_11_2.jpg" },
  { step: 7, locationName: "GATE 11 계단", baseImageUrl: "/images/north_gate/north_to_11_3.jpg" },
  { step: 8, locationName: "중립 응원석 입구", baseImageUrl: "/images/north_gate/north_to_11_4.jpg" }
];

// 정문 ~ 2층 GATE
const baseMainto2fGateRoute = [
  { step: 1, locationName: "정문", baseImageUrl: "/images/main_gate/main_to_gate3_1.jpg" },
  { step: 2, locationName: "티켓 판매처 앞", baseImageUrl: "/images/main_gate/main_to_gate3_2.jpg" },
  { step: 3, locationName: "GATE 3 앞", baseImageUrl: "/images/main_gate/main_to_2f.jpg" },
  { step: 4, locationName: "GATE5 앞 ", baseImageUrl: "/images/south_gate/south_to_2f_2.jpg" },
  { step: 5, locationName: "GATE6 앞", baseImageUrl: "/images/south_gate/south_to_2f_3.jpg" },
  { step: 6, locationName: "2층 GATE", baseImageUrl: "/images/2f_gate/2f_gate.jpg" }
];

// 정문 ~ 원정GATE(원정석)
const baseMaintoAwayRoute = [
  { step: 1, locationName: "정문", baseImageUrl: "/images/main_gate/main_to_11_1.jpg" },
  { step: 2, locationName: "메인 게이트 앞", baseImageUrl: "/images/main_gate/main_to_11_2.jpg" },
  { step: 3, locationName: "클럽 하우스 앞", baseImageUrl: "/images/south_gate/south_to_11_5.jpg" },
  { step: 4, locationName: "원정 GATE 입구", baseImageUrl: "/images/north_gate/north_to_away_1.jpg" },
  { step: 5, locationName: "원정 GATE", baseImageUrl: "/images/north_gate/north_to_away_2.jpg" },
  { step: 6, locationName: "원정 복도 1", baseImageUrl: "/images/north_gate/north_to_away_3.jpg" },
  { step: 7, locationName: "원정 복도 2", baseImageUrl: "/images/north_gate/north_to_away_4.jpg" },
  { step: 8, locationName: "19번 입구", baseImageUrl: "/images/north_gate/north_to_away_5.jpg" },
  { step: 9, locationName: "원정 복도 3", baseImageUrl: "/images/north_gate/north_to_away_6.jpg" },
  { step: 10, locationName: "원정 복도 4", baseImageUrl: "/images/north_gate/north_to_away_7.jpg" },
  { step: 11, locationName: "18번 입구", baseImageUrl: "/images/north_gate/north_to_away_8.jpg" },
  { step: 12, locationName: "17번 입구", baseImageUrl: "/images/north_gate/north_to_away_9.jpg" }
];

// 2.1 북문 - 도착지 그룹별 추가 경로 정의
const specificRoutes_north = {
  // F1 ~ F4 그룹 (모두 동일한 끝 경로)
  f1_to_f4: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 9, locationName: "좌석 입구", baseImageUrl: "/images/north_gate/f1_entry.jpg" }
  ],
  // F5 ~ F7 그룹
  f5_to_f7: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 9, locationName: "서포터즈석 뒤", baseImageUrl: "/images/gate3/3tof5_1.jpg" },
    { step: 10, locationName: "푸드트럭 앞", baseImageUrl: "/images/gate3/3tof5_2.jpg" },
    { step: 11, locationName: "좌석 입구", baseImageUrl: "/images/gate3/3tof5_3.jpg" }
  ],
  // R10
  r10: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 9, locationName: "좌석 입구", baseImageUrl: "/images/gate3/3tor10_1.jpg" }
  ],
  // R11, R12, S1
  r11_r12_s1: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 9, locationName: "서포터즈석 뒤", baseImageUrl: "/images/gate3/3tof5_1.jpg"},
    { step: 10, locationName: "좌석 입구", baseImageUrl: "/images/gate3/3tor11_1.jpg"}
  ],
  // R13, S2
  r13_s2: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 9, locationName: "서포터즈석 뒤", baseImageUrl: "/images/gate3/3tof5_1.jpg"},
    { step: 10, locationName: "좌석 입구", baseImageUrl: "/images/gate3/3tor13_1.jpg"}
  ],
  // R14, S3
  r14_s3: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 9, locationName: "서포터즈석 뒤", baseImageUrl: "/images/gate3/3tof5_1.jpg"},
    { step: 10, locationName: "푸드트럭 앞", baseImageUrl: "/images/gate3/3tof5_2.jpg" },
    { step: 11, locationName: "좌석 입구", baseImageUrl: "/images/gate3/3tor14_1.jpg"}
  ],
  // R9
  r9: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/gate3/photozone_right.jpg" },
    { step: 9, locationName: "좌석 입구", baseImageUrl: "/images/gate3/3tor9_1.jpg"}
  ],
  // R7, R8
  r7_r8: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/gate3/photozone_right.jpg" },
    { step: 9, locationName: "가변석 뒤", baseImageUrl: "/images/gate3/behind_r9.jpg"},
    { step: 10, locationName: "좌석 입구", baseImageUrl: "/images/gate3/r7.jpg" }
  ],
  // R6
  r6: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/gate3/photozone_right.jpg" },
    { step: 9, locationName: "가변석 뒤", baseImageUrl: "/images/gate3/behind_r9.jpg"},
    { step: 10, locationName: "2층 계단 앞", baseImageUrl: "/images/gate3/gate2.jpg" },
    { step: 11, locationName: "좌석 입구", baseImageUrl: "/images/gate3/r6.jpg"}
  ],
  // R4, R5
  r4_r5: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/gate3/photozone_right.jpg" },
    { step: 9, locationName: "가변석 뒤", baseImageUrl: "/images/gate3/behind_r9.jpg"},
    { step: 10, locationName: "2층 계단 앞", baseImageUrl: "/images/gate3/gate2.jpg" },
    { step: 11, locationName: "구령대 계단", baseImageUrl: "/images/gate3/center_stairs.jpg"},
    { step: 12, locationName: "구령대", baseImageUrl: "/images/gate3/center.jpg"},
    { step: 13, locationName: "좌석 입구", baseImageUrl: "/images/gate3/r4.jpg" }
  ],
  // R2, R3
  r2_r3: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/gate3/photozone_right.jpg" },
    { step: 9, locationName: "가변석 뒤", baseImageUrl: "/images/gate3/behind_r9.jpg"},
    { step: 10, locationName: "2층 계단 앞", baseImageUrl: "/images/gate3/gate2.jpg" },
    { step: 11, locationName: "구령대 계단", baseImageUrl: "/images/gate3/center_stairs.jpg"},
    { step: 12, locationName: "구령대", baseImageUrl: "/images/gate3/center.jpg"},
    { step: 13, locationName: "좌석 입구", baseImageUrl: "/images/gate3/r2.jpg"}
  ],
  // R1
  r1: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/gate3/photozone_right.jpg" },
    { step: 9, locationName: "가변석 뒤", baseImageUrl: "/images/gate3/behind_r9.jpg"},
    { step: 10, locationName: "2층 계단 앞", baseImageUrl: "/images/gate3/gate2.jpg" },
    { step: 11, locationName: "구령대 계단", baseImageUrl: "/images/gate3/center_stairs.jpg"},
    { step: 12, locationName: "구령대", baseImageUrl: "/images/gate3/center.jpg"},
    { step: 13, locationName: "좌석 입구", baseImageUrl: "/images/gate3/r1.jpg"}
  ],
  // T3
  t3: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/gate3/photozone_right.jpg" },
    { step: 9, locationName: "가변석 뒤", baseImageUrl: "/images/gate3/behind_r9.jpg"},
    { step: 10, locationName: "2층 입구 앞", baseImageUrl: "/images/gate3/gate2_front.jpg" },
    { step: 11, locationName: "2층 입구", baseImageUrl: "/images/gate3/gate2_entry.jpg"},
    { step: 12, locationName: "2층 계단", baseImageUrl: "/images/gate3/2nd_stairs.jpg"},
    { step: 13, locationName: "좌석 입구", baseImageUrl: "/images/gate3/t3_entry.jpg"},
    { step: 14, locationName: "좌석", baseImageUrl: "/images/gate3/t3.jpg"}
  ],
  // R15, R16
  r15_r16: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 9, locationName: "서포터즈석 뒤", baseImageUrl: "/images/gate3/3tof5_1.jpg" },
    { step: 10, locationName: "푸드트럭 앞", baseImageUrl: "/images/gate3/3tof5_2.jpg" },
    { step: 11, locationName: "좌석 입구 옆", baseImageUrl: "/images/gate3/r15_entry.jpg" },
    { step: 12, locationName: "좌석 입구", baseImageUrl: "/images/gate3/r15.jpg" }
  ],
  // R17, R18, R19
  r17_to_r19: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 9, locationName: "서포터즈석 뒤", baseImageUrl: "/images/gate3/3tof5_1.jpg" },
    { step: 10, locationName: "푸드트럭 앞", baseImageUrl: "/images/gate3/3tof5_2.jpg" },
    { step: 11, locationName: "가변석 옆", baseImageUrl: "/images/gate3/gate8.jpg" },
    { step: 12, locationName: "가변석 뒤", baseImageUrl: "/images/gate3/r17_entry.jpg" },
    { step: 13, locationName: "좌석 입구", baseImageUrl: "/images/gate3/r17.jpg" }
  ],
  // R20, R21, R22
  r20_to_r22: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 9, locationName: "서포터즈석 뒤", baseImageUrl: "/images/gate3/3tof5_1.jpg" },
    { step: 10, locationName: "푸드트럭 앞", baseImageUrl: "/images/gate3/3tof5_2.jpg" },
    { step: 11, locationName: "가변석 옆", baseImageUrl: "/images/gate3/gate8.jpg" },
    { step: 12, locationName: "가변석 뒤", baseImageUrl: "/images/gate3/r20_entry.jpg" },
    { step: 13, locationName: "좌석 입구", baseImageUrl: "/images/gate3/r20.jpg" }
  ],
  // R23, R24, R25
  r23_to_r25: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 9, locationName: "서포터즈석 뒤", baseImageUrl: "/images/gate3/3tof5_1.jpg" },
    { step: 10, locationName: "푸드트럭 앞", baseImageUrl: "/images/gate3/3tof5_2.jpg" },
    { step: 11, locationName: "가변석 옆", baseImageUrl: "/images/gate3/gate8.jpg" },
    { step: 12, locationName: "가변석 뒤", baseImageUrl: "/images/gate3/r23_entry.jpg" },
    { step: 13, locationName: "좌석 입구", baseImageUrl: "/images/gate3/r23.jpg" }
  ],
  // R26
  r26: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 9, locationName: "서포터즈석 뒤", baseImageUrl: "/images/gate3/3tof5_1.jpg" },
    { step: 10, locationName: "푸드트럭 앞", baseImageUrl: "/images/gate3/3tof5_2.jpg" },
    { step: 11, locationName: "가변석 옆", baseImageUrl: "/images/gate3/gate8.jpg" },
    { step: 12, locationName: "가변석 뒤", baseImageUrl: "/images/gate3/behind_r20.jpg" },
    { step: 13, locationName: "가변석 좌측", baseImageUrl: "/images/gate3/r26_entry.jpg" },
    { step: 14, locationName: "좌석 입구", baseImageUrl: "/images/gate3/r26.jpg" }
  ],
  // 일반 지정석 1-17
  gen_1_to_17 : [
    { step: 10, locationName: "2층 게이트10 앞", baseImageUrl: "/images/2f_gate/2f_right.jpg"},
    { step: 11, locationName: "2층 화장실 앞", baseImageUrl: "/images/2f_gate/2f_gen_free.jpg"},
    { step: 12, locationName: "좌석 입구", baseImageUrl: "/images/2f_gate/2f_gate9.jpg"},
  ],
  // 일반 지정석 18-55
  gen_18_to_55 : [
    { step: 10, locationName: "좌석 입구", baseImageUrl: "/images/2f_gate/2f_gate10.jpg" },
  ],
  // 일반 지정석 56-105
  gen_56_to_105 : [
    { step: 10, locationName: "2층 게이트10 앞", baseImageUrl: "/images/2f_gate/2f_left.jpg" },
    { step: 11, locationName: "2층 계단 앞", baseImageUrl: "/images/2f_gate/2f_56.jpg"},
    { step: 12, locationName: "2층 CU 매대 앞", baseImageUrl: "/images/2f_gate/2f_cu.jpg"},
    { step: 13, locationName: "좌석 입구", baseImageUrl: "/images/2f_gate/2f_gate11.jpg"},
  ],
  // 일반 지정석 106-160
  gen_106_to_160 : [
    { step: 10, locationName: "2층 게이트10 앞", baseImageUrl: "/images/2f_gate/2f_left.jpg" },
    { step: 11, locationName: "2층 계단 앞", baseImageUrl: "/images/2f_gate/2f_56.jpg"},
    { step: 12, locationName: "2층 CU 매대 앞", baseImageUrl: "/images/2f_gate/2f_cu.jpg"},
    { step: 13, locationName: "2층 게이트11 앞", baseImageUrl: "/images/2f_gate/2f_gate11f.jpg"},
    { step: 14, locationName: "좌석 입구", baseImageUrl: "/images/2f_gate/2f_gate12.jpg"},
  ],
  // 일반 2층 자유석
  gen_2f : [
    { step: 10, locationName: "2층 게이트10 앞", baseImageUrl: "/images/2f_gate/2f_right.jpg"},
    { step: 11, locationName: "2층 화장실 앞", baseImageUrl: "/images/2f_gate/2f_gen_free.jpg"},
    { step: 12, locationName: "좌석 입구", baseImageUrl: "/images/2f_gate/2f_gate9.jpg"},
  ],
  // 피크닉존
  picninc: [
    { step: 8, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg"},
    { step: 9, locationName: "서포터즈석 뒤", baseImageUrl: "/images/gate3/3tof5_1.jpg"},
    { step: 10, locationName: "해링턴 플레이스존 옆", baseImageUrl: "/images/gate3/gate8.jpg"},
    { step: 11, locationName: "1층 GATE9", baseImageUrl: "/images/gate3/gate9.jpg"},
    { step: 12, locationName: "2층 계단", baseImageUrl: "/images/gate3/2f_stairs.jpg"},
    { step: 13, locationName: "2층", baseImageUrl: "/images/gate3/2f.jpg"},
    { step: 14, locationName: "MD 대여존 앞", baseImageUrl: "/images/gate3/rental_zone.jpg"},
    { step: 15, locationName: "좌석 입구", baseImageUrl: "/images/gate3/picnic_entry.jpg"},
  ]
};

// 2.2 정문 - 도착지 그룹별 추가 경로 정의
const specificRoutes_main = {
  // F1 ~ F4 그룹 (모두 동일한 끝 경로)
  f1_to_f4: [
    { step: 4, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 5, locationName: "좌석 입구", baseImageUrl: "/images/north_gate/f1_entry.jpg" }
  ],
  // F5 ~ F7 그룹
  f5_to_f7: [
    { step: 4, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 5, locationName: "서포터즈석 뒤", baseImageUrl: "/images/gate3/3tof5_1.jpg" },
    { step: 6, locationName: "푸드트럭 앞", baseImageUrl: "/images/gate3/3tof5_2.jpg" },
    { step: 7, locationName: "좌석 입구", baseImageUrl: "/images/gate3/3tof5_3.jpg" }
  ],
  // R10
  r10: [
    { step: 4, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 5, locationName: "좌석 입구", baseImageUrl: "/images/gate3/3tor10_1.jpg" }
  ],
  // R11, R12, S1
  r11_r12_s1: [
    { step: 4, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 5, locationName: "서포터즈석 뒤", baseImageUrl: "/images/gate3/3tof5_1.jpg"},
    { step: 6, locationName: "좌석 입구", baseImageUrl: "/images/gate3/3tor11_1.jpg"}
  ],
  // R13, S2
  r13_s2: [
    { step: 4, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 5, locationName: "서포터즈석 뒤", baseImageUrl: "/images/gate3/3tof5_1.jpg"},
    { step: 6, locationName: "좌석 입구", baseImageUrl: "/images/gate3/3tor13_1.jpg"}
  ],
  // R14, S3
  r14_s3: [
    { step: 4, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 5, locationName: "서포터즈석 뒤", baseImageUrl: "/images/gate3/3tof5_1.jpg"},
    { step: 6, locationName: "푸드트럭 앞", baseImageUrl: "/images/gate3/3tof5_2.jpg" },
    { step: 7, locationName: "좌석 입구", baseImageUrl: "/images/gate3/3tor14_1.jpg"}
  ],
  // R9
  r9: [
    { step: 4, locationName: "대형 포토존", baseImageUrl: "/images/gate3/photozone_right.jpg" },
    { step: 5, locationName: "좌석 입구", baseImageUrl: "/images/gate3/3tor9_1.jpg"}
  ],
  // R7, R8
  r7_r8: [
    { step: 4, locationName: "대형 포토존", baseImageUrl: "/images/gate3/photozone_right.jpg" },
    { step: 5, locationName: "가변석 뒤", baseImageUrl: "/images/gate3/behind_r9.jpg"},
    { step: 6, locationName: "좌석 입구", baseImageUrl: "/images/gate3/r7.jpg" }
  ],
  // R6
  r6: [
    { step: 4, locationName: "대형 포토존", baseImageUrl: "/images/gate3/photozone_right.jpg" },
    { step: 5, locationName: "가변석 뒤", baseImageUrl: "/images/gate3/behind_r9.jpg"},
    { step: 6, locationName: "2층 계단 앞", baseImageUrl: "/images/gate3/gate2.jpg" },
    { step: 7, locationName: "좌석 입구", baseImageUrl: "/images/gate3/r6.jpg"}
  ],
  // R4, R5
  r4_r5: [
    { step: 4, locationName: "대형 포토존", baseImageUrl: "/images/gate3/photozone_right.jpg" },
    { step: 5, locationName: "가변석 뒤", baseImageUrl: "/images/gate3/behind_r9.jpg"},
    { step: 6, locationName: "2층 계단 앞", baseImageUrl: "/images/gate3/gate2.jpg" },
    { step: 7, locationName: "구령대 계단", baseImageUrl: "/images/gate3/center_stairs.jpg"},
    { step: 8, locationName: "구령대", baseImageUrl: "/images/gate3/center.jpg"},
    { step: 9, locationName: "좌석 입구", baseImageUrl: "/images/gate3/r4.jpg" }
  ],
  // R2, R3
  r2_r3: [
    { step: 4, locationName: "대형 포토존", baseImageUrl: "/images/gate3/photozone_right.jpg" },
    { step: 5, locationName: "가변석 뒤", baseImageUrl: "/images/gate3/behind_r9.jpg"},
    { step: 6, locationName: "2층 계단 앞", baseImageUrl: "/images/gate3/gate2.jpg" },
    { step: 7, locationName: "구령대 계단", baseImageUrl: "/images/gate3/center_stairs.jpg"},
    { step: 8, locationName: "구령대", baseImageUrl: "/images/gate3/center.jpg"},
    { step: 9, locationName: "좌석 입구", baseImageUrl: "/images/gate3/r2.jpg"}
  ],
  // R1
  r1: [
    { step: 4, locationName: "대형 포토존", baseImageUrl: "/images/gate3/photozone_right.jpg" },
    { step: 5, locationName: "가변석 뒤", baseImageUrl: "/images/gate3/behind_r9.jpg"},
    { step: 6, locationName: "2층 계단 앞", baseImageUrl: "/images/gate3/gate2.jpg" },
    { step: 7, locationName: "구령대 계단", baseImageUrl: "/images/gate3/center_stairs.jpg"},
    { step: 8, locationName: "구령대", baseImageUrl: "/images/gate3/center.jpg"},
    { step: 9, locationName: "좌석 입구", baseImageUrl: "/images/gate3/r1.jpg"}
  ],
  // T3
  t3: [
    { step: 4, locationName: "대형 포토존", baseImageUrl: "/images/gate3/photozone_right.jpg" },
    { step: 5, locationName: "가변석 뒤", baseImageUrl: "/images/gate3/behind_r9.jpg"},
    { step: 6, locationName: "2층 입구 앞", baseImageUrl: "/images/gate3/gate2_front.jpg" },
    { step: 7, locationName: "2층 입구", baseImageUrl: "/images/gate3/gate2_entry.jpg"},
    { step: 8, locationName: "2층 계단", baseImageUrl: "/images/gate3/2nd_stairs.jpg"},
    { step: 9, locationName: "좌석 입구", baseImageUrl: "/images/gate3/t3_entry.jpg"},
    { step: 10, locationName: "좌석", baseImageUrl: "/images/gate3/t3.jpg"}
  ],
  // R15, R16
  r15_r16: [
    { step: 4, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 5, locationName: "서포터즈석 뒤", baseImageUrl: "/images/gate3/3tof5_1.jpg" },
    { step: 6, locationName: "푸드트럭 앞", baseImageUrl: "/images/gate3/3tof5_2.jpg" },
    { step: 7, locationName: "좌석 입구 옆", baseImageUrl: "/images/gate3/r15_entry.jpg" },
    { step: 8, locationName: "좌석 입구", baseImageUrl: "/images/gate3/r15.jpg" }
  ],
  // R17, R18, R19
  r17_to_r19: [
    { step: 4, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 5, locationName: "서포터즈석 뒤", baseImageUrl: "/images/gate3/3tof5_1.jpg" },
    { step: 6, locationName: "푸드트럭 앞", baseImageUrl: "/images/gate3/3tof5_2.jpg" },
    { step: 7, locationName: "가변석 옆", baseImageUrl: "/images/gate3/gate8.jpg" },
    { step: 8, locationName: "가변석 뒤", baseImageUrl: "/images/gate3/r17_entry.jpg" },
    { step: 9, locationName: "좌석 입구", baseImageUrl: "/images/gate3/r17.jpg" }
  ],
  // R20, R21, R22
  r20_to_r22: [
    { step: 4, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 5, locationName: "서포터즈석 뒤", baseImageUrl: "/images/gate3/3tof5_1.jpg" },
    { step: 6, locationName: "푸드트럭 앞", baseImageUrl: "/images/gate3/3tof5_2.jpg" },
    { step: 7, locationName: "가변석 옆", baseImageUrl: "/images/gate3/gate8.jpg" },
    { step: 8, locationName: "가변석 뒤", baseImageUrl: "/images/gate3/r20_entry.jpg" },
    { step: 9, locationName: "좌석 입구", baseImageUrl: "/images/gate3/r20.jpg" }
  ],
  // R23, R24, R25
  r23_to_r25: [
    { step: 4, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 5, locationName: "서포터즈석 뒤", baseImageUrl: "/images/gate3/3tof5_1.jpg" },
    { step: 6, locationName: "푸드트럭 앞", baseImageUrl: "/images/gate3/3tof5_2.jpg" },
    { step: 7, locationName: "가변석 옆", baseImageUrl: "/images/gate3/gate8.jpg" },
    { step: 8, locationName: "가변석 뒤", baseImageUrl: "/images/gate3/r23_entry.jpg" },
    { step: 9, locationName: "좌석 입구", baseImageUrl: "/images/gate3/r23.jpg" }
  ],
  // R26
  r26: [
    { step: 4, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 5, locationName: "서포터즈석 뒤", baseImageUrl: "/images/gate3/3tof5_1.jpg" },
    { step: 6, locationName: "푸드트럭 앞", baseImageUrl: "/images/gate3/3tof5_2.jpg" },
    { step: 7, locationName: "가변석 옆", baseImageUrl: "/images/gate3/gate8.jpg" },
    { step: 8, locationName: "가변석 뒤", baseImageUrl: "/images/gate3/behind_r20.jpg" },
    { step: 9, locationName: "가변석 좌측", baseImageUrl: "/images/gate3/r26_entry.jpg" },
    { step: 10, locationName: "좌석 입구", baseImageUrl: "/images/gate3/r26.jpg" }
  ],
  // 일반 지정석 1-17
  gen_1_to_17 : [
    { step: 7, locationName: "2층 게이트10 앞", baseImageUrl: "/images/2f_gate/2f_right.jpg"},
    { step: 8, locationName: "2층 화장실 앞", baseImageUrl: "/images/2f_gate/2f_gen_free.jpg"},
    { step: 9, locationName: "좌석 입구", baseImageUrl: "/images/2f_gate/2f_gate9.jpg"},
  ],
  // 일반 지정석 18-55
  gen_18_to_55 : [
    { step: 7, locationName: "좌석 입구", baseImageUrl: "/images/2f_gate/2f_gate10.jpg" },
  ],
  // 일반 지정석 56-105
  gen_56_to_105 : [
    { step: 7, locationName: "2층 게이트10 앞", baseImageUrl: "/images/2f_gate/2f_left.jpg" },
    { step: 8, locationName: "2층 계단 앞", baseImageUrl: "/images/2f_gate/2f_56.jpg"},
    { step: 9, locationName: "2층 CU 매대 앞", baseImageUrl: "/images/2f_gate/2f_cu.jpg"},
    { step: 10, locationName: "좌석 입구", baseImageUrl: "/images/2f_gate/2f_gate11.jpg"},
  ],
  // 일반 지정석 106-160
  gen_106_to_160 : [
    { step: 7, locationName: "2층 게이트10 앞", baseImageUrl: "/images/2f_gate/2f_left.jpg" },
    { step: 8, locationName: "2층 계단 앞", baseImageUrl: "/images/2f_gate/2f_56.jpg"},
    { step: 9, locationName: "2층 CU 매대 앞", baseImageUrl: "/images/2f_gate/2f_cu.jpg"},
    { step: 10, locationName: "2층 게이트11 앞", baseImageUrl: "/images/2f_gate/2f_gate11f.jpg"},
    { step: 11, locationName: "좌석 입구", baseImageUrl: "/images/2f_gate/2f_gate12.jpg"},
  ],
  // 일반 2층 자유석
  gen_2f : [
    { step: 7, locationName: "2층 게이트10 앞", baseImageUrl: "/images/2f_gate/2f_right.jpg"},
    { step: 8, locationName: "2층 화장실 앞", baseImageUrl: "/images/2f_gate/2f_gen_free.jpg"},
    { step: 9, locationName: "좌석 입구", baseImageUrl: "/images/2f_gate/2f_gate9.jpg"},
  ],
  // 피크닉존
  picninc: [
    { step: 4, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg"},
    { step: 5, locationName: "서포터즈석 뒤", baseImageUrl: "/images/gate3/3tof5_1.jpg"},
    { step: 6, locationName: "해링턴 플레이스존 옆", baseImageUrl: "/images/gate3/gate8.jpg"},
    { step: 7, locationName: "1층 GATE9", baseImageUrl: "/images/gate3/gate9.jpg"},
    { step: 8, locationName: "2층 계단", baseImageUrl: "/images/gate3/2f_stairs.jpg"},
    { step: 9, locationName: "2층", baseImageUrl: "/images/gate3/2f.jpg"},
    { step: 10, locationName: "MD 대여존 앞", baseImageUrl: "/images/gate3/rental_zone.jpg"},
    { step: 11, locationName: "좌석 입구", baseImageUrl: "/images/gate3/picnic_entry.jpg"},
  ]
};

// 2.3 남문 - 도착지 그룹별 추가 경로 정의
const specificRoutes_south = {
  // F1 ~ F4 그룹 (모두 동일한 끝 경로)
  f1_to_f4: [
    { step: 2, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 3, locationName: "좌석 입구", baseImageUrl: "/images/north_gate/f1_entry.jpg" }
  ],
  // F5 ~ F7 그룹
  f5_to_f7: [
    { step: 2, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 3, locationName: "서포터즈석 뒤", baseImageUrl: "/images/gate3/3tof5_1.jpg" },
    { step: 4, locationName: "푸드트럭 앞", baseImageUrl: "/images/gate3/3tof5_2.jpg" },
    { step: 5, locationName: "좌석 입구", baseImageUrl: "/images/gate3/3tof5_3.jpg" }
  ],
  // R10
  r10: [
    { step: 2, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 3, locationName: "좌석 입구", baseImageUrl: "/images/gate3/3tor10_1.jpg" }
  ],
  // R11, R12, S1
  r11_r12_s1: [
    { step: 2, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 3, locationName: "서포터즈석 뒤", baseImageUrl: "/images/gate3/3tof5_1.jpg"},
    { step: 4, locationName: "좌석 입구", baseImageUrl: "/images/gate3/3tor11_1.jpg"}
  ],
  // R13, S2
  r13_s2: [
    { step: 2, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 3, locationName: "서포터즈석 뒤", baseImageUrl: "/images/gate3/3tof5_1.jpg"},
    { step: 4, locationName: "좌석 입구", baseImageUrl: "/images/gate3/3tor13_1.jpg"}
  ],
  // R14, S3
  r14_s3: [
    { step: 2, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 3, locationName: "서포터즈석 뒤", baseImageUrl: "/images/gate3/3tof5_1.jpg"},
    { step: 4, locationName: "푸드트럭 앞", baseImageUrl: "/images/gate3/3tof5_2.jpg" },
    { step: 5, locationName: "좌석 입구", baseImageUrl: "/images/gate3/3tor14_1.jpg"}
  ],
  // R9
  r9: [
    { step: 2, locationName: "대형 포토존", baseImageUrl: "/images/gate3/photozone_right.jpg" },
    { step: 3, locationName: "좌석 입구", baseImageUrl: "/images/gate3/3tor9_1.jpg"}
  ],
  // R7, R8
  r7_r8: [
    { step: 2, locationName: "대형 포토존", baseImageUrl: "/images/gate3/photozone_right.jpg" },
    { step: 3, locationName: "가변석 뒤", baseImageUrl: "/images/gate3/behind_r9.jpg"},
    { step: 4, locationName: "좌석 입구", baseImageUrl: "/images/gate3/r7.jpg" }
  ],
  // R6
  r6: [
    { step: 2, locationName: "대형 포토존", baseImageUrl: "/images/gate3/photozone_right.jpg" },
    { step: 3, locationName: "가변석 뒤", baseImageUrl: "/images/gate3/behind_r9.jpg"},
    { step: 4, locationName: "2층 계단 앞", baseImageUrl: "/images/gate3/gate2.jpg" },
    { step: 5, locationName: "좌석 입구", baseImageUrl: "/images/gate3/r6.jpg"}
  ],
  // R4, R5
  r4_r5: [
    { step: 2, locationName: "대형 포토존", baseImageUrl: "/images/gate3/photozone_right.jpg" },
    { step: 3, locationName: "가변석 뒤", baseImageUrl: "/images/gate3/behind_r9.jpg"},
    { step: 4, locationName: "2층 계단 앞", baseImageUrl: "/images/gate3/gate2.jpg" },
    { step: 5, locationName: "구령대 계단", baseImageUrl: "/images/gate3/center_stairs.jpg"},
    { step: 6, locationName: "구령대", baseImageUrl: "/images/gate3/center.jpg"},
    { step: 7, locationName: "좌석 입구", baseImageUrl: "/images/gate3/r4.jpg" }
  ],
  // R2, R3
  r2_r3: [
    { step: 2, locationName: "대형 포토존", baseImageUrl: "/images/gate3/photozone_right.jpg" },
    { step: 3, locationName: "가변석 뒤", baseImageUrl: "/images/gate3/behind_r9.jpg"},
    { step: 4, locationName: "2층 계단 앞", baseImageUrl: "/images/gate3/gate2.jpg" },
    { step: 5, locationName: "구령대 계단", baseImageUrl: "/images/gate3/center_stairs.jpg"},
    { step: 6, locationName: "구령대", baseImageUrl: "/images/gate3/center.jpg"},
    { step: 7, locationName: "좌석 입구", baseImageUrl: "/images/gate3/r2.jpg"}
  ],
  // R1
  r1: [
    { step: 2, locationName: "대형 포토존", baseImageUrl: "/images/gate3/photozone_right.jpg" },
    { step: 3, locationName: "가변석 뒤", baseImageUrl: "/images/gate3/behind_r9.jpg"},
    { step: 4, locationName: "2층 계단 앞", baseImageUrl: "/images/gate3/gate2.jpg" },
    { step: 5, locationName: "구령대 계단", baseImageUrl: "/images/gate3/center_stairs.jpg"},
    { step: 6, locationName: "구령대", baseImageUrl: "/images/gate3/center.jpg"},
    { step: 7, locationName: "좌석 입구", baseImageUrl: "/images/gate3/r1.jpg"}
  ],
  // T3
  t3: [
    { step: 2, locationName: "대형 포토존", baseImageUrl: "/images/gate3/photozone_right.jpg" },
    { step: 3, locationName: "가변석 뒤", baseImageUrl: "/images/gate3/behind_r9.jpg"},
    { step: 4, locationName: "2층 입구 앞", baseImageUrl: "/images/gate3/gate2_front.jpg" },
    { step: 5, locationName: "2층 입구", baseImageUrl: "/images/gate3/gate2_entry.jpg"},
    { step: 6, locationName: "2층 계단", baseImageUrl: "/images/gate3/2nd_stairs.jpg"},
    { step: 7, locationName: "좌석 입구", baseImageUrl: "/images/gate3/t3_entry.jpg"},
    { step: 8, locationName: "좌석", baseImageUrl: "/images/gate3/t3.jpg"}
  ],
  // R15, R16
  r15_r16: [
    { step: 2, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 3, locationName: "서포터즈석 뒤", baseImageUrl: "/images/gate3/3tof5_1.jpg" },
    { step: 4, locationName: "푸드트럭 앞", baseImageUrl: "/images/gate3/3tof5_2.jpg" },
    { step: 5, locationName: "좌석 입구 옆", baseImageUrl: "/images/gate3/r15_entry.jpg" },
    { step: 6, locationName: "좌석 입구", baseImageUrl: "/images/gate3/r15.jpg" }
  ],
  // R17, R18, R19
  r17_to_r19: [
    { step: 2, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 3, locationName: "서포터즈석 뒤", baseImageUrl: "/images/gate3/3tof5_1.jpg" },
    { step: 4, locationName: "푸드트럭 앞", baseImageUrl: "/images/gate3/3tof5_2.jpg" },
    { step: 5, locationName: "가변석 옆", baseImageUrl: "/images/gate3/gate8.jpg" },
    { step: 6, locationName: "가변석 뒤", baseImageUrl: "/images/gate3/r17_entry.jpg" },
    { step: 7, locationName: "좌석 입구", baseImageUrl: "/images/gate3/r17.jpg" }
  ],
  // R20, R21, R22
  r20_to_r22: [
    { step: 2, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 3, locationName: "서포터즈석 뒤", baseImageUrl: "/images/gate3/3tof5_1.jpg" },
    { step: 4, locationName: "푸드트럭 앞", baseImageUrl: "/images/gate3/3tof5_2.jpg" },
    { step: 5, locationName: "가변석 옆", baseImageUrl: "/images/gate3/gate8.jpg" },
    { step: 6, locationName: "가변석 뒤", baseImageUrl: "/images/gate3/r20_entry.jpg" },
    { step: 7, locationName: "좌석 입구", baseImageUrl: "/images/gate3/r20.jpg" }
  ],
  // R23, R24, R25
  r23_to_r25: [
    { step: 2, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 3, locationName: "서포터즈석 뒤", baseImageUrl: "/images/gate3/3tof5_1.jpg" },
    { step: 4, locationName: "푸드트럭 앞", baseImageUrl: "/images/gate3/3tof5_2.jpg" },
    { step: 5, locationName: "가변석 옆", baseImageUrl: "/images/gate3/gate8.jpg" },
    { step: 6, locationName: "가변석 뒤", baseImageUrl: "/images/gate3/r23_entry.jpg" },
    { step: 7, locationName: "좌석 입구", baseImageUrl: "/images/gate3/r23.jpg" }
  ],
  // R26
  r26: [
    { step: 2, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg" },
    { step: 3, locationName: "서포터즈석 뒤", baseImageUrl: "/images/gate3/3tof5_1.jpg" },
    { step: 4, locationName: "푸드트럭 앞", baseImageUrl: "/images/gate3/3tof5_2.jpg" },
    { step: 5, locationName: "가변석 옆", baseImageUrl: "/images/gate3/gate8.jpg" },
    { step: 6, locationName: "가변석 뒤", baseImageUrl: "/images/gate3/behind_r20.jpg" },
    { step: 7, locationName: "가변석 좌측", baseImageUrl: "/images/gate3/r26_entry.jpg" },
    { step: 8, locationName: "좌석 입구", baseImageUrl: "/images/gate3/r26.jpg" }
  ],
  // 일반 지정석 1-17
  gen_1_to_17 : [
    { step: 4, locationName: "2층 게이트10 앞", baseImageUrl: "/images/2f_gate/2f_right.jpg"},
    { step: 5, locationName: "2층 화장실 앞", baseImageUrl: "/images/2f_gate/2f_gen_free.jpg"},
    { step: 6, locationName: "좌석 입구", baseImageUrl: "/images/2f_gate/2f_gate9.jpg"},
  ],
  // 일반 지정석 18-55
  gen_18_to_55 : [
    { step: 4, locationName: "좌석 입구", baseImageUrl: "/images/2f_gate/2f_gate10.jpg" },
  ],
  // 일반 지정석 56-105
  gen_56_to_105 : [
    { step: 4, locationName: "2층 게이트10 앞", baseImageUrl: "/images/2f_gate/2f_left.jpg" },
    { step: 5, locationName: "2층 계단 앞", baseImageUrl: "/images/2f_gate/2f_56.jpg"},
    { step: 6, locationName: "2층 CU 매대 앞", baseImageUrl: "/images/2f_gate/2f_cu.jpg"},
    { step: 7, locationName: "좌석 입구", baseImageUrl: "/images/2f_gate/2f_gate11.jpg"},
  ],
  // 일반 지정석 106-160
  gen_106_to_160 : [
    { step: 4, locationName: "2층 게이트10 앞", baseImageUrl: "/images/2f_gate/2f_left.jpg" },
    { step: 5, locationName: "2층 계단 앞", baseImageUrl: "/images/2f_gate/2f_56.jpg"},
    { step: 6, locationName: "2층 CU 매대 앞", baseImageUrl: "/images/2f_gate/2f_cu.jpg"},
    { step: 7, locationName: "2층 게이트11 앞", baseImageUrl: "/images/2f_gate/2f_gate11f.jpg"},
    { step: 8, locationName: "좌석 입구", baseImageUrl: "/images/2f_gate/2f_gate12.jpg"},
  ],
  // 일반 2층 자유석
  gen_2f : [
    { step: 4, locationName: "2층 게이트10 앞", baseImageUrl: "/images/2f_gate/2f_right.jpg"},
    { step: 5, locationName: "2층 화장실 앞", baseImageUrl: "/images/2f_gate/2f_gen_free.jpg"},
    { step: 6, locationName: "좌석 입구", baseImageUrl: "/images/2f_gate/2f_gate9.jpg"},
  ],
  // 피크닉존
  picninc: [
    { step: 2, locationName: "대형 포토존", baseImageUrl: "/images/north_gate/photozone.jpg"},
    { step: 3, locationName: "서포터즈석 뒤", baseImageUrl: "/images/gate3/3tof5_1.jpg"},
    { step: 4, locationName: "해링턴 플레이스존 옆", baseImageUrl: "/images/gate3/gate8.jpg"},
    { step: 5, locationName: "1층 GATE9", baseImageUrl: "/images/gate3/gate9.jpg"},
    { step: 6, locationName: "2층 계단", baseImageUrl: "/images/gate3/2f_stairs.jpg"},
    { step: 7, locationName: "2층", baseImageUrl: "/images/gate3/2f.jpg"},
    { step: 8, locationName: "MD 대여존 앞", baseImageUrl: "/images/gate3/rental_zone.jpg"},
    { step: 9, locationName: "좌석 입구", baseImageUrl: "/images/gate3/picnic_entry.jpg"},
  ]
};

// 3. 최종 경로 데이터 조립 (... 배열 전개 연산자 사용)
const routeData = {
  north_gate_to_sup_f1: [...baseNorthto3Route, ...specificRoutes_north.f1_to_f4],
  north_gate_to_sup_f2: [...baseNorthto3Route, ...specificRoutes_north.f1_to_f4],
  north_gate_to_sup_f3: [...baseNorthto3Route, ...specificRoutes_north.f1_to_f4],
  north_gate_to_sup_f4: [...baseNorthto3Route, ...specificRoutes_north.f1_to_f4],

  north_gate_to_sup_f5: [...baseNorthto3Route, ...specificRoutes_north.f5_to_f7],
  north_gate_to_sup_f6: [...baseNorthto3Route, ...specificRoutes_north.f5_to_f7],
  north_gate_to_sup_f7: [...baseNorthto3Route, ...specificRoutes_north.f5_to_f7],

  north_gate_to_sup_r10: [...baseNorthto3Route, ...specificRoutes_north.r10],

  north_gate_to_sup_r11: [...baseNorthto3Route, ...specificRoutes_north.r11_r12_s1],
  north_gate_to_sup_r12: [...baseNorthto3Route, ...specificRoutes_north.r11_r12_s1],
  north_gate_to_sup_s1: [...baseNorthto3Route, ...specificRoutes_north.r11_r12_s1],

  north_gate_to_sup_r13: [...baseNorthto3Route, ...specificRoutes_north.r13_s2],
  north_gate_to_sup_s2: [...baseNorthto3Route, ...specificRoutes_north.r13_s2],

  north_gate_to_sup_r14: [...baseNorthto3Route, ...specificRoutes_north.r14_s3],
  north_gate_to_sup_s3: [...baseNorthto3Route, ...specificRoutes_north.r14_s3],

  north_gate_to_var_r9: [...baseNorthto3Route, ...specificRoutes_north.r9],

  north_gate_to_var_r7: [...baseNorthto3Route, ...specificRoutes_north.r7_r8],
  north_gate_to_var_r8: [...baseNorthto3Route, ...specificRoutes_north.r7_r8],
  
  north_gate_to_var_r6: [...baseNorthto3Route, ...specificRoutes_north.r6],
  
  north_gate_to_var_r4: [...baseNorthto3Route, ...specificRoutes_north.r4_r5],
  north_gate_to_var_r5: [...baseNorthto3Route, ...specificRoutes_north.r4_r5],
  
  north_gate_to_var_r2: [...baseNorthto3Route, ...specificRoutes_north.r2_r3],
  north_gate_to_var_r3: [...baseNorthto3Route, ...specificRoutes_north.r2_r3],
  
  north_gate_to_var_r1: [...baseNorthto3Route, ...specificRoutes_north.r1],

  north_gate_to_var_r15: [...baseNorthto3Route, ...specificRoutes_north.r15_r16],
  north_gate_to_var_r16: [...baseNorthto3Route, ...specificRoutes_north.r15_r16],
  
  north_gate_to_var_r17: [...baseNorthto3Route, ...specificRoutes_north.r17_to_r19],
  north_gate_to_var_r18: [...baseNorthto3Route, ...specificRoutes_north.r17_to_r19],
  north_gate_to_var_r19: [...baseNorthto3Route, ...specificRoutes_north.r17_to_r19],
  
  north_gate_to_var_r20: [...baseNorthto3Route, ...specificRoutes_north.r20_to_r22],
  north_gate_to_var_r21: [...baseNorthto3Route, ...specificRoutes_north.r20_to_r22],
  north_gate_to_var_r22: [...baseNorthto3Route, ...specificRoutes_north.r20_to_r22],

  north_gate_to_var_r23: [...baseNorthto3Route, ...specificRoutes_north.r23_to_r25],
  north_gate_to_var_r24: [...baseNorthto3Route, ...specificRoutes_north.r23_to_r25],
  north_gate_to_var_r25: [...baseNorthto3Route, ...specificRoutes_north.r23_to_r25],
  
  north_gate_to_var_r26: [...baseNorthto3Route, ...specificRoutes_north.r26],

  north_gate_to_table_t3: [...baseNorthto3Route, ...specificRoutes_north.t3],

  north_gate_to_gen_1_17: [...baseNorthto2fGateRoute, ...specificRoutes_north.gen_1_to_17],
  north_gate_to_gen_18_55: [...baseNorthto2fGateRoute, ...specificRoutes_north.gen_18_to_55],
  north_gate_to_gen_56_105: [...baseNorthto2fGateRoute, ...specificRoutes_north.gen_56_to_105],
  north_gate_to_gen_106_160: [...baseNorthto2fGateRoute, ...specificRoutes_north.gen_106_to_160],

  north_gate_to_neutral: [...baseNorthto11Route],

  north_gate_to_away: [...baseNorthtoAwayRoute],

  north_gate_to_picnic: [...baseNorthto3Route, ...specificRoutes_north.picninc],

  north_gate_to_gen_2f: [...baseNorthto2fGateRoute, ...specificRoutes_north.gen_2f],

  // 정문
  main_gate_to_sup_f1: [...baseMainto3Route, ...specificRoutes_main.f1_to_f4],
  main_gate_to_sup_f2: [...baseMainto3Route, ...specificRoutes_main.f1_to_f4],
  main_gate_to_sup_f3: [...baseMainto3Route, ...specificRoutes_main.f1_to_f4],
  main_gate_to_sup_f4: [...baseMainto3Route, ...specificRoutes_main.f1_to_f4],

  main_gate_to_sup_f5: [...baseMainto3Route, ...specificRoutes_main.f5_to_f7],
  main_gate_to_sup_f6: [...baseMainto3Route, ...specificRoutes_main.f5_to_f7],
  main_gate_to_sup_f7: [...baseMainto3Route, ...specificRoutes_main.f5_to_f7],

  main_gate_to_sup_r10: [...baseMainto3Route, ...specificRoutes_main.r10],

  main_gate_to_sup_r11: [...baseMainto3Route, ...specificRoutes_main.r11_r12_s1],
  main_gate_to_sup_r12: [...baseMainto3Route, ...specificRoutes_main.r11_r12_s1],
  main_gate_to_sup_s1: [...baseMainto3Route, ...specificRoutes_main.r11_r12_s1],

  main_gate_to_sup_r13: [...baseMainto3Route, ...specificRoutes_main.r13_s2],
  main_gate_to_sup_s2: [...baseMainto3Route, ...specificRoutes_main.r13_s2],

  main_gate_to_sup_r14: [...baseMainto3Route, ...specificRoutes_main.r14_s3],
  main_gate_to_sup_s3: [...baseMainto3Route, ...specificRoutes_main.r14_s3],

  main_gate_to_var_r9: [...baseMainto3Route, ...specificRoutes_main.r9],

  main_gate_to_var_r7: [...baseMainto3Route, ...specificRoutes_main.r7_r8],
  main_gate_to_var_r8: [...baseMainto3Route, ...specificRoutes_main.r7_r8],
  
  main_gate_to_var_r6: [...baseMainto3Route, ...specificRoutes_main.r6],
  
  main_gate_to_var_r4: [...baseMainto3Route, ...specificRoutes_main.r4_r5],
  main_gate_to_var_r5: [...baseMainto3Route, ...specificRoutes_main.r4_r5],
  
  main_gate_to_var_r2: [...baseMainto3Route, ...specificRoutes_main.r2_r3],
  main_gate_to_var_r3: [...baseMainto3Route, ...specificRoutes_main.r2_r3],
  
  main_gate_to_var_r1: [...baseMainto3Route, ...specificRoutes_main.r1],

  main_gate_to_var_r15: [...baseMainto3Route, ...specificRoutes_main.r15_r16],
  main_gate_to_var_r16: [...baseMainto3Route, ...specificRoutes_main.r15_r16],
  
  main_gate_to_var_r17: [...baseMainto3Route, ...specificRoutes_main.r17_to_r19],
  main_gate_to_var_r18: [...baseMainto3Route, ...specificRoutes_main.r17_to_r19],
  main_gate_to_var_r19: [...baseMainto3Route, ...specificRoutes_main.r17_to_r19],
  
  main_gate_to_var_r20: [...baseMainto3Route, ...specificRoutes_main.r20_to_r22],
  main_gate_to_var_r21: [...baseMainto3Route, ...specificRoutes_main.r20_to_r22],
  main_gate_to_var_r22: [...baseMainto3Route, ...specificRoutes_main.r20_to_r22],

  main_gate_to_var_r23: [...baseMainto3Route, ...specificRoutes_main.r23_to_r25],
  main_gate_to_var_r24: [...baseMainto3Route, ...specificRoutes_main.r23_to_r25],
  main_gate_to_var_r25: [...baseMainto3Route, ...specificRoutes_main.r23_to_r25],
  
  main_gate_to_var_r26: [...baseMainto3Route, ...specificRoutes_main.r26],

  main_gate_to_table_t3: [...baseMainto3Route, ...specificRoutes_main.t3],

  main_gate_to_gen_1_17: [...baseMainto2fGateRoute, ...specificRoutes_main.gen_1_to_17],
  main_gate_to_gen_18_55: [...baseMainto2fGateRoute, ...specificRoutes_main.gen_18_to_55],
  main_gate_to_gen_56_105: [...baseMainto2fGateRoute, ...specificRoutes_main.gen_56_to_105],
  main_gate_to_gen_106_160: [...baseMainto2fGateRoute, ...specificRoutes_main.gen_106_to_160],

  main_gate_to_neutral: [...baseMainto11Route],

  main_gate_to_away: [...baseMaintoAwayRoute],

  main_gate_to_picnic: [...baseMainto3Route, ...specificRoutes_main.picninc],

  main_gate_to_gen_2f: [...baseMainto2fGateRoute, ...specificRoutes_main.gen_2f],

  //남문
  south_gate_to_sup_f1: [...baseSouthto3Route, ...specificRoutes_south.f1_to_f4],
  south_gate_to_sup_f2: [...baseSouthto3Route, ...specificRoutes_south.f1_to_f4],
  south_gate_to_sup_f3: [...baseSouthto3Route, ...specificRoutes_south.f1_to_f4],
  south_gate_to_sup_f4: [...baseSouthto3Route, ...specificRoutes_south.f1_to_f4],

  south_gate_to_sup_f5: [...baseSouthto3Route, ...specificRoutes_south.f5_to_f7],
  south_gate_to_sup_f6: [...baseSouthto3Route, ...specificRoutes_south.f5_to_f7],
  south_gate_to_sup_f7: [...baseSouthto3Route, ...specificRoutes_south.f5_to_f7],

  south_gate_to_sup_r10: [...baseSouthto3Route, ...specificRoutes_south.r10],

  south_gate_to_sup_r11: [...baseSouthto3Route, ...specificRoutes_south.r11_r12_s1],
  south_gate_to_sup_r12: [...baseSouthto3Route, ...specificRoutes_south.r11_r12_s1],
  south_gate_to_sup_s1: [...baseSouthto3Route, ...specificRoutes_south.r11_r12_s1],

  south_gate_to_sup_r13: [...baseSouthto3Route, ...specificRoutes_south.r13_s2],
  south_gate_to_sup_s2: [...baseSouthto3Route, ...specificRoutes_south.r13_s2],

  south_gate_to_sup_r14: [...baseSouthto3Route, ...specificRoutes_south.r14_s3],
  south_gate_to_sup_s3: [...baseSouthto3Route, ...specificRoutes_south.r14_s3],

  south_gate_to_var_r9: [...baseSouthto3Route, ...specificRoutes_south.r9],

  south_gate_to_var_r7: [...baseSouthto3Route, ...specificRoutes_south.r7_r8],
  south_gate_to_var_r8: [...baseSouthto3Route, ...specificRoutes_south.r7_r8],
  
  south_gate_to_var_r6: [...baseSouthto3Route, ...specificRoutes_south.r6],
  
  south_gate_to_var_r4: [...baseSouthto3Route, ...specificRoutes_south.r4_r5],
  south_gate_to_var_r5: [...baseSouthto3Route, ...specificRoutes_south.r4_r5],
  
  south_gate_to_var_r2: [...baseSouthto3Route, ...specificRoutes_south.r2_r3],
  south_gate_to_var_r3: [...baseSouthto3Route, ...specificRoutes_south.r2_r3],
  
  south_gate_to_var_r1: [...baseSouthto3Route, ...specificRoutes_south.r1],

  south_gate_to_var_r15: [...baseSouthto3Route, ...specificRoutes_south.r15_r16],
  south_gate_to_var_r16: [...baseSouthto3Route, ...specificRoutes_south.r15_r16],
  
  south_gate_to_var_r17: [...baseSouthto3Route, ...specificRoutes_south.r17_to_r19],
  south_gate_to_var_r18: [...baseSouthto3Route, ...specificRoutes_south.r17_to_r19],
  south_gate_to_var_r19: [...baseSouthto3Route, ...specificRoutes_south.r17_to_r19],
  
  south_gate_to_var_r20: [...baseSouthto3Route, ...specificRoutes_south.r20_to_r22],
  south_gate_to_var_r21: [...baseSouthto3Route, ...specificRoutes_south.r20_to_r22],
  south_gate_to_var_r22: [...baseSouthto3Route, ...specificRoutes_south.r20_to_r22],

  south_gate_to_var_r23: [...baseSouthto3Route, ...specificRoutes_south.r23_to_r25],
  south_gate_to_var_r24: [...baseSouthto3Route, ...specificRoutes_south.r23_to_r25],
  south_gate_to_var_r25: [...baseSouthto3Route, ...specificRoutes_south.r23_to_r25],
  
  south_gate_to_var_r26: [...baseSouthto3Route, ...specificRoutes_south.r26],

  south_gate_to_table_t3: [...baseSouthto3Route, ...specificRoutes_south.t3],

  south_gate_to_gen_1_17: [...baseSouthto2fGateRoute, ...specificRoutes_south.gen_1_to_17],
  south_gate_to_gen_18_55: [...baseSouthto2fGateRoute, ...specificRoutes_south.gen_18_to_55],
  south_gate_to_gen_56_105: [...baseSouthto2fGateRoute, ...specificRoutes_south.gen_56_to_105],
  south_gate_to_gen_106_160: [...baseSouthto2fGateRoute, ...specificRoutes_south.gen_106_to_160],

  south_gate_to_neutral: [...baseSouthto11Route],

  south_gate_to_away: [...baseSouthtoAwayRoute],

  south_gate_to_picnic: [...baseSouthto3Route, ...specificRoutes_south.picninc],

  south_gate_to_gen_2f: [...baseSouthto2fGateRoute, ...specificRoutes_south.gen_2f],
};

// --- 기존 routeData 객체 코드 아래에 추가 ---

// 💡 SearchPanel에서 사용할 좌석 데이터 매핑
export const SEAT_MAP: Record<string, { id: string; label: string }[]> = {
  general: [
    { id: 'gen_1_17', label: '지정석 1번-17번' },
    { id: 'gen_18_55', label: '지정석 18번-55번' },
    { id: 'gen_56_105', label: '지정석 56번-105번' },
    { id: 'gen_106_160', label: '지정석 106번-160번' },
    { id: 'gen_2f', label: '2층 자유석' },
  ],
  variable: [
    { id: 'var_r1', label: 'R1' }, { id: 'var_r2', label: 'R2' }, { id: 'var_r3', label: 'R3' },
    { id: 'var_r4', label: 'R4' }, { id: 'var_r5', label: 'R5' }, { id: 'var_r6', label: 'R6' },
    { id: 'var_r7', label: 'R7' }, { id: 'var_r8', label: 'R8' }, { id: 'var_r9', label: 'R9' },
    { id: 'var_r15', label: 'R15' }, { id: 'var_r16', label: 'R16' }, { id: 'var_r17', label: 'R17' },
    { id: 'var_r18', label: 'R18' }, { id: 'var_r19', label: 'R19' }, { id: 'var_r20', label: 'R20' },
    { id: 'var_r21', label: 'R21' }, { id: 'var_r22', label: 'R22' }, { id: 'var_r23', label: 'R23' },
    { id: 'var_r24', label: 'R24' }, { id: 'var_r25', label: 'R25' }, { id: 'var_r26', label: 'R26' },
  ],
  supporters: [
    { id: 'sup_f1', label: 'F1' }, { id: 'sup_f2', label: 'F2' }, { id: 'sup_f3', label: 'F3' },
    { id: 'sup_f4', label: 'F4' }, { id: 'sup_f5', label: 'F5' }, { id: 'sup_f6', label: 'F6' },
    { id: 'sup_f7', label: 'F7' }, { id: 'sup_s1', label: 'S1' }, { id: 'sup_s2', label: 'S2' },
    { id: 'sup_s3', label: 'S3' }, { id: 'sup_r10', label: 'R10' }, { id: 'sup_r11', label: 'R11' },
    { id: 'sup_r12', label: 'R12' }, { id: 'sup_r13', label: 'R13' }, { id: 'sup_r14', label: 'R14' },
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

// 💡 출발지와 도착지 ID를 조합해 routeData에서 경로 배열을 찾아 반환하는 함수
export const getRouteSteps = (startId: string, endId: string): StepData[] => {
  const routeKey = `${startId}_to_${endId}`;
  // routeData에 일치하는 키가 있으면 해당 배열 반환, 없으면 빈 배열 반환
  return (routeData as Record<string, StepData[]>)[routeKey] || [];
};