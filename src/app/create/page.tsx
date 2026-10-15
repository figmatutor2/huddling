"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { NavBar } from "@/components/NavBar";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import { Label } from "@/components/Label";
import { InvitationCover } from "@/components/InvitationCover";
import { Image } from "@/components/Image";
import { InfoRow } from "@/components/InfoRow";
import { Button } from "@/components/Button";
import { SuccessIcon } from "@/components/SuccessIcon";
import { CopyLinkField } from "@/components/CopyLinkField";

// 호스트가 초대장을 만드는 화면.
// 위쪽 폼에 입력하면 아래 미리보기에 입력값이 그대로 실시간 반영된다.
// 발행하기를 누르면 고유 ID를 만들고 "발행 완료" 화면으로 바뀐다.
// (아직 Supabase 저장은 하지 않는다. 지금은 ID 생성 + 링크 표시/복사까지만.)
export default function CreatePage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [datetime, setDatetime] = useState("");
  const [location, setLocation] = useState("");
  const [body, setBody] = useState("");
  // 발행 후 생성된 초대장 ID. null 이면 아직 발행 전(폼 화면).
  const [publishedId, setPublishedId] = useState<string | null>(null);

  // 필수값(제목·일시·장소·본문)이 모두 채워졌는지.
  const canPublish =
    title.trim() !== "" &&
    datetime.trim() !== "" &&
    location.trim() !== "" &&
    body.trim() !== "";

  // 발행하기: 빈 값이면 막고, 추측하기 어려운 고유 ID를 만들어 완료 화면으로 전환.
  function handlePublish() {
    if (!canPublish) return;
    setPublishedId(crypto.randomUUID());
  }

  // 발행이 끝났으면 완료(링크 공유) 화면을 보여준다.
  if (publishedId) {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const inviteUrl = `${origin}/i/${publishedId}`;
    const responsesUrl = `${origin}/i/${publishedId}/responses`;

    function copy(text: string) {
      navigator.clipboard?.writeText(text);
    }

    return (
      <div className="mx-auto flex h-dvh w-full max-w-[375px] flex-col bg-surface-default">
        {/* 상단 바 (고정) */}
        <NavBar title="발행 완료" className="shrink-0" />

        {/* 가운데 스크롤 영역: 완료 안내 + 링크 2개 + 버튼 */}
        <div className="flex min-h-0 flex-1 flex-col gap-40 overflow-y-auto px-20 pb-80">
          {/* 완료 안내 */}
          <div className="flex flex-col items-center gap-12 py-24">
            <SuccessIcon />
            <p className="text-title-lg text-text-strong">초대장이 발행됐어요!</p>
            <p className="text-body-md text-text-secondary">
              아래 두 링크를 복사해 두세요.
            </p>
          </div>

          {/* 초대장 링크 (게스트용) */}
          <CopyLinkField
            value={inviteUrl}
            title="초대장 링크"
            description="게스트에게 공유하는 링크예요."
            onCopy={() => copy(inviteUrl)}
          />

          {/* 응답 현황 링크 (호스트용) */}
          <CopyLinkField
            value={responsesUrl}
            title="응답 현황 링크"
            description="호스트용이에요. 이 링크를 아는 사람은 응답 목록을 볼 수 있어요."
            onCopy={() => copy(responsesUrl)}
          />

          {/* 내 초대장 보기: 게스트용 초대장 화면으로 이동 */}
          <Button
            size="lg"
            type="button"
            className="w-full"
            onClick={() => router.push(`/i/${publishedId}`)}
          >
            내 초대장 보기
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex h-dvh w-full max-w-[375px] flex-col bg-surface-default">
      {/* 상단 바 (고정) */}
      <NavBar title="초대장 만들기" className="shrink-0" />

      {/* 가운데 스크롤 영역: 입력 폼 + 미리보기 */}
      <div className="flex min-h-0 flex-1 flex-col gap-40 overflow-y-auto px-20 pt-24 pb-80">
        {/* 입력 폼 */}
        <div className="flex flex-col gap-24">
          <Textarea
            id="title"
            label="제목"
            required
            rows={2}
            helper="엔터로 줄을 나눌 수 있어요 · 최대 2줄"
            placeholder={"예) 허들링 클럽 2번째\n오프라인 밋업"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            id="datetime"
            label="일시"
            required
            placeholder="예) 2026년 11월 14일 (토) 09:00"
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
          />
          <Input
            id="location"
            label="장소"
            required
            placeholder="예) 세종 남극 기지"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Textarea
            id="body"
            label="본문"
            required
            rows={4}
            placeholder="게스트에게 전할 초대 글을 적어주세요"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        {/* 미리보기: 입력값을 그대로 반영 */}
        <div className="flex flex-col gap-8">
          <Label label="미리보기" />
          <div className="overflow-hidden rounded-control border border-border-subtle">
            {/* 커버: 제목·일시·장소 (대표 이미지는 샘플 고정) */}
            <InvitationCover
              title={title}
              date={datetime}
              location={location}
              imageSrc="/cover-sample.png"
              imageAlt="초대장 대표 이미지"
            />

            {/* 본문: 상단 깃발 장식(고정) + 본문 텍스트 */}
            <div className="flex flex-col items-center gap-32 bg-surface-default px-20 pt-40 pb-80 text-center">
              <Image type="flag" alt="" />
              {body && (
                <p className="whitespace-pre-line text-body-compact text-text-primary">
                  {body}
                </p>
              )}
            </div>

            {/* 행사 정보 카드: 일시·장소 */}
            <div className="bg-surface-default px-20 pt-24 pb-40">
              <div className="flex flex-col gap-10 rounded-card bg-surface-subtle p-20">
                <InfoRow label="일시" value={datetime} />
                <InfoRow label="장소" value={location} />
              </div>
            </div>
          </div>
          <p className="text-caption-md text-text-tertiary">
            입력하는 내용이 바로 미리보기에 반영돼요.
          </p>
        </div>
      </div>

      {/* 하단 발행 버튼 (고정) */}
      <div className="flex shrink-0 flex-col items-center bg-surface-default p-20">
        <Button
          size="lg"
          type="button"
          className="w-full"
          disabled={!canPublish}
          onClick={handlePublish}
        >
          발행하기
        </Button>
      </div>
    </div>
  );
}
