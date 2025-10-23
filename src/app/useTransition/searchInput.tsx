import { ChangeEvent, useState, useTransition } from "react";

export default function SearchInput() {
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // 긴급한 업데이트 (즉시 반영)

    startTransition(() => {
      setDisplayValue(e.target.value); // 긴급하지 않은 업데이트 (지연될 수 있음)
    });
  };

  return (
    <div>
      <input value={inputValue} onChange={handleChange} />
      <div>test{isPending && <span> 로딩 중...</span>}</div>
      <div>
        <p>검색 결과: {displayValue}</p>
      </div>
    </div>
  );
}
