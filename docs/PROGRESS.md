# 작업 진행 기록

웹 초대장 제작 서비스(`huddling-invitation`)의 진행 상황을 정리한 문서다.
요구사항 원문은 [`PRD.md`](./PRD.md), 화면별 Figma 링크는 [`figma-frames.md`](./figma-frames.md) 참고.

- 최종 업데이트: 2026-10-15
- GitHub: https://github.com/figmatutor2/huddling

---

## 1. 지금까지 한 일

### 디자인 토큰 (`src/app/globals.css`)
- Figma 변수를 `@theme`에 디자인 토큰으로 등록했다.
  - 색상: `--color-action-primary`, `--color-text-primary` 등 (의미색 + 원색 팔레트)
  - 간격/radius/글자크기: **Figma 숫자를 px 그대로** 사용 (예: `--spacing-16: 16px` → `p-16`은 16px)
  - 타이포그래피 묶음 클래스 10개: `text-display-lg`, `text-title-lg`, `text-body-lg` 등 (`@layer components`)
- 글꼴: **Pretendard**를 CDN으로 연결.

> ⚠️ 간격 토큰이 px=숫자라서 Tailwind 기본값과 다르다. 이 프로젝트에선 `p-16` = 16px.

### 재사용 컴포넌트 (`src/components/`)
Figma 컴포넌트 라이브러리를 그대로 구현한 26개. 이름은 Figma와 동일, 토큰만 사용.
- 입력/버튼: `Button`, `Input`, `InputField`, `Textarea`, `TextareaField`, `Label`, `Radio`, `RadioOption`, `StepButton`, `Stepper`
- 표시용: `InvitationCover`, `Image`(variant: `character`/`flag`), `InfoRow`, `SectionHeader`, `NavBar`, `AttendanceBadge`, `StatCard`, `ResponseRow`, `EmptyState`, `SuccessIcon`, `CopyLinkField`, `RSVPCard`
- 아이콘: `IconCheck`, `IconPlus`, `IconMinus`, `IconNone`
- 이미지 에셋: `public/cover-sample.png`(커버 샘플), `public/flag.png`(깃발 장식)

### 화면 (`src/app/`) — PRD의 3개 화면 모두 구현 (mock 기준)
| 경로 | 화면 | 상태 |
| --- | --- | --- |
| `/create` | 만들기: 입력 폼 + 실시간 미리보기 + 발행 | ✅ |
| `/create` (발행 후) | 발행 완료: 링크 2개 복사 | ✅ |
| `/i/[id]` | 게스트: 초대장 보기 + 참석 신청(이름·참석여부·동반인원), 제출 시 완료 전환 | ✅ |
| `/i/[id]/responses` | 호스트: 참석/불참 수·참석 인원 합계·응답 목록 | ✅ |

- 화면 너비는 모두 모바일 기준 `max-w-[375px]` 통일.
- 가짜 데이터: `src/lib/mock.ts` (`mockInvitation` 1개, `mockResponses` 3개 — 참석/불참 섞임, 동반 인원 포함).

### 전체 플로우 연결
- `/create`에서 네 칸(제목·일시·장소·본문)을 모두 채우면 "발행하기" 활성화.
- "발행하기" → 같은 화면이 **발행 완료 상태**로 전환(페이지 이동 없음).
- 완료 화면에 복사 링크 2개: 초대장 `/i/demo`, 응답 현황 `/i/demo/responses` (둘 다 실제로 열림).

---

## 2. 현재 한계 (중요)

**백엔드/DB가 아직 없다.** 그래서:
- `/create`에서 입력한 값은 **저장되지 않는다.** `/i/demo`는 입력값이 아니라 `mock.ts`의 고정 초대장을 보여준다.
- 게스트가 제출한 참석 응답도 **저장되지 않는다.** 제출하면 화면만 완료 상태로 바뀐다.
- `/i/demo/responses`의 통계·목록도 `mock.ts`의 고정 응답 3건이다.
- 발행 ID는 데모용 고정값 `"demo"`다. (저장 기능이 생기면 추측 어려운 고유 ID로 바꿀 예정)

즉, 지금은 **화면과 흐름을 눈으로 확인하는 단계**까지 완성됐고, 실제 데이터 연결은 아직이다.

---

## 3. 다음에 할 일

- [ ] **Supabase 연동** (스택에 이미 정해져 있음) — *다음 작업으로 예정*
  - 테이블 2개: 초대장, 응답
  - `/create` 발행 시 실제 저장 + 추측 어려운 고유 ID 생성
  - `/i/[id]`가 ID로 실제 초대장 조회
  - 게스트 응답 저장 + `/i/[id]/responses`에서 실제 집계
- [ ] 협업 준비 파일: `README`(실행법), `.nvmrc`(Node 버전 고정), `.env.local.example`(환경변수 템플릿)
- [ ] (선택) `/i/[id]`에 호스트가 올린 대표 이미지 반영 — 이미지 업로드 기능은 PRD에 없어 추가 여부 상의 필요

---

## 4. 실행 방법

```bash
npm install     # 처음 받았을 때 1회
npm run dev     # 개발 서버 (http://localhost:3000)
npm run build   # 배포 전 빌드 확인
npm run lint    # 코드 규칙 검사
```

확인용 주소:
- 만들기: http://localhost:3000/create
- 초대장 보기: http://localhost:3000/i/demo
- 응답 현황: http://localhost:3000/i/demo/responses
