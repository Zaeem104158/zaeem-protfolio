// ============================================================
// PORTFOLIO DATA — Edit this file to update your portfolio
// ============================================================

const PORTFOLIO_DATA = {

  // ── Personal Info ──────────────────────────────────────────
  personal: {
    name: "Zaeem Ahmed",
    title: "Android Developer",
    tagline: "Crafting beautiful & performant mobile experiences",
    typingStrings: [
      "Android Developer",
      "Kotlin Enthusiast",
      "UI/UX Lover",
      "Open Source Contributor"
    ],
    heroDescription:
      "I build polished, high-performance Android applications with clean architecture and modern Jetpack libraries.",
    resumeFile: "assets/resume.pdf",
    avatarEmoji: "👨‍💻", // Used as placeholder; replace with an image URL if desired
    // avatarImage: "assets/avatar.jpg",  // Uncomment & add your photo
  },

  // ── About ──────────────────────────────────────────────────
  about: {
    description: [
      "I'm a passionate Android Developer with a keen eye for detail and a deep love for building apps that users genuinely enjoy. I specialize in Kotlin, Jetpack Compose, and modern Android architecture patterns.",
      "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or diving into design systems to bridge the gap between engineering and user experience."
    ],
    stats: [
      { value: "3+", label: "Years Experience" },
      { value: "15+", label: "Projects Completed" },
      { value: "10+", label: "Happy Clients" },
      { value: "5K+", label: "Lines of Kotlin" }
    ]
  },

  // ── Skills ─────────────────────────────────────────────────
  skills: [
    {
      category: "Mobile Development",
      icon: "📱",
      items: [
        { name: "Kotlin", level: 90 },
        { name: "Jetpack Compose", level: 85 },
        { name: "Android SDK", level: 88 },
        { name: "Java", level: 80 }
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
      title: "TaskFlow",
      description:
        "A productivity app with drag-and-drop task boards, reminders, and cloud sync. Built with Jetpack Compose and Firebase.",
      tags: ["Kotlin", "Compose", "Firebase", "MVVM"],
      category: "app",
      image: null, // Will use gradient placeholder
      liveUrl: "#",
      githubUrl: "https://github.com"
    },
    {
      title: "WeatherSnap",
      description:
        "Real-time weather app with beautiful animations, location-based forecasts, and offline caching using Room.",
      tags: ["Kotlin", "Retrofit", "Room", "Material3"],
      category: "app",
      image: null,
      liveUrl: "#",
      githubUrl: "https://github.com"
    },
    {
      title: "CryptoTracker",
      description:
        "Cryptocurrency price tracker with live charts, portfolio management, and price alerts via WorkManager.",
      tags: ["Kotlin", "Compose", "REST API", "Charts"],
      category: "app",
      image: null,
      liveUrl: "#",
      githubUrl: "https://github.com"
    },
    {
      title: "FitPulse",
      description:
        "Fitness tracking app with workout routines, progress charts, and Google Fit integration.",
      tags: ["Kotlin", "Health Connect", "Compose", "Hilt"],
      category: "app",
      image: null,
      liveUrl: "#",
      githubUrl: "https://github.com"
    },
    {
      title: "DevNotes",
      description:
        "Markdown note-taking app for developers with syntax highlighting, code snippet storage, and GitHub Gist export.",
      tags: ["Kotlin", "Room", "Material3", "Markdown"],
      category: "library",
      image: null,
      liveUrl: "#",
      githubUrl: "https://github.com"
    },
    {
      title: "ComposeUIKit",
      description:
        "An open-source collection of reusable Jetpack Compose components and design tokens for rapid prototyping.",
      tags: ["Kotlin", "Compose", "Open Source", "Design System"],
      category: "library",
      image: null,
      liveUrl: "#",
      githubUrl: "https://github.com"
    }
  ],

  // ── Experience ─────────────────────────────────────────────
  experience: [
    {
      role: "Android Developer",
      company: "TechNova Solutions",
      location: "Remote",
      period: "Jan 2024 — Present",
      description: [
        "Lead development of customer-facing Android apps serving 50K+ users",
        "Migrated legacy XML views to Jetpack Compose, reducing UI code by 40%",
        "Implemented CI/CD pipelines with GitHub Actions for automated builds and testing",
        "Mentored junior developers on clean architecture and best practices"
      ]
    },
    {
      role: "Junior Android Developer",
      company: "AppForge Studio",
      location: "Dhaka, Bangladesh",
      period: "Jun 2022 — Dec 2023",
      description: [
        "Built and maintained 5+ production Android applications",
        "Integrated RESTful APIs using Retrofit and managed local caching with Room",
        "Collaborated with UI/UX designers to implement pixel-perfect Material Design interfaces",
        "Reduced app crash rate by 60% through systematic bug fixing and crash analytics"
      ]
    },
    {
      role: "Android Intern",
      company: "CodeCraft Labs",
      location: "Dhaka, Bangladesh",
      period: "Jan 2022 — May 2022",
      description: [
        "Developed sample apps and prototypes to learn Android development fundamentals",
        "Contributed to internal SDK libraries used across multiple projects",
        "Participated in code reviews and agile sprint ceremonies"
      ]
    }
  ],

  // ── Education ──────────────────────────────────────────────
  education: [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "University of Dhaka",
      period: "2018 — 2022",
      description:
        "Focused on software engineering, mobile computing, and data structures. Graduated with honors.",
      icon: "🎓"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Dhaka College",
      period: "2016 — 2018",
      description: "Science group with a focus on Mathematics and Physics.",
      icon: "📚"
    }
  ],

  // ── Contact & Social ───────────────────────────────────────
  contact: {
    email: "zaeem@example.com",
    phone: "+880 1XXX-XXXXXX",
    location: "Dhaka, Bangladesh",
    formAction: "#" // Replace with Formspree/Netlify Forms endpoint
  },

  social: [
    {
      platform: "GitHub",
      url: "https://github.com/zaeem",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/zaeem",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/zaeem",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>`
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
