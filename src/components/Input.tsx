import { Label } from "@/components/Label";
import { InputField } from "@/components/InputField";

type InputProps = React.ComponentProps<"input"> & {
  label?: string;
  required?: boolean;
  helper?: string;
};

// Figma: Input — 라벨 + 한 줄 입력 박스 + 안내 문구 묶음.
// 일시·장소·이름처럼 한 줄 값에 쓴다. 여러 줄은 Textarea.
export function Input({ label = "Label", required = false, helper, id, className, ...props }: InputProps) {
  return (
    <div className="flex w-full flex-col gap-6">
      <Label label={label} required={required} htmlFor={id} />
      <InputField id={id} className={className} {...props} />
      {helper && <p className="text-caption-md text-text-tertiary">{helper}</p>}
    </div>
  );
}
