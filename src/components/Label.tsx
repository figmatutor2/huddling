type LabelProps = React.ComponentProps<"label"> & {
  label?: string;
  required?: boolean;
};

// Figma: Label — 입력 필드 위 라벨. required 를 켜면 "필수" 표시가 붙는다.
export function Label({ label = "Label", required = false, className, ...props }: LabelProps) {
  return (
    <label className={`inline-flex items-center gap-4 ${className ?? ""}`} {...props}>
      <span className="text-label-lg text-text-strong">{label}</span>
      {required && <span className="text-caption-md text-feedback-error">필수</span>}
    </label>
  );
}
