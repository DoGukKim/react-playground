"use client";

import React from "react";

type Params<E> = {
  ref: React.RefObject<E>;
  handler: () => void;
};

const useClickOutside = <E extends HTMLElement | null>({
  ref,
  handler,
}: Params<E>) => {
  React.useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
};

export default useClickOutside;
