import { Service, Project, BlogPost, Testimonial } from './types';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Courses', path: '/services' },
  { name: 'Projects', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'delta-batch',
    title: 'Delta 5.0 (Full Stack)',
    description: 'The most comprehensive Full Stack Web Development course. Master MERN stack from basics to advanced.',
    icon: 'code',
    benefits: ['HTML, CSS, JS, React', 'Backend with Node & Mongo', 'Real-world Projects'],
    imageUrl: 'https://image.pollinations.ai/prompt/MERN%20stack%20web%20development%20code%20screens%20react%20node%20futuristic%20interface%20blue?width=800&height=600&nologo=true'
  },
  {
    id: 'alpha-batch',
    title: 'Alpha Plus (Java+DSA)',
    description: 'Master Data Structures & Algorithms in Java. The ultimate guide to cracking placement interviews.',
    icon: 'cpu',
    benefits: ['Complete Java Core', 'Advanced DSA', 'Interview Problems'],
    imageUrl: 'https://image.pollinations.ai/prompt/Java%20programming%20code%20structure%20algorithm%20binary%20tree%20hologram%20dark%20mode?width=800&height=600&nologo=true'
  },
  {
    id: 'sigma-batch',
    title: 'Sigma 4.0 (Complete)',
    description: 'The ultimate combination of DSA and Development. Prepare for FAANG and top product companies.',
    icon: 'star',
    benefits: ['DSA + Web Dev', 'System Design', 'Placement Assistance'],
    imageUrl: 'https://image.pollinations.ai/prompt/Tech%20career%20success%20software%20engineer%20job%20offer%20growth%20chart%20futuristic?width=800&height=600&nologo=true'
  },
  {
    id: 'system-design',
    title: 'System Design',
    description: 'Learn High Level (HLD) and Low Level Design (LLD) to scale applications for millions of users.',
    icon: 'palette',
    benefits: ['Scalability Patterns', 'Microservices', 'Database Design'],
    imageUrl: 'https://image.pollinations.ai/prompt/System%20design%20architecture%20cloud%20infrastructure%20microservices%20network%20diagram%203d?width=800&height=600&nologo=true'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'airbnb-clone',
    title: 'Airbnb Clone',
    category: 'Delta Batch Project',
    description: 'A fully functional full-stack clone of Airbnb using MERN stack and Tailwind CSS.',
    fullDescription: 'This project is a pixel-perfect replication of the Airbnb platform, built to demonstrate mastery of the MERN stack. It features a robust backend for handling bookings and user data, coupled with a responsive, high-performance frontend. Users can browse listings, view detailed property information, and simulate the booking process.',
    imageUrl: 'https://image.pollinations.ai/prompt/Airbnb%20website%20clone%20interface%20screenshot%20futuristic%20dark%20mode%20blue%20neon?width=800&height=600&nologo=true',
    features: [
      'User Authentication & Authorization',
      'Property Listings with Image Upload',
      'Date-based Booking System',
      'Interactive Maps Integration',
      'Review and Rating System'
    ],
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS', 'Redux'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: 'amazon-clone',
    title: 'Amazon Clone',
    category: 'Frontend Project',
    description: 'Pixel perfect e-commerce UI with cart functionality and payment integration.',
    fullDescription: 'An immersive e-commerce experience that mimics the core functionality of Amazon. This project focuses on complex state management (Redux) to handle shopping carts, user sessions, and product filtering. It integrates Stripe for payment processing simulation.',
    imageUrl: 'https://image.pollinations.ai/prompt/Amazon%20ecommerce%20website%20redesign%20interface%20cyberpunk%20style%20dark?width=800&height=600&nologo=true',
    features: [
      'Product Search & Filtering',
      'Shopping Cart Management',
      'Stripe Payment Gateway',
      'Order History',
      'Responsive Mobile Design'
    ],
    technologies: ['React', 'Firebase', 'Stripe API', 'Context API', 'CSS Modules'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: 'sorting-visualizer',
    title: 'Sorting Visualizer',
    category: 'DSA Project',
    description: 'Interactive visualization of sorting algorithms like Merge Sort, Quick Sort, and Bubble Sort.',
    fullDescription: 'A visual learning tool designed to help students understand how sorting algorithms work under the hood. It provides a real-time graphical representation of array manipulation, with adjustable speed and array size controls.',
    imageUrl: 'https://image.pollinations.ai/prompt/Sorting%20algorithm%20visualization%20graph%20bars%20glowing%20blue%20technology?width=800&height=600&nologo=true',
    features: [
      'Visualizes Merge, Quick, Heap, and Bubble Sort',
      'Speed and Array Size Controls',
      'Color-coded Comparisons and Swaps',
      'Step-by-step Execution Mode'
    ],
    technologies: ['JavaScript', 'React', 'CSS Animations', 'Algorithms'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: 'chat-application',
    title: 'Chat Application',
    category: 'Socket.io',
    description: 'Real-time messaging app with group chat features built during the backend module.',
    fullDescription: 'A real-time communication platform enabling users to chat instantly. Built with Socket.io for low-latency message delivery, it supports private messaging, group chats, and online status indicators.',
    imageUrl: 'https://image.pollinations.ai/prompt/Modern%20messaging%20chat%20app%20interface%20dark%20theme%20neon%20accents?width=800&height=600&nologo=true',
    features: [
      'Real-time Messaging (WebSocket)',
      'Group Chat Rooms',
      'Typing Indicators',
      'Message Notifications',
      'User Online/Offline Status'
    ],
    technologies: ['Node.js', 'Socket.io', 'React', 'Express', 'Chakra UI'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: 'netflix-clone',
    title: 'Netflix Clone',
    category: 'React Project',
    description: 'Streaming service interface using TMDB API for fetching movie data dynamically.',
    fullDescription: 'A sleek, dark-themed streaming interface that pulls live movie data from the TMDB API. It showcases advanced React patterns, including custom hooks for data fetching and lazy loading for performance optimization.',
    imageUrl: 'https://image.pollinations.ai/prompt/Netflix%20clone%20streaming%20interface%20movie%20thumbnails%20cinematic%20dark?width=800&height=600&nologo=true',
    features: [
      'TMDB API Integration',
      'Trailer Playback',
      'Genre Categorization',
      'My List Functionality',
      'Infinite Scroll'
    ],
    technologies: ['React', 'TMDB API', 'Axios', 'SASS', 'React Router'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    category: 'Personal Brand',
    description: 'A modern, responsive personal portfolio website to showcase student resumes.',
    fullDescription: 'A template for a professional developer portfolio. It includes sections for skills, projects, and contact information, designed with a focus on typography, whitespace, and personal branding.',
    imageUrl: 'https://image.pollinations.ai/prompt/Developer%20portfolio%20website%20on%20monitor%20coding%20setup%20neon%20lights?width=800&height=600&nologo=true',
    features: [
      'Responsive Grid Layout',
      'Dark/Light Mode Toggle',
      'Contact Form with Email Integration',
      'Project Gallery',
      'Resume Download'
    ],
    technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'EmailJS'],
    githubUrl: '#',
    liveUrl: '#'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'ai-agents-web3',
    title: 'The Rise of Autonomous AI Agents in Web3',
    category: 'AI & Web3',
    date: 'Nov 01, 2024',
    excerpt: 'How autonomous agents are changing the way we interact with blockchain technology and what it means for developers in 2025.',
    imageUrl: 'https://image.pollinations.ai/prompt/Autonomous%20AI%20agents%20neural%20network%20digital%20brain%20futuristic%20blue?width=800&height=600&nologo=true',
    content: `The intersection of Artificial Intelligence (AI) and Web3 is creating a paradigm shift in how we conceive digital autonomy. Autonomous AI agents—software programs capable of executing tasks without human intervention—are beginning to navigate the blockchain, managing wallets, executing smart contracts, and even participating in decentralized governance.

### What are Autonomous Agents?
Unlike traditional bots that follow rigid scripts, autonomous agents utilize Large Language Models (LLMs) to reason, plan, and adapt to changing environments. In the context of Web3, this means an agent can independently verify transaction data, optimize gas fees, or manage a diversified crypto portfolio based on high-level user intent rather than explicit step-by-step instructions.

### Key Use Cases
1.  **DeFi Optimization**: Agents can monitor liquidity pools across multiple chains and automatically rebalance portfolios to maximize yield while minimizing risk.
2.  **Decentralized Governance**: Instead of manually voting on every proposal, token holders can delegate their voting power to an AI agent programmed to align with their values.
3.  **Smart Contract Auditing**: specialized agents can continuously monitor deployed contracts for vulnerabilities, acting faster than any human auditor.

### The Future for Developers
For developers, this shift means moving beyond writing static smart contracts to designing dynamic "agentic workflows". Frameworks like LangChain and AutoGPT are being adapted for on-chain interactions. The developer of 2025 will need to understand not just Solidity or Rust, but also how to prompt and constrain AI agents to ensure they behave predictably in a trustless environment.

As we move forward, the collaboration between human intent and machine execution will define the next generation of the internet.`
  },
  {
    id: 'cracking-faang-2025',
    title: 'How to Crack FAANG in 2025',
    category: 'Placement',
    date: 'Oct 12, 2024',
    excerpt: 'A complete roadmap to getting placed in top product-based companies like Google and Microsoft.',
    imageUrl: 'https://image.pollinations.ai/prompt/Google%20and%20Microsoft%20futuristic%20office%20building%20tech%20campus%20night?width=800&height=400&nologo=true',
    content: `Getting into FAANG (Facebook, Amazon, Apple, Netflix, Google) or MAANG as it's often called now, remains the gold standard for many software engineers. However, the interview landscape has evolved significantly post-2023.

### 1. Data Structures & Algorithms (DSA) are still King
Despite the rise of AI, problem-solving skills remain paramount. You must be proficient in:
*   Graph Algorithms (BFS/DFS, Dijkstra)
*   Dynamic Programming (1D and 2D)
*   Trees and Tries
*   Heaps and Hash Maps

**Pro Tip**: Don't just memorize solutions. Focus on pattern recognition. Understand *when* to apply a sliding window versus two pointers.

### 2. System Design is Non-Negotiable
For roles above entry-level (and increasingly for entry-level too), System Design is the differentiator. You should be comfortable discussing:
*   Load Balancing & Consistent Hashing
*   Database Sharding & Replication
*   Caching Strategies (Redis, Memcached)
*   CAP Theorem in practice

### 3. The Behavioral Shift
Companies are placing heavier emphasis on "Leadership Principles" (Amazon) and "Googliness" (Google). They want engineers who can navigate ambiguity and collaborate effectively. Prepare your stories using the **STAR method** (Situation, Task, Action, Result).

### 4. AI-Assisted Coding
Interviews in 2025 might allow the use of AI tools. The test isn't whether you can write syntax perfectly, but whether you can *orchestrate* code generation, spot bugs in AI output, and optimize the logic.`
  },
  {
    id: 'java-vs-python-dsa',
    title: 'Java vs Python for DSA?',
    category: 'Guide',
    date: 'Oct 05, 2024',
    excerpt: 'Which language should you choose for Data Structures and Algorithms? We break it down.',
    imageUrl: 'https://image.pollinations.ai/prompt/Java%20versus%20Python%20programming%20code%20battle%20digital%20art?width=800&height=400&nologo=true',
    content: `One of the most common questions we get at Xenvora is: "Should I learn DSA in Java or Python?" The answer depends on your goals, but let's look at the trade-offs.

### Python: The Speedster
**Pros:**
*   **Concise Syntax**: Python reads like English. You can write a binary search implementation in half the lines of code required for Java.
*   **Interview Speed**: In a timed interview (typically 45 mins), writing less boilerplate code gives you more time to think and explain your logic.
*   **Libraries**: Powerful built-in libraries for almost everything.

**Cons:**
*   **Performance**: It is an interpreted language, so it is slower than Java or C++. This rarely matters in interviews unless the constraints are extremely tight.
*   **Type Safety**: Dynamic typing can lead to runtime errors that are caught at compile time in Java.

### Java: The Enterprise Standard
**Pros:**
*   **Object-Oriented**: Java enforces OOP principles strictly, which is great for learning software engineering best practices.
*   **Collections Framework**: The Java Collections Framework is robust and widely used in industry.
*   **Type Safety**: Static typing helps catch bugs early.

**Cons:**
*   **Verbosity**: ` + "`public static void main(String[] args)`" + ` vs just writing code. You write a lot more to achieve the same result.

### The Verdict
If you are a complete beginner aiming for competitive programming, **C++** is often preferred for raw speed.
If you are targeting backend development roles at large corporations (Amazon, Google), **Java** is a fantastic choice as it aligns with their tech stack.
If you want to focus purely on logic and minimize syntax errors during interviews, **Python** is the winner.

At Xenvora, our Alpha batch covers Java because it builds a stronger foundation in computer science concepts.`
  },
  {
    id: 'web-dev-roadmap',
    title: 'Web Development Roadmap',
    category: 'Learning',
    date: 'Sep 28, 2024',
    excerpt: 'From HTML to Deployment: The step-by-step guide to becoming a Full Stack Developer.',
    imageUrl: 'https://image.pollinations.ai/prompt/Web%20development%20tech%20stack%20icons%20floating%20hologram%20futuristic?width=800&height=400&nologo=true',
    content: `Becoming a Full Stack Developer is a journey. Here is the Xenvora roadmap to mastery in 2025.

### Phase 1: The Foundation (Frontend)
1.  **HTML5 & CSS3**: Semantic HTML, Flexbox, Grid.
2.  **JavaScript (ES6+)**: This is the most critical step. Master closures, promises, async/await, and the DOM.
3.  **Tailwind CSS**: Modern styling without leaving your HTML.

### Phase 2: The Library (React)
Don't just learn the syntax. Learn the ecosystem.
*   Hooks (useState, useEffect, useContext)
*   State Management (Redux Toolkit or Zustand)
*   Routing (React Router v6)

### Phase 3: The Backend
1.  **Node.js**: Understanding the runtime.
2.  **Express.js**: Building RESTful APIs.
3.  **Databases**:
    *   **NoSQL**: MongoDB (Mongoose)
    *   **SQL**: PostgreSQL (Prisma ORM)

### Phase 4: DevOps & Deployment
You aren't a developer until your code is live.
*   **Git & GitHub**: Version control.
*   **CI/CD**: GitHub Actions.
*   **Deployment**: Vercel (Frontend), Render/AWS (Backend).

### Phase 5: Advanced Concepts
*   Next.js (Server Side Rendering)
*   Docker & Kubernetes
*   System Design

Follow this path, build projects at every step (like our Delta Batch), and you will be job-ready in 6 months.`
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    role: 'SDE I at Google',
    content: "The Delta batch was a game-changer. I learned MERN stack from scratch and the projects I built helped me showcase my skills during the Google interviews. Highly recommended!",
    image: 'https://image.pollinations.ai/prompt/Professional%20portrait%20photo%20of%20young%20indian%20female%20software%20engineer%20at%20google%20smiling%20confident?width=200&height=200&nologo=true'
  },
  {
    id: '2',
    name: 'Arjun Mehta',
    role: 'Frontend Dev at Amazon',
    content: "I struggled with DSA for years until I joined the Alpha batch. The visual explanations and daily problem-solving sessions gave me the confidence to crack Amazon's OA.",
    image: 'https://image.pollinations.ai/prompt/Professional%20portrait%20photo%20of%20young%20indian%20male%20developer%20at%20amazon%20office%20smart?width=200&height=200&nologo=true'
  },
  {
    id: '3',
    name: 'Sneha Patel',
    role: 'SDE II at Microsoft',
    content: "The System Design lectures in the Sigma batch are world-class. They helped me understand how to scale applications, which was crucial for my senior role interview at Microsoft.",
    image: 'https://image.pollinations.ai/prompt/Professional%20portrait%20photo%20of%20female%20tech%20lead%20microsoft%20corporate%20attire?width=200&height=200&nologo=true'
  },
  {
    id: '4',
    name: 'Rohan Das',
    role: 'Full Stack Dev at Swiggy',
    content: "Placement support is real. They reviewed my resume, conducted mock interviews, and referred me to top startups. I landed my dream job within 3 months of graduating.",
    image: 'https://image.pollinations.ai/prompt/Professional%20portrait%20photo%20of%20young%20male%20developer%20casual%20tech%20startup%20vibe?width=200&height=200&nologo=true'
  }
];

export const CLIENTS = [
  { name: 'Nexus', logo: 'https://image.pollinations.ai/prompt/logo%20icon%20for%20futuristic%20company%20Nexus%20white%20on%20black%20minimal?width=300&height=100&nologo=true' },
  { name: 'Vortex', logo: 'https://image.pollinations.ai/prompt/logo%20icon%20for%20futuristic%20company%20Vortex%20white%20on%20black%20minimal?width=300&height=100&nologo=true' },
  { name: 'Aether', logo: 'https://image.pollinations.ai/prompt/logo%20icon%20for%20futuristic%20company%20Aether%20white%20on%20black%20minimal?width=300&height=100&nologo=true' },
  { name: 'Horizon', logo: 'https://image.pollinations.ai/prompt/logo%20icon%20for%20futuristic%20company%20Horizon%20white%20on%20black%20minimal?width=300&height=100&nologo=true' },
  { name: 'Synthetix', logo: 'https://image.pollinations.ai/prompt/logo%20icon%20for%20futuristic%20company%20Synthetix%20white%20on%20black%20minimal?width=300&height=100&nologo=true' },
];