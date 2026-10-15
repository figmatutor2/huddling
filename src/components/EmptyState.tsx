type EmptyStateProps = {
  title?: string;
  description?: string;
  className?: string;
};

// Figma: EmptyState — 목록이 비었을 때 보여주는 안내(예: 응답 0건).
export function EmptyState({
  title = "아직 응답이 없어요",
  description = "초대장 링크를 공유하면 응답이 여기에 쌓여요.",
  className,
}: EmptyStateProps) {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center gap-8 rounded-card bg-surface-subtle px-20 py-40 ${className ?? ""}`}
    >
      <p className="text-heading-md text-text-strong">{title}</p>
      <p className="text-center text-body-md text-text-tertiary">{description}</p>
    </div>
  );
}
