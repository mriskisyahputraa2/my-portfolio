import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Muhammad Rizki Syahputra",
  greet: "Hello there! 👋🏻",
  description:
    "I am a Full-Stack Developer with a background in Network Computer Engineering Technology, with expertise in frontend and backend. I focus on developing innovative digital solutions, from responsive user interfaces to reliable server infrastructure, to create impactful solutions.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/mriskisyahputraa2/my-portfolio",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using React.js, Redux and using APIs is equipped with a comprehensive product catalog, shopping cart, and payment system.",
    image: projectImage2,
    githubLink: "https://github.com/mriskisyahputraa2/deploy-shopping-cart",
  },
  {
    id: 3,
    name: "Task Management Tool",
    description:
      "A task management app built with React, Redux and using MongoDB database for efficient task tracking and team collaboration, including features such as project boards, task assignment, and progress tracking.",
    image: projectImage3,
    githubLink: "https://github.com/mriskisyahputraa2/MEARN-NoteApp",
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    image: projectImage4,
    githubLink: "https://github.com/mriskisyahputraa2/Weather-ReactApp",
  },
  {
    id: 5,
    name: "Blog Platform",
    description:
      "A blogging platform developed with React.js, Redux, Express.js and using MongoDB and Markdown database to create, edit and publish blog posts. Comes with a rich text editor, tag system, and user authentication.",
    image: projectImage5,
    githubLink: "https://github.com/mriskisyahputraa2/mearn-app-blog",
  },
  {
    id: 6,
    name: "Chat Application",
    description:
      "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
    image: projectImage6,
    githubLink: "https://github.com/user/chat-application",
  },
];

export const ABOUT = [
  "I am a Full-Stack Developer currently studying at Politeknik Negeri Lhokseumawe, majoring in Network Computer Engineering Technology. Armed with expertise in various technologies such as JavaScript, PHP, Laravel, Express.js, React.js, Vue.js, and Node.js, I am able to develop applications from frontend to backend. In addition, I also mastered database management such as MySQL, PostgreSQL, and MongoDB. My interest in the world of technology encourages me to always learn, innovate, and bring efficient and user-friendly solutions in every project I work on.",
];

export const SKILLS = [
  {
    icon: <RiJavascriptFill className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "JavaScript",
    experience: "2+ years",
  },
  {
    icon: <SiPhp className="text-4xl text-[#484C89] lg:text-5xl" />,
    name: "PHP",
    experience: "2+ years",
  },
  {
    icon: <SiLaravel className="text-4xl text-[#fb503b] lg:text-5xl" />,
    name: "Laravel",
    experience: "1+ years",
  },
  {
    icon: <SiExpress className="text-4xl text-white lg:text-5xl" />,
    name: "Express.js",
    experience: "1+ years",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "1+ years",
  },
  {
    icon: <FaVuejs className="text-4xl text-[#42b883] lg:text-5xl" />,
    name: "Vue.js",
    experience: "1+ years",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "1+ years",
  },
  {
    icon: <SiMysql className="text-4xl text-[#f29111] lg:text-5xl" />,
    name: "Mysql",
    experience: "2+ years",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1+ years",
  },

  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "Lead Frontend Developer",
    company: "Innovative Tech Solutions",
    duration: "July 2020 - Present",
    description:
      "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  },
  {
    title: "Frontend Engineer",
    company: "Digital Creations",
    duration: "February 2016 - June 2020",
    description:
      "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
  },
  {
    title: "Junior Web Developer",
    company: "Bright Future Technologies",
    duration: "August 2014 - January 2016",
    description:
      "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  },
];

export const EDUCATION = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    duration: "September 2012 - June 2014",
    description:
      "Specialized in Human-Computer Interaction and Software Engineering. Completed a thesis on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development, algorithms, and data structures. Graduated with honors.",
  },
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "University of California, Berkeley",
    duration: "September 2008 - June 2012",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
