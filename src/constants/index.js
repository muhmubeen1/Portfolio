import {
  backend,
  carrent,
  creator,
  docker,
  git,
  javascript,
  jobit,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  tripguide,
  web,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Backend Engineer", icon: backend },
  { title: "DevOps Enthusiast", icon: mobile },
  { title: "AI Systems Developer", icon: creator },
  { title: "Full Stack Developer", icon: web },
];

const technologies = [
  { name: "Node.js", icon: nodejs },
  { name: "React", icon: reactjs },
  { name: "MongoDB", icon: mongodb },
  { name: "Docker", icon: docker },
  { name: "Git", icon: git },
  { name: "JavaScript", icon: javascript },
];

const experiences = [
  {
    title: "Backend • DevOps • AI Systems",
    company_name: "Muhammad Mubeen",
    icon: backend,
    iconBg: "#383E56",
    date: "Present",
    points: [
      "Building scalable backend systems and intelligent applications.",
      "Focused on distributed systems and infrastructure optimization.",
      "Creating production-ready APIs and automation workflows.",
      "Passionate about resilient and observable system design.",
    ],
  },
];

const projects = [
  {
    name: "IntelliSight — AI Anomaly Detection",
    description:
      "Real-time intelligent video monitoring system using deep learning and transformer architectures.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "pytorch", color: "green-text-gradient" },
      { name: "computer-vision", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Distributed Task Queue System",
    description:
      "Mini Celery-like distributed job processing system with retry handling and monitoring.",
    tags: [
      { name: "fastapi", color: "blue-text-gradient" },
      { name: "redis", color: "green-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "VLAN + ACL Network Security",
    description:
      "Enterprise network segmentation using router-on-a-stick architecture with access control lists.",
    tags: [
      { name: "networking", color: "blue-text-gradient" },
      { name: "security", color: "green-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];
const testimonials = [
  {
    testimonial:
      "Muhammad is a highly skilled backend engineer with strong problem solving ability.",
    name: "Engineering Review",
    designation: "Software Developer",
    company: "Portfolio",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
];

export { experiences, projects, services, technologies, testimonials };
