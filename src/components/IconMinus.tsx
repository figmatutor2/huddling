type IconMinusProps = React.SVGProps<SVGSVGElement>;

// Figma: icon/minus — 색은 currentColor 를 따른다(부모의 text-* 토큰).
export function IconMinus({ className, ...props }: IconMinusProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      aria-hidden
      {...props}
    >
      <path
        d="M16.6667 10H3.33333"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
      />
    </svg>
  );
}
