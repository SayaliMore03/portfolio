// ── Edit everything here — text, links, projects, skills ──
// No need to touch component files for content changes.

export const profile = {
  name: "Sayali More",
  role: "Data Analyst",
  roles: ["Data Analyst", "Business Analyst"],
  tagline:
    "Recent B.Tech graduate in AI & Data Science, turning raw data into decisions for real business impact.",
  about: `I'm a recent B.Tech graduate in AI & Data Science from MIT College of
  Engineering (9.29 CGPA). I enjoy working through the full data lifecycle —
  cleaning messy datasets, writing efficient SQL, building interpretable ML
  models, and shipping dashboards people actually use. Currently looking for
  Data Analyst roles where I can bring that end-to-end thinking to a team.`,
  location: "Pune, Maharashtra, India",
  email: "sayalimore03@example.com", // update with real email
  resumeLink: "/resume.pdf", // drop your resume file in /public
  socials: {
    linkedin: "https://linkedin.com/in/sayalimore03",
    github: "https://github.com/SayaliMore03",
    credly: "https://www.credly.com/users/sayali-more",
  },
  quote: "Empowering ideas with a blend of creativity, logic, and dedication ❤️",
};

export const education = {
  degree: "B.Tech, AI & Data Science",
  college: "MIT College of Engineering",
  cgpa: "9.29 CGPA",
  graduated: "July 2026",
};

export const experience = [
  {
    role: "Data Analyst & AI Intern",
    company: "RaiTalk",
    period: "",
    points: [
      "Built conversational analytics pipelines to surface customer sentiment trends.",
      "Designed KPI dashboards used to track engagement and support metrics.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Indux Solar",
    period: "",
    points: [
      "Built responsive UI components using HTML, CSS, JavaScript, and React.js.",
    ],
  },
];

export const skills = {
  Languages: ["Python", "SQL"],
  "Visualization & BI": ["Power BI", "Excel (Power Query, DAX)"],
  "Libraries & Tools": ["Pandas", "Scikit-learn", "SHAP", "Streamlit", "MySQL"],
  Concepts: [
    "Window Functions",
    "CTEs",
    "Stored Procedures",
    "Data Modelling",
    "EDA",
    "Machine Learning",
  ],
};

export const certificates = [
  {
    name: "AI Foundations Associate",
    issuer: "Oracle",
  },
  {
    name: "Excel Basics for Data Analysis",
    issuer: "Coursera",
  },
  {
    name: "Data Science with Python",
    issuer: "Udemy",
  },
];

export const projects = [
  {
    title: "E-Commerce Customer Churn Prediction",
    description:
      "End-to-end churn pipeline on a 5,630-row e-commerce dataset — cleaning, EDA, SMOTE balancing, and model comparison. Random Forest won at 99.7% ROC-AUC, explained with SHAP, and shipped as a live Streamlit app.",
    tools: ["Python", "Scikit-learn", "SHAP", "Streamlit", "MySQL"],
    demoLink: "https://sayalimore03-ecommerce-churn-prediction.streamlit.app",
    githubLink: "https://github.com/SayaliMore03",
    metric: "99.7% ROC-AUC",
  },
  {
    title: "SQL + Power BI: DataCo Supply Chain Analysis",
    description:
      "Analysis of a ~180K-row supply chain dataset — normalized into six tables in MySQL, cleaned for PII and outliers, and visualized in a four-page Power BI dashboard.",
    tools: ["MySQL", "Power BI", "SQL"],
    demoLink: "",
    githubLink: "https://github.com/SayaliMore03",
    metric: "180K rows",
  },
  {
    title: "Credit Card Transaction Insights",
    description:
      "Transaction-level analysis identifying spend patterns and anomalies, visualized through an interactive Power BI dashboard.",
    tools: ["MySQL", "Power BI"],
    demoLink: "",
    githubLink: "https://github.com/SayaliMore03",
    metric: "",
  },
  {
    title: "Vendor Sales Analysis",
    description:
      "Vendor performance analysis combining SQL queries with Power BI visuals to surface purchasing and sales trends.",
    tools: ["Python", "MySQL", "Power BI"],
    demoLink: "",
    githubLink: "https://github.com/SayaliMore03",
    metric: "",
  },
  {
    title: "AdventureWorks Sales Dashboard",
    description:
      "Sales performance dashboard built entirely in Excel using Power Query for transformation and DAX for measures.",
    tools: ["Excel", "Power Query", "DAX"],
    demoLink: "",
    githubLink: "https://github.com/SayaliMore03",
    metric: "",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Projects", href: "#projects" },
];
