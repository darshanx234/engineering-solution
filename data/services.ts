export interface WorkflowStep {
  step: number
  title: string
  description: string
}

export interface ServiceFeature {
  title: string
  icon: string
}

export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  description: string
  longDescription: string
  icon: string
  image: string
  heroImage: string
  features: ServiceFeature[]
  gallery: string[]
  workflow: WorkflowStep[]
}

export const services: Service[] = [
  {
    id: "1",
    slug: "interior-design",
    title: "Interior Design",
    shortDescription: "Transform your spaces with our expert interior design solutions.",
    description: "We create interiors that reflect your personality while maximizing functionality. From concept to completion, our interior design team delivers spaces that inspire and comfort.",
    longDescription: "Our interior design services go beyond aesthetics — we craft environments that tell your story. Whether it's a cozy living room, a functional modular kitchen, or an elegant bedroom, every element is carefully chosen to reflect your taste and lifestyle. We work with premium materials, modern finishes, and smart space planning to ensure every square foot is utilized beautifully. Our team handles everything from initial concept boards to final installation, ensuring a seamless experience from start to finish.",
    icon: "palette",
    image: "/images/interior.jpg",
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1920",
    features: [
      { title: "Living Room Interior", icon: "sofa" },
      { title: "Bedroom Interior", icon: "bed" },
      { title: "Modular Kitchen Design", icon: "cooking-pot" },
      { title: "TV Unit & Wardrobe Design", icon: "tv" },
      { title: "Office & Shop Interior", icon: "building" },
      { title: "Lighting & Ceiling Design", icon: "lamp" },
      { title: "Space Planning with Furniture", icon: "layout" },
      { title: "Material & Color Selection", icon: "palette" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=800",
    ],
    workflow: [
      { step: 1, title: "Requirement Discussion", description: "Understanding your style preferences, budget, and functional needs for the space." },
      { step: 2, title: "Concept & Mood Board", description: "Creating design concepts with color palettes, material samples, and furniture references." },
      { step: 3, title: "Layout & 2D Planning", description: "Detailed floor plans with furniture placement, electrical, and lighting layouts." },
      { step: 4, title: "3D Visualization", description: "Photorealistic 3D renders showing exactly how your space will look after completion." },
      { step: 5, title: "Material Selection", description: "Curating finishes, fabrics, tiles, and fixtures that match the approved design." },
      { step: 6, title: "Execution & Installation", description: "On-site supervision and installation ensuring design intent is perfectly translated." },
    ],
  },
  {
    id: "2",
    slug: "3d-designing",
    title: "3D Designing",
    shortDescription: "Visualize your project with stunning 3D renderings and models.",
    description: "Our 3D design services bring your vision to life with photorealistic renderings and detailed models. See your project before it's built and make informed decisions.",
    longDescription: "Our 3D visualization services transform flat blueprints into immersive, photorealistic experiences. Using industry-leading tools like SketchUp, Lumion, and V-Ray, we create stunning exterior elevations, interior walkthroughs, and presentation-quality renders that help you visualize every detail before construction begins. Whether you need a modern house elevation, a luxury bungalow facade, or a commercial building render with day & night views — we deliver visuals that wow clients and streamline decision-making.",
    icon: "box",
    image: "/images/3d-design.jpg",
    heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1920",
    features: [
      { title: "Modern House Elevation", icon: "home" },
      { title: "Luxury Bungalow Elevation", icon: "castle" },
      { title: "Commercial Building Elevation", icon: "building-2" },
      { title: "Day & Night Rendering", icon: "sun-moon" },
      { title: "Photorealistic Exterior Renders", icon: "image" },
      { title: "Photorealistic Interior Renders", icon: "frame" },
      { title: "Walkthrough & Presentation", icon: "video" },
      { title: "Material & Color Selection", icon: "palette" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
    ],
    workflow: [
      { step: 1, title: "Requirement Analysis", description: "Understanding the project scope, style preferences, and design goals." },
      { step: 2, title: "Concept Sketching", description: "Initial design concepts exploring different elevation styles and massing options." },
      { step: 3, title: "3D Modeling", description: "Creating detailed 3D models in SketchUp with accurate dimensions and proportions." },
      { step: 4, title: "Material Application", description: "Applying realistic materials, textures, and colors to the 3D model." },
      { step: 5, title: "Rendering & Lighting", description: "High-quality rendering with Lumion/V-Ray including natural & artificial lighting." },
      { step: 6, title: "Client Presentation", description: "Delivering final renders with revisions and walkthrough presentation if needed." },
    ],
  },
  {
    id: "3",
    slug: "2d-designing",
    title: "2D Plan",
    shortDescription: "Detailed 2D plans and technical drawings for your project.",
    description: "Comprehensive 2D planning services including floor plans, elevations, and technical drawings. Clear, detailed documentation for seamless execution.",
    longDescription: "Our 2D planning services form the backbone of every successful construction project. We create precise, dimensioned floor plans that optimize space utilization, flow, and functionality. From residential house plans to bungalow layouts, our AutoCAD-drafted drawings cover every detail — room dimensions, door & window placements, staircase planning, parking layout, and furniture arrangements. We also offer Vastu-based planning for clients who require it, ensuring harmony between traditional principles and modern design.",
    icon: "file-text",
    image: "/images/2d-plan.jpg",
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1920",
    features: [
      { title: "Residential House Planning", icon: "home" },
      { title: "Bungalow & Apartment Layouts", icon: "layout-grid" },
      { title: "Vastu-Based Planning", icon: "compass" },
      { title: "Space Optimization & Zoning", icon: "maximize" },
      { title: "Parking & Staircase Planning", icon: "car" },
      { title: "Floor Plans with Dimensions", icon: "ruler" },
      { title: "Furniture Layout Plans", icon: "armchair" },
      { title: "Section & Elevation Drawings", icon: "layers" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1536895058696-a69a6a7799b0?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600585153490-76fb20a32601?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600573472573-844e1a1854c6?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=800",
    ],
    workflow: [
      { step: 1, title: "Site Survey & Measurement", description: "Accurate on-site measurement and understanding of plot dimensions and orientation." },
      { step: 2, title: "Requirement Discussion", description: "Understanding room requirements, family size, lifestyle, and Vastu preferences." },
      { step: 3, title: "Concept Layout", description: "Initial concept layouts exploring different room arrangements and flow patterns." },
      { step: 4, title: "Detailed 2D Drafting", description: "AutoCAD drafting with precise dimensions, annotations, and technical details." },
      { step: 5, title: "Review & Revisions", description: "Client review with modifications until the plan perfectly matches requirements." },
      { step: 6, title: "Final Drawing Set", description: "Delivering complete drawing set ready for submission and construction." },
    ],
  },
  {
    id: "4",
    slug: "working-plan",
    title: "Working Plan",
    shortDescription: "Complete working drawings and execution plans.",
    description: "Detailed working plans that guide your project from start to finish. Includes all technical specifications, material lists, and construction details.",
    longDescription: "Working drawings are the most critical documents for site execution. Our team prepares comprehensive drawing sets that leave nothing to interpretation — from column & beam layouts to electrical and plumbing plans, door & window schedules, and detailed construction sections. Every drawing is prepared with site-level accuracy in AutoCAD, ensuring contractors have clear, actionable instructions. We bridge the gap between design intent and construction reality, minimizing errors and rework on site.",
    icon: "clipboard",
    image: "/images/working-plan.jpg",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1920",
    features: [
      { title: "Floor Plans with Dimensions", icon: "ruler" },
      { title: "Furniture Layout Plans", icon: "armchair" },
      { title: "Electrical Layout Plan", icon: "zap" },
      { title: "Plumbing Layout Plan", icon: "droplets" },
      { title: "Column & Beam Layout", icon: "grid-3x3" },
      { title: "Section & Elevation Drawings", icon: "layers" },
      { title: "Door & Window Schedule", icon: "door-open" },
      { title: "Working Details for Site", icon: "hard-hat" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
    ],
    workflow: [
      { step: 1, title: "Approved Plan Review", description: "Reviewing the approved architectural plans and structural requirements." },
      { step: 2, title: "Structural Coordination", description: "Coordinating column, beam, and slab layouts with the structural engineer." },
      { step: 3, title: "MEP Layouts", description: "Preparing electrical, plumbing, and drainage layout plans." },
      { step: 4, title: "Detail Drawings", description: "Creating door & window schedules, section details, and construction notes." },
      { step: 5, title: "Quality Check", description: "Cross-referencing all drawings for consistency and constructability." },
      { step: 6, title: "Site Support", description: "Providing on-site clarification and support during construction as needed." },
    ],
  },
  {
    id: "5",
    slug: "structure-designing",
    title: "Structure Designing",
    shortDescription: "Structural expertise ensuring safety and longevity of your projects.",
    description: "Our structural design services provide technical expertise for safe and durable buildings. We handle all aspects from foundation to roof structure.",
    longDescription: "Structural design is the invisible backbone of every building. Our team provides comprehensive structural engineering solutions that ensure your project is safe, code-compliant, and built to last. From foundation design to column-beam frameworks, slab design, and load calculations — we combine engineering precision with practical construction knowledge. Using advanced analysis tools, we optimize material usage while maintaining structural integrity, resulting in cost-effective and safe buildings that stand the test of time.",
    icon: "building",
    image: "/images/structure.jpg",
    heroImage: "https://images.unsplash.com/photo-1590650046871-92c51d8e0b5f?auto=format&fit=crop&q=80&w=1920",
    features: [
      { title: "Foundation Design", icon: "landmark" },
      { title: "Column & Beam Design", icon: "grid-3x3" },
      { title: "Slab Design & Detailing", icon: "square" },
      { title: "Load Calculations", icon: "calculator" },
      { title: "RCC Detailing", icon: "construction" },
      { title: "Structural Drawings", icon: "file-text" },
      { title: "Seismic Analysis", icon: "activity" },
      { title: "Site Supervision Support", icon: "hard-hat" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1585503418537-88331351ad99?auto=format&fit=crop&q=80&w=800",
    ],
    workflow: [
      { step: 1, title: "Architectural Plan Review", description: "Analyzing the approved architectural layout and understanding load requirements." },
      { step: 2, title: "Soil Investigation Data", description: "Reviewing soil test reports to determine foundation type and bearing capacity." },
      { step: 3, title: "Structural Analysis", description: "Performing load calculations, member sizing, and seismic analysis." },
      { step: 4, title: "Design & Detailing", description: "Designing foundations, columns, beams, and slabs with reinforcement details." },
      { step: 5, title: "Drawing Preparation", description: "Preparing structural drawings with bar bending schedules and quantities." },
      { step: 6, title: "Site Execution Support", description: "Providing construction supervision and resolving site queries." },
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug)
}
