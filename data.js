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
    { name: "Photo & Videography", description: "Photo production, Video production, visual storytelling, image selection, and post-production." },
    { name: "Creative & Art", description: "Visual identity, graphic design, layouts, art direction, Fashion features, styling, runway coverage, and creative concepts." },
    { name: "Management", description: "Company leadership, publication management, and daily operations." },
    { name: "Marketing, Socmed & PR", description: "Brand partnerships, communications, campaigns, and audience engagement." }
  ],
  employees: [
    {
      name: "Adrian Pratama", role: "Editor-in-Chief", department: "Management",
      joined: "2017", initials: "AP", photo: "adrian.jpg",
      bio: "Ikutan merintis VELVET dari jaman masih anak perusahaan sampai sekarang udah punya nama di Internasional. Pacaran 11 tahun bukannya berakhir di pelaminan malah berakhir di hotel ((Mergokin cewenya selingkuh))",
      education: "Institut Teknologi Bandung - Bussiness & Management (2013-2017).", 
      skills: ["Editorial Leadership", "Strategic Planning", "Publishing", "#STOPTHEWEDDING"]
    },
    {
      name: "Javier Wijaya", role: "Managing Editor", department: "Editorial",
      joined: "2017", initials: "JW", photo: "javier.jpg",
      bio: "Wujud nyata Golden Retriever Husband alias nurut sama Mbak Istri, Green Flag parah dan jadi Standar cewek-cewek VELVET buat nyari pacar atau calon suami.",
      education: "Universitas Indonesia - Communication Studies (2014-2018).", 
      skills: ["Editorial Management", "Copy Editing", "Project Coordination", "Nggak ada kata sibuk buat Mbak Istri alias tau prioritas dan jago manajemen waktu.]
    },
    {
      name: "Kiara Anindita", role: "Art Director & Fashion Stylist", department: "Creative & Art",
      joined: "2018", initials: "KA", photo: "kiara.jpg",
      bio: "#TROPHYWIFE alias duduk manis duit ngalir dari Mas Suami. Bekerja hanya untuk bersenang-senang.",
      education: "Universitas Airlangga - International Relationship (2014-2018).", 
      skills: ["Art Direction", "Visual Identity", "Graphic Design", "Jago masakan apa aja, kerja bareng Kiara nggak bakal kelaperan!]
    },
    {
      name: "Ghea Paramitha", role: "Beauty Editor", department: "Editorial",
      joined: "2021", initials: "GP", photo: "ghea.jpg",
      bio: "Korban ke-brengsek-an laki-laki mokondo. Pacaran 5 tahun juga akhirnya batal nikah gara-gara cewek yang ngaku jadi istri sirih dari pacar Ghea. She depressed and Hooked up with her BOSS",
      education: "Universitas Padjajaran - Psychology  (2017-2021)", 
      skills: ["Beauty Journalism", "Feature Writing", "Research", #STOPTHEWEDDING2 ]
    },
    {
      name: "Farel Nugraha", role: "Videographer", department: "Photo & Videography",
      joined: "2023", initials: "FN", photo: "farel.jpg",
      bio: "Ikon cowok BINGUNG. Keliatan deket sama si A-B-C tapi nggak pernah ada status, tiap di tanya "Itu pacar lo?" "Nggak pacaran kok, kita berkomitemn aja" alias PRET",
      education: "Institut Teknologi Sepuluh Nopember - Mechanical Engineering (2019-2024)", 
      skills: ["Video Editing", "Visual Curation", "Production" "POKOKNYA BINGUNG UDAH"]
    },
    {
      name: "Tania Putri", role: "Social Media & PR Specialist", department: "Marketing, Socmed & PR",
      joined: "2023", initials: "TP", photo: "images/tania.jpg",
      bio: "Kalo Farel Ikon cowok bingung, maka Tania Duta Temen Tapi Mesra.",
      education: "Universitas Indonesia - Communication Studies (2019-2023).", 
      skills: ["Excellent Communication", "Trend Research", "Creative Copywriting", "HTS 3 Taun nggak jadian"]
    },
    {
      name: "Nadine Arunika", role: "Fashion Editor", department: "Editorial",
      joined: "2020", initials: "NA", photo: "nadine.jpg",
      bio: "Mbak-mbak karir, punya calon mapan yang lebih dewasa dan pengertian, life at many people dream of lah intinya. Tapi.. Ya.. Kehidupan.. Nggak ada yang tau..",
      education: "Universitas Indonesia — Communication Studies (2017-2021)",
      skills: ["Fashion Journalism", "Editorial Direction", "Feature Writing", "Brand Collaboration", "Team Leadership", "Tetep senyum walau pengen nimpuk Raka"]
    },
    {
      name: "Raka Adyatama", role: "Photographer", department: "Photo & Videography",
      joined: "2025", initials: "RA", photo: "raka.jpg",
      bio: "Pemuda rebel yang sedang mencoba segala macam pekerjaan dan kehidupan di dunia. Haha Hihi sana sini, tapi kerjaan tetep oke dan nggak pernah gagal bikin orang-orang geleng-geleng kepala.",
      education: "ISI Yogyakarta — Visual Communication Design (2019–2024)",
      skills: ["Fashion Photography", "Editorial Photography", "Portraiture", "Lightroom", "Photoshop", "Menguasai hampir seluruh punchline Bumbble"]
    }
  ]
};
