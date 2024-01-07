import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Leong Kai Joon",
  title: "Hi all, I'm Kai Joon",
  description:
    "I'm a passionate and aspiring Full Stack web developer with experience in building web applications with multiple technologies. I love to learn about new technologies and implement them in projects. I'm currently learning more about server architecture, project management skills, and general best webdev practices. I'm also looking for opportunities to build amazing products where I can use my skills and provide value!",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "darwin098",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:kaijoonleong@gmail.com",
  github: "https://github.com/darwin098",
  linkedin: "https://www.linkedin.com/in/kai-joon-leong-baa646148/",
};

export const skillsSection: SkillsSectionType = {
  title: "Technologies I know",
  subTitle: "Aspiring Developer who wants to explore technologies and provide value to others",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Built responsive Full stack web applications with the PostgreSQL, Express, React and NodeJS (PERN) stack"
        ),
        emoji("⚡ Building responsive Full stack web applications with vanilla JavaScript"),
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          iconifyTag: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          iconifyTag: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "NPM",
          iconifyTag: "logos:npm-icon",
        },
        {
          skillName: "React",
          iconifyTag: "logos:react",
        },
      ],
    },
    {
      title: "Backend Development",
      lottieAnimationFile: "/lottie/skills/backend.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Worked on projects involving multiple different backend technologies"),
        emoji("⚡ Experienced in working with multiple types of databases"),
      ],
      softwareSkills: [
        {
          skillName: "NodeJS",
          iconifyTag: "devicon:nodejs",
        },
        {
          skillName: "NPM",
          iconifyTag: "logos:npm-icon",
        },
        {
          skillName: "PHP",
          iconifyTag: "devicon:php",
        },
        {
          skillName: "MongoDB",
          iconifyTag: "skill-icons:mongodb",
        },
        {
          skillName: "mySQL",
          iconifyTag: "logos:mysql-icon",
        },
        {
          skillName: "PostgreSQL",
          iconifyTag: "logos:postgresql",
        },
        {
          skillName: "Firebase",
          iconifyTag: "logos:firebase",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Usage of cloud services like AWS, Heroku and Netlify to deploy applications"),
        emoji("⚡ Dabbled in serverless architecture using AWS Lambda"),
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Netlify",
          iconifyTag: "devicon:netlify",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Singapore Polytechnic",
    subHeader: "Diploma in Information Technology",
    duration: "April 2021 - May 2024",
    desc: "",
    grade: "GPA 3.7",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Full Stack Developer intern",
    company: "FindSGJobs",
    companyLogo: "/img/icons/common/findsgjobs.png",
    date: "Mar 2023 - Jan 2024",
    desc: "Crafted robust site components using and features utilizing the Smarty templating system, PHP and MySQL. Worked with a team of 3 to revamp and maintain a job portal for job seekers to find jobs and employers to post jobs. The website is currently live and running at https://findsgjobs.com/.",
    descBullets: [
      "Learnt and utilized PHP on the go to create new features and fix bugs",
      "Integrated Google Maps APIs for location data",
      "Worked with designers to improve and developer site components and features",
      "Self-managed projects and tasks to meet deadlines",
    ],
  },
];

// export const projects: ProjectType[] = [
//   {
//     name: "developer-portfolio",
//     desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
//     github: "https://github.com/1hanzla100/developer-portfolio",
//     link: "https://developer-portfolio-1hanzla100.vercel.app/",
//   },
//   {
//     name: "Giebo",
//     desc: "A Podcast Platform where creators can easily publish and sell their podcasts, and users can purchase with Handcash BitcoinSV, the future of fast and secure transactions.",
//     link: "https://gibeo.io/",
//   },
//   {
//     name: "O Mejor Oferta",
//     desc: "O Mejor Oferta is a mobile marketplace for buying and selling items nearby, helping users find deals on things they want and make money from items they no longer need.",
//     link: "https://play.google.com/store/apps/details?id=com.duseca.mejor_oferta",
//   },
//   {
//     name: "Hooligan Culture",
//     desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
//     link: "https://hooliganculture.com/",
//   },
// ];

export const feedbacks = false;

// export const feedbacks: FeedbackType[] = [
//   {
//     name: "Syed Jamal",
//     role: "Frontend Developer at Meganos Software",
//     feedback:
//       "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
//   },
//   {
//     name: "Wajahat Malek",
//     role: "CEO at Duseca Software",
//     feedback:
//       "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
//   },
//   {
//     name: "Zaid Zaffar",
//     role: "CEO at ZR Technologies",
//     feedback:
//       "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
//   },
// ];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Leong Kai Joon",
  description: greetings.description,
  author: "Leong Kai Joon",
  keywords: [
    "Kai Joon",
    "Leong Kai Joon",
    "@darwin098",
    "darwin098",
    "Portfolio",
    "Kai Joon Portfolio ",
    "Leong Kai Joon Portfolio",
  ],
};
