"use client";

import { RefObject, useEffect, useState } from "react";

const useOutsideClickListener = (ref: RefObject<HTMLElement | null>) => {
  const [outsideClickCount, setOutsideClickCount] = useState<number>(0);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOutsideClickCount((prev) => prev + 1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return outsideClickCount;
};

export default useOutsideClickListener;
