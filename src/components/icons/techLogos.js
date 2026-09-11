// Original, full-color technology logos served from the devicon CDN
// (https://devicon.dev) — used instead of generic outline icons wherever a
// skill has a real, recognizable brand mark.
const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export const techLogos = {
  "React.js": `${DEVICON_BASE}/react/react-original.svg`,
  "Next.js": `${DEVICON_BASE}/nextjs/nextjs-original.svg`,
  TypeScript: `${DEVICON_BASE}/typescript/typescript-original.svg`,
  "Vue3.js": `${DEVICON_BASE}/vuejs/vuejs-original.svg`,
  "JavaScript (ES6+)": `${DEVICON_BASE}/javascript/javascript-original.svg`,
  HTML5: `${DEVICON_BASE}/html5/html5-original.svg`,
  CSS3: `${DEVICON_BASE}/css3/css3-original.svg`,
  "Tailwind CSS": `${DEVICON_BASE}/tailwindcss/tailwindcss-original.svg`,
  Bootstrap: `${DEVICON_BASE}/bootstrap/bootstrap-original.svg`,

  "Node.js": `${DEVICON_BASE}/nodejs/nodejs-original.svg`,
  "Express.js": `${DEVICON_BASE}/express/express-original.svg`,
  "S3/AWS storage": `${DEVICON_BASE}/amazonwebservices/amazonwebservices-original-wordmark.svg`,

  PostgreSQL: `${DEVICON_BASE}/postgresql/postgresql-original.svg`,
  MongoDB: `${DEVICON_BASE}/mongodb/mongodb-original.svg`,
  Redis: `${DEVICON_BASE}/redis/redis-original.svg`,

  AWS: `${DEVICON_BASE}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
  Azure: `${DEVICON_BASE}/azure/azure-original.svg`,
  Docker: `${DEVICON_BASE}/docker/docker-original.svg`,
  Kubernetes: `${DEVICON_BASE}/kubernetes/kubernetes-plain.svg`,
  Vercel: `${DEVICON_BASE}/vercel/vercel-original.svg`,
  Netlify: `${DEVICON_BASE}/netlify/netlify-original.svg`,
  "Git/GitHub": `${DEVICON_BASE}/github/github-original.svg`,

  Twilio: `${DEVICON_BASE}/twilio/twilio-original.svg`,
};

// Skill names whose icon is a real brand mark (image logo above, or one of
// the hand-inlined ones in techBrandIcons.js) rather than a generic
// concept icon — these render large and full-color, like the rest of the
// stack.
export const brandSkillNames = new Set([
  ...Object.keys(techLogos),
  "Stripe payments",
  "Anthropic Claude",
  "JWT",
  "Auth0",
  "Clerk",
]);

// Of the brand marks above, these are black/near-black by default and
// would disappear against the dark card — give just these a small light
// badge for contrast, matching how most portfolios treat GitHub/AWS/etc.
export const badgedSkillNames = new Set([
  "Next.js",
  "Express.js",
  "Vercel",
  "Git/GitHub",
  "AWS",
  "S3/AWS storage",
  "JWT",
]);
