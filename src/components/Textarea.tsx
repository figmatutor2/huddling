import { Label } from "@/components/Label";
import { TextareaField } from "@/components/TextareaField";

type TextareaProps = React.ComponentProps<"textarea"> & {
  label?: string;
  required?: boolean;
  helper?: string;
};

// Figma: Textarea — 라벨 + 여러 줄 입력 박스 + 안내 문구 묶음.
// rows=2 는 제목(최대 2줄), rows=4 는 본문에 쓴다.
export function Textarea({ label = "Label", required = false, helper, id, rows = 4, className, ...props }: TextareaProps) {
  return (
    <div className="flex w-full flex-col gap-6">
      <Label label={label} required={required} htmlFor={id} />
      <TextareaField id={id} rows={rows} className={className} {...props} />
      {helper && <p className="text-caption-md text-text-tertiary">{helper}</p>}
    </div>
  );
}
