import { StepButton } from "@/components/StepButton";
import { IconMinus } from "@/components/IconMinus";
import { IconPlus } from "@/components/IconPlus";

type StepperProps = {
  value: number;
  unit?: string;
  onDecrease?: () => void;
  onIncrease?: () => void;
  disableDecrease?: boolean;
  disableIncrease?: boolean;
  className?: string;
};

// Figma: Stepper — 동반 인원 입력(−  값  +).
// value 가 최솟값이면 disableDecrease 를 켜서 − 버튼을 끈다.
export function Stepper({
  value,
  unit = "명",
  onDecrease,
  onIncrease,
  disableDecrease = false,
  disableIncrease = false,
  className,
}: StepperProps) {
  return (
    <div className={`flex items-center gap-12 ${className ?? ""}`}>
      <StepButton
        icon={<IconMinus className="size-20" />}
        onClick={onDecrease}
        disabled={disableDecrease}
        aria-label="인원 줄이기"
      />
      <p className="text-heading-md text-text-strong">
        {value}
        {unit}
      </p>
      <StepButton
        icon={<IconPlus className="size-20" />}
        onClick={onIncrease}
        disabled={disableIncrease}
        aria-label="인원 늘리기"
      />
    </div>
  );
}
