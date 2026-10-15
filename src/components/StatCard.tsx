type StatCardProps = {
  label: string;
  value: string;
  highlight?: boolean;
  className?: string;
};

// Figma: StatCard — 응답 현황 숫자 카드. highlight=true 는 강조할 합계에만.
export function StatCard({ label, value, highlight = false, className }: StatCardProps) {
  return (
    <div
      className={`flex w-full flex-col items-center gap-4 rounded-card px-12 py-16 ${
        highlight ? "bg-info-subtle" : "bg-surface-subtle"
      } ${className ?? ""}`}
    >
      <p className="text-caption-md text-text-secondary">{label}</p>
      <p className={`text-title-lg ${highlight ? "text-info-strong" : "text-text-strong"}`}>
        {value}
      </p>
    </div>
  );
}
