# Figma 프레임 매핑

화면(경로)마다 비교할 Figma 프레임 URL을 적는다. `ui-reviewer` 에이전트가 이 표를 보고 Figma와 코드를 비교한다.
URL은 Figma에서 프레임을 선택한 뒤 `우클릭 → Copy link to selection`으로 복사한다. (`node-id=`가 들어 있어야 한다)

| 경로 | 화면 | Figma 프레임 URL |
| --- | --- | --- |
| `/create` | 만들기 (입력·미리보기·발행) | https://www.figma.com/design/vkzsv9AD7pivFgaQvs12rz/-%EC%B4%88%EB%B3%B4%EC%9E%90-3%EC%A3%BC-%EC%B1%8C%EB%A6%B0%EC%A7%80---2%EC%A3%BC%EC%B0%A8--Figma-%EA%B8%B0%EC%B4%88---%EB%94%94%EC%9E%90%EC%9D%B8-%EA%B8%B0%EB%B0%98%EC%9C%BC%EB%A1%9C-%ED%94%84%EB%A1%A0%ED%8A%B8-%EC%97%94%EB%93%9C-%ED%99%94%EB%A9%B4-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EA%B8%B0?node-id=2168-886 |
| `/create` (발행 완료) | 링크 공유 | https://www.figma.com/design/vkzsv9AD7pivFgaQvs12rz/-%EC%B4%88%EB%B3%B4%EC%9E%90-3%EC%A3%BC-%EC%B1%8C%EB%A6%B0%EC%A7%80---2%EC%A3%BC%EC%B0%A8--Figma-%EA%B8%B0%EC%B4%88---%EB%94%94%EC%9E%90%EC%9D%B8-%EA%B8%B0%EB%B0%98%EC%9C%BC%EB%A1%9C-%ED%94%84%EB%A1%A0%ED%8A%B8-%EC%97%94%EB%93%9C-%ED%99%94%EB%A9%B4-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EA%B8%B0?node-id=2168-910 |
| `/i/[id]` | 초대장 보기·응답 폼 | https://www.figma.com/design/vkzsv9AD7pivFgaQvs12rz/?node-id=2168-923 |
| `/i/[id]` (제출 완료) | 응답 완료 | (별도 프레임 없음 · 같은 카드에서 state 전환으로 처리) |
| `/i/[id]/responses` | 응답 현황 | https://www.figma.com/design/vkzsv9AD7pivFgaQvs12rz/?node-id=2168-871 |
