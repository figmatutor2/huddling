type TextareaFieldProps = React.ComponentProps<"textarea">;

// Figma: TextareaField — 여러 줄 입력 박스(<textarea>).
// state=default(빈 칸) / focus(입력 중) / active(값이 채워진 상태)는
// 실제 입력 요소의 상태로 자동 처리된다.
export function TextareaField({ className, rows = 4, ...props }: TextareaFieldProps) {
  return (
    <textarea
      rows={rows}
      className={`w-full resize-none rounded-control border border-border-subtle bg-surface-default px-16 py-12 text-body-lg text-text-primary outline-none placeholder:text-text-disabled focus:border-action-primary disabled:text-text-disabled ${className ?? ""}`}
      {...props}
    />
  );
}
