type SectionHeaderProps = {
  subtitle?: string;
  title?: string;
  description?: string;
  className?: string;
};

// Figma: SectionHeader — 섹션 제목 묶음(subtitle · title · description).
// 넘기지 않은 줄은 자동으로 숨겨진다.
export function SectionHeader({ subtitle, title, description, className }: SectionHeaderProps) {
  return (
    <div className={`flex w-full flex-col items-center gap-16 text-center ${className ?? ""}`}>
      {subtitle && <p className="w-full text-label-md text-info-default">{subtitle}</p>}
      {title && <p className="w-full text-title-lg text-text-primary">{title}</p>}
      {description && <p className="w-full text-body-md text-text-primary">{description}</p>}
    </div>
  );
}
