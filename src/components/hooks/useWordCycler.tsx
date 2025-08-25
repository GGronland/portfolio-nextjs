"use client";

import { useEffect, useState } from "react";

type ArrayWithMinLength<T> = [T, T, ...T[]];

// An exercise in manual CSS animations
// For simplicity, consider pre-existing libraries such as react-spring

const useWordCycler = (
  wordList: ArrayWithMinLength<string>,
  cycleDelayMS: number = 5000,
  classname: string = "",
  fullStop?: boolean
) => {
  const [listIndex, setListIndex] = useState<number>(0);

  useEffect(() => {
    const cycleInterval = setInterval(cycleNewWord, cycleDelayMS);

    return () => clearInterval(cycleInterval);
  }, []);

  // wordList typing ensures min 2 strings in list, this ensures they're non-empty
  const processedList = wordList.filter((word: string) => word.length > 0);

  if (processedList.length <= 1) {
    throw new Error("List must contain at least two non-empty strings");
  }
  const getNextIndex = (currentIndex: number) => {
    return processedList[currentIndex + 1] ? currentIndex + 1 : 0;
  };

  const cycleNewWord = () => {
    setListIndex((prev) => getNextIndex(prev));
  };

  if (classname) {
    return (
      <span
        key={`wordCycle_${processedList[listIndex]}`}
        className={`${classname} relative`}
      >
        {processedList[listIndex]}
        {fullStop ? "." : ""}
      </span>
    );
  } else return processedList[listIndex];
};

export default useWordCycler;
