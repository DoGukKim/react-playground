"use client";

import { ChangeEvent, startTransition } from "react";

interface Props {
  action: (qty: string) => void;
}

const Item = ({ action }: Props) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    startTransition(async () => action(e.target.value));
  };

  return (
    <div>
      <label>수량</label>
      <input type="number" onChange={handleOnChange} defaultValue={1} />
    </div>
  );
};

export default Item;
