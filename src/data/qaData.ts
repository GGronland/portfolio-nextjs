import { AccordionItem } from "@/components/ui/Accordion";

export const qaData: [AccordionItem, ...AccordionItem[]] = [
  {
    title: "What wireframes services have you worked with?",
    content: [
      "InVision (since deprecated in Dec 2024), Figma and Adobe XD were the main choices at my previous role.",
    ],
  },

  {
    title: "What is your preferred IDE?",
    content: [
      "Right now, it's VS Code. It's well-supported and I've got a comfortable setup for it, so there doesn't seem to be a reason to look elsewhere.",
      "I try not to fix what already works!",
    ],
  },
  {
    title: "How do you use AI in your development process?",
    content: [
      "Right now, I treat it as another tool in the kit. I still have much to learn by writing my own code, and relying on AI necessitates clear prompts, recognising inaccurate responses or outright bugs, and being able to troubleshoot bugs (which will occur one way or another).",
      "I currently leverage Copilot to assist with understanding errors and concepts (cross-referencing answers with online research). I have also used Claude Sonnet (3.5 onwards) to streamline testing for design ideas and as an opportunity to review code.",
    ],
  },
  {
    title: "Is any of the code on this site AI-generated?",
    content: [
      "Beyond the occasional inline code completion in the IDE, no.",
      "While naturally taking inspiration from examining existing websites, this is largely intended to be a demonstration of my work on design, reusable components and logic.",
      "I do utilise libraries for particularly complex/time-consuming UI elements or logic handling (avoiding re-inventing the wheel is important), but I enjoy drilling down into how things work and building custom version to suit my needs when time allows!",
    ],
  },
  {
    title: "What do you do outside of coding?",
    content: [
      "I'm into walks, swimming, photography, music and all manner of games.",
      " My current goal is learning to play the electric guitar once I find it under all that dust!",
    ],
  },
];
