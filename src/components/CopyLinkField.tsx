"use client";

import { useRef, useState } from "react";
import { InputField } from "@/components/InputField";
import { Button } from "@/components/Button";
import { IconCheck } from "@/components/IconCheck";

type CopyLinkFieldProps = {
  value: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  onCopy?: () => void;
  className?: string;
};

// Figma: CopyLinkField — 발행 후 공유할 링크 한 줄
// (title · 링크 field(읽기 전용) · 복사 버튼 · description).
// 복사하면 화면 아래에 작은 토스트가 잠깐 떴다가 사라진다.
export function CopyLinkField({
  value,
  title = "초대장 링크",
  description = "게스트에게 공유하는 링크예요.",
  buttonLabel = "복사",
  onCopy,
  className,
}: CopyLinkFieldProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | null>(null);

  async function handleCopy() {
    try {
      await navigator.clipboard?.writeText(value);
    } catch {
      // 클립보드 접근이 막힌 경우에도 화면은 멈추지 않게 조용히 넘어간다.
    }
    onCopy?.();
    setCopied(true);
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className={`flex w-full flex-col gap-8 rounded-card bg-surface-subtle p-16 ${className ?? ""}`}>
      <p className="text-label-lg text-text-strong">{title}</p>
      <div className="flex items-center gap-8">
        <InputField value={value} readOnly className="min-w-0 flex-1" />
        <Button size="sm" type="button" onClick={handleCopy}>
          {buttonLabel}
        </Button>
      </div>
      {description && <p className="text-caption-md text-text-tertiary">{description}</p>}

      {/* 복사 완료 토스트: 화면 아래 가운데에 떴다가 사라진다. */}
      <div
        aria-live="polite"
        className={`pointer-events-none fixed bottom-40 left-1/2 z-50 -translate-x-1/2 transition-all duration-200 ${
          copied ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <span className="inline-flex items-center gap-6 rounded-full bg-surface-inverse px-16 py-10 text-label-md text-text-inverse shadow-lg">
          <IconCheck className="size-16" />
          링크를 복사했어요
        </span>
      </div>
    </div>
  );
}
