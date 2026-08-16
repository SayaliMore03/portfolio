import { projects } from "../data/portfolioData";

function ProjectDiagram({ project }) {
  if (project?.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover object-top rounded-lg"
      />
    );
  }

  const title = project?.title || "";
  if (title?.includes("Churn")) {
    // E-Commerce Customer Churn Prediction
    return (
      <svg viewBox="0 0 480 200" className="w-full h-full">
        <g transform="translate(15, 25)">
          <rect width="90" height="45" rx="6" className="fill-slate-100 dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-700" strokeWidth="1.5" />
          <text x="45" y="20" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[10px] font-bold">MySQL Data</text>
          <text x="45" y="34" textAnchor="middle" className="fill-slate-500 dark:fill-slate-400 text-[8px]">5,630 Rows</text>
        </g>

        <path d="M110 47 H135" className="stroke-amber-500" strokeWidth="2" strokeDasharray="3 3" />

        <g transform="translate(140, 20)">
          <rect width="105" height="55" rx="6" className="fill-amber-50 dark:fill-amber-950/40 stroke-amber-400 dark:stroke-amber-600" strokeWidth="1.5" />
          <text x="52" y="24" textAnchor="middle" className="fill-amber-900 dark:fill-amber-300 text-[10px] font-bold">EDA & SMOTE</text>
          <text x="52" y="39" textAnchor="middle" className="fill-slate-600 dark:fill-slate-400 text-[8px]">Class Balancing</text>
        </g>

        <path d="M250 47 H275" className="stroke-amber-500" strokeWidth="2" />

        <g transform="translate(280, 20)">
          <rect width="105" height="55" rx="6" className="fill-emerald-50 dark:fill-emerald-950/40 stroke-emerald-400 dark:stroke-emerald-600" strokeWidth="1.5" />
          <text x="52" y="24" textAnchor="middle" className="fill-emerald-900 dark:fill-emerald-300 text-[10px] font-bold">Random Forest</text>
          <text x="52" y="40" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-400 text-[8px] font-bold">99.7% ROC-AUC</text>
        </g>

        <path d="M390 47 H410" className="stroke-amber-500" strokeWidth="2" />

        <g transform="translate(415, 25)">
          <rect width="55" height="45" rx="6" className="fill-purple-50 dark:fill-purple-950/40 stroke-purple-400 dark:stroke-purple-600" strokeWidth="1.5" />
          <text x="27" y="27" textAnchor="middle" className="fill-purple-900 dark:fill-purple-300 text-[10px] font-bold">SHAP</text>
        </g>

        <path d="M332 80 V115 H240 V130" className="stroke-blue-500" strokeWidth="2" fill="none" />
        
        <g transform="translate(170, 135)">
          <rect width="140" height="48" rx="6" className="fill-blue-50 dark:fill-blue-950/50 stroke-blue-400 dark:stroke-blue-600" strokeWidth="1.5" />
          <text x="70" y="24" textAnchor="middle" className="fill-blue-900 dark:fill-blue-300 text-[10px] font-bold">Streamlit Web App</text>
          <text x="70" y="38" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 text-[8px]">Live Prediction Pipeline</text>
        </g>
      </svg>
    );
  }

  if (title?.includes("Credit")) {
    // Credit Card Transaction Insights
    return (
      <svg viewBox="0 0 480 200" className="w-full h-full">
        <rect width="480" height="200" rx="8" className="fill-slate-100/60 dark:fill-slate-900/60 stroke-slate-200 dark:stroke-slate-800" strokeWidth="1" />
        <rect x="0" y="0" width="480" height="28" rx="8" className="fill-[#0F2C52]" />
        <text x="20" y="18" className="fill-white text-[10px] font-bold tracking-wide">Credit Card Report | Overview</text>

        <g transform="translate(15, 38)">
          <rect width="98" height="48" rx="6" className="fill-white dark:fill-slate-800 stroke-slate-200 dark:stroke-slate-700" />
          <text x="10" y="18" className="fill-slate-500 dark:fill-slate-400 text-[8px]">Total Applications</text>
          <text x="10" y="36" className="fill-slate-900 dark:fill-white text-[13px] font-bold">38.6K</text>
        </g>

        <g transform="translate(125, 38)">
          <rect width="108" height="48" rx="6" className="fill-white dark:fill-slate-800 stroke-slate-200 dark:stroke-slate-700" />
          <text x="10" y="18" className="fill-slate-500 dark:fill-slate-400 text-[8px]">Total Amount</text>
          <text x="10" y="36" className="fill-amber-600 dark:fill-amber-400 text-[13px] font-bold">$435.8M</text>
        </g>

        <g transform="translate(245, 38)">
          <rect width="108" height="48" rx="6" className="fill-white dark:fill-slate-800 stroke-slate-200 dark:stroke-slate-700" />
          <text x="10" y="18" className="fill-slate-500 dark:fill-slate-400 text-[8px]">Total Interest</text>
          <text x="10" y="36" className="fill-slate-900 dark:fill-white text-[13px] font-bold">$473.1M</text>
        </g>

        <g transform="translate(365, 38)">
          <rect width="100" height="48" rx="6" className="fill-white dark:fill-slate-800 stroke-slate-200 dark:stroke-slate-700" />
          <text x="10" y="18" className="fill-slate-500 dark:fill-slate-400 text-[8px]">Avg Interest Rate</text>
          <text x="10" y="36" className="fill-emerald-600 dark:fill-emerald-400 text-[13px] font-bold">12.05%</text>
        </g>

        <g transform="translate(15, 96)">
          <rect width="218" height="90" rx="6" className="fill-white dark:fill-slate-800 stroke-slate-200 dark:stroke-slate-700" />
          <text x="12" y="18" className="fill-slate-700 dark:fill-slate-300 text-[9px] font-bold">Spend Trend by Category</text>
          <path d="M20 70 L60 40 L100 55 L140 30 L180 45 L200 25" fill="none" className="stroke-amber-500" strokeWidth="2" />
          <circle cx="140" cy="30" r="3.5" fill="#F59E0B" />
        </g>

        <g transform="translate(245, 96)">
          <rect width="220" height="90" rx="6" className="fill-white dark:fill-slate-800 stroke-slate-200 dark:stroke-slate-700" />
          <text x="12" y="18" className="fill-slate-700 dark:fill-slate-300 text-[9px] font-bold">Customer Income vs Loan Amount</text>
          <rect x="25" y="35" width="16" height="40" fill="#0F2C52" rx="2" />
          <rect x="55" y="45" width="16" height="30" fill="#F59E0B" rx="2" />
          <rect x="85" y="30" width="16" height="45" fill="#0F2C52" rx="2" />
          <rect x="115" y="40" width="16" height="35" fill="#F59E0B" rx="2" />
          <rect x="145" y="25" width="16" height="50" fill="#0F2C52" rx="2" />
          <rect x="175" y="38" width="16" height="37" fill="#F59E0B" rx="2" />
        </g>
      </svg>
    );
  }

  if (title?.includes("Vendor")) {
    // Vendor Sales Analysis - Power BI Dashboard Mockup
    return (
      <svg viewBox="0 0 500 240" className="w-full h-full">
        {/* Background Frame */}
        <rect width="500" height="240" rx="8" className="fill-slate-100/80 dark:fill-slate-900/80 stroke-slate-200 dark:stroke-slate-800" strokeWidth="1" />
        
        {/* Dashboard Title Bar */}
        <rect x="0" y="0" width="500" height="24" rx="8" className="fill-[#0F2C52]" />
        <text x="14" y="16" className="fill-white text-[9px] font-bold tracking-wide">Vendor Sales & Performance Dashboard | Power BI</text>

        {/* Top 5 KPI Cards Row */}
        <g transform="translate(8, 30)">
          {/* Card 1: Total Sales */}
          <rect x="0" y="0" width="92" height="38" rx="5" className="fill-white dark:fill-slate-800 stroke-slate-200 dark:stroke-slate-700" />
          <text x="46" y="13" textAnchor="middle" className="fill-slate-500 dark:fill-slate-400 text-[7px] font-semibold">Total Sales</text>
          <text x="46" y="29" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 text-[11px] font-bold">441.41M</text>

          {/* Card 2: Total Purchase */}
          <rect x="97" y="0" width="92" height="38" rx="5" className="fill-white dark:fill-slate-800 stroke-slate-200 dark:stroke-slate-700" />
          <text x="143" y="13" textAnchor="middle" className="fill-slate-500 dark:fill-slate-400 text-[7px] font-semibold">Total Purchase</text>
          <text x="143" y="29" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[11px] font-bold">307.34M</text>

          {/* Card 3: Gross Profit */}
          <rect x="194" y="0" width="92" height="38" rx="5" className="fill-white dark:fill-slate-800 stroke-slate-200 dark:stroke-slate-700" />
          <text x="240" y="13" textAnchor="middle" className="fill-slate-500 dark:fill-slate-400 text-[7px] font-semibold">Gross Profit</text>
          <text x="240" y="29" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[11px] font-bold">134.07M</text>

          {/* Card 4: Profit Margin */}
          <rect x="291" y="0" width="92" height="38" rx="5" className="fill-white dark:fill-slate-800 stroke-slate-200 dark:stroke-slate-700" />
          <text x="337" y="13" textAnchor="middle" className="fill-slate-500 dark:fill-slate-400 text-[7px] font-semibold">AVG Profit Margin</text>
          <text x="337" y="29" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 text-[11px] font-bold">38.72%</text>

          {/* Card 5: Unsold Capital */}
          <rect x="388" y="0" width="92" height="38" rx="5" className="fill-white dark:fill-slate-800 stroke-slate-200 dark:stroke-slate-700" />
          <text x="434" y="13" textAnchor="middle" className="fill-slate-500 dark:fill-slate-400 text-[7px] font-semibold">Unsold Capital</text>
          <text x="434" y="29" textAnchor="middle" className="fill-purple-600 dark:fill-purple-400 text-[11px] font-bold">2.71M</text>
        </g>

        {/* Middle Row Charts */}
        {/* Donut Chart Box */}
        <g transform="translate(8, 75)">
          <rect width="150" height="78" rx="5" className="fill-white dark:fill-slate-800 stroke-slate-200 dark:stroke-slate-700" />
          <text x="75" y="12" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[7px] font-bold">Purchase Contribution %</text>
          <circle cx="75" cy="46" r="23" className="stroke-slate-200 dark:stroke-slate-700" strokeWidth="11" fill="none" />
          <circle cx="75" cy="46" r="23" stroke="#F59E0B" strokeWidth="11" strokeDasharray="35 115" strokeDashoffset="0" fill="none" />
          <circle cx="75" cy="46" r="23" stroke="#0F2C52" strokeWidth="11" strokeDasharray="45 105" strokeDashoffset="-35" fill="none" />
          <circle cx="75" cy="46" r="23" stroke="#10B981" strokeWidth="11" strokeDasharray="30 120" strokeDashoffset="-80" fill="none" />
          <circle cx="75" cy="46" r="23" stroke="#8B5CF6" strokeWidth="11" strokeDasharray="20 130" strokeDashoffset="-110" fill="none" />
        </g>

        {/* Top Vendors Bar Chart Box */}
        <g transform="translate(163, 75)">
          <rect width="160" height="78" rx="5" className="fill-white dark:fill-slate-800 stroke-slate-200 dark:stroke-slate-700" />
          <text x="80" y="12" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[7px] font-bold">Top Vendors by Sales</text>
          
          <text x="8" y="26" className="fill-slate-500 text-[6px]">DIAGEO</text>
          <rect x="44" y="20" width="95" height="7" fill="#F59E0B" rx="1.5" />
          <text x="143" y="26" className="fill-amber-600 font-bold text-[6px]">68M</text>

          <text x="8" y="39" className="fill-slate-500 text-[6px]">MARTIGNETTI</text>
          <rect x="44" y="33" width="60" height="7" fill="#0F2C52" rx="1.5" />
          <text x="108" y="39" className="fill-navy dark:fill-slate-300 font-bold text-[6px]">39M</text>

          <text x="8" y="52" className="fill-slate-500 text-[6px]">PERNOD</text>
          <rect x="44" y="46" width="48" height="7" fill="#F59E0B" rx="1.5" />
          <text x="96" y="52" className="fill-amber-600 font-bold text-[6px]">32M</text>

          <text x="8" y="65" className="fill-slate-500 text-[6px]">JIM BEAM</text>
          <rect x="44" y="59" width="45" height="7" fill="#10B981" rx="1.5" />
          <text x="93" y="65" className="fill-emerald-600 font-bold text-[6px]">31M</text>
        </g>

        {/* Top Brands Bar Chart Box */}
        <g transform="translate(328, 75)">
          <rect width="164" height="78" rx="5" className="fill-white dark:fill-slate-800 stroke-slate-200 dark:stroke-slate-700" />
          <text x="82" y="12" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[7px] font-bold">Top Brands by Sales</text>

          <text x="8" y="26" className="fill-slate-500 text-[6px]">Jack Daniels</text>
          <rect x="52" y="20" width="90" height="7" fill="#0F2C52" rx="1.5" />
          <text x="146" y="26" className="fill-navy dark:fill-slate-300 font-bold text-[6px]">8.0M</text>

          <text x="8" y="39" className="fill-slate-500 text-[6px]">Tito's</text>
          <rect x="52" y="33" width="80" height="7" fill="#F59E0B" rx="1.5" />
          <text x="136" y="39" className="fill-amber-600 font-bold text-[6px]">7.4M</text>

          <text x="8" y="52" className="fill-slate-500 text-[6px]">Grey Goose</text>
          <rect x="52" y="46" width="76" height="7" fill="#0F2C52" rx="1.5" />
          <text x="132" y="52" className="fill-navy dark:fill-slate-300 font-bold text-[6px]">7.2M</text>

          <text x="8" y="65" className="fill-slate-500 text-[6px]">Capt Morgan</text>
          <rect x="52" y="59" width="66" height="7" fill="#10B981" rx="1.5" />
          <text x="122" y="65" className="fill-emerald-600 font-bold text-[6px]">6.4M</text>
        </g>

        {/* Bottom Row Charts */}
        {/* Low Performing Vendors */}
        <g transform="translate(8, 160)">
          <rect width="230" height="72" rx="5" className="fill-white dark:fill-slate-800 stroke-slate-200 dark:stroke-slate-700" />
          <text x="115" y="12" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[7px] font-bold">Low Performing Vendors</text>
          
          <rect x="15" y="20" width="180" height="10" fill="#F59E0B" rx="2" opacity="0.85" />
          <text x="105" y="28" textAnchor="middle" className="fill-white font-bold text-[6px]">0.77 - Dunn Wine</text>

          <rect x="15" y="34" width="170" height="10" fill="#0F2C52" rx="2" opacity="0.8" />
          <text x="100" y="42" textAnchor="middle" className="fill-white font-bold text-[6px]">0.76 - Circa Wines</text>

          <rect x="15" y="48" width="160" height="10" fill="#10B981" rx="2" opacity="0.8" />
          <text x="95" y="56" textAnchor="middle" className="fill-white font-bold text-[6px]">0.75 - Park Street</text>
        </g>

        {/* Scatter Plot: Low Performing Brands */}
        <g transform="translate(243, 160)">
          <rect width="249" height="72" rx="5" className="fill-white dark:fill-slate-800 stroke-slate-200 dark:stroke-slate-700" />
          <text x="124" y="12" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[7px] font-bold">Low Performing Brands (Sales vs Profit Margin)</text>
          
          <circle cx="20" cy="35" r="2.5" fill="#3B82F6" />
          <circle cx="35" cy="55" r="2.5" fill="#3B82F6" />
          <circle cx="50" cy="25" r="3" fill="#F59E0B" />
          <circle cx="65" cy="45" r="2.5" fill="#3B82F6" />
          <circle cx="80" cy="30" r="3.5" fill="#3B82F6" />
          <circle cx="95" cy="58" r="2.5" fill="#10B981" />
          <circle cx="110" cy="40" r="3" fill="#3B82F6" />
          <circle cx="130" cy="25" r="2.5" fill="#F59E0B" />
          <circle cx="145" cy="50" r="3" fill="#3B82F6" />
          <circle cx="160" cy="35" r="3.5" fill="#3B82F6" />
          <circle cx="180" cy="45" r="2.5" fill="#10B981" />
          <circle cx="200" cy="28" r="3" fill="#3B82F6" />
          <circle cx="220" cy="52" r="2.5" fill="#F59E0B" />
        </g>
      </svg>
    );
  }

  // AdventureWorks Sales Dashboard SVG Mockup
  return (
    <svg viewBox="0 0 500 240" className="w-full h-full">
      {/* Container background */}
      <rect width="500" height="240" rx="8" className="fill-slate-100/90 dark:fill-slate-900/90 stroke-slate-200 dark:stroke-slate-800" strokeWidth="1" />

      {/* Dark Navy Left Sidebar */}
      <g transform="translate(6, 6)">
        <rect width="105" height="228" rx="6" fill="#0F2C52" />
        
        {/* Title & Bicycle Icon */}
        <text x="52" y="18" textAnchor="middle" className="fill-white font-bold text-[8px] tracking-tight">AdventureWorks</text>
        <text x="52" y="27" textAnchor="middle" className="fill-amber-400 font-semibold text-[7px]">🚲 Bicycles BI</text>

        {/* Filter Panel Box */}
        <rect x="8" y="36" width="89" height="105" rx="4" fill="#163864" stroke="#254d7e" strokeWidth="0.8" />
        <text x="14" y="48" className="fill-slate-300 text-[6px] font-bold">Filter Panel</text>
        
        {/* Year Filter Buttons */}
        <rect x="12" y="54" width="81" height="12" rx="2" fill="#0F2C52" stroke="#325e96" strokeWidth="0.5" />
        <text x="52" y="63" textAnchor="middle" className="fill-slate-300 text-[6px]">2017 - 2021</text>
        
        {/* Slicer Pill Buttons */}
        <rect x="8" y="148" width="89" height="32" rx="4" fill="#163864" stroke="#254d7e" strokeWidth="0.8" />
        <text x="52" y="161" textAnchor="middle" className="fill-white font-bold text-[6px]">Salesperson</text>
        <text x="52" y="172" textAnchor="middle" className="fill-white font-bold text-[6px]">Performance</text>

        <rect x="8" y="186" width="89" height="32" rx="4" fill="#163864" stroke="#254d7e" strokeWidth="0.8" />
        <text x="52" y="199" textAnchor="middle" className="fill-white font-bold text-[6px]">Product & Reseller</text>
        <text x="52" y="210" textAnchor="middle" className="fill-white font-bold text-[6px]">Analysis</text>
      </g>

      {/* Main Dashboard Area */}
      {/* 4 KPI Cards (Top Right Area) */}
      <g transform="translate(118, 8)">
        {/* KPI 1: Total Sales */}
        <rect x="0" y="0" width="85" height="42" rx="5" className="fill-amber-500/10 dark:fill-amber-500/20 stroke-amber-500/40" strokeWidth="1" />
        <text x="42" y="14" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 text-[11px] font-bold">$24.3M</text>
        <text x="42" y="31" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[7px] font-semibold">Total Sales</text>

        {/* KPI 2: Total Profit */}
        <rect x="91" y="0" width="85" height="42" rx="5" className="fill-white dark:fill-slate-800 stroke-slate-200 dark:stroke-slate-700" strokeWidth="1" />
        <text x="133" y="14" textAnchor="middle" className="fill-slate-900 dark:fill-white text-[11px] font-bold">$507.8K</text>
        <text x="133" y="31" textAnchor="middle" className="fill-slate-500 dark:fill-slate-400 text-[7px]">Total Profit</text>

        {/* KPI 3: Sales vs Target */}
        <rect x="182" y="0" width="92" height="42" rx="5" className="fill-white dark:fill-slate-800 stroke-slate-200 dark:stroke-slate-700" strokeWidth="1" />
        <text x="228" y="14" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[11px] font-bold">24.65%</text>
        <text x="228" y="31" textAnchor="middle" className="fill-slate-500 dark:fill-slate-400 text-[7px]">Sales Vs Target %</text>

        {/* KPI 4: YOY Growth */}
        <rect x="280" y="0" width="92" height="42" rx="5" className="fill-white dark:fill-slate-800 stroke-slate-200 dark:stroke-slate-700" strokeWidth="1" />
        <text x="326" y="14" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 text-[11px] font-bold">201.48%</text>
        <text x="326" y="31" textAnchor="middle" className="fill-slate-500 dark:fill-slate-400 text-[7px]">YOY Growth %</text>
      </g>

      {/* Middle Left: Sales vs Target by Month Combo Chart */}
      <g transform="translate(118, 56)">
        <rect width="180" height="178" rx="5" className="fill-white dark:fill-slate-800 stroke-slate-200 dark:stroke-slate-700" strokeWidth="1" />
        <text x="90" y="14" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[7px] font-bold">Sales vs. Target by Month</text>

        {/* Bar + Line Combo chart mockup */}
        <rect x="20" y="115" width="8" height="45" fill="#0F2C52" rx="1" />
        <rect x="34" y="95" width="8" height="65" fill="#0F2C52" rx="1" />
        <rect x="48" y="105" width="8" height="55" fill="#0F2C52" rx="1" />
        <rect x="62" y="80" width="8" height="80" fill="#0F2C52" rx="1" />
        <rect x="76" y="70" width="8" height="90" fill="#0F2C52" rx="1" />
        <rect x="90" y="85" width="8" height="75" fill="#0F2C52" rx="1" />
        <rect x="104" y="45" width="8" height="115" fill="#0F2C52" rx="1" />
        <rect x="118" y="60" width="8" height="100" fill="#0F2C52" rx="1" />
        <rect x="132" y="75" width="8" height="85" fill="#0F2C52" rx="1" />
        <rect x="146" y="55" width="8" height="105" fill="#0F2C52" rx="1" />

        {/* Target Line */}
        <path d="M24 125 L38 90 L52 100 L66 75 L80 65 L94 80 L108 40 L122 45 L136 70 L150 50" fill="none" className="stroke-amber-500" strokeWidth="2" />
        <text x="90" y="172" textAnchor="middle" className="fill-amber-600 font-bold text-[6px]">── Target Trend</text>
      </g>

      {/* Top Right: Sales by Country (Map Placeholder Graphic) */}
      <g transform="translate(304, 56)">
        <rect width="188" height="84" rx="5" className="fill-white dark:fill-slate-800 stroke-slate-200 dark:stroke-slate-700" strokeWidth="1" />
        <text x="94" y="14" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[7px] font-bold">Sales by Country</text>
        <path d="M20 40 Q40 25 70 35 T120 45 T170 30" fill="none" className="stroke-blue-400/40" strokeWidth="1.5" strokeDasharray="2 2" />
        <circle cx="45" cy="38" r="6" fill="#0F2C52" opacity="0.8" />
        <circle cx="85" cy="48" r="10" fill="#F59E0B" opacity="0.85" />
        <circle cx="135" cy="36" r="8" fill="#10B981" opacity="0.8" />
        <circle cx="160" cy="55" r="5" fill="#0F2C52" opacity="0.7" />
        <text x="94" y="76" textAnchor="middle" className="fill-slate-500 text-[6px]">Global Geographic Coverage</text>
      </g>

      {/* Bottom Right: Sales by Category Donut Chart */}
      <g transform="translate(304, 145)">
        <rect width="188" height="89" rx="5" className="fill-white dark:fill-slate-800 stroke-slate-200 dark:stroke-slate-700" strokeWidth="1" />
        <text x="94" y="12" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[7px] font-bold">Sales by Category</text>
        
        <circle cx="65" cy="48" r="24" className="stroke-slate-200 dark:stroke-slate-700" strokeWidth="11" fill="none" />
        <circle cx="65" cy="48" r="24" stroke="#0F2C52" strokeWidth="11" strokeDasharray="125 25" strokeDashoffset="0" fill="none" />
        <circle cx="65" cy="48" r="24" stroke="#F59E0B" strokeWidth="11" strokeDasharray="22 128" strokeDashoffset="-125" fill="none" />
        <circle cx="65" cy="48" r="24" stroke="#94A3B8" strokeWidth="11" strokeDasharray="3 147" strokeDashoffset="-147" fill="none" />
        <text x="65" y="51" textAnchor="middle" className="fill-slate-900 dark:fill-white text-[8px] font-bold">83%</text>

        <g transform="translate(110, 26)">
          <rect x="0" y="0" width="6" height="6" fill="#0F2C52" rx="1" />
          <text x="10" y="6" className="fill-slate-600 dark:fill-slate-300 text-[6px] font-bold">Bikes (83%)</text>

          <rect x="0" y="14" width="6" height="6" fill="#F59E0B" rx="1" />
          <text x="10" y="20" className="fill-slate-600 dark:fill-slate-300 text-[6px] font-bold">Components (15%)</text>

          <rect x="0" y="28" width="6" height="6" fill="#94A3B8" rx="1" />
          <text x="10" y="34" className="fill-slate-600 dark:fill-slate-300 text-[6px] font-bold">Clothing (2%)</text>

          <rect x="0" y="42" width="6" height="6" fill="#10B981" rx="1" />
          <text x="10" y="48" className="fill-slate-600 dark:fill-slate-300 text-[6px] font-bold">Accessories</text>
        </g>
      </g>
    </svg>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 min-h-[calc(100vh-5rem)] bg-slate-50 dark:bg-[#060e18] pt-6 pb-12 flex flex-col justify-start"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="mb-5">
          <h2 className="text-[#f09b11] text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-1">
            FEATURED PROJECTS
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm">
            End-to-end data analytics, machine learning applications, and interactive dashboards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-[#0f1f38] rounded-2xl border border-slate-200/80 dark:border-white/10 p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-amber-500/40 dark:hover:border-amber-500/40 transition-all duration-300 group h-full"
            >
              <div className="flex flex-col grow">
                {/* Top Image / Architecture Diagram Preview */}
                <div className="w-full h-48 sm:h-52 rounded-xl bg-slate-50 dark:bg-[#0a1626] border border-slate-200/60 dark:border-white/10 mb-5 overflow-hidden flex items-center justify-center p-2 group-hover:border-amber-500/40 transition-colors shrink-0">
                  <ProjectDiagram project={project} />
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5 grow">
                  {project.description}
                </p>

                {/* Technologies & Tools */}
                <div className="mb-4">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 font-semibold">
                    Technologies & Tools
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200/50 dark:border-white/5"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Metrics / Highlights */}
                {(project.metrics || project.metric) && (
                  <div className="mb-5">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 font-semibold">
                      Key Highlights & Impact
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.metrics ? (
                        project.metrics.map((m) => (
                          <span
                            key={m}
                            className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                          >
                            {m}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                          {project.metric}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer: GitHub & Live Demo Buttons */}
              <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between gap-3 shrink-0 mt-2">
                <span className="text-xs font-semibold font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  {project.tools[0]} • Portfolio
                </span>

                <div className="flex items-center gap-2">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-200 text-xs font-semibold hover:bg-slate-200 dark:hover:bg-white/20 transition-colors"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.1c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                      </svg>
                      <span>Code</span>
                    </a>
                  )}

                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 text-white text-xs font-semibold hover:bg-amber-600 transition-colors shadow-xs"
                    >
                      <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
