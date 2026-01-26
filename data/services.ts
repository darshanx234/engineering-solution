export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  description: string
  icon: string
  image: string
  features: string[]
  residential: string[]
  commercial: string[]
  process: {
    step: number
    title: string
    description: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
}

export const services: Service[] = [
  {
    id: "1",
    slug: "architecture",
    title: "Architecture",
    shortDescription: "Innovative architectural designs that blend aesthetics with functionality.",
    description: "Our architectural services encompass the complete design process from conceptualization to final construction documents. We create spaces that inspire, function efficiently, and stand the test of time.",
    icon: "building",
    image: "/images/architecture.jpg",
    features: [
      "Conceptual Design & Planning",
      "3D Visualization & Rendering",
      "Construction Documentation",
      "Permit Assistance",
      "Site Analysis & Feasibility Studies",
      "Sustainable Design Solutions"
    ],
    residential: [
      "Custom Home Design",
      "Villa Architecture",
      "Apartment Complexes",
      "Farmhouse Design",
      "Renovation & Additions"
    ],
    commercial: [
      "Office Buildings",
      "Retail Spaces",
      "Hotels & Resorts",
      "Educational Institutions",
      "Healthcare Facilities"
    ],
    process: [
      { step: 1, title: "Consultation", description: "We discuss your vision, requirements, and budget to understand your project goals." },
      { step: 2, title: "Design Development", description: "Our team creates detailed designs, 3D models, and material selections for your approval." },
      { step: 3, title: "Execution", description: "We provide complete construction documents and oversee the building process." }
    ],
    faqs: [
      { question: "How long does the architectural design process take?", answer: "Typically 4-8 weeks depending on project complexity, from initial consultation to final drawings." },
      { question: "Do you provide 3D visualizations?", answer: "Yes, we provide detailed 3D renderings and virtual walkthroughs for all our projects." },
      { question: "Can you help with building permits?", answer: "Absolutely. We prepare all necessary documentation and assist with the permit application process." }
    ]
  },
  {
    id: "2",
    slug: "interior-design",
    title: "Interior Design",
    shortDescription: "Transform your spaces with our expert interior design solutions.",
    description: "We create interiors that reflect your personality while maximizing functionality. From concept to completion, our interior design team delivers spaces that inspire and comfort.",
    icon: "palette",
    image: "/images/interior.jpg",
    features: [
      "Space Planning & Layout",
      "Material & Finish Selection",
      "Custom Furniture Design",
      "Lighting Design",
      "Color Consultation",
      "Art & Accessories Curation"
    ],
    residential: [
      "Living Spaces",
      "Bedrooms & Bathrooms",
      "Kitchens",
      "Home Offices",
      "Outdoor Living Areas"
    ],
    commercial: [
      "Corporate Offices",
      "Retail Interiors",
      "Restaurant & Hospitality",
      "Healthcare Interiors",
      "Educational Spaces"
    ],
    process: [
      { step: 1, title: "Discovery", description: "Understanding your lifestyle, preferences, and functional needs." },
      { step: 2, title: "Concept Design", description: "Creating mood boards, 3D designs, and material palettes." },
      { step: 3, title: "Implementation", description: "Coordinating with vendors and overseeing installation." }
    ],
    faqs: [
      { question: "Do you work with existing furniture?", answer: "Yes, we can incorporate your existing pieces into the new design or suggest updates." },
      { question: "What is your design style?", answer: "We adapt to your preferences - contemporary, traditional, minimalist, or eclectic." },
      { question: "Do you handle procurement?", answer: "Yes, we manage all purchasing and coordinate deliveries for a hassle-free experience." }
    ]
  },
  {
    id: "3",
    slug: "construction",
    title: "Construction",
    shortDescription: "Quality construction services with precision and timely delivery.",
    description: "Our construction division brings designs to life with superior craftsmanship and attention to detail. We manage projects from groundbreaking to final handover.",
    icon: "hammer",
    image: "/images/construction.jpg",
    features: [
      "Project Management",
      "Quality Control",
      "Timeline Management",
      "Budget Oversight",
      "Subcontractor Coordination",
      "Safety Compliance"
    ],
    residential: [
      "New Home Construction",
      "Renovations & Remodeling",
      "Extensions & Additions",
      "Foundation Work",
      "Structural Repairs"
    ],
    commercial: [
      "Commercial Buildings",
      "Industrial Facilities",
      "Retail Construction",
      "Office Build-outs",
      "Institutional Projects"
    ],
    process: [
      { step: 1, title: "Planning", description: "Detailed project planning, scheduling, and resource allocation." },
      { step: 2, title: "Construction", description: "Professional execution with regular progress updates and quality checks." },
      { step: 3, title: "Handover", description: "Final inspections, documentation, and project completion." }
    ],
    faqs: [
      { question: "How do you ensure quality?", answer: "We have dedicated quality control teams and use only certified materials and skilled labor." },
      { question: "What about project delays?", answer: "We create realistic timelines with buffers and provide regular progress updates." },
      { question: "Do you offer warranties?", answer: "Yes, all our construction work comes with comprehensive warranties." }
    ]
  },
  {
    id: "4",
    slug: "turnkey-projects",
    title: "Turnkey Projects",
    shortDescription: "Complete end-to-end solutions from design to move-in ready spaces.",
    description: "Our turnkey solutions provide a seamless experience - from initial design through construction to final furnishing. One team, one vision, one point of contact.",
    icon: "key",
    image: "/images/turnkey.jpg",
    features: [
      "Single Point of Contact",
      "Integrated Design & Build",
      "Complete Project Management",
      "Furniture & Fixtures",
      "Landscaping",
      "Move-in Ready Delivery"
    ],
    residential: [
      "Complete Home Solutions",
      "Apartment Finishing",
      "Villa Projects",
      "Vacation Homes",
      "Investment Properties"
    ],
    commercial: [
      "Office Fit-outs",
      "Retail Store Setup",
      "Restaurant Turnkey",
      "Hotel Fit-outs",
      "Showroom Development"
    ],
    process: [
      { step: 1, title: "Briefing", description: "Comprehensive understanding of your complete requirements and vision." },
      { step: 2, title: "Design & Build", description: "Integrated approach combining design, construction, and interiors." },
      { step: 3, title: "Delivery", description: "Complete handover of move-in ready space with all systems operational." }
    ],
    faqs: [
      { question: "What's included in turnkey?", answer: "Everything from design and construction to furniture, fixtures, and final cleaning." },
      { question: "Is it more expensive than separate services?", answer: "Actually, turnkey often saves costs through integrated planning and bulk procurement." },
      { question: "How long does a turnkey project take?", answer: "Timeline depends on project size, typically 3-12 months for residential projects." }
    ]
  },
  {
    id: "5",
    slug: "civil-engineering",
    title: "Civil Engineering",
    shortDescription: "Structural expertise ensuring safety and longevity of your projects.",
    description: "Our civil engineering team provides technical expertise for structural design, site development, and infrastructure projects with a focus on safety and sustainability.",
    icon: "ruler",
    image: "/images/civil.jpg",
    features: [
      "Structural Design & Analysis",
      "Foundation Engineering",
      "Site Development",
      "Infrastructure Planning",
      "Geotechnical Services",
      "Project Consultation"
    ],
    residential: [
      "Structural Assessments",
      "Foundation Design",
      "Retaining Walls",
      "Drainage Solutions",
      "Site Grading"
    ],
    commercial: [
      "High-rise Structures",
      "Industrial Facilities",
      "Bridges & Infrastructure",
      "Water Management",
      "Road Development"
    ],
    process: [
      { step: 1, title: "Assessment", description: "Site evaluation, soil testing, and structural analysis." },
      { step: 2, title: "Engineering Design", description: "Detailed structural calculations and engineering drawings." },
      { step: 3, title: "Supervision", description: "On-site supervision ensuring design compliance." }
    ],
    faqs: [
      { question: "Do you provide structural certifications?", answer: "Yes, all our structural designs come with engineer-certified documentation." },
      { question: "Can you assess existing structures?", answer: "We provide comprehensive structural assessments and remediation recommendations." },
      { question: "What software do you use?", answer: "We use industry-standard software including AutoCAD, STAAD, and ETABS." }
    ]
  },
  {
    id: "6",
    slug: "furniture-manufacturing",
    title: "Furniture & Manufacturing",
    shortDescription: "Custom furniture solutions crafted to perfection for your spaces.",
    description: "Our manufacturing unit creates bespoke furniture and fixtures that perfectly complement your interior design, using quality materials and expert craftsmanship.",
    icon: "sofa",
    image: "/images/furniture.jpg",
    features: [
      "Custom Furniture Design",
      "Modular Solutions",
      "Quality Craftsmanship",
      "Material Selection",
      "Installation Services",
      "After-sales Support"
    ],
    residential: [
      "Living Room Furniture",
      "Bedroom Sets",
      "Kitchen Cabinets",
      "Wardrobes & Storage",
      "Outdoor Furniture"
    ],
    commercial: [
      "Office Workstations",
      "Conference Tables",
      "Reception Desks",
      "Retail Display Units",
      "Restaurant Furniture"
    ],
    process: [
      { step: 1, title: "Design", description: "Custom design based on your specifications and space requirements." },
      { step: 2, title: "Manufacturing", description: "Precision manufacturing with quality materials and finishes." },
      { step: 3, title: "Installation", description: "Professional delivery and installation with finishing touches." }
    ],
    faqs: [
      { question: "What materials do you use?", answer: "We work with solid wood, engineered wood, metal, glass, and premium laminates." },
      { question: "How long does custom furniture take?", answer: "Typically 3-6 weeks depending on complexity and quantity." },
      { question: "Do you offer warranties on furniture?", answer: "Yes, all our furniture comes with a minimum 2-year warranty." }
    ]
  }
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug)
}
