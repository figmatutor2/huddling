// Figma: Image — variant property `type` 를 가진다.
//  - type="character" (기본): 일반 이미지 표시. src/alt 는 쓰는 쪽에서 넘긴다.
//    (초대장 대표 이미지 등은 호스트가 올린 값이라 prop 으로 받는다.)
//  - type="flag": 상단 장식용 깃발(종이비행기 모양) 아이콘. 고정 장식이라 src 가 필요 없다.
type ImageType = "character" | "flag";

type ImageProps = React.ComponentProps<"img"> & {
  type?: ImageType;
};

export function Image({ type = "character", className, alt = "", ...props }: ImageProps) {
  if (type === "flag") {
    // 파란 2톤 페넌트(깃발) 아이콘. Figma 에서 받은 실제 PNG 이미지를 쓴다.
    // 고정 장식이라 src 가 필요 없고, 기본 크기는 Figma variant 와 같은 48x48.
    // 쓰는 쪽에서 className 으로 크기를 덮어쓸 수 있다.
    return (
      // 로컬 정적 이미지지만 프로젝트 규칙상 next/image 대신 일반 img 를 쓴다.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/flag.png"
        alt=""
        aria-hidden
        className={`size-48 object-contain ${className ?? ""}`}
      />
    );
  }

  return (
    // 임의 이미지 URL 을 쓰므로 next/image 대신 일반 img 를 쓴다.
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} className={`object-cover ${className ?? ""}`} {...props} />
  );
}
