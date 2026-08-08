export const IMG = {
  nebula: "https://images.hostinger.com/8e7d06cf-af47-4c15-acb2-bce5df927017.png",
  mountains: "https://images.hostinger.com/09ad053d-cc84-413d-b6bb-75ebf416de69.png",
  hud: "https://images.hostinger.com/53e924b5-adb5-4af2-bed1-5218bb047e65.png",
  portrait: "https://horizons-cdn.hostinger.com/a327e9ac-ed50-4fbc-a9cd-63a73a4a6614/77a1ff76c9a3df66a85f537f09cbb9a1.png",
  photos: [
    { src: "/gallery1.jpg", label: "Sunset Reflection / Nainital Lake" },
    { src: "/gallery2.jpg", label: "Cloud Reflections / Nainital" },
    { src: "/gallery3.jpg", label: "Flight of Pigeons / Nainital Valley" },
    { src: "/gallery4.jpg", label: "Golden Peak / Himalayas" },
    { src: "/gallery5.jpg", label: "Panchachuli Range / Uttarakhand" },
    { src: "/gallery6.jpg", label: "Parmarth Niketan Temple / Rishikesh" },
    { src: "/gallery7.png", label: "Star Trails / Uttarakhand" },
    { src: "/gallery8.png", label: "Golden Hour / Nainital" },
    { src: "/gallery9.png", label: "Macro / Morning Dew" },
  ],
};

export const CONTACT = {
  email: "samriddhigururani@gmail.com",
  github: "https://github.com/ByteByBuoyant",
  linkedin: "https://www.linkedin.com/in/samriddhi-gururani/",
  instagram: "https://www.instagram.com/sam.mzzz06/",
  leetcode: "https://leetcode.com/u/ByteByCode/",
  resume: "/resume.pdf",
  location: "Nainital, Uttarakhand, India",
};

export const SKILLS = [
  { group: "Languages", items: ["Python", "Java", "C", "JavaScript", "HTML5", "CSS3", "LaTeX"] },
  { group: "AI / ML & CV", items: ["Keras", "OpenCV", "NumPy", "Deep Learning", "Computer Vision"] },
  { group: "Web & API", items: ["Flask", "FastAPI", "React", "REST APIs"] },
  { group: "Tools", items: ["Git", "GitHub", "VS Code", "Jupyter", "Google Colab"] },
  { group: "Creative", items: ["Premiere Pro", "Photoshop", "Illustrator", "Cinematography"] },
];

export const PROJECTS = [
  {
    id: "saksham",
    title: "Saksham Saathi",
    tag: "EdTech · Accessibility",
    date: "April 2025",
    tech: ["HTML", "CSS", "JavaScript", "Flask", "FastAPI"],
    repo: "https://github.com/ByteByBuoyant/Saksham-Sathi",
    summary: "An interactive learning platform for children aged 4–14 with learning disabilities such as Dyslexia and ADHD.",
    problem: "Children with Dyslexia and ADHD struggle with conventional learning material that isn't adaptive or engaging.",
    solution: "A gamified platform pairing educational games and activities tuned to attention span and reading difficulty, giving special children a joyful, low-pressure way to learn.",
    impact: ["Age-adaptive learning games", "Activities designed for Dyslexia & ADHD", "Full-stack Flask + FastAPI backend"],
  },
  {
    id: "exosolara",
    title: "EXO-SOLARA",
    tag: "AI/ML · Astronomy",
    date: "October 2025",
    tech: ["Python", "Keras", "NumPy", "HTML", "CSS", "JavaScript"],
    repo: "https://github.com/ByteByBuoyant/EXO-SOLARA",
    summary: "A website for exoplanet detection and analysis using AI/ML concepts and astronomical datasets.",
    problem: "Detecting exoplanets from raw astronomical light-curve data requires heavy modelling most people can't access.",
    solution: "A trained deep-learning model wrapped in an interactive web experience that ingests astronomical datasets and surfaces exoplanet candidates with analysis.",
    impact: ["Keras deep-learning detection model", "Interactive dataset exploration", "Built for NASA Space Apps Challenge"],
  },
  {
    id: "drowsiness",
    title: "Driver Drowsiness Detection",
    tag: "Computer Vision · Safety",
    date: "Mar–Apr 2026",
    tech: ["Python", "OpenCV", "Keras", "NumPy"],
    repo: "https://github.com/ByteByBuoyant/Driver-Drowsiness-Detection-System",
    summary: "A deep-learning driver safety system that detects drowsiness via real-time facial and eye-movement analysis.",
    problem: "Drowsy driving causes thousands of preventable accidents; drivers rarely notice fatigue in time.",
    solution: "Real-time computer-vision pipeline tracking eye closure and facial cues, raising an alert the moment drowsiness patterns appear.",
    impact: ["Real-time facial & eye tracking", "OpenCV + Keras inference", "Instant fatigue alerting"],
  },
  {
    id: "examduty",
    title: "Exam Duty Timetable System",
    tag: "Automation · Full-stack",
    date: "May 2026 – present",
    tech: ["Python", "FastAPI", "HTML", "CSS", "JavaScript"],
    repo: CONTACT.github,
    summary: "A system to automate teacher timetable and exam-duty scheduling during examinations.",
    problem: "Manual exam-duty allocation across faculty is slow, error-prone and full of clashes.",
    solution: "A scheduling engine that automatically assigns teacher duties around constraints, eliminating conflicts and hours of admin work.",
    impact: ["Automated duty allocation", "Conflict-free scheduling", "Currently in active development"],
  },
];

export const TIMELINE = [
  { year: "2026", title: "Niti Extreme Ultra Run", place: "Niti Valley, Chamoli, Uttarakhand", note: "Uttarakhand Tourism Niti Valley Extreme Ultra Run finisher (June 2026)" },
  { year: "2026", title: "Watch The Code", place: "Graphic Era Hill University, Haldwani", note: "Coding competition participant (April 2026)" },
  { year: "2026", title: "MUNERA 2.0", place: "Graphic Era Hill University, Bhimtal", note: "Annual tech fest and coding competition (April 2026)" },
  { year: "2026", title: "Hill Marathon 2.0", place: "Graphic Era Hill University, Bhimtal", note: "Endurance running & marathon finisher (April 2026)" },
  { year: "2026", title: "HackTheWinter (National Hackathon)", place: "Graphic Era Hill University, Bhimtal", note: "National level hackathon participant (Jan 2026)" },
  { year: "2026", title: "ISCON 2026 — Paper Presentation", place: "IEEE ISCON Summit", note: "Presented research paper on Hillclimbing MPPT algorithm with buck-boost converter in solar power systems (Jan 2026)" },
  { year: "2025", title: "MUNERA 1.0", place: "Graphic Era Hill University, Bhimtal", note: "Technical event and coding challenge (Nov 2025)" },
  { year: "2025", title: "Global AI Summit — Paper Presentation", place: "Bennett University, Greater Noida", note: "Presented research paper: Real-Time AI-Driven ICU Patient Monitoring for ARDS Detection (Nov 2025)" },
  { year: "2025", title: "NASA Space Apps Challenge — 6th Rank", place: "24-Hour Hackathon", note: "Built EXO-SOLARA exoplanet detection website (Oct 2025)" },
  { year: "2025", title: "Nainital Monsoon Mountain Marathon", place: "Nainital, Uttarakhand", note: "Completed first 10k mountain endurance run (Sept 2025)" },
  { year: "2025", title: "SIH Hackathon — 5th Rank", place: "Graphic Era Hill University, Bhimtal", note: "24-Hour Smart India Hackathon finalist (Aug 2025)" },
  { year: "2025", title: "Hill Marathon 1.0 — 5th Place", place: "Graphic Era Hill University, Bhimtal", note: "Ranked 5th in the campus endurance run (April 2025)" },
  { year: "2024", title: "IEEE Student Branch — Campus Introduction", place: "Graphic Era Hill University", note: "Introduced IEEE student branch to the campus network (Sep 2024)" },
  { year: "2024", title: "B.Tech CSE Begins", place: "Graphic Era Hill University, Bhimtal", note: "B.Tech in Computer Science Engineering (GPA 8.62, Aug 2024 – Jun 2028)" },
];

export const PAPERS = [
  { title: "Real-Time AI-Driven Monitoring of ICU Patients for Early Detection of ARDS", venue: "Global AI Summit 2025 · Bennett University, Greater Noida", tag: "AI in Healthcare" },
  { title: "Hillclimbing MPPT Algorithm with Buck-Boost Converter in Solar Power Systems", venue: "IEEE ISCON Summit 2026", tag: "Renewable Energy" },
];

export const ACHIEVEMENTS = [
  { k: "5th", v: "SIH Hackathon — 24hr" },
  { k: "6th", v: "NASA Space Apps Challenge" },
  { k: "5th", v: "Hill Marathon 1.0" },
  { k: "8.62", v: "B.Tech CGPA" },
  { k: "2", v: "Research papers presented" },
  { k: "90%", v: "ISC · Class 12th" },
];

export const VOLUNTEER = [
  { org: "IEEE Student Branch, GEHU", role: "Secretary", period: "2024 – present" },
  { org: "Editorial Club GEHU", role: "Secretary", period: "2023 – present" },
  { org: "RUN2LIVE", role: "Active Contributor & Associate Member", period: "Nov 2022 – present" },
  { org: "Haldwani Online Sanstha (Annadhara Muhim)", role: "Volunteer — food distribution in govt hospitals", period: "2023 – 2025" },
  { org: "Roshan Duniya", role: "Cleanliness & donation drives", period: "2024 – 2025" },
];

export const BLOGS = [
  { title: "Teaching Machines to See Sleep", excerpt: "How OpenCV eye-aspect-ratio tracking became a real-time drowsiness alarm — and what it taught me about latency.", read: "6 min", tag: "Computer Vision" },
  { title: "Hunting Exoplanets with Keras", excerpt: "Turning noisy astronomical light-curves into confident predictions during a 24-hour NASA hackathon.", read: "8 min", tag: "AI/ML" },
  { title: "Designing for Different Minds", excerpt: "What I learned building Saksham Saathi for children with Dyslexia and ADHD.", read: "5 min", tag: "Accessibility" },
];

export const FUTURE = [
  "Deep dive into MLOps & model deployment at scale",
  "Publish EXO-SOLARA as an open research toolkit",
  "Build a cinematography + AI storytelling channel",
  "Internship at a top product/AI company (2026–27)",
];
