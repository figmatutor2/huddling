type InfoRowProps = {
  label: string;
  value: string;
  type?: "inline" | "spread";
  className?: string;
};

// Figma: InfoRow — 라벨-값 한 줄.
// type=inline 붙여서(일시 | 값) · spread 양끝 정렬(이름 ........ 값).
export function InfoRow({ label, value, type = "inline", className }: InfoRowProps) {
  if (type === "spread") {
    return (
      <div className={`flex w-full items-center gap-10 ${className ?? ""}`}>
        <p className="text-body-md text-text-secondary">{label}</p>
        <p className="flex-1 text-right text-label-md text-text-strong">{value}</p>
      </div>
    );
  }
  return (
    <div className={`flex items-center gap-10 ${className ?? ""}`}>
      <p className="text-label-lg text-text-secondary">{label}</p>
      <span className="h-12 w-px bg-border-default" />
      <p className="text-label-lg text-text-strong">{value}</p>
    </div>
  );
}
