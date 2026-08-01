// ============================================================
// PORTFOLIO DATA — Edit this file to update your portfolio
// ============================================================

const PORTFOLIO_DATA = {

  // ── Personal Info ──────────────────────────────────────────
  personal: {
    name: "Khandokar Zaeem Hasan",
    title: "Software Engineer (Android & iOS Developer)",
    tagline: "Crafting beautiful & performant mobile experiences",
    typingStrings: [
      "Software Engineer",
      "Android Developer",
      "iOS Developer",
      "Cross-platform Developer",
      "Open Source Contributor"
    ],
    heroDescription:
      "I build polished, high-performance Android applications with clean architecture and modern Jetpack libraries. Also have an experience in swiftUi. For a long time in my career I was worked in cross platfrom using Flutter.",
    resumeFile: "assets/resume.pdf",
    avatarEmoji: "👨‍💻", // Used as placeholder; replace with an image URL if desired
    // avatarImage: "assets/avatar.jpg",  // Uncomment & add your photo
  },

  // ── About ──────────────────────────────────────────────────
  about: {
    description: [
      "I'm a passionate Android Developer with a keen eye for detail and a deep love for building apps that users genuinely enjoy. I specialize in Kotlin, Jetpack Compose, Flutter, SwiftUi and modern Android architecture patterns.",
      "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or diving into design systems to bridge the gap between engineering and user experience."
    ],
    stats: [
      { value: "3.5+", label: "Years Experience" },
      { value: "13+", label: "Projects Completed" }
    ]
  },

  // ── Skills ─────────────────────────────────────────────────
  skills: [
    {
      category: "Mobile Development",
      icon: "📱",
      items: [
        { name: "Flutter", level: 95 },
        { name: "Kotlin", level: 80 },
        { name: "Jetpack Compose", level: 70 },
        { name: "Android SDK", level: 75 },
        { name: "Java", level: 65 },
        { name: "SwiftUi", level: 80 },
      ]
    },
    {
      category: "Architecture & Tools",
      icon: "🏗️",
      items: [
        { name: "MVVM / Clean Architecture", level: 85 },
        { name: "Dagger / Hilt", level: 80 },
        { name: "Retrofit / OkHttp", level: 88 },
        { name: "Room Database", level: 82 }
      ]
    },
    {
      category: "Dev & Design",
      icon: "🎨",
      items: [
        { name: "Git & GitHub", level: 90 },
        { name: "Firebase", level: 78 },
        { name: "Figma / UI Design", level: 70 },
        { name: "CI/CD (GitHub Actions)", level: 72 }
      ]
    }
  ],

  // ── Projects ───────────────────────────────────────────────
  projects: [
    {
      title: "Alpha POS",
      description:
        "Alpha POS is an all-in-one Point of Sale (POS) application built for modern business operations. It allows users to manage sales, inventory, staff attendance, transactions (DO-DI, TO-TI), and generate detailed reports — all from a single mobile platform. Designed with a user-friendly interface and robust backend, Alpha POS is suitable for retail stores, wholesale businesses, and service-based operations. It's built to be simple enough for small businesses, yet powerful enough for scaling needs.",
      tags: ["Kotlin", "XML", "Bluetooth Printer", "Inner Printer", "Sunmi Printer", "Data sync", "Secondery Display", "MVVM"],
      category: "app",
      image: "https://play-lh.googleusercontent.com/652FjLxg0qWJ5kqIZC_pzq191TV8k3GAbZHoDc3YswuFC43zkZQxILeCYoMdKyi-bCSc2ICwihGcU-Tmj2JYyxU=w480-h960-rw", // Will use gradient placeholder
      liveUrl: "https://play.google.com/store/apps/details?id=com.prangroup.mis.mis93&hl=en",
      githubUrl: "https://github.com/Zaeem104158/ALPHA-POS-PRAN-RFL-GROUP"
    },
    {
      title: "Rele e Service",
      description:
        "This is an inventory software for manage the product count by barcode using machine or camera, also can purchase order.",
      tags: ["Kotlin", "Retrofit", "Room", "Data Sync", "Scheduler", "Barcode", "XML", "Material3"],
      category: "app",
      image: "https://play-lh.googleusercontent.com/QDIKm-fDG4tKvFyqTkns6ShN0--mdcUJoLbxJfu1Uaav4HaL1Wmcjml4sMEsYwftSxamdzyxSNQK3h9NgvasFg=w480-h960-rw",
      liveUrl: "https://play.google.com/store/apps/details?id=com.prgmis.alphaone",
      githubUrl: "https://github.com/Zaeem104158/Alpha-One-PRAN-RFL"
    },
    {
      title: "Rele e Service",
      description:
        "RFL business management software for maintain the day to day business record",
      title: "Alpha One",
      description:
        "This is an inventory management software. Manange product counting for the inventory and creating the purchase order.",
      tags: ["Kotlin", "Retrofit", "Room", "Data Sync", "Scheduler", "Barcode", "XML", "Material3"],
      category: "app",
      image: "https://play-lh.googleusercontent.com/754tE1E4sN9yDFLYjaucugQKNytuf1luTCHPACZtCZFLOGqvqtDryASPqph5ONT5n75MYqk1GARoe47NLZYexn4=w5120-h2880-rw",
      liveUrl: "https://play.google.com/store/apps/details?id=com.prangroup.mis.rele_service&hl=en",
      githubUrl: "https://github.com/Zaeem104158/PRAN-RFL-RELE-SERVICE"
    },
    {
      title: "Biddabari",
      description:
        "Biddabari is an online learning platform for students. It provides online courses, video lectures, online exams, and online tests for students. It is a comprehensive platform for students who want to learn online.",
      tags: ["Flutter", "Payment Integration", "Firebase", "Youtube Player", "Youtube Download", "Online Exam"],
      category: "app",
      image: "https://play-lh.googleusercontent.com/T_XR6rfKArSoCE0UPYA8l9doEAWxLcvn96FIG4c3IX_CJI4V7yYKNG39f2tW2cDiOjyTCuZqE0Dkw5LBniZoJA=w5120-h2880-rw",
      liveUrl: "https://play.google.com/store/apps/details?id=com.nextive.biddabari2021",
      githubUrl: null
    },
    {
      title: "OneAsiatic",
      description:
        "Asiatic is a business management software for hrm software.",
      tags: ["Flutter", "Getx"],
      category: "app",
      image: null,
      liveUrl: null,
      githubUrl: null
    },
    {
      title: "MYCash",
      description:
        "An open-source collection of reusable Jetpack Compose components and design tokens for rapid prototyping.",
      tags: ["Kotlin", "Compose", "Open Source", "Design System"],
      category: "library",
      image: "https://play-lh.googleusercontent.com/7BQNeP0w3munTza2uvSPOac43KM6IDBtaT555QGKK4PtEpVXEmioIydtORpeQEAdXMo0NyBkGqoFyvn4CEAy=w480-h960-rw",
      liveUrl: "https://play.google.com/store/apps/details?id=com.mycash",
      githubUrl: null
    }
  ],

  // ── Experience ─────────────────────────────────────────────
  experiences: [
    {
      role: "Sub Assistant Manager (Android)",
      company: "PRAN-RFL Group",
      location: "Dhaka, Bangladesh",
      period: "Apr 2026 — Present",
      description: [
        "Leading development of Alpha POS Version 2 while maintaining the existing Version 1.",
        "Developed inventory management, QPOD, and Alpha Care applications using Native Android.",
        "Built scalable enterprise POS solutions following Clean Architecture principles.",
        "Contributed to iOS development using Swift for selected projects."
      ]
    },
    {
      role: "Software Engineer (Flutter)",
      company: "Yuma Technology Ltd.",
      location: "Mirpur DOHS, Dhaka",
      period: "Aug 2025 — Apr 2026",
      description: [
        "Developed healthcare management applications using Flutter.",
        "Built scalable cross-platform mobile solutions for Android and iOS.",
        "Collaborated with backend teams to integrate REST APIs and business workflows.",
        "Maintained clean, reusable, and production-ready application architecture."
      ]
    },
    {
      role: "Software Engineer (Flutter)",
      company: "Allione Softtech Limited",
      location: "Motijheel, Dhaka",
      period: "Mar 2025 — Jul 2025",
      description: [
        "Maintained and enhanced the MYCash application for Mercantile Bank PLC.",
        "Refactored the application architecture for improved maintainability.",
        "Integrated and maintained 186 SOAP APIs.",
        "Improved application stability and performance before project handover."
      ]
    },
    {
      role: "Software Engineer",
      company: "Biddabari Publication",
      location: "Dhaka, Bangladesh",
      period: "Jan 2025 — May 2025",
      description: [
        "Led the mobile application development team for an e-learning platform.",
        "Designed project architecture and implemented complex application features.",
        "Developed online exam modules, payment integration, SMS services, and secure video playback.",
        "Delivered scalable Flutter applications with clean and maintainable code."
      ]
    },
    {
      role: "Flutter Developer",
      company: "AbirTech Solution Ltd.",
      location: "Lahore, Pakistan (Remote)",
      period: "Jun 2024 — Apr 2025",
      description: [
        "Developed multiple school management applications using Flutter.",
        "Built and maintained 4–5 cross-platform mobile applications.",
        "Published desktop applications for Windows alongside mobile solutions.",
        "Worked closely with international clients in an agile environment."
      ]
    },
    {
      role: "Software Engineer",
      company: "Asiatic Marketing Communications Limited",
      location: "Banani, Dhaka",
      period: "Sep 2023 — Feb 2025",
      description: [
        "Developed and maintained the company's HRM mobile application.",
        "Implemented modern Flutter UI and reusable application components.",
        "Collaborated with designers and backend developers to deliver production-ready features.",
        "Improved application usability and performance."
      ]
    },
    {
      role: "Mobile App Developer",
      company: "Dhrubok InfoTech Services Ltd.",
      location: "Shamoly, Dhaka",
      period: "Oct 2022 — Feb 2023",
      description: [
        "Developed and deployed Flutter mobile applications.",
        "Built responsive Flutter UI components following modern design practices.",
        "Participated throughout the application development lifecycle.",
        "Delivered production-ready Android applications."
      ]
    }
  ],

  // ── Education ──────────────────────────────────────────────
  education: [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "East West University",
      period: "2017 — 2021",
      description:
        "Studied software engineering, algorithms, databases, computer networks, and mobile application development while completing undergraduate research and practical software projects.",
      icon: "🎓"
    },
    {
      degree: "Higher Secondary Certificate (Science)",
      institution: "National Ideal College",
      period: "2013 — 2015",
      description:
        "Completed higher secondary education with a Science background, focusing on Mathematics, Physics, Chemistry, and ICT.",
      icon: "📘"
    },
    {
      degree: "Secondary School Certificate (Science)",
      institution: "Ideal School and College",
      period: "2010 — 2013",
      description:
        "Completed secondary education with a strong academic foundation in Science and Mathematics.",
      icon: "🏫"
    }
  ],

  // ── Contact & Social ───────────────────────────────────────
  contact: {
    email: "zaeemhasan007@gmail.com",
    phone: "+8801521203530",
    location: "192/1, East Goran, Modina Mosjid Road, Road - 9, Khilgaon, Dhaka - 1219, Bangladesh",
    formAction: null // Replace with Formspree/Netlify Forms endpoint
  },

  social: [
    {
      platform: "GitHub",
      url: "https://github.com/Zaeem104158",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/khandokar-zaeem-hasan-b4b3a321a/",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`
    },

    {
      platform: "Email",
      url: "mailto:zaeem@example.com",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`
    }
  ],

  // ── Navigation ─────────────────────────────────────────────
  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
  ]
};
