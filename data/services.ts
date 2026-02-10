export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  description: string
  icon: string
  image: string
}

export const services: Service[] = [
  {
    id: "1",
    slug: "interior-design",
    title: "Interior Design",
    shortDescription: "Transform your spaces with our expert interior design solutions.",
    description: "We create interiors that reflect your personality while maximizing functionality. From concept to completion, our interior design team delivers spaces that inspire and comfort.",
    icon: "palette",
    image: "/images/interior.jpg",
  },
  {
    id: "2",
    slug: "3d-designing",
    title: "3D Designing",
    shortDescription: "Visualize your project with stunning 3D renderings and models.",
    description: "Our 3D design services bring your vision to life with photorealistic renderings and detailed models. See your project before it's built and make informed decisions.",
    icon: "box",
    image: "/images/3d-design.jpg",
  },
  {
    id: "3",
    slug: "2d-designing",
    title: "2D Plan",
    shortDescription: "Detailed 2D plans and technical drawings for your project.",
    description: "Comprehensive 2D planning services including floor plans, elevations, and technical drawings. Clear, detailed documentation for seamless execution.",
    icon: "file-text",
    image: "/images/2d-plan.jpg",
  },
  {
    id: "4",
    slug: "working-plan",
    title: "Working Plan",
    shortDescription: "Complete working drawings and execution plans.",
    description: "Detailed working plans that guide your project from start to finish. Includes all technical specifications, material lists, and construction details.",
    icon: "clipboard",
    image: "/images/working-plan.jpg",
  },
  {
    id: "5",
    slug: "structure-designing",
    title: "Structure Designing",
    shortDescription: "Structural expertise ensuring safety and longevity of your projects.",
    description: "Our structural design services provide technical expertise for safe and durable buildings. We handle all aspects from foundation to roof structure.",
    icon: "building",
    image: "/images/structure.jpg",
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug)
}
