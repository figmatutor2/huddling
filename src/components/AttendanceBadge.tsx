type AttendanceBadgeProps = {
  attending?: boolean;
  className?: string;
};

// Figma: AttendanceBadge — 참석 여부 배지. attending=true 참석 · false 불참.
export function AttendanceBadge({ attending = true, className }: AttendanceBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-pill px-10 py-4 text-label-md ${
        attending
          ? "bg-info-subtle text-info-strong"
          : "bg-background-subtle text-text-secondary"
      } ${className ?? ""}`}
    >
      {attending ? "참석" : "불참"}
    </span>
  );
}
