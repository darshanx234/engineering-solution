export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  image: string
  project?: string
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rahul Mehta",
    role: "Business Owner",
    company: "Mehta Industries",
    content: "Smart Engineers transformed our vision into reality. Their attention to detail and commitment to quality exceeded our expectations. The turnkey approach made the entire process stress-free.",
    rating: 5,
    image: "https://i.pravatar.cc/300?img=11",
    project: "Corporate Office Mumbai"
  },
  {
    id: "2",
    name: "Priya & Amit Sharma",
    role: "Homeowners",
    company: "",
    content: "Building our dream home was an incredible journey with Smart Engineers. They understood exactly what we wanted and delivered a space that our family absolutely loves.",
    rating: 5,
    image: "https://i.pravatar.cc/300?img=5",
    project: "Modern Villa Ahmedabad"
  },
  {
    id: "3",
    name: "Dr. Kavita Reddy",
    role: "Director",
    company: "Wellness Healthcare",
    content: "The team's expertise in healthcare facility design was evident throughout the project. They created a space that's both functional for our staff and comforting for patients.",
    rating: 5,
    image: "https://i.pravatar.cc/300?img=1",
    project: "Healthcare Center Hyderabad"
  },
  {
    id: "4",
    name: "Arjun Nair",
    role: "Restaurant Owner",
    company: "Spice Route Dining",
    content: "Our restaurant interior has become a talking point among customers. Smart Engineers captured the essence of our brand perfectly. The space is both beautiful and operationally efficient.",
    rating: 5,
    image: "https://i.pravatar.cc/300?img=3",
    project: "Restaurant Bangalore"
  },
  {
    id: "5",
    name: "Sunita Agarwal",
    role: "Real Estate Developer",
    company: "Agarwal Constructions",
    content: "We've worked with Smart Engineers on multiple projects. Their consistency in quality and ability to meet deadlines makes them our go-to partner for architectural services.",
    rating: 5,
    image: "https://i.pravatar.cc/300?img=9",
  },
  {
    id: "6",
    name: "Vikram Malhotra",
    role: "CEO",
    company: "TechStart Solutions",
    content: "The office space they designed has positively impacted our company culture. The open layout encourages collaboration while private spaces allow for focused work.",
    rating: 4,
    image: "https://i.pravatar.cc/300?img=8",
    project: "Tech Park Hyderabad"
  },
  {
    id: "7",
    name: "Anjali & Rohit Kapoor",
    role: "Homeowners",
    company: "",
    content: "Our farmhouse in Lonavala is our favorite weekend escape. The design perfectly captures the tranquility we were looking for while providing all modern comforts.",
    rating: 5,
    image: "https://i.pravatar.cc/300?img=2",
    project: "Farmhouse Lonavala"
  },
  {
    id: "8",
    name: "Sanjay Patel",
    role: "Retail Director",
    company: "Fashion Forward",
    content: "The showroom design has significantly improved our customer experience and sales. Smart Engineers understood retail dynamics and created a space that sells.",
    rating: 5,
    image: "https://i.pravatar.cc/300?img=12",
    project: "Retail Showroom Delhi"
  }
]
