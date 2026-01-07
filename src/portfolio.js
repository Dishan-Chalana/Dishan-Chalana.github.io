/* Personal Portfolio Configuration */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Dishan",
  title: "Hi, I'm Dishan",
  subTitle: emoji(
    "Full-Stack Software Engineer with hands-on experience in SaaS and multi-tenant platforms, performance-critical features, and end-to-end product development across frontend, backend, and cloud. 🚀"
  ),
  resumeLink: "",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Dishan-Chalana",
  linkedin: "https://www.linkedin.com/in/dishan-chalana/",
  gmail: "contact.dishanchalana@gmail.com",
  facebook: "https://web.facebook.com/dishan.chalana.5",
  youtube: "https://www.youtube.com/SipaiGaming",
  stackoverflow: "https://stackoverflow.com/users/22231510/dishan-chalana",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL-STACK SOFTWARE ENGINEER BUILDING SCALABLE SYSTEMS AND SAAS PLATFORMS",
  skills: [
    emoji(
      "⚡ Develop scalable full-stack applications with clean architecture and performance optimization for multi-tenant SaaS products"
    ),
    emoji("⚡ Build interactive UIs and backend systems using React, Next.js, Node/Express, and Laravel for HR, tenant management, and productivity tools"),
    emoji(
      "⚡ Integrate cloud services like AWS, Firebase, and Google Drive API for data aggregation, automation, and real-time features"
    )
  ],

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Next.js",
      fontAwesomeClassname: "fas fa-arrow-right"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Express",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MSSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Sri Jayewardenepura",
      logo: require("./assets/images/usjpLogo.png"),
      subHeader: "Bachelor of Information Communication Technology specialized in Software Engineering (Hons)",
      duration: "2020 - 2024",
      desc: "Second class upper division.",
      descBullets: [
        "Specialized in Software Engineering with hands-on experience in full-stack development"
      ]
    },
    {
      schoolName: "Dr. Richard Pathirana College, Galle",
      logo: require("./assets/images/drpcLogo.png"),
      subHeader: "G.C.E. Advanced Level, Technology stream",
      duration: "2016 - 2018",
      desc: "Achieved District Rank 5.",
      descBullets: []
    }
  ]
};

// Tech Stack

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Programming Languages",
      progressPercentage: "JavaScript • TypeScript • PHP • C"
    },
    {
      Stack: "Frontend Engineering",
      progressPercentage: "React • Next.js • Tailwind CSS • Bootstrap • Material UI • Ant Design"
    },
    {
      Stack: "Cloud, DevOps & Tools",
      progressPercentage: "AWS (Lambda, S3, EC2) • Azure • Docker • Git"
    },
    {
      Stack: "Backend & Databases",
      progressPercentage: "Node.js • Express • Laravel • MongoDB • MySQL • MSSQL"
    }
  ],
  displayCodersrank: false
};

// Work Experience

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "Kerner Norland",
      companylogo: require("./assets/images/kernerNorlandLogo.png"),
      date: "Feb 2025 – Present",
      desc: "Working on ICONN HRM (HR platform) and Wokshiftly (task management platform).",
      descBullets: [
        "Developing ICONN HRM using React, Laravel, and MariaDB for comprehensive HR management",
        "Building Wokshiftly task management platform with React, Express.js, Node.js, MySQL, and Bootstrap"
      ]
    },
    {
      role: "Associate Software Engineer",
      company: "Kerner Norland",
      companylogo: require("./assets/images/kernerNorlandLogo.png"),
      date: "Feb 2024 – Feb 2025",
      desc: "Built multi-tenant SaaS modules with full-stack development and performance improvements.",
      descBullets: [
        "Developed scalable multi-tenant SaaS solutions using modern web technologies",
        "Optimized application performance and implemented full-stack features"
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "Kerner Norland",
      companylogo: require("./assets/images/kernerNorlandLogo.png"),
      date: "July 2023 – Feb 2024",
      desc: "Developed HCIM-Pulse, a comprehensive tenant management platform focused on scalability and optimization.",
      descBullets: [
        "Built HCIM-Pulse using React, Express.js, Node.js, and MongoDB",
        "Focused on platform scalability and performance optimization"
      ]
    }
  ]
};

// Open Source

const openSource = {
  showGithubProfile: "true",
  display: true
};

// Projects

const bigProjects = {
  title: "Projects",
  subtitle: "KEY PROJECTS I'VE BUILT TO STREAMLINE BUSINESS OPERATIONS AND BOOST PRODUCTIVITY",
  projects: [
    {
      image: require("./assets/images/hcimLogo.png"),
      projectName: "HCIM-Pulse",
      projectDesc: "Streamlined multi-tenant SaaS platform for efficient tracking, monitoring, and management of tenant accounts, subscriptions, and user activity.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://hcim.io/"
        }
      ]
    },
    {
      image: require("./assets/images/iconnLogo.png"),
      projectName: "ICONN HRM",
      projectDesc: "All-in-one HR platform automating employee data management, attendance, leave tracking, and payroll processing with seamless efficiency.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://iconnhrm.com/"
        }
      ]
    },
    {
      image: require("./assets/images/workshiftlyLogo.png"),
      projectName: "Wokshiftly",
      projectDesc: "Comprehensive project management solution for employee task assignment, productivity monitoring, and real-time work time tracking.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://workshiftly.com/"
        }
      ]
    },
    {
      image: require("./assets/images/foodshaLogo.png"),
      projectName: "FoodSha",
      projectDesc: "Mobile app that connects surplus food from individuals and businesses with people in need, reducing food waste and hunger by enabling free or discounted food sharing.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Dishan-Chalana/Foodsha"
        }
      ]
    },
    {
      image: require("./assets/images/lostFoundLogo.png"),
      projectName: "Lost and Found Item Recovery System",
      projectDesc: "Revolutionizing lost item recovery using Multi-Modal Deep Learning for optimized semantic matching, employing a Siamese network approach.",
      footerLink: []
    }
  ],
  display: true
};

// Achievements

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, and Cool Stuff that I have accomplished!",

  achievementsCards: [
    {
      title: "Research Publication",
      subtitle:
        "Enhancing Lost and Found Systems with Multi-Modal Deep Learning — Published in Open Access Journal of Artificial Intelligence and Machine Learning (OAJAI & ML).",
      image: require("./assets/images/researchLogo.png"),
      imageAlt: "Research Publication Logo",
      footerLink: [
        {
          name: "View Publication",
          url: "https://www.oajaiml.com/archive/enhancing-lost-and-found-systems-with-multi-modal-deep-learning-integrating-sbert-and-siamese-networks-for-improved-semantic-matching"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Section

const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false
};

// Resume Section

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

// Contact Info

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Interested in working together or just want to say hello?",
  number: "+94 75 4455 835",
  email_address: "contact.dishanchalana@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
