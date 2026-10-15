import { mockInvitation, mockResponses } from "@/lib/mock";
import { NavBar } from "@/components/NavBar";
import { SectionHeader } from "@/components/SectionHeader";
import { StatCard } from "@/components/StatCard";
import { ResponseRow } from "@/components/ResponseRow";
import { EmptyState } from "@/components/EmptyState";

// 호스트가 응답 현황을 보는 화면. (경로: /i/[id]/responses)
// 통계 카드(참석·불참·참석 인원 합계)와 응답 목록을 보여준다.
//
// Next.js 16 에서는 params 가 "Promise" 라서 바로 못 읽고 await 로 꺼내야 한다.
// 지금은 Supabase 가 없어 id 로 조회하는 대신 mock 데이터를 그대로 쓴다.
// 실제 연결 시 이 자리에서  const { id } = await params;  로 받아
// 초대장과 응답 목록을 불러온다.
//
// generateStaticParams: 미리 만들어 둘 주소를 알려준다.
// (cacheComponents 설정에서 await params 를 안전하게 쓰려면 필요하다.)
export function generateStaticParams() {
  return [{ id: mockInvitation.id }];
}

export default async function ResponsesPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await params; // Next 16: params 는 Promise 라 await 로 꺼낸다. (지금은 mock 사용)

  const invitation = mockInvitation;
  const responses = mockResponses;

  // 통계 계산:
  // - 참석 수: attending === true 응답 개수
  // - 불참 수: attending === false 응답 개수
  // - 참석 인원 합계: 참석 응답마다 (본인 1명 + 동반 인원)의 합
  const attendingResponses = responses.filter((r) => r.attending);
  const attendingCount = attendingResponses.length;
  const absentCount = responses.filter((r) => !r.attending).length;
  const totalPeople = attendingResponses.reduce(
    (sum, r) => sum + 1 + r.companions,
    0
  );

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-[375px] flex-col bg-surface-default">
      {/* 상단 바 */}
      <NavBar title="응답 현황" />

      {/* 본문: 요약 통계 + 응답 목록 */}
      <div className="flex flex-col gap-40 px-20 pb-80">
        {/* 섹션 헤더: 어떤 초대장의 응답인지 */}
        <SectionHeader
          subtitle="Responses"
          title={invitation.title}
          description={`${invitation.datetime} · ${invitation.location}`}
        />

        {/* 요약 통계 카드 3개 */}
        <div className="flex gap-8">
          <StatCard className="flex-1 min-w-0" label="참석" value={`${attendingCount}명`} />
          <StatCard className="flex-1 min-w-0" label="불참" value={`${absentCount}명`} />
          <StatCard
            className="flex-1 min-w-0"
            label="참석 인원 합계"
            value={`${totalPeople}명`}
            highlight
          />
        </div>

        {/* 합계 계산 안내 */}
        <p className="text-caption-md text-text-tertiary">
          참석 인원 합계 = 참석한 사람 + 동반 인원
        </p>

        {/* 응답 목록 */}
        <div className="flex flex-col gap-8">
          <p className="text-heading-md text-text-strong">응답 목록</p>
          {responses.length === 0 ? (
            <EmptyState />
          ) : (
            responses.map((r) => (
              <ResponseRow
                key={r.id}
                name={r.name}
                attending={r.attending}
                // 참석이고 동반이 있을 때만 "동반 N명"을 보조 정보로 보여준다.
                // (불참이면 동반 인원을 표시하지 않는다.)
                meta={
                  r.attending && r.companions > 0
                    ? `동반 ${r.companions}명`
                    : undefined
                }
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
