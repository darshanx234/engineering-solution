export interface Project {
  id: string
  slug: string
  title: string
  category: "residential" | "commercial" | "turnkey" | "interiors"
  location: string
  year: string
  scope: string
  description: string
  thumbnail: string
  images: string[]
  features: string[]
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "modern-villa-ahmedabad",
    title: "Modern Villa Ahmedabad",
    category: "residential",
    location: "Ahmedabad, Gujarat",
    year: "2024",
    scope: "Architecture + Interior + Landscape",
    description: "A stunning contemporary villa featuring clean lines, open floor plans, and seamless indoor-outdoor living. The design maximizes natural light while providing privacy and comfort for the family.",
    thumbnail: "https://plus.unsplash.com/premium_photo-1748217392686-56e45fcaee65?q=80&w=1470&auto=format&fit=crop",
    images: ["https://plus.unsplash.com/premium_photo-1748217392686-56e45fcaee65?q=80&w=1470&auto=format&fit=crop"],
    features: ["5 Bedrooms", "Swimming Pool", "Home Theater", "Landscaped Garden", "Smart Home Integration"]
  },
  {
    id: "2",
    slug: "corporate-office-mumbai",
    title: "Corporate Office Mumbai",
    category: "commercial",
    location: "Mumbai, Maharashtra",
    year: "2024",
    scope: "Interior Design + Turnkey",
    description: "A modern corporate headquarters designed to foster collaboration and innovation. The space features flexible workstations, meeting rooms, and recreational areas.",
    thumbnail: "https://plus.unsplash.com/premium_photo-1682377521741-66b111791809?q=80&w=1471&auto=format&fit=crop",
    images: ["https://plus.unsplash.com/premium_photo-1682377521741-66b111791809?q=80&w=1471&auto=format&fit=crop"],
    features: ["20,000 sq ft", "Open Plan Layout", "Conference Center", "Cafeteria", "Wellness Room"]
  },
  {
    id: "3",
    slug: "luxury-apartment-pune",
    title: "Luxury Apartment Pune",
    category: "interiors",
    location: "Pune, Maharashtra",
    year: "2023",
    scope: "Interior Design",
    description: "An elegant apartment interior featuring contemporary design with warm, inviting tones. Custom furniture and curated art pieces create a sophisticated living environment.",
    thumbnail: "https://images.unsplash.com/photo-1760067537204-fe9b55b2f1b0?q=80&w=764&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1760067537204-fe9b55b2f1b0?q=80&w=764&auto=format&fit=crop"],
    features: ["3 BHK", "Custom Millwork", "Italian Marble", "Designer Lighting", "Walk-in Closets"]
  },
  {
    id: "4",
    slug: "retail-showroom-delhi",
    title: "Retail Showroom Delhi",
    category: "commercial",
    location: "New Delhi",
    year: "2023",
    scope: "Architecture + Interior + Turnkey",
    description: "A flagship retail showroom designed to create an immersive brand experience. The space features dynamic displays, ambient lighting, and customer-centric layouts.",
    thumbnail: "https://images.unsplash.com/photo-1559998852-f8ab898d889e?q=80&w=631&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1559998852-f8ab898d889e?q=80&w=631&auto=format&fit=crop"],
    features: ["15,000 sq ft", "Interactive Displays", "VIP Lounge", "Storage Facility", "Custom Fixtures"]
  },
  {
    id: "5",
    slug: "farmhouse-lonavala",
    title: "Farmhouse Lonavala",
    category: "turnkey",
    location: "Lonavala, Maharashtra",
    year: "2023",
    scope: "Complete Turnkey Solution",
    description: "A weekend retreat that harmoniously blends with its natural surroundings. The farmhouse features sustainable materials, panoramic views, and resort-style amenities.",
    thumbnail: "https://media.istockphoto.com/id/1138679697/photo/rural-view-over-lonavala.webp?a=1&b=1&s=612x612&w=0&k=20&c=0yuoGEgIGEfnx4ozhgCF8GyIw2_0gRJIgX5ICJhjSkQ=",
    images: ["https://media.istockphoto.com/id/1138679697/photo/rural-view-over-lonavala.webp?a=1&b=1&s=612x612&w=0&k=20&c=0yuoGEgIGEfnx4ozhgCF8GyIw2_0gRJIgX5ICJhjSkQ="],
    features: ["4 Bedrooms", "Infinity Pool", "Outdoor Kitchen", "Fire Pit", "Guest Cottage"]
  },
  {
    id: "6",
    slug: "restaurant-bangalore",
    title: "Restaurant Bangalore",
    category: "interiors",
    location: "Bangalore, Karnataka",
    year: "2024",
    scope: "Interior Design + Furniture",
    description: "A fine dining restaurant with a contemporary Indian aesthetic. The design balances intimacy with grandeur, featuring custom lighting and artisanal details.",
    thumbnail: "https://images.unsplash.com/photo-1760067537204-fe9b55b2f1b0?q=80&w=764&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1760067537204-fe9b55b2f1b0?q=80&w=764&auto=format&fit=crop"],
    features: ["120 Covers", "Private Dining", "Bar Lounge", "Open Kitchen", "Outdoor Seating"]
  },
  {
    id: "7",
    slug: "tech-park-hyderabad",
    title: "Tech Park Hyderabad",
    category: "commercial",
    location: "Hyderabad, Telangana",
    year: "2022",
    scope: "Architecture + Civil Engineering",
    description: "A state-of-the-art technology park designed for sustainable operations. The campus features green buildings, smart infrastructure, and collaborative workspaces.",
    thumbnail: "https://plus.unsplash.com/premium_photo-1682377521741-66b111791809?q=80&w=1471&auto=format&fit=crop",
    images: ["https://plus.unsplash.com/premium_photo-1682377521741-66b111791809?q=80&w=1471&auto=format&fit=crop"],
    features: ["500,000 sq ft", "LEED Certified", "Amphitheater", "Food Court", "Daycare Center"]
  },
  {
    id: "8",
    slug: "beach-house-goa",
    title: "Beach House Goa",
    category: "residential",
    location: "Goa",
    year: "2023",
    scope: "Architecture + Interior",
    description: "A coastal retreat that captures the essence of Goan living. The design features open spaces, natural materials, and seamless beach access.",
    thumbnail: "https://plus.unsplash.com/premium_photo-1748217392686-56e45fcaee65?q=80&w=1470&auto=format&fit=crop",
    images: ["https://plus.unsplash.com/premium_photo-1748217392686-56e45fcaee65?q=80&w=1470&auto=format&fit=crop"],
    features: ["3 Bedrooms", "Rooftop Deck", "Pool", "Garden Pavilion", "Outdoor Shower"]
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug)
}

export function getProjectsByCategory(category: Project["category"]): Project[] {
  return projects.filter(project => project.category === category)
}

export function getRelatedProjects(currentSlug: string, limit: number = 3): Project[] {
  const current = getProjectBySlug(currentSlug)
  if (!current) return projects.slice(0, limit)
  return projects
    .filter(p => p.slug !== currentSlug && p.category === current.category)
    .slice(0, limit)
}
