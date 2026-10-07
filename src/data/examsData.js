export const examCategories = [
  { id: "all", name: "All Certifications", count: 24 },
  { id: "mutual-funds", name: "Mutual Funds", count: 4 },
  { id: "derivatives", name: "Equity & Derivatives", count: 5 },
  { id: "research-advisory", name: "Research & Advisory", count: 6 },
  { id: "wealth-pms", name: "Wealth & PMS", count: 4 },
  { id: "banking-insurance", name: "Banking & IRDAI", count: 5 },
];

export const examsList = [
  {
    id: "nism-series-v-a-mutual-fund",
    code: "NISM Series V-A",
    title: "Mutual Fund Distributors Certification",
    category: "mutual-funds",
    badge: "Most Popular",
    isBestSeller: true,
    rating: 4.9,
    reviewsCount: 3820,
    enrolledCount: 28400,
    passRate: "98.7%",
    questionsCount: 1450,
    fullMocksCount: 10,
    chapterTestsCount: 18,
    durationMinutes: 120,
    totalMarks: 100,
    passingMarks: 50,
    negativeMarking: "0.25 (25%)",
    regularPrice: 1299,
    discountedPrice: 499,
    description: "The official gateway examination mandated by SEBI for all individuals, employees, and distributors selling or distributing mutual fund products in India.",
    shortSummary: "Comprehensive question bank updated for latest 2026 workbook, 10 full-length timed mock tests with negative marking and detailed analytical explanations.",
    features: [
      "Updated for 2026 NISM Workbook syllabus",
      "10 Full-Length Timed Mocks (Exact NISM Pattern)",
      "18 Chapter-wise Diagnostic Quizzes",
      "3 Case-study numerical practice tests",
      "Instant step-by-step solution explanations",
      "Memory-based questions from recent 2025-2026 sessions",
      "100% Pass Assurance or Full Fee Refund"
    ],
    targetAudience: "Mutual Fund Distributors, Bank RM/Officers, IFAs, Financial Planners, Wealth Managers, Students entering BFSI.",
    validityOptions: [
      { days: 30, price: 499, originalPrice: 1299, popular: false },
      { days: 90, price: 699, originalPrice: 1799, popular: true, savings: "61% OFF" },
      { days: 180, price: 999, originalPrice: 2499, popular: false },
      { days: 365, price: 1399, originalPrice: 3499, popular: false }
    ],
    syllabus: [
      { chapter: 1, title: "Investment Landscape & Financial Planning", weightage: "6%", questions: 6 },
      { chapter: 2, title: "Concept & Role of a Mutual Fund", weightage: "8%", questions: 8 },
      { chapter: 3, title: "Legal & Regulatory Framework of Mutual Funds", weightage: "10%", questions: 10 },
      { chapter: 4, title: "Scheme Related Information & Disclosures (SID/KIM/SAI)", weightage: "8%", questions: 8 },
      { chapter: 5, title: "Fund Distribution & Channel Management", weightage: "10%", questions: 10 },
      { chapter: 6, title: "Net Asset Value (NAV), Total Expense Ratio & Pricing", weightage: "12%", questions: 12 },
      { chapter: 7, title: "Taxation on Mutual Fund Units & Capital Gains", weightage: "10%", questions: 10 },
      { chapter: 8, title: "Investor Services & Operational Guidelines", weightage: "8%", questions: 8 },
      { chapter: 9, title: "Risk, Return & Performance of Schemes", weightage: "12%", questions: 12 },
      { chapter: 10, title: "Mutual Fund Scheme Selection & Financial Goals", weightage: "10%", questions: 10 },
      { chapter: 11, title: "Selecting the Right Investment Products", weightage: "6%", questions: 6 }
    ],
    faculty: {
      name: "Rajeshwar Sengupta",
      role: "Ex-VP HDFC AMC & Lead NISM Master Faculty",
      experience: "21+ Years in Indian Capital Markets",
      studentsTrained: "35,000+"
    }
  },
  {
    id: "nism-series-viii-equity-derivatives",
    code: "NISM Series VIII",
    title: "Equity Derivatives Certification Examination",
    category: "derivatives",
    badge: "High Demand",
    isBestSeller: true,
    rating: 4.8,
    reviewsCount: 2940,
    enrolledCount: 21500,
    passRate: "97.9%",
    questionsCount: 1600,
    fullMocksCount: 12,
    chapterTestsCount: 20,
    durationMinutes: 120,
    totalMarks: 100,
    passingMarks: 60,
    negativeMarking: "0.25 (25%)",
    regularPrice: 1499,
    discountedPrice: 599,
    description: "Mandated by SEBI for approved users and sales personnel of trading members in the Equity Derivatives segment of stock exchanges in India.",
    shortSummary: "Master Options Greeks, Futures Payoffs, Margining, Hedging strategies, and Clearing & Settlement with intensive mock tests.",
    features: [
      "Covers Futures & Options payoffs in detail",
      "12 Full-Length Timed Simulation Exams",
      "Special numerical drill on Option Pricing & Greeks",
      "Clearing, Margins (SPAN, VaR, Extreme Loss) deep dive",
      "Chapter-wise tests with detailed calculation formulas",
      "Pass Guarantee with full fee waiver if failed"
    ],
    targetAudience: "Broking Dealers, Terminal Operators, Proprietary Traders, Relationship Managers, Derivatives Analysts.",
    validityOptions: [
      { days: 30, price: 599, originalPrice: 1499, popular: false },
      { days: 90, price: 799, originalPrice: 1999, popular: true, savings: "60% OFF" },
      { days: 180, price: 1199, originalPrice: 2899, popular: false }
    ],
    syllabus: [
      { chapter: 1, title: "Basics of Derivatives & Indian Derivatives Market", weightage: "6%", questions: 6 },
      { chapter: 2, title: "Understanding the Index & Underlying Assets", weightage: "5%", questions: 5 },
      { chapter: 3, title: "Introduction to Forwards & Futures Contracts", weightage: "12%", questions: 12 },
      { chapter: 4, title: "Futures Trading, Hedging & Arbitrage Strategies", weightage: "15%", questions: 15 },
      { chapter: 5, title: "Introduction to Options Contracts & Mechanics", weightage: "14%", questions: 14 },
      { chapter: 6, title: "Option Trading Strategies & Option Greeks", weightage: "18%", questions: 18 },
      { chapter: 7, title: "Regulatory Framework for Derivatives Trading", weightage: "10%", questions: 10 },
      { chapter: 8, title: "Accounting & Taxation of Derivatives Transactions", weightage: "8%", questions: 8 },
      { chapter: 9, title: "Clearing, Settlement & Risk Management System", weightage: "12%", questions: 12 }
    ],
    faculty: {
      name: "Vivek Kulkarni, CFA",
      role: "Chief Derivatives Strategist & Certified Trainer",
      experience: "16+ Years in Institutional Broking",
      studentsTrained: "19,000+"
    }
  },
  {
    id: "nism-series-xv-research-analyst",
    code: "NISM Series XV",
    title: "Research Analyst Certification Examination",
    category: "research-advisory",
    badge: "Career Booster",
    isBestSeller: true,
    rating: 4.9,
    reviewsCount: 2210,
    enrolledCount: 16800,
    passRate: "97.4%",
    questionsCount: 1500,
    fullMocksCount: 10,
    chapterTestsCount: 16,
    durationMinutes: 120,
    totalMarks: 100,
    passingMarks: 60,
    negativeMarking: "0.25 (25%)",
    regularPrice: 1599,
    discountedPrice: 649,
    description: "Compulsory examination for individuals aspiring to register as Research Analysts under SEBI (Research Analysts) Regulations, 2014, and professionals working in equity research.",
    shortSummary: "Master financial statement analysis, valuation models (DCF, Relative Valuation), economic indicators, industry analysis, and SEBI compliance guidelines.",
    features: [
      "Rigorous coverage of fundamental analysis and valuation",
      "10 Full Mocks reflecting real exam difficulty",
      "Chapter questions on DCF, P/E, EV/EBITDA, DuPont Analysis",
      "SEBI Research Analyst Regulations 2014 code of conduct drills",
      "Explanations with real company balance sheet examples"
    ],
    targetAudience: "Equity Research Analysts, Financial Analysts, Investment Bankers, Wealth Managers, MBA/CA/CFA Aspirants.",
    validityOptions: [
      { days: 30, price: 649, originalPrice: 1599, popular: false },
      { days: 90, price: 899, originalPrice: 2299, popular: true, savings: "61% OFF" },
      { days: 180, price: 1299, originalPrice: 3199, popular: false }
    ],
    syllabus: [
      { chapter: 1, title: "Introduction to Indian Capital Market", weightage: "5%", questions: 5 },
      { chapter: 2, title: "Legal & Regulatory Framework for Research Analysts", weightage: "12%", questions: 12 },
      { chapter: 3, title: "Economic Analysis & Macroeconomic Variables", weightage: "10%", questions: 10 },
      { chapter: 4, title: "Industry Analysis & Porter's Five Forces", weightage: "10%", questions: 10 },
      { chapter: 5, title: "Company Analysis – Qualitative Dimensions", weightage: "8%", questions: 8 },
      { chapter: 6, title: "Company Analysis – Quantitative & Financial Statements", weightage: "15%", questions: 15 },
      { chapter: 7, title: "Corporate Actions & Valuation Principles", weightage: "15%", questions: 15 },
      { chapter: 8, title: "Fundamentals of Risk & Return", weightage: "8%", questions: 8 },
      { chapter: 9, title: "Qualities of a Good Research Report", weightage: "7%", questions: 7 },
      { chapter: 10, title: "Ethics & Code of Conduct for Research Analysts", weightage: "10%", questions: 10 }
    ],
    faculty: {
      name: "Dr. Ananya Mathur",
      role: "Ex-Lead Equity Strategist, Edelweiss",
      experience: "18+ Years in Fundamental Equity Research",
      studentsTrained: "14,500+"
    }
  },
  {
    id: "nism-series-x-a-investment-adviser-level-1",
    code: "NISM Series X-A",
    title: "Investment Adviser (Level 1) Certification",
    category: "research-advisory",
    badge: "SEBI Mandated",
    isBestSeller: false,
    rating: 4.8,
    reviewsCount: 1640,
    enrolledCount: 11200,
    passRate: "96.8%",
    questionsCount: 1400,
    fullMocksCount: 8,
    chapterTestsCount: 14,
    durationMinutes: 120,
    totalMarks: 100,
    passingMarks: 60,
    negativeMarking: "0.25 (25%)",
    regularPrice: 1699,
    discountedPrice: 699,
    description: "The baseline examination specified by SEBI for Registration as an Investment Adviser (RIA) or associated persons offering investment advisory services.",
    shortSummary: "Covers personal financial planning, risk profiling, asset allocation, insurance planning, retirement calculations, and code of conduct.",
    features: [
      "8 Full Simulation Mocks designed by practicing RIAs",
      "Comprehensive coverage of Personal Finance calculations",
      "Retirement corpus and Education goal planning formulas",
      "SEBI IA Regulations compliance case studies",
      "Detailed answer rationales for all 1,400 questions"
    ],
    targetAudience: "Registered Investment Advisers (RIAs), Private Wealth Bankers, CFP aspirants, Independent Financial Planners.",
    validityOptions: [
      { days: 30, price: 699, originalPrice: 1699, popular: false },
      { days: 90, price: 949, originalPrice: 2499, popular: true, savings: "62% OFF" },
      { days: 180, price: 1399, originalPrice: 3499, popular: false }
    ],
    syllabus: [
      { chapter: 1, title: "Personal Financial Planning Process & Life Cycle", weightage: "10%", questions: 10 },
      { chapter: 2, title: "Time Value of Money & Financial Math", weightage: "12%", questions: 12 },
      { chapter: 3, title: "Indian Financial System & Regulatory Framework", weightage: "10%", questions: 10 },
      { chapter: 4, title: "Investment Products: Equity, Debt & Alternates", weightage: "18%", questions: 18 },
      { chapter: 5, title: "Risk Profiling, Asset Allocation & Portfolio Construction", weightage: "15%", questions: 15 },
      { chapter: 6, title: "Insurance Planning & Risk Management", weightage: "10%", questions: 10 },
      { chapter: 7, title: "Retirement Planning & Pension Products", weightage: "12%", questions: 12 },
      { chapter: 8, title: "Tax Planning & Estate Planning Basics", weightage: "8%", questions: 8 },
      { chapter: 9, title: "Regulatory Environment & SEBI RIA Regulations", weightage: "5%", questions: 5 }
    ],
    faculty: {
      name: "Rohit Bansal, CFP",
      role: "SEBI Registered Investment Adviser",
      experience: "15+ Years in Fee-Only Wealth Advisory",
      studentsTrained: "8,900+"
    }
  },
  {
    id: "nism-series-xxi-a-pms-distributors",
    code: "NISM Series XXI-A",
    title: "Portfolio Management Services (PMS) Certification",
    category: "wealth-pms",
    badge: "HNW Focus",
    isBestSeller: false,
    rating: 4.8,
    reviewsCount: 1120,
    enrolledCount: 7800,
    passRate: "97.1%",
    questionsCount: 1100,
    fullMocksCount: 8,
    chapterTestsCount: 12,
    durationMinutes: 120,
    totalMarks: 100,
    passingMarks: 60,
    negativeMarking: "0.25 (25%)",
    regularPrice: 1599,
    discountedPrice: 649,
    description: "SEBI mandated certification for distributor personnel and sales representatives marketing Portfolio Management Services to high net worth clients in India.",
    shortSummary: "Detailed questions on PMS regulations, discretionary vs non-discretionary PMS, fee structures (hurdle rates, high water mark), and performance attribution.",
    features: [
      "8 Full Mock Tests on latest PMS guidelines",
      "Calculations on High Water Mark & Performance fees",
      "Client onboarding disclosures & SEBI compliance",
      "Portfolio performance attribution models (Sharpe, Treynor, Alpha)"
    ],
    targetAudience: "PMS distributors, Wealth management executives, Family office advisers, Private bankers.",
    validityOptions: [
      { days: 30, price: 649, originalPrice: 1599, popular: false },
      { days: 90, price: 899, originalPrice: 2299, popular: true }
    ],
    syllabus: [
      { chapter: 1, title: "Investments & Indian Securities Market", weightage: "8%", questions: 8 },
      { chapter: 2, title: "Types of Securities & Valuation Approaches", weightage: "10%", questions: 10 },
      { chapter: 3, title: "PMS Architecture: Structure & Operational Framework", weightage: "15%", questions: 15 },
      { chapter: 4, title: "PMS Regulations & Statutory Disclosures", weightage: "15%", questions: 15 },
      { chapter: 5, title: "Investment Approaches & Portfolio Construction", weightage: "18%", questions: 18 },
      { chapter: 6, title: "Performance Measurement & Evaluation Metrics", weightage: "18%", questions: 18 },
      { chapter: 7, title: "Taxation, Accounting & Reporting in PMS", weightage: "10%", questions: 10 },
      { chapter: 8, title: "Ethics, Compliance & Client Grievance Redressal", weightage: "6%", questions: 6 }
    ],
    faculty: {
      name: "Siddharth Merchant",
      role: "Director of Wealth Advisory & Ex-Kotak PMS",
      experience: "19+ Years in HNW Portfolio Architecture",
      studentsTrained: "6,200+"
    }
  },
  {
    id: "nism-series-i-currency-derivatives",
    code: "NISM Series I",
    title: "Currency Derivatives Certification Examination",
    category: "derivatives",
    badge: "Forex Trading",
    isBestSeller: false,
    rating: 4.7,
    reviewsCount: 980,
    enrolledCount: 6500,
    passRate: "97.5%",
    questionsCount: 1150,
    fullMocksCount: 8,
    chapterTestsCount: 12,
    durationMinutes: 120,
    totalMarks: 100,
    passingMarks: 60,
    negativeMarking: "0.25 (25%)",
    regularPrice: 1399,
    discountedPrice: 499,
    description: "The baseline examination mandated by SEBI for all approved users and sales personnel of trading members in the currency derivatives segment.",
    shortSummary: "FX spot rates, Interest Rate Parity, RBI-SEBI regulatory regime, Currency Futures & Options trading, and Cross-currency hedging.",
    features: [
      "8 Full Length Mocks on Currency Pairs (USD/INR, EUR/INR, GBP/INR, JPY/INR)",
      "Hedging calculations for importers and exporters",
      "RBI guidelines on OTC vs Exchange Traded Currency derivatives",
      "Detailed answer rationales for numerical problems"
    ],
    targetAudience: "Currency Desk Dealers, Treasury Executives, Forex Brokers, Corporate Hedging Managers.",
    validityOptions: [
      { days: 30, price: 499, originalPrice: 1399, popular: false },
      { days: 90, price: 699, originalPrice: 1899, popular: true }
    ],
    syllabus: [
      { chapter: 1, title: "Introduction to Currency Markets & Exchange Rates", weightage: "12%", questions: 12 },
      { chapter: 2, title: "Foreign Exchange Derivatives & Quotation Conventions", weightage: "14%", questions: 14 },
      { chapter: 3, title: "Exchange Traded Currency Futures & Contracts", weightage: "16%", questions: 16 },
      { chapter: 4, title: "Strategies Using Currency Futures", weightage: "16%", questions: 16 },
      { chapter: 5, title: "Trading, Clearing, Settlement & Risk Management", weightage: "15%", questions: 15 },
      { chapter: 6, title: "Regulatory Framework for Currency Derivatives", weightage: "15%", questions: 15 },
      { chapter: 7, title: "Accounting & Taxation of FX Contracts", weightage: "12%", questions: 12 }
    ],
    faculty: {
      name: "Harish Venkataraman",
      role: "Ex-Chief Forex Dealer, Standard Chartered",
      experience: "22+ Years in Treasury & FX Risk",
      studentsTrained: "5,400+"
    }
  },
  {
    id: "irdai-ic38-insurance-agents",
    code: "IRDAI IC-38",
    title: "Corporate & Individual Insurance Agents Certification",
    category: "banking-insurance",
    badge: "Insurance Mandate",
    isBestSeller: true,
    rating: 4.8,
    reviewsCount: 3120,
    enrolledCount: 22400,
    passRate: "99.1%",
    questionsCount: 1300,
    fullMocksCount: 10,
    chapterTestsCount: 15,
    durationMinutes: 60,
    totalMarks: 50,
    passingMarks: 18,
    negativeMarking: "None (0%)",
    regularPrice: 999,
    discountedPrice: 399,
    description: "The official examination conducted for licensing life, general, and health insurance agents under Insurance Regulatory and Development Authority of India.",
    shortSummary: "Comprehensive question bank covering Life Insurance, General Insurance, Health Insurance, Underwriting, Claim Settlement, and Insurance Ombudsman regulations.",
    features: [
      "10 Full-length mock tests matching Insurance Institute of India pattern",
      "Available in English and Hindi question banks",
      "Important principles: Utmost Good Faith, Insurable Interest, Indemnity",
      "Claim settlement and Ombudsman grievance case studies",
      "100% Pass Assurance"
    ],
    targetAudience: "Life Insurance Agents, Health Insurance Advisors, Bank Insurance Point of Sale Persons (POSP).",
    validityOptions: [
      { days: 30, price: 399, originalPrice: 999, popular: true },
      { days: 90, price: 549, originalPrice: 1499, popular: false }
    ],
    syllabus: [
      { chapter: 1, title: "Introduction to Insurance & Risk Concepts", weightage: "15%", questions: 8 },
      { chapter: 2, title: "Customer Service & Ethics in Insurance", weightage: "15%", questions: 8 },
      { chapter: 3, title: "Insurance Legal Principles & Insurable Interest", weightage: "20%", questions: 10 },
      { chapter: 4, title: "Life & Health Insurance Products", weightage: "25%", questions: 12 },
      { chapter: 5, title: "Underwriting & Claim Settlement Procedures", weightage: "15%", questions: 7 },
      { chapter: 6, title: "Regulatory Environment & Grievance Redressal", weightage: "10%", questions: 5 }
    ],
    faculty: {
      name: "Sunil Narayanan",
      role: "Ex-Branch Head LIC & Insurance Trainer",
      experience: "25+ Years in Insurance Distribution",
      studentsTrained: "24,000+"
    }
  },
  {
    id: "nism-series-ix-merchant-banking",
    code: "NISM Series IX",
    title: "Merchant Banking Certification Examination",
    category: "research-advisory",
    badge: "Investment Banking",
    isBestSeller: false,
    rating: 4.8,
    reviewsCount: 780,
    enrolledCount: 4600,
    passRate: "96.5%",
    questionsCount: 1000,
    fullMocksCount: 7,
    chapterTestsCount: 11,
    durationMinutes: 120,
    totalMarks: 100,
    passingMarks: 60,
    negativeMarking: "0.25 (25%)",
    regularPrice: 1699,
    discountedPrice: 699,
    description: "SEBI mandated examination for approved users and key personnel of registered Merchant Bankers working in Issue Management, IPOs, Mergers & Acquisitions.",
    shortSummary: "IPO book building mechanics, SEBI ICDR regulations, Takeover Code, Buybacks, Rights Issues, and Due Diligence practices.",
    features: [
      "7 Full-length simulation mock tests",
      "Rigorous drills on SEBI ICDR and LODR regulations",
      "Mergers, Acquisitions, Delisting and Buyback provisions",
      "Explanations verified by senior investment banking counsel"
    ],
    targetAudience: "Investment Bankers, Merchant Banking Compliance Officers, Corporate Finance Executives, Law Graduates.",
    validityOptions: [
      { days: 30, price: 699, originalPrice: 1699, popular: false },
      { days: 90, price: 949, originalPrice: 2499, popular: true }
    ],
    syllabus: [
      { chapter: 1, title: "Introduction to Indian Capital Market & Merchant Banking", weightage: "8%", questions: 8 },
      { chapter: 2, title: "Initial Public Offers (IPO) & Public Offer Process", weightage: "20%", questions: 20 },
      { chapter: 3, title: "Rights Issue, Bonus Issue & Preferential Allotment", weightage: "12%", questions: 12 },
      { chapter: 4, title: "Qualified Institutions Placement (QIP) & Institutional Placement", weightage: "10%", questions: 10 },
      { chapter: 5, title: "SEBI (Substantial Acquisition of Shares & Takeovers) Regs", weightage: "15%", questions: 15 },
      { chapter: 6, title: "Buyback of Securities & Delisting of Equity Shares", weightage: "15%", questions: 15 },
      { chapter: 7, title: "General Obligations & Due Diligence Standards", weightage: "20%", questions: 20 }
    ],
    faculty: {
      name: "Aditya Khurana, LLM",
      role: "Capital Markets Partner & Ex-SEBI Legal Counsel",
      experience: "17+ Years in ECM & Securities Law",
      studentsTrained: "4,100+"
    }
  }
];

export const sampleMockQuestions = [
  {
    id: 1,
    chapter: "Chapter 6: Net Asset Value (NAV), Total Expense Ratio & Pricing",
    question: "A mutual fund scheme has total assets valued at ₹1,250 Crores and total liabilities of ₹50 Crores. If the total number of outstanding units is 80 Crores, what is the Net Asset Value (NAV) per unit?",
    options: [
      "₹15.00",
      "₹15.625",
      "₹14.375",
      "₹16.25"
    ],
    correctIndex: 0,
    marks: 1.0,
    negativeMarks: 0.25,
    explanation: "Net Asset Value (NAV) = (Total Market Value of Assets - Liabilities) / Number of Outstanding Units.\n\nNAV = (₹1,250 Cr - ₹50 Cr) / 80 Cr units\nNAV = ₹1,200 Cr / 80 Cr = ₹15.00 per unit.",
    reference: "NISM Workbook Series V-A, Chapter 6: Scheme Valuation and Operations",
    difficulty: "Medium"
  },
  {
    id: 2,
    chapter: "Chapter 3: Legal & Regulatory Framework",
    question: "Under SEBI (Mutual Funds) Regulations, who among the following is legally responsible for holding the assets of the mutual fund scheme in safe custody for the benefit of the unit holders?",
    options: [
      "The Asset Management Company (AMC)",
      "The Board of Trustees / Trustee Company",
      "The Custodian",
      "The Registrar & Transfer Agent (RTA)"
    ],
    correctIndex: 2,
    marks: 1.0,
    negativeMarks: 0.25,
    explanation: "Under SEBI Regulations, the Custodian holds the securities and assets of the mutual fund in safe custody. The Custodian is registered with SEBI and is independent of the sponsor and trustees.",
    reference: "NISM Workbook Series V-A, Chapter 3: Role of Custodian and Trustees",
    difficulty: "Easy"
  },
  {
    id: 3,
    chapter: "Chapter 7: Taxation on Mutual Fund Units",
    question: "According to current Indian tax laws, what is the holding period required for units of an Equity-Oriented Mutual Fund to qualify as Long-Term Capital Assets (LTCG)?",
    options: [
      "More than 12 months (1 year)",
      "More than 24 months (2 years)",
      "More than 36 months (3 years)",
      "More than 6 months"
    ],
    correctIndex: 0,
    marks: 1.0,
    negativeMarks: 0.25,
    explanation: "For Equity-Oriented Mutual Fund schemes (where minimum 65% of total proceeds are invested in equity shares of domestic companies), the holding period required to qualify for Long-Term Capital Gains (LTCG) is more than 12 months.",
    reference: "NISM Series V-A Workbook, Chapter 7: Taxation of Mutual Funds",
    difficulty: "Easy"
  },
  {
    id: 4,
    chapter: "Chapter 9: Risk, Return & Performance",
    question: "Which of the following risk-adjusted performance measures calculates the excess return of a fund per unit of total risk (measured by Standard Deviation)?",
    options: [
      "Treynor Ratio",
      "Sharpe Ratio",
      "Jensen's Alpha",
      "Information Ratio"
    ],
    correctIndex: 1,
    marks: 1.0,
    negativeMarks: 0.25,
    explanation: "Sharpe Ratio = (Return of Portfolio - Risk Free Rate) / Standard Deviation. It evaluates excess return generated per unit of TOTAL risk. In contrast, Treynor Ratio measures excess return per unit of SYSTEMATIC risk (Beta).",
    reference: "NISM Series V-A, Chapter 9: Evaluation of Fund Performance",
    difficulty: "Medium"
  },
  {
    id: 5,
    chapter: "Chapter 4: Scheme Related Documents",
    question: "Which statutory document contains detailed operational information that does not change frequently, such as constitutional details of the AMC, key personnel biographies, and associate relationships?",
    options: [
      "Scheme Information Document (SID)",
      "Key Information Memorandum (KIM)",
      "Statement of Additional Information (SAI)",
      "Fund Fact Sheet"
    ],
    correctIndex: 2,
    marks: 1.0,
    negativeMarks: 0.25,
    explanation: "The Statement of Additional Information (SAI) contains statutory information regarding the Mutual Fund, AMC, Trustees, sponsors, and key personnel. The SID contains scheme-specific details, and KIM is the abridged summary attached to application forms.",
    reference: "NISM Series V-A, Chapter 4: Legal & Offer Documents",
    difficulty: "Medium"
  },
  {
    id: 6,
    chapter: "Chapter 2: Concept of Mutual Funds",
    question: "An investor purchases units under the 'Direct Plan' rather than the 'Regular Plan' of an equity mutual fund scheme. How does this decision impact the Total Expense Ratio (TER) and Net Asset Value (NAV)?",
    options: [
      "Direct plan has lower TER and therefore higher NAV over time",
      "Direct plan has higher TER and therefore lower NAV over time",
      "Both plans maintain identical TER and NAV",
      "Direct plan has higher TER but provides higher guaranteed dividend"
    ],
    correctIndex: 0,
    marks: 1.0,
    negativeMarks: 0.25,
    explanation: "Direct Plans do not involve intermediary distributor commissions. Therefore, the Total Expense Ratio (TER) of the Direct Plan is lower than that of the Regular Plan. As lower expenses are deducted from fund assets, the NAV of the Direct Plan compounds to a higher figure over time.",
    reference: "NISM Series V-A, Chapter 2: Direct vs Regular Schemes",
    difficulty: "Easy"
  },
  {
    id: 7,
    chapter: "Chapter 8: Investor Services",
    question: "What is the maximum timeline prescribed by SEBI within which an AMC must dispatch dividend proceeds or redemption payouts to unitholders under normal circumstances?",
    options: [
      "Within 3 working days for redemption, and within 7 working days for dividend",
      "Within 10 working days for both",
      "Within 30 calendar days",
      "Within 1 working day"
    ],
    correctIndex: 0,
    marks: 1.0,
    negativeMarks: 0.25,
    explanation: "As per updated SEBI guidelines, redemption payouts must be transferred within 3 working days (for most equity schemes, T+2 for redemption transfer), and dividend warrants/credits within 7 working days from the record date.",
    reference: "NISM Series V-A, Chapter 8: Operational Guidelines & Turnaround Times",
    difficulty: "Medium"
  },
  {
    id: 8,
    chapter: "Chapter 10: Scheme Selection",
    question: "A conservative retiree client with zero risk tolerance requires monthly cash flow to meet medical expenses. Which of the following mutual fund schemes is most suitable?",
    options: [
      "Mid Cap Growth Equity Scheme",
      "Arbitrage Fund or Conservative Hybrid Fund with SWP",
      "Sectoral Infrastructure Thematic Scheme",
      "Small Cap Index Fund"
    ],
    correctIndex: 1,
    marks: 1.0,
    negativeMarks: 0.25,
    explanation: "For a conservative investor needing regular liquidity with capital protection, an Arbitrage Fund or Conservative Hybrid Fund paired with a Systematic Withdrawal Plan (SWP) provides predictable cash flows with very low equity volatility and high tax efficiency.",
    reference: "NISM Series V-A, Chapter 10: Suitability and Financial Planning",
    difficulty: "Easy"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Pooja Deshmukh",
    role: "Relationship Manager, ICICI Bank",
    exam: "NISM Series V-A: Mutual Fund Distributors",
    score: "92 / 100",
    passedDate: "February 2026",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    comment: "I had only 6 days to prepare while managing a 9-to-6 banking job. The 10 mock tests on ClearAllExams were remarkably close to the actual NISM test center interface. At least 60% of the numerical questions had almost identical patterns. Passed with 92% in my very first attempt!",
    verified: true
  },
  {
    id: 2,
    name: "Karan Singhania",
    role: "Equity Derivatives Dealer, Zerodha Partner",
    exam: "NISM Series VIII: Equity Derivatives",
    score: "86 / 100",
    passedDate: "January 2026",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    comment: "Negative marking in Series VIII makes it tricky. ClearAllExams' test simulator helped me develop real discipline on skipping uncertain questions. The detailed explanations for Option Greeks and SPAN margins are ten times clearer than the static workbook.",
    verified: true
  },
  {
    id: 3,
    name: "Meera Subramanian",
    role: "Research Associate, Motilal Oswal",
    exam: "NISM Series XV: Research Analyst",
    score: "88 / 100",
    passedDate: "March 2026",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    comment: "The financial ratio and DCF numericals in the research analyst exam are notoriously lengthy. ClearAllExams' chapter drills broke down every valuation metric. Highly recommend their pass assurance guarantee—though you won't need the refund because you will clear it easily!",
    verified: true
  },
  {
    id: 4,
    name: "Amitav Roy",
    role: "Independent Financial Adviser (IFA)",
    exam: "NISM Series X-A: Investment Adviser",
    score: "81 / 100",
    passedDate: "January 2026",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    comment: "Investment Adviser Level 1 has a high failure rate in the industry. ClearAllExams mock tests with realistic timer and question palette conditioned me for the 2-hour pressure. Worth every single rupee.",
    verified: true
  }
];

export const freeStudyMaterials = [
  {
    id: 1,
    title: "NISM Series V-A Formula Cheat Sheet (2026 Updated)",
    category: "Formula Sheets",
    exam: "NISM Series V-A",
    downloads: "18,420+",
    pages: "8 Pages PDF",
    description: "Contains all crucial mathematical formulas: NAV, Expense Ratio, Holding Period Return, CAGR, Sharpe & Treynor Ratios, and Capital Gain calculations in a crisp 1-pager summary.",
    badge: "Most Downloaded"
  },
  {
    id: 2,
    title: "NISM Series VIII Option Greeks & Payoff Matrix",
    category: "Revision Capsule",
    exam: "NISM Series VIII",
    downloads: "14,180+",
    pages: "12 Pages PDF",
    description: "Visual breakdown of Bull Spreads, Bear Spreads, Straddles, Strangles, Delta, Gamma, Theta, Vega and margin calculation shortcuts.",
    badge: "Essential"
  },
  {
    id: 3,
    title: "NISM Series XV Key Valuation Formulas & DuPont Analysis",
    category: "Cheat Sheet",
    exam: "NISM Series XV",
    downloads: "11,890+",
    pages: "10 Pages PDF",
    description: "Quick reference guide to 3-step and 5-step DuPont decomposition, Free Cash Flow to Firm (FCFF), FCFE, Enterprise Value and Relative Multiples.",
    badge: "High Yield"
  },
  {
    id: 4,
    title: "IRDAI IC-38 Last-Minute 100 Memory-Based Q&A Capsule",
    category: "Memory Archive",
    exam: "IRDAI IC-38",
    downloads: "16,200+",
    pages: "16 Pages PDF",
    description: "High-probability questions repeated across recent IRDAI examination test sessions with bilingual explanations.",
    badge: "Guaranteed Hit"
  }
];

export const liveClassesSchedule = [
  {
    id: 1,
    title: "NISM Series V-A: Complete 2-Day Weekend Fast-Track Marathon",
    instructor: "Rajeshwar Sengupta (Ex-VP HDFC AMC)",
    date: "This Saturday & Sunday (10:00 AM - 2:00 PM)",
    seatsLeft: 14,
    totalHours: "8 Hours Intensive",
    enrolledCount: 186,
    tags: ["Live Q&A", "Formula Drills", "Case Studies"]
  },
  {
    id: 2,
    title: "NISM Series VIII: Master Derivatives Numericals & Option Greeks",
    instructor: "Vivek Kulkarni, CFA",
    date: "Next Wednesday & Thursday (7:00 PM - 9:30 PM)",
    seatsLeft: 8,
    totalHours: "5 Hours Live",
    enrolledCount: 142,
    tags: ["Numerical Focus", "Option Strategies", "Exam Shortcuts"]
  },
  {
    id: 3,
    title: "NISM Series XV: Financial Statement & Valuation Masterclass",
    instructor: "Dr. Ananya Mathur",
    date: "Next Saturday (11:00 AM - 4:00 PM)",
    seatsLeft: 19,
    totalHours: "5 Hours Live",
    enrolledCount: 95,
    tags: ["Balance Sheet Analysis", "DCF Models", "SEBI Regulations"]
  }
];

export const faqs = [
  {
    question: "Are ClearAllExams mock tests updated for the latest 2026 NISM curriculum?",
    answer: "Yes, 100%. Our academic faculty and certified financial experts continuously review updates from NISM, SEBI, and IRDAI. Whenever a new workbook edition or regulatory change (such as amended taxation rules or updated capital adequacy ratios) is announced, our question bank is immediately revised with corresponding explanations."
  },
  {
    question: "How close is the ClearAllExams test simulator to the actual NISM exam?",
    answer: "Our exam simulator is custom-engineered to mirror the exact Prometric / TCS iON test delivery engine used by NISM test centers across India. You will experience identical question palettes, section timers, review flags, positive/negative marking calculations, and split-screen layouts, eliminating any test-day anxiety."
  },
  {
    question: "What is the ClearAllExams 100% Pass Assurance Guarantee policy?",
    answer: "We stand behind our preparation materials with absolute confidence. If you complete at least 85% of the mock tests in your purchased series and score an average of 70% or higher, yet unfortunately do not clear the official NISM certification on your scheduled attempt, we will provide you with a 100% unconditional refund or extend your portal access for 6 months free of charge."
  },
  {
    question: "Is there negative marking in NISM examinations?",
    answer: "For most core NISM examinations—including NISM Series V-A (Mutual Funds), NISM Series VIII (Equity Derivatives), NISM Series XV (Research Analyst), and NISM Series X-A (Investment Adviser)—there is negative marking of 25% (0.25 marks deducted for each wrong 1-mark question). Our simulator strictly applies this rule and provides dedicated analytics showing how many marks you gained vs lost to negative marking."
  },
  {
    question: "Can I access the mock tests and notes on my mobile phone or tablet?",
    answer: "Yes! ClearAllExams is fully responsive and optimized for mobile devices, tablets, laptops, and desktop computers. You can take chapter tests, review flashcards, and solve mock exams on your smartphone anytime, anywhere."
  },
  {
    question: "Can I retake the mock tests multiple times?",
    answer: "Yes. All full-length mock tests and chapter quizzes can be re-attempted unlimited times during your active subscription period. Your historical attempt scores, accuracy trends, and time-taken analytics are saved in your student dashboard for easy comparison."
  }
];
