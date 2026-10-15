type StepButtonProps = React.ComponentProps<"button"> & {
  icon: React.ReactNode;
};

// Figma: StepButton — Stepper 의 −/+ 버튼. 더 못 줄이면 disabled.
export function StepButton({ icon, className, disabled, ...props }: StepButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`flex size-44 items-center justify-center rounded-control border border-border-default bg-surface-default text-text-primary disabled:text-text-disabled ${className ?? ""}`}
      {...props}
    >
      {icon}
    </button>
  );
}
