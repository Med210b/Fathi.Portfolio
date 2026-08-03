import { NavLink, Service, Skill, Project, Experience, Testimonial } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    title: 'Web Design',
    description: 'Crafting visually stunning and user-centric digital experiences that captivate and convert.',
    iconName: 'Palette',
  },
  {
    title: 'Web Development',
    description: 'Building high-performance, scalable web applications using the latest modern frameworks.',
    iconName: 'Code2',
  },
  {
    title: 'Mobile App Development',
    description: 'Developing intuitive, feature-rich iOS and Android applications with a focus on performance.',
    iconName: 'Smartphone',
  },
  {
    title: 'UI/UX Design',
    description: 'Designing seamless user journeys and interfaces that balance aesthetics with functionality.',
    iconName: 'Layout',
  },
  {
    title: 'Performance Optimization',
    description: 'Enhancing website speed and responsiveness for optimal user experience and SEO.',
    iconName: 'Zap',
  },
  {
    title: 'Cloud Deployment',
    description: 'Deploying and managing applications on robust cloud infrastructures for maximum uptime.',
    iconName: 'Cloud',
  },
];

export const SKILLS: Skill[] = [
  { name: 'HTML', category: 'Programming' },
  { name: 'CSS', category: 'Programming' },
  { name: 'JavaScript', category: 'Programming' },
  { name: 'TypeScript', category: 'Programming' },
  { name: 'React', category: 'Programming' },
  { name: 'Next.js', category: 'Programming' },
  { name: 'Node.js', category: 'Programming' },
  { name: 'Express', category: 'Programming' },
  { name: 'MongoDB', category: 'Programming' },
  { name: 'Firebase', category: 'Programming' },
  { name: 'PHP', category: 'Programming' },
  { name: 'Python', category: 'Programming' },
  { name: 'Figma', category: 'Design' },
  { name: 'Adobe XD', category: 'Design' },
  { name: 'Photoshop', category: 'Design' },
  { name: 'Illustrator', category: 'Design' },
];

export const PROJECTS: Project[] = [
  {
    slug: 'luxe-real-estate',
    title: 'Luxe Real Estate',
    description: 'A premium real estate platform featuring high-end properties with interactive tours.',
    category: 'Web Design',
    technology: ['React', 'Next.js', 'Tailwind'],
    imageUrl: 'https://picsum.photos/seed/realestate/800/600',
    liveUrl: '#',
    githubUrl: '#',
    caseStudy: {
      challenge: 'The primary challenge was to handle high-resolution 3D property tours without compromising on page load speed. We implemented a lazy-loading strategy for the 3D assets and used Next.js image optimization for the property galleries.',
      features: [
        'Interactive 3D Virtual Tours',
        'Advanced Property Filtering System',
        'Real-time Appointment Scheduling',
        'Agent Communication Portal'
      ]
    }
  },
  {
    slug: 'fintech-dashboard',
    title: 'Fintech Dashboard',
    description: 'A sophisticated financial management system with real-time data visualization.',
    category: 'Web Development',
    technology: ['TypeScript', 'Node.js', 'D3.js'],
    imageUrl: 'https://picsum.photos/seed/fintech/800/600',
    liveUrl: '#',
    githubUrl: '#',
    caseStudy: {
      challenge: 'Processing and visualizing large streams of real-time financial data required a highly optimized rendering engine. We used D3.js with Canvas for complex visualizations and implemented a WebSocket-based data sync layer.',
      features: [
        'Real-time Market Data Tracking',
        'Predictive Budgeting Analytics',
        'Secure Transaction History',
        'Customizable Financial Reports'
      ]
    }
  },
  {
    slug: 'health-tracker-app',
    title: 'Health Tracker App',
    description: 'An intuitive mobile application for monitoring fitness, nutrition, and sleep cycles.',
    category: 'Mobile App',
    technology: ['React Native', 'Firebase'],
    imageUrl: 'https://picsum.photos/seed/health/800/600',
    liveUrl: '#',
    githubUrl: '#',
    caseStudy: {
      challenge: 'Integrating multiple third-party health APIs while maintaining strict user privacy was the key hurdle. We built a custom aggregation layer that anonymizes data before processing and ensures HIPAA compliance.',
      features: [
        'Biometric Data Synchronization',
        'Personalized Nutrition Plans',
        'Sleep Cycle Optimization',
        'Gamified Fitness Challenges'
      ]
    }
  },
  {
    slug: 'ai-image-generator',
    title: 'Visionary AI',
    description: 'Advanced AI-powered image generation tool utilizing stable diffusion models.',
    category: 'AI Integration',
    technology: ['Next.js', 'OpenAI API', 'Python'],
    imageUrl: 'https://picsum.photos/seed/visionary/800/600',
    liveUrl: '#',
    githubUrl: '#',
    caseStudy: {
      challenge: 'Managing GPU costs and ensuring fast generation times for multiple concurrent users. We implemented a sophisticated queue system and optimized our model deployment using serverless containers.',
      features: [
        'Prompt Engineering Assistant',
        'Multi-style Image Generation',
        'Cloud-based Image Storage',
        'Collaborative Art Spaces'
      ]
    }
  },
  {
    slug: 'fashion-hub-ecommerce',
    title: 'Moda Elegance',
    description: 'High-end fashion e-commerce store with seamless checkout and AR try-on features.',
    category: 'E-commerce',
    technology: ['React', 'Shopify', 'Three.js'],
    imageUrl: 'https://picsum.photos/seed/fashion/800/600',
    liveUrl: '#',
    githubUrl: '#',
    caseStudy: {
      challenge: 'The AR try-on feature needed to work flawlessly on mobile browsers without requiring a separate app. We used WebGL and specialized computer vision libraries to achieve smooth real-time rendering.',
      features: [
        'Augmented Reality Try-on',
        'Dynamic Inventory Management',
        'Smart Recommendation Engine',
        'One-click Secure Checkout'
      ]
    }
  },
  {
    slug: 'crypto-wallet-tracker',
    title: 'CryptoPulse',
    description: 'Secure multi-chain cryptocurrency wallet tracker with live price alerts.',
    category: 'Web3 / Fintech',
    technology: ['TypeScript', 'Web3.js', 'PostgreSQL'],
    imageUrl: 'https://picsum.photos/seed/crypto/800/600',
    liveUrl: '#',
    githubUrl: '#',
    caseStudy: {
      challenge: 'Ensuring absolute accuracy and real-time syncing across multiple blockchains while maintaining low latency. We developed a proprietary indexing service that aggregates cross-chain data into a unified dashboard.',
      features: [
        'Multi-chain Asset Support',
        'Real-time Portfolio Valuation',
        'Secure Transaction Alerts',
        'Deep Analytics & Reporting'
      ]
    }
  },
  {
    slug: 'saas-analytics-pro',
    title: 'InsightPro SaaS',
    description: 'Comprehensive business analytics dashboard with automated reporting.',
    category: 'SaaS',
    technology: ['React', 'Node.js', 'Redis'],
    imageUrl: 'https://picsum.photos/seed/saas/800/600',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    slug: 'edtech-learning-portal',
    title: 'EduSphere',
    description: 'Interactive online learning platform with live classes and progress tracking.',
    category: 'EdTech',
    technology: ['Next.js', 'Socket.io', 'Mongoose'],
    imageUrl: 'https://picsum.photos/seed/education/800/600',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    slug: 'fitness-booking-system',
    title: 'FlexFit Studio',
    description: 'Modern gym and fitness studio booking system with member management.',
    category: 'Web Development',
    technology: ['React', 'Firebase', 'Stripe'],
    imageUrl: 'https://picsum.photos/seed/fitness/800/600',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    slug: 'smart-home-interface',
    title: 'HomeSync',
    description: 'Unified IoT control interface for managing smart home devices efficiently.',
    category: 'UI/UX Design',
    technology: ['Figma', 'React', 'MQTT'],
    imageUrl: 'https://picsum.photos/seed/smart/800/600',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    slug: 'recipe-explorer-app',
    title: 'GourmetGuide',
    description: 'Personalized recipe discovery app with smart grocery list integration.',
    category: 'Mobile App',
    technology: ['React Native', 'Supabase'],
    imageUrl: 'https://picsum.photos/seed/food/800/600',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    slug: 'travel-booking-portal',
    title: 'NomadJourneys',
    description: 'Full-service travel booking portal with personalized itinerary generation.',
    category: 'Web Development',
    technology: ['Next.js', 'Prisma', 'PostgreSQL'],
    imageUrl: 'https://picsum.photos/seed/travel/800/600',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    slug: 'productivity-task-board',
    title: 'TaskFlow Master',
    description: 'Agile project management tool with real-time collaboration features.',
    category: 'Productivity',
    technology: ['React', 'Tailwind', 'Firebase'],
    imageUrl: 'https://picsum.photos/seed/tasks/800/600',
    liveUrl: '#',
    githubUrl: '#',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Quantum Solutions',
    role: 'Senior Web Designer',
    description: 'Leading the design team in creating premium digital products for global tech giants.',
    year: '2023 - Present',
  },
  {
    company: 'Nexus Creative',
    role: 'UI/UX Developer',
    description: 'Spearheaded the rebranding and website overhaul for multiple Fortune 500 companies.',
    year: '2021 - 2023',
  },
  {
    company: 'Digital Horizon',
    role: 'Full-Stack Developer',
    description: 'Developed and maintained complex web applications using React and Node.js.',
    year: '2019 - 2021',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechStream',
    content: "Fathi's attention to detail and creative vision transformed our brand identity. The website is not just a tool, but a masterpiece.",
    avatarUrl: 'https://i.pravatar.cc/150?u=sarah',
    stars: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Director of Product at Innovate',
    content: 'Exceptional skill set and professional approach. Fathi delivered a high-performance application that exceeded our expectations.',
    avatarUrl: 'https://i.pravatar.cc/150?u=michael',
    stars: 5,
  },
  {
    name: 'Emma Williams',
    role: 'Founder at Artistry',
    content: 'Working with Fathi was a breeze. He understood our needs perfectly and brought our creative vision to life with elegance.',
    avatarUrl: 'https://i.pravatar.cc/150?u=emma',
    stars: 5,
  },
];

export const FAQS = [
  {
    question: "What is your typical project timeline?",
    answer: "Timelines vary based on complexity, but most web projects are completed within 4-8 weeks. I prioritize quality and thorough testing to ensure a polished final product."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Absolutely. I provide 30 days of complimentary support after launch to handle any initial adjustments. Long-term maintenance packages are also available."
  },
  {
    question: "Which technologies do you specialize in?",
    answer: "My core stack includes React, Next.js, TypeScript, and Node.js. I'm also proficient with various CSS frameworks like Tailwind and database solutions like PostgreSQL and Firebase."
  },
  {
    question: "Can you work with existing designs?",
    answer: "Yes, I frequently collaborate with designers and can bring your Figma, Adobe XD, or Sketch designs to life with pixel-perfect precision."
  }
];
