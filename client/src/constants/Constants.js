import { LuRadioTower, LuCode, LuCodeXml } from "react-icons/lu";
import {
  SiC, SiPython, SiCplusplus, SiMysql, SiHtml5, SiCss, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb,
  SiGit, SiApachekafka, SiApacheairflow, SiFlask, SiPytorch, SiGradio
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaMicrochip } from "react-icons/fa6";
import { GiProcessor } from "react-icons/gi";
import ai1 from "/ai1.jpg";
import ai2 from "/ai2.jpg";
import iot1 from "/iot1.jpg";
import iot2 from "/iot2.jpg";
import wb1 from "/wb1.jpg";
import wb2 from "/wb2.jpg";

export const ROLES = [
  "Full-Stack Developer",
  "Data Engineer",
  "Software Development Engineer",
  "AI-ML Engineer",
];

export const PROJECTS_DATA = [
  {
    title: "Game of life",
    description: "A Simple Game based on concept of Conway's Game of life. Set a initial configuration and see how the neighbours evolve by surviving.",
    techStack: ["React", "Node", "MongoDb", "HTML", "CSS", "Javascript"],
    techstackimg: [SiReact, SiNodedotjs, SiMongodb, SiHtml5, SiCss, SiJavascript],
    categories: ["Web Development"],
    categoryimg: [wb1, wb2],
    githubUrl: "https://github.com/maulikagarwal8/Game-of-life",
    image: "https://github.com/maulikagarwal8/Game-of-life/raw/main/public/Gameoflife.gif"
  },
  {
    title: "Personal-AI-Health-Assistant",
    description: "A WebApp created using flask framework, HTML and CSS to generate appropriate cures/remedies for the problem given by the user in the prompt using Openai API.",
    techStack: ["Python", "HTML", "CSS", "FLASK"],
    techstackimg: [SiPython, SiHtml5, SiCss, SiFlask],
    categories: ["Python", "Web Development"],
    categoryimg: [wb1, wb2, ai2],
    githubUrl: "https://github.com/maulikagarwal8/Personal-AI-Health-Assistant",
    image: "https://github.com/maulikagarwal8/Personal-AI-Health-Assistant/raw/main/Personal_Health_Assistant.gif"
  },
  {
    title: "Smart-Watch-using-ESP32-Microcontroller",
    description: "This project involves the design and development of a smart watch built using the ESP-32 microcontroller, specifically tailored to assist elderly individuals in monitoring their health and safety.The device integrates multiple sensors and features to provide comprehensive real-time tracking of vital parameters and daily activities.",
    techStack: ["IOT", "Networking", "MicroControllers"],
    techstackimg: [FaMicrochip, GiProcessor],
    categories: ["IOT"],
    categoryimg: [iot1, iot2],
    githubUrl: "https://github.com/maulikagarwal8/Smart-Watch-using-ESP32-Microcontroller",
    image: "https://github.com/maulikagarwal8/Smart-Watch-using-ESP32-Microcontroller/raw/main/Circuit_Diagram.jpeg"
  },
  {
    title: "Image-Generation-using-Prompt",
    description: "A Website created using python script to create a image using DALL-E according to the instructions given by the user.",
    techStack: ["Python", "HTML", "CSS", "FLASK"],
    techstackimg: [SiPython, SiHtml5, SiCss, SiFlask],
    categories: ["Python", "Web Development"],
    categoryimg: [wb1, wb2, ai1],
    githubUrl: "https://github.com/maulikagarwal8/Image-Generation-using-Prompt",
    image: "https://github.com/maulikagarwal8/Image-Generation-using-DALL-E/raw/main/Image_Generation_using_Dall-E.gif"
  },
  {
    title: "Any-Flower-Recognizer-using-CNN",
    description: "An ML model leveraging benefits of CNN to recognize the name of image of the flower uploaded by user.",
    techStack: ["Python", "Machine Learning", "Gradio", "Pytorch", "Deep Learning"],
    techstackimg: [SiPython, SiPytorch, SiGradio],
    categories: ["Machine Learning", "Python", "Deep learning", "Artificial Intelligence"],
    categoryimg: [wb1, wb2, ai1, ai2],
    githubUrl: "https://github.com/maulikagarwal8/Any-Flower-Recognizer-using-CNN",
    image: ""
  },
  {
    title: "QR-Master",
    description: "A simple Website incorporating functionalities of QR image generation and scanning of QR image to get contents inside it.",
    techStack: ["Python", "HTML", "CSS", "FLASK", "APIs"],
    techstackimg: [SiPython, SiHtml5, SiCss, SiFlask],
    categories: ["Python", "Web Development"],
    categoryimg: [wb1, wb2],
    githubUrl: "https://github.com/maulikagarwal8/QR-Master",
    image: ""
  },
  {
    title: "CourseGen-AI",
    description: "A smart Web based software tool that uses AI to create and organize learning materials for various educational courses.",
    techStack: ["Python", "HTML", "CSS", "FLASK", "APIs"],
    techstackimg: [SiPython, SiHtml5, SiCss, SiFlask],
    categories: ["Python", "Web Development", "Artificial Intelligence"],
    categoryimg: [wb1, wb2, ai1, ai2],
    githubUrl: "https://github.com/maulikagarwal8/CourseGen-AI",
    image: ""
  }
];

export const TIMELINE_DATA = [
  {
    hash: 'a3f9c12',
    type: 'feat',
    msg: 'init: BTech degree',
    date: 'Nov 2022 – May 2026',
    dotColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
    lineColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
    typeBg: '#E1F5EE',
    typeColor: '#085041',
    title: 'BTech Computer Science Engineering',
    company: 'Birla Institute of Technology Mesra',
    desc: 'Completed with top grades.(CGPA : 8.6)',
    tags: [],
    current: true,
  },
  {
    hash: 'e7b2d45',
    type: 'chore',
    msg: 'role: Data Engineer Intern',
    date: 'June 2025 – July 2025',
    dotColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
    lineColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
    typeBg: '#E1F5EE',
    typeColor: '#085041',
    title: 'Data Engineering Intern',
    company: 'Celebal Technologies Pvt. Ltd.',
    desc: 'Developed a backend system to connect Python applications with remote SQL Server databases hosted on cloud infrastructure.',
    tags: [
      { label: 'SQL', color: 'purple' },
      { label: 'Azure', color: 'teal' },
      { label: 'Spark', color: 'teal' },
      { label: 'Python', color: 'coral' },
    ]
  },
  {
    hash: '1c8a7f3',
    type: 'feat',
    msg: 'init: Higher Education done',
    date: '2020 – 2022',
    dotColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
    lineColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
    typeBg: '#E1F5EE',
    typeColor: '#085041',
    title: 'Higher Secondary (PCM + IP)',
    company: 'Maheshwari Public School, Pratap Nagar, Jaipur',
    desc: 'Completed with distinction in Physics, Chemistry, Mathematics and Computer Science.',
    tags: []
  }
];

export const CERTIFICATIONS_DATA = [
  {
    name: "Data Engineering Certificate",
    organization: "Celebal Technologies Private Limited",
    logo: LuCodeXml,
    url: "https://drive.google.com/file/d/1_KIW7h5kJyQoEJuRgXld_pdPYwjPupp4/view?usp=drive_link",
  },
  {
    name: "Google Gen AI Study Jam",
    organization: "Google",
    logo: LuCodeXml,
    url: "https://drive.google.com/file/d/1GswPNr6Ubr6MHV09iY40AGJ4tK8GiLeF/view?usp=sharing",
  },
  {
    name: "SIH Participation",
    organization: "Birla Institute of Technology Mesra",
    logo: LuCode,
    url: "https://drive.google.com/file/d/12MfgCdjoTxaUuFnAL0gOKToLgtC1hekt/view?usp=drive_link",
  }
];

export const SKILLS_DATA = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", level: 70, icon: SiPython },
      { name: "C", level: 80, icon: SiC },
      { name: "C++", level: 80, icon: SiCplusplus },
      { name: "SQL", level: 60, icon: SiMysql },
    ]
  },
  {
    category: "Web Development",
    skills: [
      { name: "Html", level: 90, icon: SiHtml5 },
      { name: "CSS", level: 70, icon: SiCss },
      { name: "Javascript", level: 90, icon: SiJavascript },
      { name: "React.js", level: 70, icon: SiReact },
      { name: "Node.Js", level: 80, icon: SiNodedotjs },
      { name: "Express.js", level: 75, icon: SiExpress },
      { name: "MongoDb", level: 70, icon: SiMongodb }
    ]
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Azure", level: 60, icon: VscAzure },
      { name: "Git", level: 85, icon: SiGit },
      { name: "Kafka", level: 70, icon: SiApachekafka },
      { name: "Airflow", level: 65, icon: SiApacheairflow }
    ]
  }
];

export const SOCIAL_LINKS = [
  { name: "GitHub", url: "https://github.com/maulikagarwal8", icon: "FiGithub" },
  { name: "LinkedIn", url: "https://linkedin.com/in/maulik-agarwal-039b73297/", icon: "FiLinkedin" },
];

export const FOOTER_NAV = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Credentials", href: "/#credentials" },
  { name: "Contact", href: "/#contact" },
];

export const TECHNICAL_INTERESTS = [
  { area: "Programming", skills: "Python, C, C++, SQL" },
  { area: "Artificial Intelligence", skills: "Pytorch, Machine Learning, Deep Learning" },
  { area: "Web Development", skills: "MERN Stack" },
  { area: "Data Engineering", skills: "Azure, Spark, Docker, DataBricks" }
];
