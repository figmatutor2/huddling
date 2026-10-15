import { Image } from "@/components/Image";

type InvitationCoverProps = {
  title: string;
  subtitle?: string;
  dateLabel?: string;
  date?: string;
  locationLabel?: string;
  location?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
};

// Figma: InvitationCover — 초대장 상단 커버(대표 이미지 + 제목 + 일시/장소).
// /create 미리보기와 /i/[id] 에서 같은 컴포넌트를 쓴다.
// title 에 줄바꿈(\n)을 넣으면 여러 줄로 보인다.
export function InvitationCover({
  title,
  subtitle,
  dateLabel = "일시",
  date,
  locationLabel = "장소",
  location,
  imageSrc,
  imageAlt = "",
  className,
}: InvitationCoverProps) {
  return (
    <div
      className={`flex w-full flex-col items-center gap-20 bg-linear-to-b from-text-strong to-text-tertiary px-20 py-80 text-center text-text-inverse ${className ?? ""}`}
    >
      <div className="flex w-full flex-col items-center gap-16">
        {subtitle && <p className="text-label-md opacity-60">{subtitle}</p>}
        <p className="whitespace-pre-line text-title-lg">{title}</p>
      </div>

      {imageSrc && <Image src={imageSrc} alt={imageAlt} className="aspect-square w-3/5" />}

      {date && (
        <div className="flex w-full flex-col items-center gap-8">
          <span className="rounded-8 bg-info-subtle px-6 py-2 text-caption-md font-semibold text-info-strong">
            {dateLabel}
          </span>
          <p className="text-label-md text-text-inverse">{date}</p>
        </div>
      )}

      {location && (
        <div className="flex w-full flex-col items-center gap-8">
          <span className="rounded-8 bg-info-subtle px-6 py-2 text-caption-md font-semibold text-info-strong">
            {locationLabel}
          </span>
          <p className="text-label-md text-text-inverse">{location}</p>
        </div>
      )}
    </div>
  );
}
