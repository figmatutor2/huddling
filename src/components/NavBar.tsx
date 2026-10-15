import { IconNone } from "@/components/IconNone";

type NavBarProps = {
  title?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  className?: string;
};

// Figma: NavBar — 화면 상단 바. 가운데 title, 양옆 left/right 아이콘 슬롯.
// 슬롯을 비우면 icon/none(빈 자리)으로 채워 가운데 정렬을 유지한다.
export function NavBar({ title = "", left, right, className }: NavBarProps) {
  return (
    <div className={`flex w-full items-center gap-32 p-20 ${className ?? ""}`}>
      {left ?? <IconNone />}
      <p className="min-w-0 flex-1 text-center text-heading-md text-text-primary">{title}</p>
      {right ?? <IconNone />}
    </div>
  );
}
