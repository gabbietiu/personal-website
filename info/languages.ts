import { createElement } from "react";
import ReactCountryFlag from "react-country-flag";

export const languages = [
  {
    level: "",
    shade: 6,
    subItems: [
      {
        name: "English",
        icon: createElement(ReactCountryFlag, {
          className: "emojiFlag",
          countryCode: "GB",
          style: { fontSize: "1.5rem" },
        }),
        color: "blue",
      },
      {
        name: "Chinese",
        icon: createElement(ReactCountryFlag, {
          className: "emojiFlag",
          countryCode: "CN",
          style: { fontSize: "1.5rem" },
        }),
        color: "yellow",
      },
      {
        name: "Tagalog",
        icon: createElement(ReactCountryFlag, {
          className: "emojiFlag",
          countryCode: "PH",
          style: { fontSize: "1.5rem" },
        }),
        color: "blue",
      },
      {
        name: "C++",
        icon: "cplusplus",
        color: "blue",
      },
      {
        name: "C#",
        icon: "csharp",
        color: "grape",
      },
      {
        name: "Java",
        icon: "java",
        color: "red",
      },
      {
        name: "Python",
        icon: "python",
        color: "blue",
      },
    ],
  },
];
