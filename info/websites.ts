import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons";
import { Icon } from "@tabler/icons-react";

export type Website = {
  href: string;
  icon: Icon;
  color: string;
  shade: number;
};

export const websitesList: Website[] = [
  // {
  //   href: "https://twitter.com/vincetiu8",
  //   icon: IconBrandTwitter,
  //   color: "cyan",
  //   shade: 7,
  // },
  // {
  //   href: "https://linkedin.com/in/vincetiu8",
  //   icon: IconBrandLinkedin,
  //   color: "indigo",
  //   shade: 7,
  // },
  // {
  //   href: "https://github.com/vincetiu8",
  //   icon: IconBrandGithub,
  //   color: "dark",
  //   shade: 9,
  // },
];
