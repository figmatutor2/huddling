import { AttendanceBadge } from "@/components/AttendanceBadge";

type ResponseRowProps = {
  name: string;
  meta?: string;
  attending?: boolean;
  className?: string;
};

// Figma: ResponseRow — 응답 현황 목록 한 줄. name + meta + AttendanceBadge.
// 높이는 h-80 으로 고정한다. 불참처럼 meta(동반 인원)가 없는 줄도
// 참석 줄과 같은 높이를 유지하도록(items-center 로 내용은 세로 가운데 정렬).
export function ResponseRow({ name, meta, attending = true, className }: ResponseRowProps) {
  return (
    <div
      className={`flex h-80 w-full items-center gap-12 rounded-card border border-border-subtle bg-surface-default px-16 ${className ?? ""}`}
    >
      <div className="flex min-w-0 flex-1 flex-col gap-4">
        <p className="truncate text-label-lg text-text-primary">{name}</p>
        {meta && <p className="truncate text-caption-md text-text-tertiary">{meta}</p>}
      </div>
      <AttendanceBadge attending={attending} />
    </div>
  );
}
