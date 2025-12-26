import { 
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiFastapi,
  SiPython,
  SiPostgresql,
  SiPostman,
  SiNetlify,
  SiBootstrap,
  SiOpenai,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

export const skills = [
  // ================= FRONTEND =================
  {
    name: "React",
    icon: FaReact,
    level: 92,
    category: "Frontend",
    desc: "Component-based UI development with hooks and state management.",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    level: 90,
    category: "Frontend",
    desc: "ES6+, async programming, and interactive UI logic.",
  },  
  {
    name: "HTML5",
    icon: FaHtml5,
    level: 95,
    category: "Frontend",
    desc: "Semantic, accessible, and SEO-friendly markup.",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    level: 92,
    category: "Frontend",
    desc: "Modern responsive layouts with Flexbox and Grid.",
  },  
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    level: 90,
    category: "Frontend",
    desc: "Utility-first styling for fast and scalable UI design.",
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    level: 88,
    category: "Frontend",
    desc: "Responsive UI components and grid-based layouts for fast development.",
  },

  // ================= BACKEND =================
  {
    name: "Node.js",
    icon: FaNodeJs,
    level: 88,
    category: "Backend",
    desc: "Server-side JavaScript for APIs and backend services.",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    level: 88,
    category: "Backend",
    desc: "RESTful APIs and middleware-based backend architecture.",
  },
  {
    name: "FastAPI",
    icon: SiFastapi,
    level: 85,
    category: "Backend",
    desc: "High-performance Python APIs with async support.",
  },
  {
    name: "PHP",
    icon: FaPhp,
    level: 85,
    category: "Backend",
    desc: "Server-side scripting for dynamic applications.",
  },
  {
    name: "Python",
    icon: SiPython,
    level: 88,
    category: "Backend",
    desc: "Backend development, API building, and automation scripting.",
  },

  // ================= DATABASE =================
  {
    name: "MongoDB (NoSQL)",
    icon: SiMongodb,
    level: 88,
    category: "Database",
    desc: "NoSQL database for scalable data storage.",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    level: 87,
    category: "Database",
    desc: "Relational database for structured queries.",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    level: 85,
    category: "Database",
    desc: "Advanced relational database for complex systems.",
  },
  {
    name: "Database Design",
    icon: FaDatabase,
    level: 86,
    category: "Database",
    desc: "Schema design and query optimization.",
  },

  // ================= TOOLS =================
  {
    name: "Git & GitHub",
    icon: FaGitAlt,
    level: 90,
    category: "Tools",
    desc: "Version control and collaborative workflows.",
  },
  {
    name: "Postman",
    icon: SiPostman,
    level: 90,
    category: "Tools",
    desc: "API testing and debugging.",
  },
  {
    name: "VS Code",
    icon: VscCode, // ✅ guaranteed to work
    level: 92,
    category: "Tools",
    desc: "Primary development environment with extensions and debugging tools.",
  },
  {
    name: "DB Browser & Admin Tools",
    icon: FaDatabase,
    level: 85,
    category: "Tools",
    desc: "Database management using GUI tools.",
  },
  {
    name: "Netlify",
    icon: SiNetlify,
    level: 85,
    category: "Tools",
    desc: "Frontend deployment and CI/CD hosting.",
  },

  // ================= AI =================
  {
    name: "AI Integrations",
    icon: SiOpenai,
    level: 82,
    category: "AI",
    desc: "AI-powered features and chatbot integrations.",
  },
];
