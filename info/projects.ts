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

export const projects: Project[] = [
  {
    name: "Demi-Mortals",
    description: "Developer",
    longDescription:
      "I developed a psychology-based video game that was really exciting " +
      "to work on! I handled the conceptualization, scriptwriting, and " +
      "storyline development, which let me be creative while learning about " +
      "psychology. I also created game assets and designed the worldbuilding, " +
      "pathfinding, and trigger systems for in-game events. Working on core " +
      "systems and gameplay mechanics was challenging but fun. I implemented " +
      "UI/UX design improvements and built a save/load system. Programming " +
      "in C# for Unity was a great learning experience that taught me a lot " +
      "about game development.",
    media: ["dm-1.png", "dm-2.mp4", "dm-3.mp4", "dm-4.mp4"],
    color: "yellow",
    tools: ["unity", "csharp"],
  },
  {
    name: "Penguin!!! The Great Explorer",
    description: "Co-Developer",
    longDescription:
      "I created an adventure game featuring a penguin explorer that was " +
      "really fun to develop! The project involved designing engaging " +
      "gameplay mechanics and creating an immersive world for players to " +
      "explore. I worked on character movement, level design, and interactive " +
      "elements that made the game enjoyable to play. The experience taught " +
      "me a lot about game design principles and how to balance fun with " +
      "challenge.",
    media: ["ptge-1.png", "ptge-2.mp4"],
    color: "blue",
    website: "https://dy2517.itch.io/penguins-the-great-exporer",
  },
  {
    name: "Bake It Forward",
    description: "Founder",
    longDescription:
      "I started a community baking initiative that brought together people " +
      "with disabilities and unemployed mothers who wanted to have a small " +
      "income source. The project involved organizing baking sessions, sharing " +
      "recipes, and creating a supportive community around this shared passion. " +
      "I learned how to coordinate events, manage participants, and create " +
      "meaningful connections through a common interest. It was amazing to see " +
      "how food can bring people together and create lasting friendships.",
    media: ["bif-1.jpg", "bif-2.jpg", "bif-3.jpg", "bif-4.jpg"],
    color: "pink",
  },
  {
    name: "Chillin' Out",
    description: "Artist",
    longDescription:
      "I created a spray-painted mural called 'Chillin' Out' that showcases " +
      "my passion for mixed media and urban expression. The piece combines " +
      "street art techniques with personal artistic vision to create a vibrant " +
      "and meaningful work. Working with spray paint taught me about color " +
      "theory, composition, and how to work on a large scale. The experience " +
      "helped me develop my artistic voice and understand how public art can " +
      "impact and inspire communities.",
    media: ["co-1.jpg"],
    color: "cyan",
  },
];
