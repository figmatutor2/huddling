type IconPlusProps = React.SVGProps<SVGSVGElement>;

// Figma: icon/plus — 색은 currentColor 를 따른다(부모의 text-* 토큰).
export function IconPlus({ className, ...props }: IconPlusProps) {
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
        d="M10 16.6667V3.33333M3.33333 10H16.6667"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
      />
    </svg>
  );
}
