import { IconCheck } from "@/components/IconCheck";

type SuccessIconProps = {
  className?: string;
};

// Figma: SuccessIcon — 완료 표시(동그란 배경 + 체크). 발행/신청 완료에 쓴다.
export function SuccessIcon({ className }: SuccessIconProps) {
  return (
    <span
      className={`inline-flex size-60 items-center justify-center rounded-full bg-info-subtle text-info-strong ${className ?? ""}`}
    >
      <IconCheck className="size-32" />
    </span>
  );
}
