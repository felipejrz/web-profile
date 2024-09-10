import { FaReact, FaNodeJs } from "./dataIcons";
import { SiReactbootstrap, SiVite, SiReactrouter, SiFramer, SiGithubpages, SiMui } from "./dataIcons";
import { GiSteamLocomotive } from "./dataIcons";

export const profileData = [
  {
    titulo: "Pokedex: Tu Guía Pokémon Definitiva",
    imagen: "/assets/poke-page.png",  // Ruta absoluta desde public
    texto:
      "Pokedex es una aplicación que gestiona y analiza información detallada sobre Pokémon, ofreciendo estadísticas completas, habilidades y características, todo en una interfaz intuitiva y fácil de usar.",
    listChips: [
      {
        label: "React",
        icon: <FaReact />,
        variant: "outlined",
        color: "#61DAFB",
      },
      {
        label: "React-Bootstrap",
        icon: <SiReactbootstrap />,
        variant: "outlined",
        color: "#41E0FD",
      },
      {
        label: "Node.js",
        icon: <FaNodeJs />,
        variant: "outlined",
        color: "#5FA04E",
      },
      {
        label: "Vite.js",
        icon: <SiVite />,
        variant: "outlined",
        color: "#646CFF",
      },
      {
        label: "React Router",
        icon: <SiReactrouter />,
        variant: "outlined",
        color: "#CA4245",
      },
      {
        label: "Framer Motion",
        icon: <SiFramer />,
        variant: "outlined",
        color: "#0055FF",
      },
      {
        label: "Github Pages",
        icon: <SiGithubpages />,
        variant: "outlined",
        color: "#BBDDE5",
      },
    ],
    linkPages: "https://felipejrz.github.io/pokemon-zeiropedia/",
    linkHub: "https://github.com/felipejrz/pokemon-zeiropedia",
  },
  {
    titulo: "Portafolio: Innovación en Desarrollo Web",
    imagen: "/assets/profile-page.png",  // Ruta absoluta desde public
    texto:
      "Un portafolio destacable que muestra proyectos innovadores y soluciones avanzadas en desarrollo web. Descubre cómo combino creatividad y tecnología para crear experiencias digitales únicas y funcionales.",
    listChips: [
      {
        label: "React",
        icon: <FaReact />,
        variant: "outlined",
        color: "#61DAFB",
      },
      {
        label: "MUI",
        icon: <SiMui />,
        variant: "outlined",
        color: "#007FFF",
      },
      {
        label: "Node.js",
        icon: <FaNodeJs />,
        variant: "outlined",
        color: "#5FA04E",
      },
      {
        label: "Vite.js",
        icon: <SiVite />,
        variant: "outlined",
        color: "#646CFF",
      },
      {
        label: "Framer Motion",
        icon: <SiFramer />,
        variant: "outlined",
        color: "#0055FF",
      },
      {
        label: "Locomotive Scroll",
        icon: <GiSteamLocomotive />,
        variant: "outlined",
        color: "#d4c9c9",
      },
    ],
    linkPages: "https://felipejrz.github.io/pokemon-zeiropedia/",
    linkHub: "https://github.com/felipejrz/web-profile",
  },
];
