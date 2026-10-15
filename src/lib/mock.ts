// PRD(docs/PRD.md) 기준 가짜 데이터.
// 화면을 먼저 만들어 확인하려고 쓰는 임시 데이터다.
// 나중에 Supabase 연결 시 이 타입(Invitation, Response)을 그대로 쓰고,
// 아래 mock 값만 실제 조회 함수로 바꾸면 된다.

// 초대장 1개
export type Invitation = {
  id: string;
  title: string; // 제목
  datetime: string; // 일시 (사람이 읽는 문자열)
  location: string; // 장소 (주소를 글자로만 표시)
  body: string; // 본문
};

// 참석 응답 1개
export type Response = {
  id: string;
  name: string; // 이름
  attending: boolean; // 참석 여부 (true=참석, false=불참)
  companions: number; // 동반 인원 (본인 제외)
};

export const mockInvitation: Invitation = {
  id: "demo-invitation",
  title: "지우 · 현우 결혼합니다",
  datetime: "2026년 11월 21일 토요일 낮 12시",
  location: "서울 강남구 테헤란로 123 그랜드홀 5층",
  body:
    "저희 두 사람이 평생을 함께하기로 했습니다.\n" +
    "바쁘시더라도 오셔서 축복해 주시면 큰 기쁨이 되겠습니다.",
};

// 응답 3개: 참석·불참이 섞이고, 동반 인원이 있는 응답도 포함
export const mockResponses: Response[] = [
  { id: "r1", name: "김민지", attending: true, companions: 2 },
  { id: "r2", name: "이서준", attending: false, companions: 0 },
  { id: "r3", name: "박하늘", attending: true, companions: 1 },
];
