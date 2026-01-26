export interface Job {
  id: string
  title: string
  department: string
  location: string
  type: "full-time" | "part-time" | "contract" | "internship"
  experience: string
  description: string
  responsibilities: string[]
  requirements: string[]
  benefits: string[]
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Architect",
    department: "Architecture",
    location: "Mumbai, Maharashtra",
    type: "full-time",
    experience: "5-8 years",
    description: "We're looking for a talented Senior Architect to lead design projects from concept to completion. You'll work on diverse residential and commercial projects.",
    responsibilities: [
      "Lead architectural design for residential and commercial projects",
      "Mentor junior architects and interns",
      "Coordinate with clients and stakeholders",
      "Prepare construction documents and specifications",
      "Ensure designs comply with building codes and regulations"
    ],
    requirements: [
      "B.Arch or M.Arch from a recognized institution",
      "5-8 years of experience in architectural design",
      "Proficiency in AutoCAD, Revit, SketchUp, and Adobe Suite",
      "Strong portfolio demonstrating diverse project experience",
      "Council of Architecture registration"
    ],
    benefits: [
      "Competitive salary package",
      "Health insurance for family",
      "Professional development opportunities",
      "Flexible work arrangements",
      "Performance bonuses"
    ]
  },
  {
    id: "2",
    title: "Interior Designer",
    department: "Interior Design",
    location: "Pune, Maharashtra",
    type: "full-time",
    experience: "3-5 years",
    description: "Join our interior design team to create beautiful, functional spaces for residential and commercial clients.",
    responsibilities: [
      "Develop interior design concepts and presentations",
      "Select materials, finishes, and furniture",
      "Create detailed drawings and specifications",
      "Coordinate with vendors and contractors",
      "Manage client relationships and expectations"
    ],
    requirements: [
      "B.Des or Diploma in Interior Design",
      "3-5 years of relevant experience",
      "Expertise in 3ds Max, AutoCAD, and SketchUp",
      "Strong understanding of materials and finishes",
      "Excellent communication skills"
    ],
    benefits: [
      "Competitive compensation",
      "Health benefits",
      "Creative work environment",
      "Project completion bonuses",
      "Continuing education support"
    ]
  },
  {
    id: "3",
    title: "Civil Engineer",
    department: "Civil Engineering",
    location: "Ahmedabad, Gujarat",
    type: "full-time",
    experience: "2-4 years",
    description: "We need a skilled Civil Engineer to support our structural design and site supervision activities.",
    responsibilities: [
      "Assist in structural design and analysis",
      "Prepare engineering drawings and calculations",
      "Conduct site visits and inspections",
      "Coordinate with contractors on technical matters",
      "Ensure quality control on construction sites"
    ],
    requirements: [
      "B.E./B.Tech in Civil Engineering",
      "2-4 years of experience in construction or consulting",
      "Proficiency in STAAD, ETABS, or similar software",
      "Knowledge of IS codes and standards",
      "Valid driver's license"
    ],
    benefits: [
      "Competitive salary",
      "Site allowances",
      "Health insurance",
      "Career growth opportunities",
      "Training programs"
    ]
  },
  {
    id: "4",
    title: "Project Manager",
    department: "Project Management",
    location: "Mumbai, Maharashtra",
    type: "full-time",
    experience: "7-10 years",
    description: "Lead and manage construction projects from inception to handover, ensuring delivery within time and budget.",
    responsibilities: [
      "Overall project planning and scheduling",
      "Budget management and cost control",
      "Team coordination and resource allocation",
      "Client communication and reporting",
      "Risk identification and mitigation"
    ],
    requirements: [
      "B.E./B.Tech in Civil Engineering or Architecture",
      "7-10 years of construction project management experience",
      "PMP certification preferred",
      "Experience with MS Project and Primavera",
      "Strong leadership and communication skills"
    ],
    benefits: [
      "Attractive salary package",
      "Performance incentives",
      "Company vehicle",
      "Comprehensive insurance",
      "Executive health checkups"
    ]
  },
  {
    id: "5",
    title: "Architecture Intern",
    department: "Architecture",
    location: "All Locations",
    type: "internship",
    experience: "Final year / Recent graduate",
    description: "Gain hands-on experience in architectural design and documentation while working alongside experienced professionals.",
    responsibilities: [
      "Assist senior architects with design development",
      "Prepare drawings and 3D models",
      "Research materials and building systems",
      "Attend site visits and client meetings",
      "Support documentation and presentation tasks"
    ],
    requirements: [
      "Currently pursuing or recently completed B.Arch",
      "Basic proficiency in AutoCAD and SketchUp",
      "Strong design sensibility",
      "Eagerness to learn",
      "Good communication skills"
    ],
    benefits: [
      "Monthly stipend",
      "Mentorship from senior architects",
      "Certificate of completion",
      "Potential for full-time employment",
      "Exposure to diverse projects"
    ]
  }
]

export function getJobById(id: string): Job | undefined {
  return jobs.find(job => job.id === id)
}
