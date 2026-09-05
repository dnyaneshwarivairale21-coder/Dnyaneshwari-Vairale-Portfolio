// ─── NAVIGATION ───────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
];

// ─── PERSONAL DETAILS ─────────────────────────────────────────
export const PERSONAL_INFO = {
  name: 'Dnyaneshwari Vairale',
  tagline: 'Final-year E&TC Student at KJCOEMR (SPPU) | Software & Backend Developer',
  cgpa: '9.0',
  phone: '+91 8308407650',
  rawPhone: '8308407650',
  email: 'dnyaneshwarivairale21@gmail.com',
  location: 'Akola & Pune, Maharashtra',
  college: 'Savitribai Phule Pune University (KJCOEMR)',
  githubUrl: 'https://github.com/dnyaneshwarivairale21-coder',
  githubHandle: 'dnyaneshwarivairale21-coder',
  linkedinUrl: 'https://linkedin.com/in/dnyaneshwari-vairale-8523713a8',
  linkedinHandle: 'dnyaneshwari-vairale-8523713a8',
  summary:
    'Motivated final-year Electronics and Telecommunication engineering student at KJCOEMR (SPPU) with a 9.0 CGPA and a strong foundation in Java and Python. Actively expanding expertise in software development and backend engineering. Passionate learner eager to apply technical and problem-solving skills in a dynamic software engineering role. Possesses a solid understanding of core E&TC subjects and enjoys creative pursuits like painting and singing to naturally foster balance and creativity.',
};

// ─── SKILLS ───────────────────────────────────────────────────
export const SKILLS = [
  {
    category: 'Programming Languages',
    colorKey: 'sky',
    items: ['Java', 'Python', 'SQL (DBMS)', 'Solidity', 'JavaScript'],
  },
  {
    category: 'Technologies & Frameworks',
    colorKey: 'violet',
    items: ['React.js', 'AI / ML', 'OpenCV', 'MetaMask', 'Smart Contracts'],
  },
  {
    category: 'Developer Tools',
    colorKey: 'cyan',
    items: ['VS Code', 'Arduino IDE', 'Antigravity', 'Git & GitHub'],
  },
  {
    category: 'Relevant Coursework',
    colorKey: 'pink',
    items: ['Data Structures', 'OOPs', 'Arduino Technology', 'Artificial Intelligence'],
  },
  {
    category: 'Soft Skills & Leadership',
    colorKey: 'fuchsia',
    items: ['Problem Solving', 'Team Collaboration', 'Event Organization', 'Adaptability'],
  },
  {
    category: 'Creative Pursuits',
    colorKey: 'emerald',
    items: ['Painting', 'Singing', 'Creative Design', 'Multidisciplinary Balance'],
  },
];

// ─── PROJECTS ─────────────────────────────────────────────────
export const PROJECTS = [
  {
    title: 'BlockPay – Crypto + UPI Payment dApp',
    subtitle: 'Decentralized Hybrid Payment Application · Hackathon Project',
    accentColor: '#38bdf8',
    category: 'Web3 & Fintech',
    date: 'June 2025 (Hackathon)',
    tags: ['React.js', 'Solidity', 'MetaMask', 'Ethereum', 'UPI Integration'],
    githubUrl: 'https://github.com/demo-dnyaneshwari',
    description:
      'Built a decentralized payment app supporting both Ethereum and UPI-based transactions to facilitate seamless integrations between blockchain and real-world banking.',
    highlights: [
      'Built a decentralized payment app supporting both Ethereum and UPI-based transactions to facilitate seamless integrations.',
      'Focused fully on frontend development, designing an intuitive UI and building cross-platform responsive web components.',
      'Integrated MetaMask for wallet authentication, smart contract interaction, and real-time balance updates.',
      'Selected for next stage in the College In-House Hackathon due to strong project execution and presentation.',
    ],
  },
  {
    title: 'CO2 Emission Prediction System',
    subtitle: 'Vision-Based Smart City Traffic & Carbon Footprint Analysis',
    accentColor: '#34d399',
    category: 'AI / ML & Computer Vision',
    date: 'January 2026',
    tags: ['Python', 'AI / ML', 'OpenCV', 'Linear Regression', 'Smart City'],
    githubUrl: 'https://github.com/demo-dnyaneshwari',
    description:
      'Engineered a low-cost, scalable, and vision-based AI solution analyzing traffic video streams with OpenCV to detect moving vehicles, calculate real-time CO emissions, and predict future levels.',
    highlights: [
      'Analyzed traffic videos using OpenCV to detect moving vehicles and extract traffic features such as vehicle count over time.',
      'Used collected features to reliably calculate real-time CO emissions corresponding to standard emission factors.',
      'Trained a Linear Regression model to firmly predict future CO emissions, enabling detailed transportation carbon footprint analysis.',
      'Engineered a low-cost, scalable, and vision-based solution targeting broad traffic pollution monitoring and smart city planning.',
    ],
  },
];

// ─── WORK EXPERIENCE & LEADERSHIP ─────────────────────────────
export const EXPERIENCES = [
  {
    role: 'IEEE Student Council Member',
    company: 'IEEE Student Branch (KJCOEMR)',
    accentColor: '#38bdf8',
    status: '2025 – Present',
    type: 'Leadership & Student Governance',
    highlights: [
      'Actively participating in organizing technical events, workshops, and seminars for the student branch.',
      'Collaborating with peers and professionals to foster technical and professional development within the engineering community.',
    ],
    description:
      'Member of IEEE Student Council driving technical initiatives, coordinating academic seminars, and cultivating peer engineering growth.',
  },
  {
    role: 'College In-House Hackathon Qualifier',
    company: 'KJCOEMR Hackathon 2025',
    accentColor: '#fbbf24',
    status: 'Participant & Stage Qualifier',
    type: 'Competitive Hackathon',
    highlights: [
      'Participated in the college in-house hackathon, where we presented the BlockPay Crypto + UPI Payment dApp.',
      'Collaborated with teammates to design and develop the dApp frontend and smart contract interaction.',
      'Selected for the next stage of the competition due to strong project execution and presentation.',
    ],
    description:
      'Co-developed and showcased BlockPay, successfully qualifying for the next competitive phase.',
  },
  {
    role: 'Software & Backend Engineering Trainee',
    company: 'Academic & Practical Development',
    accentColor: '#a78bfa',
    status: 'Continuous Learning',
    type: 'Core Software Track',
    highlights: [
      'Deepening expertise in Object-Oriented Java, Python backend engineering, and SQL database management systems.',
      'Implementing scalable data structures, clean code architecture, and modern developer tooling.',
    ],
    description:
      'Focusing on backend architecture, algorithmic problem solving, and building modern software systems.',
  },
];

// ─── EDUCATION ────────────────────────────────────────────────
export const EDUCATION = [
  {
    degree: 'Bachelor of Technology in Electronics And Telecommunications',
    institution: 'Savitribai Phule Pune University (KJCOEMR), Pune, Maharashtra',
    year: 'July 2023 – August 2027',
    score: '9.0 CGPA',
    highlight: true,
    location: 'Pune, Maharashtra',
    details: 'Final-year undergraduate student at KJCOEMR (SPPU) with strong foundation in core E&TC, Java, Python, and software engineering.',
  },
];

// ─── COURSEWORK & CERTIFICATIONS ──────────────────────────────
export const RELEVANT_COURSEWORK = [
  { name: 'Data Structures', category: 'Core CS' },
  { name: 'OOPs (Object Oriented Programming)', category: 'Software Design' },
  { name: 'Arduino Technology', category: 'Embedded & Hardware' },
  { name: 'Artificial Intelligence', category: 'Modern Computing' },
];

export const CERTIFICATIONS = [
  { name: 'Data Structures & Algorithms', issuer: 'Academic Curriculum · SPPU' },
  { name: 'Object Oriented Programming in Java', issuer: 'Core Computer Science' },
  { name: 'Machine Learning & Computer Vision (OpenCV)', issuer: 'Project Specialization' },
  { name: 'Decentralized Applications & Solidity', issuer: 'Hackathon Track' },
];

// ─── ACHIEVEMENTS & LEADERSHIP ─────────────────────────────────
export const ACHIEVEMENTS = [
  {
    text: 'College In-House Hackathon 2025: Successfully presented BlockPay dApp and qualified for the next competitive round.',
    type: 'trophy',
  },
  {
    text: 'IEEE Student Council Member (2025–Present): Elected council member organizing high-impact technical seminars and workshops.',
    type: 'star',
  },
  {
    text: 'Academic Excellence: Maintained a stellar 9.0 CGPA in Electronics & Telecommunication Engineering at Savitribai Phule Pune University.',
    type: 'trophy',
  },
  {
    text: 'Creative Balance: Passionate singer and painter, integrating visual creativity with technical analytical rigor.',
    type: 'star',
  },
];

// ─── CONTACT LINKS ────────────────────────────────────────────
export const CONTACT_LINKS = [
  {
    label: 'Phone',
    value: '+91 8308407650',
    href: 'tel:8308407650',
    gradient: 'linear-gradient(135deg,#10b981,#0d9488)',
  },
  {
    label: 'Email',
    value: 'dnyaneshwarivairale21@gmail.com',
    href: 'mailto:dnyaneshwarivairale21@gmail.com',
    gradient: 'linear-gradient(135deg,#38bdf8,#2563eb)',
  },
  {
    label: 'GitHub',
    value: 'github.com/demo-dnyaneshwari',
    href: 'https://github.com/demo-dnyaneshwari',
    gradient: 'linear-gradient(135deg,#818cf8,#c084fc)',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/demo-dnyaneshwari',
    href: 'https://www.linkedin.com/in/demo-dnyaneshwari',
    gradient: 'linear-gradient(135deg,#60a5fa,#4f46e5)',
  },
];
