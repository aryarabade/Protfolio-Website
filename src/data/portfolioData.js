// src/data/portfolioData.js
// Single source of truth — edit only this file to update all site content.

export const profile = {
  name: "Arya Rabade",
  title: "Full-Stack Developer",
  subtitle: "B.Tech Computer Science (Final Year)",
  location: "Kolhapur, India",
  email: "aryarabade2006@gmail.com",
  phone: "+91 7841835474",
  linkedin: "https://www.linkedin.com/in/arya-rabade",
  github: "https://github.com/aryarabade",
  leetcode: "https://leetcode.com/u/arya1624/",
  resumeUrl: "/Arya_Rabade_Resume.pdf",
  photoUrl: "/profile.jpg",
  summary:
    "Final-year B.Tech Computer Science student (CGPA: 7.9/10) with hands-on experience in full-stack web development using the MERN stack. Proficient in JavaScript, Java, C#, SQL, and RESTful API design. Demonstrated ability to build scalable, production-ready applications with authentication, real-time features, and AI integrations.",
};

export const about = {
  story:
    "I'm a final-year Computer Science student who enjoys building full-stack products end to end — from designing a clean React interface down to the database schema powering it. My recent work has centered on the MERN stack, where I've shipped applications with real authentication, live dashboards, and AI-powered features rather than just CRUD demos.",
  goal:
    "Right now, my focus is landing a full-stack or frontend developer role where I can keep sharpening production-level engineering skills — clean architecture, scalable APIs, and interfaces people actually enjoy using.",
  motivation:
    "I'm motivated by the moment a feature goes from a rough idea to something a real user can click through and rely on. I like the full loop: solving the logic problem, then making it feel effortless on screen.",
};

export const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Sharad Institute of Technology, Kolhapur",
    duration: "2023 – 2027",
    detail: "CGPA: 7.9 / 10.0",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Dr. D Y Patil Junior College, Kolhapur",
    duration: "2022 – 2023",
    detail: "Percentage: 68%",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Shrimant Maisaheb Bavdekar Academy, Kolhapur",
    duration: "2020 – 2021",
    detail: "Percentage: 95%",
  },
];

export const experience = [
  {
    company: "Revolution IT Solutions",
    role: "Software Development Intern",
    location: "Kolhapur",
    duration: "May 2025 – Jun 2025",
    points: [
      "Developed a full-stack web application using HTML, CSS, Bootstrap, and C# ASP.NET in a professional environment.",
      "Collaborated with the team to deliver production-ready features within project deadlines.",
    ],
    tech: ["HTML", "CSS", "Bootstrap", "C#", "ASP.NET"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Smart Habit Tracker",
    subtitle: "AI-Powered Habit & Mood Tracking",
    description:
      "A full-stack MERN application with JWT authentication, streak tracking, mood tracking, and AI-driven personalized coaching via the Groq LLM API.",
    features: [
      "JWT-based authentication and secure sessions",
      "Streak tracking with interactive analytics dashboards (Recharts)",
      "AI Habit Coach powered by Groq LLM API",
      "Mood tracking and automated reminder notifications",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Groq API", "Recharts"],
    github: "https://github.com/aryarabade/smart-habit-tracker",
    live: "",
  },
  {
    id: 2,
    title: "Medicare Inventory Portal",
    subtitle: "Pharmacy Inventory Management System",
    description:
      "A pharmacy inventory management system with admin authentication, medicine stock tracking, and low-stock/expiry alerts.",
    features: [
      "Admin authentication and role-based access",
      "Real-time medicine stock tracking",
      "Automated low-stock and expiry alerts",
    ],
    tech: ["Node.js", "Express.js", "SQL Server", "JavaScript", "Bootstrap"],
    github: "https://github.com/aryarabade/medicare-inventory-portal",
    live: "",
  },
  {
    id: 3,
    title: "Finance Management System",
    subtitle: "Personal Finance Tracker",
    description:
      "A personal finance app for income/expense tracking with secure session management, reminders, and financial reports.",
    features: [
      "Income and expense tracking",
      "Secure session management",
      "Automated reminders and financial reporting",
    ],
    tech: ["ASP.NET Web Forms", "C#", "SQL Server", "HTML", "CSS", "Bootstrap"],
    github: "https://github.com/aryarabade/Finance_management",
    live: "",
  },
];

export const skills = {
  Frontend: ["React.js", "JavaScript", "HTML", "CSS", "Bootstrap"],
  Backend: ["Node.js", "Express.js", "ASP.NET (Basic)"],
  Database: ["MongoDB Atlas", "SQL Server"],
  Languages: ["JavaScript", "Java", "C# (Basic)"],
  Tools: ["VS Code", "GitHub", "Postman", "REST APIs"],
  "Problem Solving": ["DSA (Basic)", "LeetCode"],
};

export const softSkills = [
  "Communication",
  "Teamwork",
  "Quick Learning",
  "Problem Solving",
];

export const certifications = [
  {
    name: "Generative AI Mastermind Program",
    org: "Outskill",
    date: "2025",
    detail: "AI workflows, prompt engineering, and AI-powered app development.",
  },
  {
    name: "Gemini for Google Workspace",
    org: "Google Cloud & Simplilearn",
    date: "2025",
    detail: "Hands-on experience with Gemini AI tools in workspace productivity.",
  },
  {
    name: "Deloitte Cyber Job Simulation",
    org: "Forage",
    date: "2025",
    detail: "Cybersecurity concepts, risk assessment, and industry best practices.",
  },
  {
    name: "Claude AI Fundamentals Certification",
    org: "Anthropic",
    date: "2025",
    detail: "Proficiency in AI-assisted workflows and problem-solving.",
  },
];
