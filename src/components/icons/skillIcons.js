import {
  Atom,
  Triangle,
  FileType,
  Layers,
  Braces,
  Code2,
  Palette,
  Wind,
  LayoutPanelTop,
  Server,
  Route,
  Network,
  Boxes,
  Cable,
  Webhook,
  CreditCard,
  HardDrive,
  HeartPulse,
  Database,
  Leaf,
  Zap,
  Cloud,
  CloudCog,
  Container,
  Ship,
  Workflow,
  Rocket,
  Globe,
  UploadCloud,
  Brain,
  Sparkles,
  FileSearch,
  MessageSquare,
  Cog,
  Bot,
  PhoneCall,
  KeyRound,
  ShieldCheck,
  UserCheck,
  Lock,
  UsersRound,
  Shield,
} from "lucide-react";
import { GithubIcon } from "./BrandIcons";

// Maps each skill string in data/resume.js -> a lucide-react icon component.
// lucide-react ships no brand/technology logos, so these are generic
// concept icons chosen to evoke each skill (e.g. Atom for React, Webhook
// for Webhooks) rather than literal brand marks.
export const skillIcons = {
  // Frontend
  "React.js": Atom,
  "Next.js": Triangle,
  TypeScript: FileType,
  "Vue3.js": Layers,
  "JavaScript (ES6+)": Braces,
  HTML5: Code2,
  CSS3: Palette,
  "Tailwind CSS": Wind,
  Bootstrap: LayoutPanelTop,

  // Backend
  "Node.js": Server,
  "Express.js": Route,
  "REST APIs": Network,
  Microservices: Boxes,
  WebSocket: Cable,
  Webhooks: Webhook,
  "Stripe payments": CreditCard,
  "S3/AWS storage": HardDrive,
  "EHR / FHIR / HL7": HeartPulse,

  // Databases
  PostgreSQL: Database,
  MongoDB: Leaf,
  Redis: Zap,

  // Cloud & DevOps
  AWS: Cloud,
  Azure: CloudCog,
  Docker: Container,
  Kubernetes: Ship,
  "CI/CD pipelines": Workflow,
  Vercel: Rocket,
  Netlify: Globe,
  Render: UploadCloud,
  "Git/GitHub": GithubIcon,

  // AI / ML
  "LLM Integration": Brain,
  "Anthropic Claude": Sparkles,
  "RAG (Retrieval-Augmented Generation)": FileSearch,
  "Prompt Engineering": MessageSquare,
  "AI Workflow Automation": Cog,
  "AI agents": Bot,
  Twilio: PhoneCall,

  // Security
  JWT: KeyRound,
  Auth0: ShieldCheck,
  Clerk: UserCheck,
  "Session-based Auth": Lock,
  "Role-based Access Control (RBAC)": UsersRound,
};

// Fallback icon for any skill without an explicit mapping above.
export const defaultSkillIcon = Code2;

// One representative icon per category, shown next to the section heading.
export const categoryIcons = {
  Frontend: Code2,
  Backend: Server,
  Databases: Database,
  "Cloud & DevOps": Cloud,
  "AI / ML": Brain,
  Security: Shield,
};
