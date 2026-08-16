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
  email: "sayalimore2003@gmail.com",
  resumeLink: "/resume.pdf", // drop your resume file in /public
  socials: {
    linkedin: "https://www.linkedin.com/in/sayali-more12/",
    github: "https://github.com/SayaliMore03",
  },
  quote: "Empowering ideas with a blend of creativity, logic, and dedication ❤️",
  image: "/profile.jpg",
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
  degree: "Bachelor of Technology (B.Tech)",
  field: "Artificial Intelligence & Data Science",
  college: "MIT College of Engineering, Chhatrapati Sambhajinagar",
  cgpa: "CGPA: 9.33/10",
  graduated: "Nov 2022 – July 2026",
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
    id: "oracle-ai",
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    shortTitle: "OCI 2025 AI Foundations Associate",
    issuer: "Oracle University",
    issuerType: "Oracle",
    issueDate: "Oct 2025",
    validity: "Valid until Oct 2027",
    credentialId: "102993027OCI25AICFA",
    verifyUrl: "",
    description:
      "Recognized by Oracle Corporation for demonstrating foundational knowledge in Artificial Intelligence, Machine Learning concepts, Generative AI models, and Oracle Cloud Infrastructure AI Services.",
    skills: ["Oracle Cloud (OCI)", "Generative AI", "Machine Learning", "AI Services"],
  },
  {
    id: "microsoft-power-bi",
    name: "Microsoft Power BI Data Analyst Professional Certificate",
    shortTitle: "Microsoft Power BI Data Analyst",
    issuer: "Microsoft & Coursera",
    issuerType: "Microsoft",
    issueDate: "Jul 2026",
    credentialId: "4NT8YCDE89P2",
    verifyUrl: "https://coursera.org/verify/professional-cert/4NT8YCDE89P2",
    description:
      "Completed 8-course Professional Certificate covering data preparation, Power Query ETL, star schema data modeling, advanced DAX calculations, interactive reporting, and Microsoft PL-300 exam prep.",
    skills: ["Power BI", "DAX", "Data Modeling", "Power Query", "Excel", "PL-300"],
    coursesCount: "8 Courses",
  },
  {
    id: "udemy-ds-ml",
    name: "2025 Master class on Data Science using Python A-Z for ML",
    shortTitle: "Data Science using Python A-Z for ML",
    issuer: "Udemy (Toppers Bootcamp)",
    issuerType: "Udemy",
    issueDate: "Jul 2025",
    credentialId: "UC-f376d987-e47e-4327-ad36-15b0ab248ef0",
    verifyUrl: "https://ude.my/UC-f376d987-e47e-4327-ad36-15b0ab248ef0",
    description:
      "Hands-on masterclass covering end-to-end Data Science & Machine Learning pipelines using Python, Pandas, NumPy, Scikit-Learn, data wrangling, and predictive modeling.",
    skills: ["Python", "Data Science", "Machine Learning", "Pandas", "Scikit-Learn"],
    duration: "6.5 Hours",
  },
];

export const projects = [
  {
    title: "E-Commerce Customer Churn Prediction",
    description:
      "Built an end-to-end churn prediction system for a 5,630-customer e-commerce dataset, identifying at-risk customers before they leave. Random Forest achieved 99.7% ROC-AUC, catching 179 of 190 churners with just 13 false alarms. Deployed as a live Streamlit app with real-time risk scoring and personalized retention recommendations.",
    tools: ["Python", "Scikit-learn", "XGBoost", "SHAP", "Streamlit", "SMOTE"],
    demoLink: "https://sayalimore03-ecommerce-churn-prediction.streamlit.app",
    githubLink: "https://github.com/SayaliMore03",
    metrics: ["99.7% ROC-AUC", "94.2% Recall", "5,630 records"],
    metric: "99.7% ROC-AUC · 94.2% Recall · 5,630 records",
    image: "",
  },
  {
    title: "AdventureWorks Sales Dashboard",
    description:
      "Built an end-to-end Retail Sales & Performance BI solution by integrating 7 raw datasets using Power Query, Power Pivot, and DAX. Designed a 3-dashboard Hub-and-Spoke reporting system with advanced KPI tracking, sales performance analysis, product profitability insights, and interactive reporting to support executive decision-making.",
    tools: ["Excel", "Power Query", "Power Pivot", "DAX", "Data Modeling"],
    demoLink: "",
    githubLink: "https://github.com/SayaliMore03",
    metrics: ["7 Data Sources", "3 Dashboards", "10+ DAX Measures", "Galaxy Schema"],
    metric: "7 Data Sources · 3 Dashboards · 10+ DAX Measures · Galaxy Schema",
    image: "/projects/adventureworks.png",
  },
  {
    title: "Vendor Sales Analysis",
    description:
      "Developed a vendor performance analytics platform using Python, SQL, MySQL and Power BI to analyze $441M in sales. Built an automated ETL pipeline, performed SQL-driven EDA, and created an interactive dashboard for vendor performance, profitability, and inventory optimization.",
    tools: ["Python", "SQL", "Power BI", "MySQL", "Pandas", "Jupyter"],
    demoLink: "",
    githubLink: "https://github.com/SayaliMore03",
    metrics: ["$441M Sales", "$134M Profit", "38.7% Margin", "$2.71M Unsold"],
    metric: "$441M Sales · $134M Profit · 38.7% Margin · $2.71M Unsold",
    image: "",
  },
  {
    title: "Credit Card Transaction Insights",
    description:
      "Built an interactive Credit Card Transaction Insights Dashboard using SQL and Power BI to analyze $435.8M in revenue across 38.6K customer accounts. Developed a structured data model and executive dashboard to monitor customer demographics, card category performance, transaction trends, geographic insights, and key financial KPIs for business decision-making.",
    tools: ["SQL", "Power BI", "ETL", "Data Modeling", "Dashboard"],
    demoLink: "",
    githubLink: "https://github.com/SayaliMore03",
    metrics: ["$435.8M Revenue", "38.6K Customers", "12.05% Interest", "4 Card Categories"],
    metric: "$435.8M Revenue · 38.6K Customers · 12.05% Interest · 4 Card Categories",
    image: "/projects/credit-card.png",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
];
