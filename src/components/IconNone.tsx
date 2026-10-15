type IconNoneProps = {
  className?: string;
};

// Figma: icon/none — 빈 아이콘 자리. NavBar 등에서 자리만 차지한다.
export function IconNone({ className }: IconNoneProps) {
  return <span className={`inline-block size-24 ${className ?? ""}`} aria-hidden />;
}
