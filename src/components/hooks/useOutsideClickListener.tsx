"use client";

import {
  ReactElement,
  RefObject,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";

const useOutsideClickListener = (
  ref: RefObject<HTMLElement | null>,
  outsideClickCallback?: () => void
) => {
  const [outsideClickCount, setOutsideClickCount] = useState<number>(0);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOutsideClickCount((prev) => prev + 1);
        outsideClickCallback && outsideClickCallback();
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
