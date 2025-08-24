import { createElement } from "react";
import {
  IconBrain,
  IconFlask,
  IconMath,
  IconBook,
  IconDeviceDesktop,
} from "@tabler/icons-react";
import ReactCountryFlag from "react-country-flag";

export const subjects = [
  {
    level: "",
    shade: 6,
    subItems: [
      {
        name: "HL Chemistry",
        icon: createElement(IconFlask),
        color: "orange",
      },
      {
        name: "HL Math",
        icon: createElement(IconMath),
        color: "gray",
      },
      {
        name: "HL Psychology",
        icon: createElement(IconBrain),
        color: "blue",
      },
      {
        name: "SL CompSci",
        icon: createElement(IconDeviceDesktop),
        color: "blue",
      },
      {
        name: "SL English",
        icon: createElement(ReactCountryFlag, {
          className: "emojiFlag",
          countryCode: "GB",
          style: { fontSize: "1.5rem" },
        }),
        color: "cyan",
      },
      {
        name: "SL Chinese",
        icon: createElement(ReactCountryFlag, {
          className: "emojiFlag",
          countryCode: "CN",
          style: { fontSize: "1.5rem" },
        }),
        color: "red",
      },
    ],
  },
];
