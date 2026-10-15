import { InputField } from "@/components/InputField";
import { Button } from "@/components/Button";

type CopyLinkFieldProps = {
  value: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  onCopy?: () => void;
  className?: string;
};

// Figma: CopyLinkField — 발행 후 공유할 링크 한 줄
// (title · 링크 field(읽기 전용) · 복사 버튼 · description).
export function CopyLinkField({
  value,
  title = "초대장 링크",
  description = "게스트에게 공유하는 링크예요.",
  buttonLabel = "복사",
  onCopy,
  className,
}: CopyLinkFieldProps) {
  return (
    <div className={`flex w-full flex-col gap-8 rounded-card bg-surface-subtle p-16 ${className ?? ""}`}>
      <p className="text-label-lg text-text-strong">{title}</p>
      <div className="flex items-center gap-8">
        <InputField value={value} readOnly className="min-w-0 flex-1" />
        <Button size="sm" type="button" onClick={onCopy}>
          {buttonLabel}
        </Button>
      </div>
      {description && <p className="text-caption-md text-text-tertiary">{description}</p>}
    </div>
  );
}
