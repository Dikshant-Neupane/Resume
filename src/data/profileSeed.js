export const PROFILE = {
  name: 'Dikshant Neupane',
  title: 'AI Practitioner & BSc. CSIT Student',
  location: 'Kathmandu, Nepal',
  email: 'dikshantneupane690@gmail.com',
  phone: '+977 9803391656',
  linkedin: 'https://www.linkedin.com/in/dikshant-neupane-a64b09326/',
  github: 'https://github.com/Dikshant-Neupane',
  bio: 'Self-driven AI practitioner focused on machine learning, scientific computing, and algorithmic problem-solving. Builds systems that combine mathematical rigor with real-world impact, from chaos theory simulations to political data analysis and full-stack social platforms.',
  tagline: 'Turning mathematical ideas into working systems.',
}

export const SKILLS = {
  languages: ['Python', 'TypeScript', 'JavaScript', 'C', 'C++', 'Rust'],
  data_ml: ['pandas', 'NumPy', 'scikit-learn', 'Data Wrangling'],
  visualization: ['Matplotlib', 'Seaborn'],
  scientific: ['SciPy', 'Numerical Methods', 'Nonlinear Dynamics', 'ODE Solvers'],
  ai: ['Autonomous Agents', 'Regression', 'EDA', 'Feature Engineering', 'Cross Validation', 'Prompt Engineering'],
  tools: ['Git', 'GitHub', 'VS Code', 'Linux', 'Bash', 'Jupyter Notebook'],
}

export const PROJECTS = [
  // --- Featured AI & Agents ---
  {
    id: 'truva-agent',
    title: 'Truva Agent',
    category: 'AI & Agents',
    description: 'Autonomous AI agent system built around the principle “Trust is a gate, not a guess.” Collaborative initiative focused on verifiable agent actions.',
    tech: ['Python', 'AI Agents', 'Verification', 'Collaborative'],
    highlights: [
      'Engineered gate-based trust and execution workflows for agent autonomy.',
      'Designed verifiable decision pipelines to prevent hallucinations and unverified actions.',
      'Public collaborative open-source repository.',
    ],
    github: 'https://github.com/Dikshant-Neupane/Truva_agent',
    selected: true,
    featured: true,
  },
  {
    id: 'chaos-laboratory',
    title: 'Chaos Laboratory',
    category: 'Scientific & Algorithms',
    description: 'Python simulation library for exploring nonlinear dynamical systems and deterministic chaos theory.',
    tech: ['Python', 'SciPy', 'Matplotlib', 'Numerical Methods'],
    highlights: [
      'Simulated Lorenz, Logistic Map, and Rössler attractors with Runge-Kutta ODE solvers.',
      'Visualized multi-dimensional phase-space trajectories and bifurcation maps.',
      'Demonstrated butterfly effect through high-precision sensitivity analysis.',
    ],
    github: 'https://github.com/Dikshant-Neupane/Chaos_laboratory',
    selected: true,
    featured: true,
  },
  {
    id: 'election-analysis',
    title: 'Nepal Election 2082 Analysis',
    category: 'Machine Learning & Data',
    description: 'Multi-factor political data analysis and predictive modeling combining statistics, ML, and visualization.',
    tech: ['Python', 'pandas', 'scikit-learn', 'Matplotlib', 'Statistical Tests'],
    highlights: [
      'Cleaned and analyzed 9 relational datasets across parliamentary constituencies.',
      'Applied Mann-Whitney and Spearman correlation statistical tests.',
      'Built Random Forest predictive model with feature importance rankings.',
    ],
    github: 'https://github.com/Dikshant-Neupane/Election-2082',
    selected: true,
    featured: true,
  },
  {
    id: 'arbitrage-tool',
    title: 'Arbitrage Detection Tool',
    category: 'Scientific & Algorithms',
    description: 'Graph-based algorithm system detecting cross-market financial arbitrage opportunities.',
    tech: ['Python', 'Graph Algorithms', 'Bellman-Ford'],
    highlights: [
      'Modeled multi-currency exchange rates as directed weighted graphs.',
      'Utilized Bellman-Ford negative cycle detection algorithm to identify profitable arbitrage loops.',
      'Optimized path execution calculations under real-time simulated order books.',
    ],
    github: 'https://github.com/Dikshant-Neupane/Arbitrage',
    selected: true,
    featured: true,
  },
  {
    id: 'house-price-prediction',
    title: 'House Price Prediction Pipeline',
    category: 'Machine Learning & Data',
    description: 'End-to-end regression pipeline predicting real estate pricing with robust feature engineering.',
    tech: ['Python', 'scikit-learn', 'pandas', 'Seaborn'],
    highlights: [
      'Evaluated Multiple Linear Regression, Decision Trees, and Gradient Boosting algorithms.',
      'Extensive preprocessing: imputation, target-encoding, and log transformations.',
      'Benchmarked performance using MAE, RMSE, and residual diagnostics.',
    ],
    github: 'https://github.com/Dikshant-Neupane/House_price_prediction',
    selected: false,
    featured: false,
  },
  {
    id: 'sahayog-fund',
    title: 'Sahayog Fund',
    category: 'Web & Full Stack',
    description: 'Community crowdfunding platform facilitating grassroots social impact and transparent fundraising in Nepal.',
    tech: ['TypeScript', 'Full Stack', 'REST API', 'Tailwind CSS'],
    highlights: [
      'Implemented secure user authentication and campaign donation tracking dashboard.',
      'Built responsive UI with type-safe schema validation across client and server.',
    ],
    github: 'https://github.com/Dikshant-Neupane/sahayog-fund',
    selected: false,
    featured: false,
  },

  // --- Machine Learning & Data ---
  {
    id: 'spotify-analysis',
    title: 'Spotify Data Analysis',
    category: 'Machine Learning & Data',
    description: 'Exploratory data analysis of track audio features, popularity trends, and listener clustering.',
    tech: ['Python', 'pandas', 'Seaborn', 'Matplotlib'],
    highlights: [
      'Extracted audio features (danceability, valence, energy) for genre trend insights.',
      'Generated correlation matrices and clustering visualizations.',
    ],
    github: 'https://github.com/Dikshant-Neupane/Spotify_ananlysis',
    featured: false,
  },
  {
    id: 'nft-analysis',
    title: 'NFT Market Analytics',
    category: 'Machine Learning & Data',
    description: 'Empirical data analysis of NFT transaction volume, floor price fluctuations, and market velocity.',
    tech: ['Python', 'pandas', 'Data Wrangling'],
    highlights: [
      'Cleaned large transaction logs to extract collection liquidity patterns.',
    ],
    github: 'https://github.com/Dikshant-Neupane/Nft_anallysis',
    featured: false,
  },
  {
    id: 'cric-data',
    title: 'CricData & CricNepal',
    category: 'Machine Learning & Data',
    description: 'Cricket sports analytics engine parsing player statistics and match outcomes.',
    tech: ['Python', 'pandas', 'Scraping'],
    highlights: [
      'Aggregated ball-by-ball and tournament statistics for performance metrics.',
    ],
    github: 'https://github.com/Dikshant-Neupane/Cric_Data',
    featured: false,
  },
  {
    id: 'numerical-methods-practical',
    title: 'Numerical Methods Practical Suite',
    category: 'Machine Learning & Data',
    description: 'Computational implementations of core numerical algorithms for roots, interpolation, and integration.',
    tech: ['C', 'C++', 'Python', 'Numerical Analysis'],
    highlights: [
      'Bisection, Newton-Raphson, Gauss-Jordan, and Simpson numerical methods.',
    ],
    github: 'https://github.com/Dikshant-Neupane/Numerical_method_practical',
    featured: false,
  },
  {
    id: 'first-ds',
    title: 'Data Science Explorations',
    category: 'Machine Learning & Data',
    description: 'Jupyter notebook repository for structured statistical experiments and EDA fundamentals.',
    tech: ['Python', 'Jupyter', 'pandas', 'NumPy'],
    highlights: [
      'Foundational data cleaning, hypothesis testing, and distributions.',
    ],
    github: 'https://github.com/Dikshant-Neupane/First_DS',
    featured: false,
  },

  // --- Python & Systems ---
  {
    id: 'contextcore',
    title: 'ContextCore',
    category: 'Systems & Core CS',
    description: 'Modular context and memory management pipeline designed for AI model integrations.',
    tech: ['Python', 'Context Processing', 'Architecture'],
    highlights: [
      'Engineered structured context windowing and state persistence.',
    ],
    github: 'https://github.com/Dikshant-Neupane/contextcore',
    featured: false,
  },
  {
    id: 'scraper-ultimate',
    title: 'Scraper Ultimate',
    category: 'Scientific & Algorithms',
    description: 'Robust asynchronous web crawler and structured data extraction toolkit.',
    tech: ['Python', 'Scraping', 'BeautifulSoup', 'Requests'],
    highlights: [
      'Handled pagination, rate-limiting, and structured JSON export.',
    ],
    github: 'https://github.com/Dikshant-Neupane/Scraper_ultimate',
    featured: false,
  },
  {
    id: '100-days-challenge-python',
    title: '100 Days of Python Challenge',
    category: 'Scientific & Algorithms',
    description: 'Comprehensive repository covering 100 days of algorithmic scripting, OOP, and automation.',
    tech: ['Python', 'OOP', 'Automation', 'Algorithms'],
    highlights: [
      'Documented daily problem solving spanning CLI tools to data scripts.',
    ],
    github: 'https://github.com/Dikshant-Neupane/100_days_challenge_python',
    featured: false,
  },
  {
    id: 'gh-boost',
    title: 'gh-boost',
    category: 'Web & Full Stack',
    description: 'Developer productivity tool for automating git workflow tracking and repository activity.',
    tech: ['JavaScript', 'Node.js', 'Git CLI'],
    highlights: [
      'Automated batch commit verification and git graph utility.',
    ],
    github: 'https://github.com/Dikshant-Neupane/gh-boost',
    featured: false,
  },

  // --- Web & Full Stack / Frontend ---
  {
    id: 'ghostmark',
    title: 'Ghostmark',
    category: 'Web & Full Stack',
    description: 'Type-safe markdown editor and publishing utility with live previewing.',
    tech: ['TypeScript', 'Markdown Parser', 'Frontend'],
    highlights: [
      'AST parsing for realtime markdown formatting and rendering.',
    ],
    github: 'https://github.com/Dikshant-Neupane/ghostmark',
    featured: false,
  },
  {
    id: 'blog-yourself',
    title: 'Blog Yourself',
    category: 'Web & Full Stack',
    description: 'Lightweight client-side blogging application built in pure vanilla JavaScript.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage'],
    highlights: [
      'Zero-dependency CRUD posting engine with client state persistence.',
    ],
    github: 'https://github.com/Dikshant-Neupane/blog-yourself',
    featured: false,
  },
  {
    id: 'jana-sunuwaai',
    title: 'Jana Sunuwaai (Citizen Feedback)',
    category: 'Web & Full Stack',
    description: 'Community civic grievance and public feedback aggregation web platform.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
    highlights: [
      'Designed intuitive complaint logging and community feedback flows.',
    ],
    github: 'https://github.com/Dikshant-Neupane/Jana_Sunuwaai',
    featured: false,
  },
  {
    id: 'design-2-code',
    title: 'Design-2-Code Practice Suite',
    category: 'Web & Full Stack',
    description: 'Pixel-perfect UI implementations converting Figma wireframes to responsive web code.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    highlights: [
      'Built multi-layout responsive web components adhering to strict design specs.',
    ],
    github: 'https://github.com/Dikshant-Neupane/DESIGN-2-CODE',
    featured: false,
  },
  {
    id: 'electric-shop',
    title: 'Electric Shop E-Commerce',
    category: 'Web & Full Stack',
    description: 'Catalog and product ordering interface for electronics retail.',
    tech: ['TypeScript', 'JavaScript', 'Web UI'],
    highlights: [
      'Product categorization, shopping cart state, and order summary.',
    ],
    github: 'https://github.com/Dikshant-Neupane/Electric_shop_wesbite',
    featured: false,
  },
  {
    id: 'teaching-open-source',
    title: 'Teaching Open Source',
    category: 'Web & Full Stack',
    description: 'Curated open-source educational repository and interactive learning guides.',
    tech: ['Markdown', 'Web Guides', 'Git Workflow'],
    highlights: [
      'Step-by-step contribution guides for student developers.',
    ],
    github: 'https://github.com/Dikshant-Neupane/teaching_open_source',
    featured: false,
  },
  {
    id: 'story-game',
    title: 'Story Game Engine',
    category: 'Web & Full Stack',
    description: 'Interactive branching narrative game engine running in browser runtime.',
    tech: ['JavaScript', 'Game Loop', 'State Machine'],
    highlights: [
      'Finite state machine managing branching storylines and player choices.',
    ],
    github: 'https://github.com/Dikshant-Neupane/Story_Game',
    featured: false,
  },

  // --- Systems & Core CS ---
  {
    id: 'legacy-x',
    title: 'LegacyX Systems',
    category: 'Systems & Core CS',
    description: 'Dual TypeScript and Rust implementation exploring safe memory systems programming.',
    tech: ['Rust', 'TypeScript', 'Systems Programming'],
    highlights: [
      'Compared Rust ownership model against high-level TypeScript concurrency.',
    ],
    github: 'https://github.com/Dikshant-Neupane/legacy-x',
    featured: false,
  },
  {
    id: 'dsa-self-taught',
    title: 'DSA Master Repository',
    category: 'Systems & Core CS',
    description: 'Algorithmic implementations of fundamental data structures and competitive programming patterns.',
    tech: ['C', 'C++', 'Python', 'Algorithms', 'Data Structures'],
    highlights: [
      'Trees, Dynamic Programming, Graphs, Heaps, Sorting, and Hash Maps.',
    ],
    github: 'https://github.com/Dikshant-Neupane/DSA_Self_taught',
    featured: false,
  },
  {
    id: 'oop-fundamentals',
    title: 'C++ Object-Oriented Architecture',
    category: 'Systems & Core CS',
    description: 'Comprehensive OOP coursework covering inheritance, polymorphism, templates, and memory.',
    tech: ['C++', 'OOP', 'Templates', 'Pointers'],
    highlights: [
      'Class hierarchies, operator overloading, and exception handling.',
    ],
    github: 'https://github.com/Dikshant-Neupane/C-__OOP',
    featured: false,
  },
  {
    id: 'device-backup',
    title: 'Device Backup Utility',
    category: 'Systems & Core CS',
    description: 'Low-level file backup and directory synchronizer utility.',
    tech: ['C++', 'File I/O', 'Systems'],
    highlights: [
      'Automated recursive directory diffing and backup integrity check.',
    ],
    github: 'https://github.com/Dikshant-Neupane/Device_backup',
    featured: false,
  },
]

export const EXPERIENCE = [
  {
    id: 'samriddhi-it-club-executive',
    role: 'Executive Representative',
    organization: 'Samriddhi IT Club',
    employment_type: 'Student Organization',
    start_date: '2026-01',
    end_date: null,
    location: 'Kathmandu, Nepal',
    description: [
      'Part of the Executive Committee for tenure 82/83 representing tech student body.',
      'Organized and executed technology workshops, code bootcamps, and developer sessions.',
      'Mentored junior students on programming fundamentals and version control best practices.',
      'Spearheaded community tech initiatives to bridge academic learning and real-world engineering.',
    ],
    skills: ['Leadership', 'Event Management', 'Community Building', 'Team Collaboration'],
    featured: true,
  },
  {
    id: 'hult-prize-samriddhi-marketing-lead',
    role: 'Communication & Marketing Lead',
    organization: 'Hult Prize at Samriddhi College',
    employment_type: 'Part-time',
    start_date: '2025-07',
    end_date: null,
    duration_label: 'Jul 2025 — Present',
    location: 'Hybrid',
    description: [
      'Led outreach, technical content creation, and promotional campaigns for university startup accelerator.',
      'Leveraged AI-assisted workflows to generate high-engagement technical communication materials.',
      'Coordinated across cross-functional teams to drive student participation in social impact ventures.',
    ],
    skills: ['Communication', 'Marketing', 'Content Strategy', 'AI-Assisted Workflows'],
    featured: true,
  },
  {
    id: 'nepal-it-mavericks-pr-head',
    role: 'Head of Public Relations',
    organization: 'Nepal IT Mavericks',
    employment_type: 'Part-time',
    start_date: '2024-10',
    end_date: '2025-03',
    location: 'Hybrid',
    description: [
      'Directed institutional PR, digital branding, and developer community outreach initiatives.',
      'Managed event partnerships for hackathons, coding contests, and speaker sessions.',
      'Coordinated with industry professionals and student chapters across Nepal.',
    ],
    skills: ['Public Relations', 'Event Promotion', 'Brand Strategy', 'Team Coordination'],
    featured: true,
  },
  {
    id: 'next-coach-campus-ambassador',
    role: 'Campus Ambassador',
    organization: 'Next Coach',
    employment_type: 'Part-time',
    start_date: '2024-12',
    end_date: null,
    location: 'Remote',
    description: [
      'Represented Next Coach training initiatives across college campuses.',
      'Facilitated student onboarding for placement assistance and technical interview preparation.',
    ],
    skills: ['Brand Communication', 'Community Engagement', 'Student Outreach'],
    featured: false,
  },
]

export const ACTIVITIES = [
  {
    id: 'post-imagine-cup',
    platform: 'Microsoft',
    type: 'Competition',
    title: 'Microsoft Imagine Cup 2025',
    url: 'https://www.linkedin.com/posts/dikshant-neupane-a64b09326_imaginecup-imaginecup2025-microsoft-activity-7416488257258954752-Mu5p',
    tags: ['AI', 'Competition', 'Microsoft'],
    featured: true,
  },
  {
    id: 'post-hackathon-ai',
    platform: 'Hackathon',
    type: 'Competition',
    title: 'AI Teamwork & Hackathon Finalist',
    url: 'https://www.linkedin.com/posts/dikshant-neupane-a64b09326_hackathon-ai-teamwork-activity-7440732024409264130-mZgd',
    tags: ['AI', 'Teamwork', 'Rapid Prototyping'],
    featured: true,
  },
  {
    id: 'post-hultprize-agtech',
    platform: 'Hult Prize',
    type: 'Social Venture',
    title: 'AgTech Solutions & Social Venture',
    url: 'https://www.linkedin.com/posts/swastik-rawat-8b4a07339_hultprize-learningbydoing-agtechsolutions-ugcPost-7302879237307334656-xIeE',
    tags: ['AgTech', 'Startup', 'Hult Prize'],
    featured: true,
  },
  {
    id: 'post-nepal-it-mavericks',
    platform: 'Community',
    type: 'Initiative',
    title: 'Nepal IT Mavericks Community Initiative',
    url: 'https://www.linkedin.com/posts/dikshant-neupane-a64b09326_nepalitmavericks-empowertech-shapingtomorrow-activity-7273934960355348480-mQzb',
    tags: ['Community', 'Tech', 'Leadership'],
    featured: true,
  },
]

export function getAcademicYear() {
  const now = new Date()
  const fourthYearDate = new Date('2027-09-01')
  const graduateDate = new Date('2028-09-01')

  if (now >= graduateDate) {
    return 'Graduate'
  }
  if (now >= fourthYearDate) {
    return '4th Year'
  }
  return '3rd Year'
}

export function getAcademicStatus() {
  const year = getAcademicYear()
  return year === 'Graduate' ? 'BSc. CSIT Graduate' : `Currently in ${year}`
}

export const EDUCATION = [
  {
    degree: 'BSc. Computer Science & Information Technology (CSIT)',
    institution: 'Samriddhi College (Tribhuvan University Affiliated)',
    location: 'Kathmandu, Nepal',
    status: getAcademicStatus(),
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (C++)',
      'Numerical Methods',
      'Probability & Statistics',
      'Database Management Systems (DBMS)',
      'Software Engineering',
      'Discrete Mathematics',
    ],
  },
]

export const CURRENTLY_LEARNING = [
  'Autonomous AI Agents & Tool Calling',
  'Linear Algebra for Machine Learning',
  'Systems Programming in Rust & C',
  'Advanced Data Structures & Optimization',
]

export const STATS = {
  projects_completed: 25,
  technologies_used: 18,
  domains: ['AI & Agents', 'Machine Learning', 'Scientific Computing', 'Full Stack', 'Core Systems'],
  focus: 'Applied AI & Verifiable Computational Systems',
}
