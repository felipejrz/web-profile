import { FaPython, FaJava, FaHtml5, FaCss3, FaReact, FaNodeJs, FaGit, FaDocker, FaBootstrap } from "../data/dataIcons";
import { SiTypescript, SiNestjs, SiMysql, SiPostgresql, SiMongodb, SiDjango } from "../data/dataIcons";
import { IoLogoJavascript } from "../data/dataIcons";

export const dataSkills = [
  // Lenguajes de Programación
  { icon: FaPython, color: "#3776AB" },     // Python
  { icon: FaJava, color: "#F80000" },       // Java
  { icon: SiTypescript, color: "#3178C6" }, // TypeScript
  { icon: IoLogoJavascript, color: "#F7DF1E" }, // JavaScript
  
  // Desarrollo Web
  { icon: FaHtml5, color: "#E34F26" },      // HTML
  { icon: FaCss3, color: "#1572B6" },       // CSS
  { icon: FaReact, color: "#61DAFB" },      // React
  
  // Back-End
  { icon: FaNodeJs, color: "#5FA04E" },     // Node.js
  { icon: SiNestjs, color: "#E0234E" },     // Nest.js
  
  // Bases de Datos
  { icon: SiMysql, color: "#4479A1" },      // MySQL
  { icon: SiPostgresql, color: "#4169E1" }, // PostgreSQL
  { icon: SiMongodb, color: "#47A248" },    // MongoDB
  
  // Control de Versiones
  { icon: FaGit, color: "#F05032" },        // Git
  
  // DevOps y Despliegue
  { icon: FaDocker, color: "#2496ED" },     // Docker
  
  // Diseño y Desarrollo Web Adicional
  { icon: FaBootstrap, color: "#7952B3" },  // Bootstrap
  { icon: SiDjango, color: "#092E20" },     // Django
];
