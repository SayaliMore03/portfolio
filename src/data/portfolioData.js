// ── Edit everything here — text, links, projects, skills ──
// No need to touch component files for content changes.

export const profile = {
  name: "Sayali More",
  role: "Data Analyst",
  roles: ["Data Analyst", "Business Analyst"],
  tagline:
    "Recent B.Tech graduate in AI & Data Science, turning raw data into decisions for real business impact.",
  about: `I'm a Data Analyst passionate about transforming complex datasets into actionable business insights. I enjoy solving real-world problems using SQL, Python, Excel, and Power BI—from cleaning messy data and uncovering trends to building dashboards that support better decision-making.

Through personal projects, I've worked on customer churn prediction, supply chain analytics, sales analysis, and KPI reporting. I'm currently seeking opportunities where I can help organizations make smarter, data-driven decisions while continuing to grow as an analyst.`,
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

export const atAGlance = [
  { icon: "📍", text: "Pune, Maharashtra" },
  { icon: "🎓", text: "B.Tech AI & Data Science" },
  { icon: "📊", text: "Data Analyst" },
  { icon: "💼", text: "2 Internships" },
  { icon: "📈", text: "5+ Analytics Projects" },
  { icon: "📧", text: "Available for Full-Time" },
];

export const education = {
  degree: "Bachelor of Technology",
  field: "Artificial Intelligence & Data Science",
  college: "MIT College of Engineering",
  cgpa: "CGPA: 9.29/10",
  graduated: "Graduated: 2026",
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

export const skillsData = {
  coreSkills: [
    { name: "SQL", details: "joins, CTEs, window functions, stored procedures" },
    { name: "Python", details: "Pandas, NumPy, Scikit-learn" },
    { name: "Power BI", details: "DAX, Power Query, dashboard development" },
    { name: "Excel", details: "Power Query, Pivot Tables, advanced formulas" },
    { name: "MySQL", details: "" },
    { name: "Machine Learning", details: "" },
    { name: "EDA", details: "Exploratory Data Analysis" },
    { name: "Data Cleaning & Transformation", details: "" },
    { name: "Data Visualization", details: "" },
    { name: "Statistics", details: "basic to intermediate" },
  ],
  librariesAndTools: [
    { name: "Pandas" },
    { name: "NumPy" },
    { name: "Scikit-learn" },
    { name: "SHAP" },
    { name: "Streamlit" },
    { name: "Git & GitHub" },
    { name: "Jupyter Notebook" },
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
