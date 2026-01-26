export interface TeamMember {
  id: string
  name: string
  role: string
  category: "creative" | "technical"
  bio: string
  image: string
  qualifications?: string[]
}

export const team: TeamMember[] = [
  {
    id: "1",
    name: "Ar. Rajesh Patel",
    role: "Founder & Principal Architect",
    category: "creative",
    bio: "With over 20 years of experience, Rajesh leads our architectural vision. His designs have won multiple awards and been featured in leading publications.",
    image: "https://i.pravatar.cc/300?img=11",
    qualifications: ["B.Arch IIT Kharagpur", "M.Arch Columbia University", "Council of Architecture Licensed"]
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "Head of Interior Design",
    category: "creative",
    bio: "Priya brings spaces to life with her keen eye for detail and understanding of how people interact with their environments. She specializes in luxury residential interiors.",
    image: "https://i.pravatar.cc/300?img=5",
    qualifications: ["B.Des NID Ahmedabad", "Certified Interior Designer"]
  },
  {
    id: "3",
    name: "Dr. Suresh Kumar",
    role: "Chief Structural Engineer",
    category: "technical",
    bio: "Dr. Kumar ensures every structure we build is safe, efficient, and durable. His expertise in seismic design has been crucial for our high-rise projects.",
    image: "https://i.pravatar.cc/300?img=13",
    qualifications: ["Ph.D. Structural Engineering IIT Bombay", "Chartered Engineer"]
  },
  {
    id: "4",
    name: "Vikram Singh",
    role: "Director of Construction",
    category: "technical",
    bio: "Vikram oversees all construction operations, ensuring projects are delivered on time and to the highest quality standards. He has managed over 100 projects.",
    image: "https://i.pravatar.cc/300?img=8",
    qualifications: ["B.E. Civil Engineering", "PMP Certified", "LEED AP"]
  },
  {
    id: "5",
    name: "Anita Desai",
    role: "Turnkey Projects Lead",
    category: "creative",
    bio: "Anita manages our turnkey division, coordinating between design, construction, and finishing teams to deliver seamless project experiences.",
    image: "https://i.pravatar.cc/300?img=9",
    qualifications: ["MBA Operations", "B.Arch CEPT University"]
  },
  {
    id: "6",
    name: "Meera Iyer",
    role: "Furniture Design Head",
    category: "creative",
    bio: "Meera leads our furniture manufacturing unit, creating bespoke pieces that perfectly complement our interior projects.",
    image: "https://i.pravatar.cc/300?img=20",
    qualifications: ["B.Des Furniture Design", "Diploma in Woodworking"]
  },
  {
    id: "7",
    name: "Rahul Menon",
    role: "Senior Architect",
    category: "creative",
    bio: "Rahul specializes in sustainable architecture and has led several of our green building projects to LEED certification.",
    image: "https://i.pravatar.cc/300?img=52",
    qualifications: ["B.Arch SPA Delhi", "LEED AP BD+C"]
  },
  {
    id: "8",
    name: "Deepak Verma",
    role: "Project Manager",
    category: "technical",
    bio: "Deepak keeps our projects on track with meticulous planning and coordination. His construction site experience ensures smooth execution.",
    image: "https://i.pravatar.cc/300?img=60",
    qualifications: ["B.E. Civil Engineering", "PMP Certified"]
  },
  {
    id: "9",
    name: "Kavitha Rajan",
    role: "Interior Designer",
    category: "creative",
    bio: "Kavitha creates stunning commercial interiors that enhance brand experiences and improve workspace productivity.",
    image: "https://i.pravatar.cc/300?img=45",
    qualifications: ["B.Des Interior Design", "NCIDQ Certified"]
  },
  {
    id: "10",
    name: "Arun Gupta",
    role: "MEP Engineer",
    category: "technical",
    bio: "Arun handles all mechanical, electrical, and plumbing engineering, ensuring our buildings function efficiently.",
    image: "https://i.pravatar.cc/300?img=68",
    qualifications: ["B.E. Mechanical Engineering", "ASHRAE Member"]
  }
]

export function getTeamByCategory(category: TeamMember["category"]): TeamMember[] {
  return team.filter(member => member.category === category)
}
