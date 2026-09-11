export const personalInfo = {
  name: "Mohammed Afnan",
  title: "Full-Stack Developer",
  location: "Queens, NY 11370",
  phone: "(934) 218-8324",
  email: "mdafnan3579@gmail.com",
  linkedin: "linkedin.com/in/mohammed-afnan098",
  linkedinUrl: "https://www.linkedin.com/in/mohammed-afnan098/",
  github: "github.com/mdafnan3579",
  githubUrl: "https://github.com/mdafnan3579",
  workAuthorization: "Authorized to work in the U.S. without sponsorship",
};

export const professionalSummary =
  "Senior Full-Stack Developer with 6+ years of experience designing and delivering scalable web applications, AI-powered platforms, and distributed backend systems. Lead developer of Joyfullwell platform, an AI-powered SaaS platform built end-to-end for the childcare industry. Deep expertise in Node.js, React.js, TypeScript, PostgreSQL, and Redis. Proven track record building SaaS products across healthcare, insurance, legal, real estate, and childcare/education sectors. Experienced with AI orchestration, RAG pipelines, multi-agent architectures, multi-tenant architecture, and cloud-native deployments on AWS and Azure. Adept at leading Agile teams, implementing CI/CD pipelines, and shipping production-grade microservices.";

// Short, rotating taglines distilled from professionalSummary — used for the
// Hero section's animated typing effect.
export const heroTaglines = [
  "Building scalable, AI-powered SaaS platforms",
  "6+ years shipping production-grade microservices",
  "Lead developer of Joyfullwell, an AI-powered childcare platform",
  "Node.js · React.js · TypeScript · PostgreSQL · Redis",
];

export const coreCompetencies = [
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Vue3.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Microservices",
      "WebSocket",
      "Webhooks",
      "Stripe payments",
      "S3/AWS storage",
      "EHR / FHIR / HL7",
    ],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "CI/CD pipelines",
      "Vercel",
      "Netlify",
      "Render",
      "Git/GitHub",
    ],
  },
  {
    category: "AI / ML",
    skills: [
      "LLM Integration",
      "Anthropic Claude",
      "RAG (Retrieval-Augmented Generation)",
      "Prompt Engineering",
      "AI Workflow Automation",
      "AI agents",
      "Twilio",
    ],
  },
  {
    category: "Security",
    skills: [
      "JWT",
      "Auth0",
      "Clerk",
      "Session-based Auth",
      "Role-based Access Control (RBAC)",
    ],
  },
];

export const workExperience = [
  {
    id: "joyfullwell",
    title: "Full Stack Developer",
    company: "Joyfullwell",
    location: "New York, NY",
    startDate: "May 2025",
    endDate: "Present",
    current: true,
    highlights: [
      "Built a full-stack AI-powered SaaS platform for the childcare industry, from concept through production launch, owning frontend, backend, database, and AI integration.",
      "Architected a multi-tenant, role-based system supporting 5 distinct user roles (Super Admin, Corporate Manager, Center Director, Teacher, Parent) with granular access control and permissions.",
      "Built a full leads/CRM pipeline tracking families through a 6-stage enrollment funnel, including automated lead capture and marketing channel tracking.",
      "Integrated AI-powered features including automated report generation, enrollment prediction, at-risk payment flagging, and an AI voice assistant for handling parent calls.",
      "Built real-time reporting and communication tools giving parents live visibility into attendance, activities, and daily updates.",
      "Designed a multi-step company onboarding and admin approval workflow to support scalable client onboarding.",
      "Implemented billing and invoicing workflows with automated payment reminders and tuition tracking.",
      "Owned the product independently end-to-end — covering requirements gathering, architecture, development, QA, and documentation — personally validating every core feature prior to launch.",
    ],
  },
  {
    id: "progton",
    title: "Senior Full-Stack Developer",
    company: "Progton Software Technologies LLP",
    location: "Remote",
    startDate: "Dec 2020",
    endDate: "May 2025",
    current: false,
    highlights: [
      "Architected and deployed end-to-end MERN stack SaaS applications (Node.js, React.js, TypeScript, PostgreSQL) serving clients in healthcare, insurance, law, and real estate.",
      "Reduced page load times by 37% through code splitting, lazy loading, and caching optimizations.",
      "Improved API response time by 35% via database query optimization and indexing strategies.",
      "Designed and integrated RESTful APIs that increased data processing efficiency and system throughput.",
      "Implemented secure authentication systems using JWT, OAuth 2.0, and role-based access control (RBAC).",
      "Managed cloud deployments across AWS and Azure, maintaining 99.9% uptime SLA.",
      "Built responsive, cross-browser-compatible UI/UX components following accessibility best practices.",
      "Collaborated with cross-functional Agile teams; managed version control workflows via Git and GitHub.",
    ],
  },
];

export const projects = [
  {
    id: "joyfullwell",
    title: "Joyfullwell",
    description:
      "AI-powered childcare management SaaS with CRM, multi-role access, billing, and AI voice assistant.",
  },
  {
    id: "homecare-agency",
    title: "Homecare Agency Management SaaS",
    description:
      "End-to-end platform for scheduling, billing, and compliance for home care agencies.",
  },
  {
    id: "expense-invoice",
    title: "Expense & Invoice Management System",
    description:
      "Automated financial tracking tool with reporting dashboards for SMBs.",
  },
  {
    id: "ats",
    title: "Applicant Tracking System (ATS)",
    description:
      "Full-featured recruitment platform with role-based access and pipeline management.",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Web App (MERN)",
    description:
      "Scalable storefront with payment integration, inventory management, and admin portal.",
  },
  {
    id: "hospital-management",
    title: "Hospital Management System",
    description:
      "Full-stack system for patient records, appointment scheduling, and staff management.",
  },
];

export const education = [
  {
    id: "st-francis",
    degree: "Master of Science – Project Management (Information Technology)",
    gpa: "3.5",
    school: "St. Francis College",
    location: "Brooklyn, NY",
    date: "Jun 2024",
  },
  {
    id: "acharya",
    degree: "Bachelor of Science – Engineering",
    gpa: "3.5",
    school: "Acharya Institute of Technology",
    location: "Bangalore",
    date: "Jun 2022",
  },
];

const resume = {
  personalInfo,
  professionalSummary,
  heroTaglines,
  coreCompetencies,
  workExperience,
  projects,
  education,
};

export default resume;
