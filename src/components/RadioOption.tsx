type RadioOptionProps = React.ComponentProps<"input"> & {
  label: string;
};

// Figma: RadioOption — 라디오 + 라벨 한 줄. 참석/불참 선택에 쓴다.
// 실제 <input type="radio"> 라서 name 을 같게 주면 하나만 선택된다.
export function RadioOption({ label, className, ...props }: RadioOptionProps) {
  return (
    <label className={`inline-flex cursor-pointer items-center gap-4 ${className ?? ""}`}>
      <span className="relative flex size-48 items-center justify-center">
        <input type="radio" className="peer sr-only" {...props} />
        <span className="flex size-20 items-center justify-center rounded-full border-2 border-border-strong bg-surface-default peer-checked:border-action-primary peer-checked:bg-action-primary peer-disabled:border-text-disabled peer-disabled:bg-text-disabled">
          <span className="size-8 rounded-full bg-surface-default" />
        </span>
      </span>
      <span className="text-label-lg text-text-strong">{label}</span>
    </label>
  );
}
