"use client";

import { useState } from "react";
import { RSVPCard } from "@/components/RSVPCard";

// 참석 신청 부분만 담당하는 "클라이언트 컴포넌트".
// useState(입력값·제출 여부)를 써야 해서 이 부분만 "use client" 로 떼어냈다.
// 나머지(커버·본문·정보)는 서버에서 그린 뒤, 이 폼만 브라우저에서 움직인다.
export function RsvpSection() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<boolean | null>(null);
  const [companions, setCompanions] = useState(0);
  // 제출했으면 true → 같은 자리에서 "완료" 화면으로 바뀐다.
  const [submitted, setSubmitted] = useState(false);

  // 제출: 이름과 참석 여부가 비어 있으면 막는다.
  // (실제 저장(Supabase)은 아직 없다. 지금은 화면만 완료 상태로 바꾼다.)
  function handleSubmit() {
    if (name.trim() === "" || attending === null) return;
    setSubmitted(true);
  }

  // 제출 후: 완료 메시지 + 내가 보낸 응답 요약을 같은 카드에 보여준다.
  if (submitted) {
    return (
      <RSVPCard
        state="done"
        summary={[
          { label: "이름", value: name },
          { label: "참석 여부", value: attending ? "참석" : "불참" },
          { label: "동반 인원", value: `${companions}명` },
        ]}
      />
    );
  }

  // 제출 전: 이름·참석 여부·동반 인원 입력 폼.
  return (
    <RSVPCard
      state="form"
      name={name}
      onNameChange={setName}
      attending={attending}
      onAttendingChange={setAttending}
      companions={companions}
      onCompanionsChange={setCompanions}
      onSubmit={handleSubmit}
    />
  );
}
