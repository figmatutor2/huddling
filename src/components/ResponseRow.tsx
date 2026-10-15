import { AttendanceBadge } from "@/components/AttendanceBadge";

type ResponseRowProps = {
  name: string;
  meta?: string;
  attending?: boolean;
  className?: string;
};

// Figma: ResponseRow — 응답 현황 목록 한 줄. name + meta + AttendanceBadge.
export function ResponseRow({ name, meta, attending = true, className }: ResponseRowProps) {
  return (
    <div
      className={`flex w-full items-center gap-12 rounded-card border border-border-subtle bg-surface-default p-16 ${className ?? ""}`}
    >
      <div className="flex min-w-0 flex-1 flex-col gap-4">
        <p className="truncate text-label-lg text-text-primary">{name}</p>
        {meta && <p className="truncate text-caption-md text-text-tertiary">{meta}</p>}
      </div>
      <AttendanceBadge attending={attending} />
    </div>
  );
}
