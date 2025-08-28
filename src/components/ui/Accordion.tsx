"use client";

import { ArrayOfMinLength } from "@/utilities/types";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

type AccordionProps = {
  data: ArrayOfMinLength<AccordionItem, 1>;
};
export type AccordionItem = {
  title: string;
  content: ArrayOfMinLength<string, 1>;
};

const Accordion = ({ data }: AccordionProps) => {
  const [isOpenList, setIsOpenList] = useState<boolean[]>(
    Array(data.length).fill(false)
  );

  const handleOpenSection = (index: number) => {
    let updatedList = [...isOpenList];
    updatedList[index] = !isOpenList[index];
    setIsOpenList(updatedList);
  };

  return (
    <div className="">
      {data.map((item: AccordionItem, index: number) => {
        // TODO - Tidy up "states" by grouping with @apply
        const isOpen = isOpenList[index] === true;
        const isFollowingItem = isOpenList[index + 1] !== undefined;
        const isFollowingOpen =
          isFollowingItem && isOpenList[index + 1] !== true;

        const isOpenFirst = isOpen && index === 0;
        const isOpenMiddle =
          isOpen && index > 0 && index < isOpenList.length - 1;
        const isOpenEnd = isOpen && index === isOpenList.length - 1;
        const hasConnectedEnd = isFollowingItem && isFollowingOpen && !isOpen;

        return (
          <div
            key={`accordion-${index}`}
            className={`flex flex-col min-w-75 border-1 first-of-type:rounded-t-md last-of-type:rounded-b-md ${
              hasConnectedEnd ? "border-b-slate-500" : "shadow-md"
            } ${isOpenFirst && "mb-4"} ${isOpenMiddle && "my-4"} ${
              isOpenEnd && "mt-4"
            } transition-margin border-slate-700 bg-slate-700 transition-all duration-500`}
          >
            <button
              className="flex justify-between items-center gap-2 py-2 px-4 cursor-pointer"
              onClick={() => handleOpenSection(index)}
            >
              <span className="text-left">{item.title}</span>

              <ChevronDownIcon
                className={`w-5 min-w-5 ${
                  isOpenList[index] ? "rotate-180" : ""
                } transition-all duration-400`}
              />
            </button>

            <div
              className={`overflow-hidden transition-height duration-200 ${
                !isOpenList[index] ? "h-0" : ""
              }`}
            >
              <div className="py-2 px-4">
                {item.content.map(
                  (contentItem: string, contentIndex: number) => (
                    <p key={`accordion-${index}-content-${contentIndex}`}>
                      {contentItem}
                    </p>
                  )
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
