type IconCheckProps = React.SVGProps<SVGSVGElement>;

// Figma: icon/check — 색은 currentColor 를 따른다(부모의 text-* 토큰).
export function IconCheck({ className, ...props }: IconCheckProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
      {...props}
    >
      <path
        d="M4.5 12L9.5 16L18.5 7"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
