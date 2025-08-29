import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  Bootstrap,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  Webweb,
  Chatgram,
  Admin,
  Ngo,
  tripguide,
  React,
  threejs,
  MongoDB,
  download,
  React1,
  Node,
  Salah,
} from "../assets";

export const navLinks = [

   {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React.js (Web)",
    icon: React,       // Make sure 'React' is imported correctly
    category: "mern",
  },
  {
    title: "MongoDB (Database)",
    icon: MongoDB,     // Imported from assets
    category: "mern",
  },
  {
    title: "Node.js (Backend)",
    icon: Node,        // Imported from assets
    category: "mern",
  },
  {
    title: "React Native (Mobile)",
    icon: React1, // Use a different icon or same React icon
    category: "rn",
  },
];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
 
  {
    name: "Bootstrap",
    icon: Bootstrap,  // You'll need to import the Bootstrap icon or use a link to its logo
  },
];


const experiences = [
  {
    title: "React.js Developer",
    company_name: "Orbit Radix Technology",
    // icon: orbit, // replace with actual icon import
    iconBg: "#383E56",
    date: "March 2023 - April 2024",
   points: [
  "Developed and maintained web applications using React.js and related technologies.",
  "Built an NGO Website project using React.js (frontend) and Laravel REST API (backend) to manage donations, volunteers, and events with a user-friendly interface.",
  "Collaborated with designers, product managers, and other developers to create high-quality software.",
  "Implemented responsive design and ensured cross-browser compatibility.",
  "Participated in code reviews and provided constructive feedback.",
],

  },
  {
    title: "Web Development Intern",
    company_name: "Groot Software Solutions",
 // Replace with actual internship company name
    // icon: abcTech, // replace with actual icon import
    iconBg: "#E6DEDD",
    date: "June 2022 - August 2022",
    points: [
      "Completed a 3-month internship focused on front-end development with HTML, CSS, and JavaScript.",
      "Gained hands-on experience with React.js components and state management.",
      "Worked on a small-scale e-commerce interface for practice and learning.",
    ],
  },
  {
    title: "Reactjs Developer",
    company_name: "Groot Company",
    // icon: groot, // replace with actual icon import
    iconBg: "#383E56",
    date: "September 2022 - December 2022",
    points: [
   "Developed an MLM (Multi-Level Marketing) system using React.js for frontend and Node.js for backend.",
"Implemented user registration, referral systems, and commission tracking features.",
"Built hierarchical structures for multi-level downlines and commissions calculation.",
"Collaborated with a small team to ensure the system’s scalability and performance under load.",
"Integrated admin panel for managing users, tracking commissions, and generating reports.",

    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
{
  name: "LMS",
  description:
    "A web-based Learning Management System that enables instructors to manage courses, track student progress, and deliver online content efficiently. Students can watch lectures, participate in quizzes, track their learning progress, and enroll in various courses.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "mongodb",
      color: "green-text-gradient",
    },
    {
      name: "MUI",
      color: "pink-text-gradient",
    },
  ],
  image: Webweb, // LMS ka image
  source_code_link: "https://github.com/",
}
,

{
  name: "Admin Panel (LMS)",
  description:
    "An admin dashboard for the LMS platform built with React and Material UI. It allows administrators to manage users, monitor course performance, and oversee platform-wide activities with a clean and responsive interface. Supabase is used for backend services and real-time data handling.",
  tags: [
    {
      name: "Reactjs",
      color: "blue-text-gradient",
    },
   
    {
      name: "Material UI",
      color: "pink-text-gradient",
    },
  ],
  image: Admin,
  source_code_link: "https://github.com/",
}

,
{
  name: "Salah App",
  description:
    "A comprehensive Islamic app built with React Native (Expo) that allows users to find nearby mosques, get Qibla direction, and chat in real-time. It features dynamic content, geolocation, and is powered by a Node.js backend.",
  tags: [
    {
      name: "react-native",
      color: "blue-text-gradient",
    },
    {
      name: "nodejs",
      color: "green-text-gradient",
    },
    {
      name: "expo",
      color: "orange-text-gradient",
    },
  
    {
      name: "qibla",
      color: "purple-text-gradient",
    },
  ],
  image: Salah, // make sure Salah is imported properly in your assets
  source_code_link: "https://github.com/sohail-68", // replace with actual repo if public
},
{
  name: "Chatgram",
  description:
    "Chatgram is a real-time chat application built using the MERN stack and Socket.io. It allows users to engage in instant messaging, share media, and stay connected with friends and groups. The app features a real-time server for seamless communication, live updates, and a responsive UI styled with Tailwind CSS.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "restapi",
      color: "green-text-gradient",
    },
    {
      name: "tailwind",
      color: "pink-text-gradient",
    },
  ],
  image: Chatgram,
  source_code_link: "https://github.com/",
},


{
  name: "NGO Website",
  description:
    "NGO Website is a modern web platform built using ReactJS and Laravel API. It provides a transparent and user-friendly way to showcase NGO initiatives, manage donations, and engage volunteers. The platform includes features like online donation support, event & campaign tracking, volunteer registration, and an admin dashboard — all designed to make NGO operations more efficient and accessible.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "laravelapi",
      color: "green-text-gradient",
    },
    {
      name: "tailwind",
      color: "pink-text-gradient",
    },
  ],
  image: Ngo,
  source_code_link: "https://github.com/",
}


];

export { services, technologies, experiences, testimonials, projects };
