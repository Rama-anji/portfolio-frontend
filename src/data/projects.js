import liftProject from "../assets/images/lift-project.png";
import portfolio from "../assets/images/anji-portfolio.png";
import vkDigital from "../assets/images/lift-project.png";
import careers from "../assets/images/careers-bsit.png";

export const projects = [
  {
    title: "Lift Management System",
    description:
      "A professional lift management website built to showcase elevator services, products, and maintenance offerings. Includes an admin-managed backend for service updates, inquiries, and content management.",
    image: liftProject,
    tech: ["React", "FastAPI", "Python", "Tailwind CSS"],
    live: "https://your-lift-project.com",
  },

  {
    title: "VK Digital Solutions Website",
    description:
      "A corporate website for a digital services company featuring service listings, contact management, and a responsive UI. Designed to present the brand professionally and convert visitors into leads.",
    image: vkDigital,
    tech: ["React", "Node.js", "MongoDB"],
    live: "https://vkdigisolutions.com/",
  },

  {
    title: "Careers Management System",
    description:
      "A recruitment management platform allowing candidates to apply for jobs and admins to manage applications, resumes, and hiring workflows efficiently.",
    image: careers,
    tech: ["PHP", "MySQL", "Bootstrap"],
    live: "https://careers.bsitsoftware.com/",
  },

  {
    title: "Personal Portfolio Website",
    description:
      "A modern developer portfolio showcasing skills, projects, and experience with a clean UI, responsive design, and optimized performance.",
    image: portfolio,
    tech: ["React", "Tailwind CSS"],
    live: "https://rama-anji.github.io/Anjaneyulu-Ravi-portfoliowebsite/",
  },
];
