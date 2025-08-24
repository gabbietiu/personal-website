import { ReactElement, ReactNode } from "react";
import { frameworks } from "./frameworks";
import { languages } from "./languages";
import { subjects } from "./subjects";

export const lfp: {
  caption: string;
  items: {
    level: string;
    shade: number;
    subItems: {
      name: string;
      icon: string | ReactElement;
      color?: string;
    }[];
  }[];
}[] = [
  {
    caption: "Subjects I study",
    items: subjects,
  },
  {
    caption: "Languages I speak",
    items: languages,
  },
  {
    caption: "Frameworks I use",
    items: frameworks,
  },
];
