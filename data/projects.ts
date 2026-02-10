export interface Project {
    id: string
    slug: string
    title: string
    client: string
    location: string
    type: string
    description: string
    coverImage: string
    gallery: string[]
    year?: string
    area?: string
    status: "Completed" | "Ongoing"
}

export const projects: Project[] = [
    {
        id: "1",
        slug: "dhirubhai-bajarangpura",
        title: "Dhirubhai Residence",
        client: "Dhirubhai",
        location: "Bajarangpura",
        type: "Residential",
        description: "A stunning residential project that combines modern aesthetics with traditional values. This home features spacious living areas, elegant interiors, and meticulous attention to detail throughout.",
        coverImage: "/images/projects/project1.jpeg",
        gallery: [
            "/images/inside_project/Living_View_A.jpg.jpeg",
            "/images/inside_project/Living_View_B.jpg.jpeg",
            "/images/inside_project/BR_02_View_A.jpg.jpeg",
            "/images/inside_project/BR_02_View_B.jpg.jpeg",
            "/images/inside_project/Living_View_C.jpg.jpeg",
            "/images/inside_project/Living_View_D.jpg.jpeg",
        ],
        status: "Completed",
    },
    {
        id: "2",
        slug: "bipinbhai-ratanpar",
        title: "Bipinbhai Residence",
        client: "Bipinbhai",
        location: "Ratanpar",
        type: "Residential",
        description: "An exquisite residential development in Ratanpar, featuring contemporary design elements and premium finishes. This project showcases our commitment to quality and client satisfaction.",
        coverImage: "/images/projects/project2.jpeg",
        gallery: [
            "/images/inside_project/Living_View_A.jpg.jpeg",
            "/images/inside_project/Living_View_B.jpg.jpeg",
            "/images/inside_project/BR_02_View_A.jpg.jpeg",
            "/images/inside_project/BR_02_View_B.jpg.jpeg",
            "/images/inside_project/Living_View_C.jpg.jpeg",
            "/images/inside_project/Living_View_D.jpg.jpeg",
        ],
        status: "Completed",
    },
    {
        id: "3",
        slug: "hirenbhai-golani-shiv-dharmanandan",
        title: "Hirenbhai Golani - Shiv Dharmanandan",
        client: "Hirenbhai Golani",
        location: "Shiv Dharmanandan, Ratanpar",
        type: "Residential",
        description: "A masterpiece of architectural excellence in the heart of Ratanpar. This residence combines luxury living with functional design, creating a perfect harmony of comfort and style.",
        coverImage: "/images/projects/project3.jpeg",
        gallery: [
            "/images/inside_project/Living_View_A.jpg.jpeg",
            "/images/inside_project/Living_View_B.jpg.jpeg",
            "/images/inside_project/BR_02_View_A.jpg.jpeg",
            "/images/inside_project/BR_02_View_B.jpg.jpeg",
            "/images/inside_project/Living_View_C.jpg.jpeg",
            "/images/inside_project/Living_View_D.jpg.jpeg",
        ],
        status: "Completed",
    },
    {
        id: "4",
        slug: "bhavanbhai-vaghela-ratanpar",
        title: "Bhavanbhai Vaghela Residence",
        client: "Bhavanbhai Vaghela",
        location: "Ratanpar",
        type: "Residential",
        description: "A beautiful residential project that reflects modern living standards while maintaining traditional warmth. Features include spacious rooms, modern amenities, and thoughtful design.",
        coverImage: "/images/projects/project4.jpeg",
        gallery: [
            "/images/inside_project/Living_View_A.jpg.jpeg",
            "/images/inside_project/Living_View_B.jpg.jpeg",
            "/images/inside_project/BR_02_View_A.jpg.jpeg",
            "/images/inside_project/BR_02_View_B.jpg.jpeg",
            "/images/inside_project/Living_View_C.jpg.jpeg",
            "/images/inside_project/Living_View_D.jpg.jpeg",
        ],
        status: "Completed",
    },
    {
        id: "5",
        slug: "jaypalshingh-zala-ratanpar",
        title: "Jaypalshingh Zala Residence",
        client: "Jaypalshingh Zala",
        location: "Ratanpar",
        type: "Residential",
        description: "An outstanding residential property showcasing contemporary architecture and interior design. Every corner of this home has been crafted with precision and care.",
        coverImage: "/images/projects/project5.jpeg",
        gallery: [
            "/images/inside_project/Living_View_A.jpg.jpeg",
            "/images/inside_project/Living_View_B.jpg.jpeg",
            "/images/inside_project/BR_02_View_A.jpg.jpeg",
            "/images/inside_project/BR_02_View_B.jpg.jpeg",
            "/images/inside_project/Living_View_C.jpg.jpeg",
            "/images/inside_project/Living_View_D.jpg.jpeg",
        ],
        status: "Completed",
    },
    {
        id: "6",
        slug: "khushalbhai-patel-patidar-township",
        title: "Khushalbhai Patel - Patidar Sanskruti Township",
        client: "Khushalbhai Patel",
        location: "Patidar Sanskruti Township, Ratanpar",
        type: "Residential",
        description: "A prestigious residential development at Patidar Sanskruti Township. This project exemplifies our expertise in creating luxurious yet practical living spaces.",
        coverImage: "/images/projects/project6.jpeg",
        gallery: [
            "/images/inside_project/Living_View_A.jpg.jpeg",
            "/images/inside_project/Living_View_B.jpg.jpeg",
            "/images/inside_project/BR_02_View_A.jpg.jpeg",
            "/images/inside_project/BR_02_View_B.jpg.jpeg",
            "/images/inside_project/Living_View_C.jpg.jpeg",
            "/images/inside_project/Living_View_D.jpg.jpeg",
        ],
        status: "Completed",
    },
]

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find(project => project.slug === slug)
}
