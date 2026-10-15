import { mockInvitation } from "@/lib/mock";
import { InvitationCover } from "@/components/InvitationCover";
import { Image } from "@/components/Image";
import { InfoRow } from "@/components/InfoRow";
import { RsvpSection } from "./RsvpSection";

// 게스트가 초대장을 보고 참석 여부를 보내는 화면. (경로: /i/[id])
// 폴더 이름 [id] 가 URL 의 초대장 아이디가 된다.
//
// Next.js 16 에서는 params 가 "Promise" 라서 바로 못 읽고 await 로 꺼내야 한다.
// 지금은 Supabase 가 없어 id 로 조회하는 대신 mock 데이터를 그대로 쓴다.
// 실제 연결 시 이 자리에서  const { id } = await params;  로 받아 초대장을 불러온다.
//
// generateStaticParams: 미리 만들어 둘 주소를 알려준다.
// (cacheComponents 설정에서 await params 를 안전하게 쓰려면 필요하다.)
export function generateStaticParams() {
  return [{ id: mockInvitation.id }];
}

export default async function InvitationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await params; // Next 16: params 는 Promise 라 await 로 꺼낸다. (지금은 mock 사용)
  const invitation = mockInvitation;

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-[375px] flex-col bg-surface-default">
      {/* 커버: 대표 이미지 + 제목 + 일시/장소 (대표 이미지는 샘플 고정) */}
      <InvitationCover
        title={invitation.title}
        date={invitation.datetime}
        location={invitation.location}
        imageSrc="/cover-sample.png"
        imageAlt="초대장 대표 이미지"
      />

      {/* 본문: 상단 깃발 장식 + 초대 글 */}
      <div className="flex flex-col items-center gap-32 bg-surface-default px-20 py-80 text-center">
        <Image type="flag" alt="" />
        <p className="whitespace-pre-line text-body-compact text-text-primary">
          {invitation.body}
        </p>
      </div>

      {/* 행사 정보 카드: 일시·장소 */}
      <div className="bg-surface-default px-20 pt-24 pb-40">
        <div className="flex flex-col gap-10 rounded-card bg-surface-subtle p-20">
          <InfoRow label="일시" value={invitation.datetime} />
          <InfoRow label="장소" value={invitation.location} />
        </div>
      </div>

      {/* 참석 신청: 폼 → 완료 전환은 RsvpSection(클라이언트)이 담당 */}
      <div className="flex flex-col bg-background-subtle px-20 pt-40 pb-60">
        <RsvpSection />
      </div>
    </div>
  );
}
