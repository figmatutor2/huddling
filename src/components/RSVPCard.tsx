import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { RadioOption } from "@/components/RadioOption";
import { Stepper } from "@/components/Stepper";
import { Button } from "@/components/Button";
import { SuccessIcon } from "@/components/SuccessIcon";
import { InfoRow } from "@/components/InfoRow";

type RSVPCardProps = {
  state?: "form" | "done";
  // --- state="form" 에서 쓰는 값 ---
  title?: string;
  description?: string;
  name?: string;
  onNameChange?: (value: string) => void;
  attending?: boolean | null;
  onAttendingChange?: (attending: boolean) => void;
  companions?: number;
  onCompanionsChange?: (count: number) => void;
  companionHelper?: string;
  submitLabel?: string;
  onSubmit?: () => void;
  // --- state="done" 에서 쓰는 값 ---
  doneTitle?: string;
  doneDescription?: string;
  summary?: { label: string; value: string }[];
  className?: string;
};

// Figma: RSVPCard — 보기 화면(/i/[id])의 참석 신청 카드.
// 제출 전 state="form", 제출 후 같은 자리에서 state="done" 으로 바꾼다.
// 값은 쓰는 쪽(페이지)에서 내려주는 "제어 컴포넌트"로 만들었다.
export function RSVPCard({
  state = "form",
  title = "참석 여부 알려주기",
  description = "이름과 참석 여부를 남겨주세요.",
  name = "",
  onNameChange,
  attending = null,
  onAttendingChange,
  companions = 0,
  onCompanionsChange,
  companionHelper = "본인을 제외하고 함께 오는 인원이에요.",
  submitLabel = "참석 여부 보내기",
  onSubmit,
  doneTitle = "참석 여부를 보냈어요",
  doneDescription = "호스트에게 응답이 전달됐어요.",
  summary = [],
  className,
}: RSVPCardProps) {
  const cardClass = `flex w-full flex-col gap-24 rounded-card bg-surface-default px-20 py-24 ${className ?? ""}`;

  if (state === "done") {
    return (
      <div className={cardClass}>
        <div className="flex w-full flex-col items-center gap-12 py-40">
          <SuccessIcon />
          <p className="text-title-lg text-text-strong">{doneTitle}</p>
          <p className="text-body-md text-text-secondary">{doneDescription}</p>
        </div>
        {summary.length > 0 && (
          <div className="flex w-full flex-col gap-8 rounded-card bg-surface-subtle p-16">
            {summary.map((item) => (
              <InfoRow key={item.label} type="spread" label={item.label} value={item.value} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <form
      className={cardClass}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.();
      }}
    >
      <div className="flex w-full flex-col items-center gap-6">
        <p className="text-heading-lg text-text-strong">{title}</p>
        <p className="text-body-md text-text-secondary">{description}</p>
      </div>

      <div className="flex w-full flex-col gap-24">
        <Input
          label="이름"
          required
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={(e) => onNameChange?.(e.target.value)}
        />

        <div className="flex w-full flex-col gap-8">
          <Label label="참석 여부" required />
          <div className="flex w-full items-center justify-between">
            <RadioOption
              label="참석"
              name="rsvp-attending"
              checked={attending === true}
              onChange={() => onAttendingChange?.(true)}
            />
            <RadioOption
              label="불참"
              name="rsvp-attending"
              checked={attending === false}
              onChange={() => onAttendingChange?.(false)}
            />
          </div>
        </div>

        <div className="flex w-full flex-col gap-8">
          <Label label="동반 인원" required />
          <Stepper
            value={companions}
            onDecrease={() => onCompanionsChange?.(Math.max(0, companions - 1))}
            onIncrease={() => onCompanionsChange?.(companions + 1)}
            disableDecrease={companions <= 0}
          />
          {companionHelper && <p className="text-caption-md text-text-tertiary">{companionHelper}</p>}
        </div>
      </div>

      <Button size="lg" type="submit" className="w-full">
        {submitLabel}
      </Button>
    </form>
  );
}
