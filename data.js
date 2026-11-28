/*
  EDIT YOUR AU CONTENT HERE.
  Add, remove, or update employee objects in the employees array.
  For a portrait, use an image URL in the "photo" field.
  Example: photo: "images/nadine.jpg"
*/
const siteData = {
  company: {
    name: "VELVET Media Group",
    publication: "VELVET Magazine",
    founded: "2017",
    location: "SCBD, South Jakarta, Indonesia",
    tagline: "The art of everything"
  },
  departments: [
    { name: "Editorial", description: "Research, writing, interviews, editing, and editorial planning." },
    { name: "Fashion", description: "Fashion features, styling, runway coverage, and creative concepts." },
    { name: "Photo & Videography", description: "Photo production, Video production, visual storytelling, image selection, and post-production." },
    { name: "Creative & Art", description: "Visual identity, graphic design, layouts, and art direction." },
    { name: "Management", description: "Company leadership, publication management, and daily operations." },
    { name: "Marketing, Socmed & PR", description: "Brand partnerships, communications, campaigns, and audience engagement." }
  ],
  employees: [
    {
      name: "Adrian Pratama", role: "Editor-in-Chief", department: "Management",
      joined: "2017", initials: "AP", photo: "images/adrian.jpg",
      bio: "Leads VELVET's editorial vision, oversees publication standards, and makes sure every issue carries a distinct identity.",
      education: "Institut Teknologi Bandung - Bussiness & Management (2013-2017).", 
      skills: ["Editorial Leadership", "Strategic Planning", "Publishing"]
    },
    {
      name: "Javier Wijaya", role: "Managing Editor", department: "Editorial",
      joined: "2017", initials: "JW", photo: "images/javier.jpg",
      bio: "Coordinates editorial operations, manages publication schedules, and connects the creative vision with everyday newsroom work.",
      education: "Universitas Indonesia - Communication Studies (2014-2018).", 
      skills: ["Editorial Management", "Copy Editing", "Project Coordination"]
    },
    {
      name: "Kiara Anindita", role: "Art Director & Fashion Stylist", department: "Creative & Art",
      joined: "2018", initials: "KA", photo: "images/kiara.jpg",
      bio: "Shapes the visual identity of VELVET, from editorial layouts to campaign concepts and visual direction.",
      education: "Universitas Airlangga - International Relationship (2014-2018).", 
      skills: ["Art Direction", "Visual Identity", "Graphic Design"]
    },
    {
      name: "Ghea Paramitha", role: "Beauty Editor", department: "Editorial",
      joined: "2021", initials: "GP", photo: "images/ghea.jpg",
      bio: "Covers beauty trends, skincare, makeup, product features, and the people behind the beauty industry.",
      education: "Universitas Padjajaran - Psychology  (2017-2021)", 
      skills: ["Beauty Journalism", "Feature Writing", "Research"]
    },
    {
      name: "Farel Nugraha", role: "Videographer", department: "Photo & Videography",
      joined: "2023", initials: "FN", photo: "images/farel.jpg",
      bio: "Oversees video selections, visual consistency, video editing, and videography production.",
      education: "Institut Teknologi Sepuluh Nopember - Mechanical Engineering (2019-2024)", 
      skills: ["Video Editing", "Visual Curation", "Production"]
    },
    {
      name: "Tania Putri", role: "Social Media & PR Specialist", department: "Marketing, Socmed & PR",
      joined: "2023", initials: "TP", photo: "images/tania.jpg",
      bio: "Social media strategist and public relations specialist with a love for fashion, digital culture, and creative communication. Turning stories into conversations and brands into experiences.",
      education: "Universitas Indonesia - Communication Studies (2019-2023).", 
      skills: ["Excellent Communication", "Trend Research", "Creative Copywriting"]
    },
    {
      name: "Nadine Arunika", role: "Fashion Editor", department: "Editorial",
      joined: "2020", initials: "NA", photo: "images/nadine.jpg",
      bio: "A seasoned fashion editor responsible for shaping fashion stories, leading editorial concepts, and maintaining VELVET's fashion direction.",
      education: "Universitas Indonesia — Communication Studies (2017-2021)",
      
      skills: ["Fashion Journalism", "Editorial Direction", "Feature Writing", "Brand Collaboration", "Team Leadership"]
    },
    {
      name: "Raka Adyatama", role: "Photographer", department: "Photo & Videography",
      joined: "2025", initials: "RA", photo: "images/raka.jpg",
      bio: "A visual storyteller specializing in fashion editorials, portraits, and commercial photography. Joined VELVET in 2025 after working as a freelance and junior photographer.",
      education: "ISI Yogyakarta — Visual Communication Design (2019–2024)",
      
      skills: ["Fashion Photography", "Editorial Photography", "Portraiture", "Lightroom", "Photoshop"]
    }
  ]
};
