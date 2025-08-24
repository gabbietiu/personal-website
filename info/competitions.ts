export type Person = {
  name: string;
  link: string;
};

export type Project = {
  name: string;
  description: string;
  longDescription: string;
  media?: string[];
  color: string;
  github?: string;
  youtube?: string;
  deck?: string;
  website?: string;
  tools?: string[];
  teammates?: Person[];
  awards?: string[];
};

export const competitions: Project[] = [
  {
    name: "Global Robotics Competition 2025",
    description: "Champion, Space Rover Challenge",
    longDescription:
      "I competed in the Global Robotics Competition 2025 and won the Space " +
      "Rover Challenge! I coded in Arduino and co-designed a rover specifically " +
      "for navigating a Martian terrain obstacle course. I also designed and " +
      "function-tested a robotic hand that could pick up and deliver a ball " +
      "to a target. The competition was intense but really exciting - working " +
      "on robotics and space exploration challenges was an amazing experience " +
      "that taught me a lot about engineering and problem-solving.",
    media: [
      "grc-1.jpg",
      "grc-2-compressed.mp4",
      "grc-3-compressed.mp4",
      "grc-4.jpg",
      "grc-5.jpg",
    ],
    color: "green",
  },
  {
    name: "ISAC 2024",
    description: "1st Place, Team Captain",
    longDescription:
      "I led our team to the ISAC Championship 2024 victory, which was " +
      "absolutely amazing! Playing multiple positions - libero, open, and " +
      "right wing - gave me a unique perspective on the game and helped me " +
      "understand how each role contributes to the team's success. The " +
      "experience taught me that building team discipline and resilience is " +
      "just as important as athletic skill. Winning the championship was " +
      "incredible, but seeing how our team grew together was even more " +
      "rewarding.",
    media: [
      "bsmv-1.jpg",
      "bsmv-2.mp4",
      "bsmv-3.jpg",
      "bsmv-4.jpg",
      "bsmv-5.jpg",
    ],
    color: "blue",
  },
  {
    name: "Girls Can Code 2022",
    description: "1st Place",
    longDescription:
      "I competed in the Girls Can Code 2022 competition with my siblings " +
      "and we won first place! It was an incredible experience working " +
      "together as a team to solve coding challenges. The competition " +
      "taught me about collaboration, problem-solving, and how coding can " +
      "bring people together. Winning first place was amazing, but the " +
      "best part was seeing how our teamwork and creativity paid off.",
    media: ["gcc-1.JPG"],
    color: "pink",
  },
];
