type ButtonProps = React.ComponentProps<"button"> & {
  size?: "sm" | "md" | "lg";
};

// Figma: Button — size=sm/md/lg. hover/disabled 는 상태라서
// React props 대신 Tailwind hover:/disabled: 와 기본 disabled 속성으로 처리한다.
const sizeClass: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "gap-10 py-4 text-label-md",
  md: "h-48 gap-6 py-12 text-label-md",
  lg: "h-52 gap-10 py-4 text-label-lg",
};

export function Button({ size = "md", className, children, ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-control bg-action-primary px-8 text-center text-text-inverse hover:bg-action-hover-overlay disabled:bg-border-subtle disabled:text-text-disabled ${sizeClass[size]} ${className ?? ""}`}
      {...props}
    >
      {children}
    </button>
  );
}
