//Project Preview Images
import minia2oj from "../public/img/projects-preview/minia2oj.png";
import xcrypto from "../public/img/projects-preview/xcrypto.png";
// import modifo from "../public/img/projects-preview/modifo.png";
import colorgen from "../public/img/projects-preview/colorgen.png";
import twinster from "../public/img/projects-preview/twinster.png";
import wordoid from "../public/img/projects-preview/wordoid.png";

interface projects_data_type {
  name: string;
  tags: string[];
  description: string;
  github: string;
  demo: string;
  link: any;
}

export const projects_data: projects_data_type[] = [
  {
    name: "Wordoid",
    tags: [
      "React",
      "Monaco Editor",
      "Github Graphql API",
      "React Query",
      "React Primer",
    ],
    description:
      "Wordoid allows you to see and modify the code without downloading or cloning in your system.",
    github: "https://github.com/krtk-097/Wordoid",
    demo: "https://wordoid-1.netlify.app/",
    link: wordoid,
  },
  {
    name: "Mini-A2Oj",
    tags: ["TypeScript", "Next.js", "Tailwind Css", "Codeforces API"],
    description: `Mini-A2Oj is beginner friendly website to practice variety of competitive programming problems by selecting different levels.`,
    github: "https://github.com/krtk-097/mini-a2oj",
    demo: "https://mini-a2oj-6pv6.vercel.app/",
    link: minia2oj,
  },
  // {
  //   name: "Modifo",
  //   tags: ["Next.js", "Ffmpeg", "Typescript", "Tailwind Css", "Wasm"],
  //   description: `An Online tool for unlimited and free multimedia conversion. Transform images, audio, and videos effortlessly, without restrictions. `,
  //   github: "https://github.com/krtk-097/Modifo",
  //   demo: "",
  //   link: modifo,
  // },
  {
    name: "Twinster",
    tags: ["React ", "MongoDB", "Node", "Express", "Web Sockets"],
    description:
      "Twinster is a real-time Chat application to chat instantly, access past conversations, share images/documents (PNG,JPG,PDF)",
    github: "https://github.com/krtk-097/CHAT-APP?tab=readme-ov-file",
    demo: "",
    link: twinster,
  },
  {
    name: "X-Crypto",
    tags: ["React.js", "Chart.js", "Sass"],
    description: `Web App made with React.js to track multiple cryptocurrencies live using Chart.js`,
    github: "https://github.com/krtk-097/X-Crypto",
    demo: "https://x-crypto-nine.vercel.app/",
    link: xcrypto,
  },
  {
    name: "Color Generator",
    tags: ["Next.js", "React", "Colortheif"],
    description: `A next.js project for generating color palette from the images`,
    github: "https://github.com/krtk-097/Color-Gen",
    demo: "https://color-gen-orpin.vercel.app/",
    link: colorgen,
  },
];
