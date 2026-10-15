type RadioProps = {
  checked?: boolean;
  disabled?: boolean;
  className?: string;
};

// Figma: Radio — 라디오 단독(표시용). state=default/selected/disabled.
// 실제 폼에서는 보통 RadioOption 을 쓴다.
export function Radio({ checked = false, disabled = false, className }: RadioProps) {
  const ring = disabled
    ? "border-text-disabled bg-text-disabled"
    : checked
      ? "border-action-primary bg-action-primary"
      : "border-border-strong bg-surface-default";
  return (
    <span
      className={`flex size-20 items-center justify-center rounded-full border-2 ${ring} ${className ?? ""}`}
    >
      <span className="size-8 rounded-full bg-surface-default" />
    </span>
  );
}
