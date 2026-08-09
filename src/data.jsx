// Portfolio content — Mark Al S. Alejandro (from resume, July 2026)
const PORTFOLIO = {
  name: "Mark Al S. Alejandro",
  role: "Operations Integrator",
  focus: "AI · Web · Back-Office",
  location: "Commonwealth, Quezon City · PH",
  email: "markalejandro1115@gmail.com",
  phone: "+63 945 459 3273",
  timeZone: "UTC+8 · Asia / Manila",

  taglineLines: [
    { text: "I find the inefficiency.", italic: false },
    { text: "I build the fix.", script: true },
  ],

  heroMeta: [
    {
      label: "What I do",
      body: "I audit messy operations, then design AI-assisted automations and internal tools that turn manual work into repeatable systems — CRMs, workflows, dashboards, SOPs.",
    },
    {
      label: "Currently",
      body: "Product, social, and brand video for MedsPLUS Consulting. Daily transaction coordination for ImagineSD real estate. Open to selective freelance projects.",
    },
    {
      label: "Tools I live in",
      body: "Make · Zapier · n8n · HubSpot · Follow Up Boss · Base44 · Claude · Remotion · WordPress · Asana.",
    },
  ],

  nowItems: [
    {
      tag: "Now",
      title: "Running social + brand video for MedsPLUS Consulting",
      body: "A six-template design system for their social channels, now extended into short-form video rendered from code — so a weekly post is a data change rather than a rebuild.",
    },
    {
      tag: "Now",
      title: "Running the ImagineSD CRM Dashboard on Base44",
      body: "Custom internal dashboard I architected to replace a fragmented tool stack. Consolidates lead, client, and transaction tracking for a San Diego real estate team.",
    },
    {
      tag: "Building",
      title: "AIRA — a personal AI assistant framework",
      body: "A modular skill framework covering content support, transaction coordination, meeting prep, and tracking. Refining system prompts and context handling for real day-to-day use.",
    },
    {
      tag: "Learning",
      title: "AI agents for real estate transaction coordination",
      body: "Designing Claude-based prompting to monitor transaction status, surface missing items, and improve deadline visibility across active files.",
    },
  ],

  projects: [
    {
      num: "01",
      featured: true,
      title: "MedsPLUS Connect",
      titleEm: "· internal clinical webapp",
      year: "2024 — Now",
      type: "Case study",
      stack: ["React", "Supabase", "HubSpot"],
      desc: "A React + Supabase webapp that centralizes pharmacy workflows, GLP-1 program tracking, genomics data, and patient management for a healthcare consultancy.",
      previewLabel: "Internal webapp",
      image: "images/medsplus-command-center.png",
      gallery: [
        { src: "images/medsplus-command-center.png", caption: "Command Center — overview of pharmacy, GLP-1, genomics, and education modules" },
        { src: "images/medsplus-pharmacy.png", caption: "Pharmacy Dashboard — prescription status, cost avoidance, refill distribution" },
      ],
      caseStudy: {
        problem: "MedsPLUS Consulting was running prescription tracking, GLP-1 program workflows, and patient records across disconnected spreadsheets and tools, making day-to-day coordination slow and error-prone.",
        approach: [
          "Led design and ongoing refinement of MedsPLUS Connect to centralize workflows in a single internal system",
          "Built out authentication, role-based access, patient and pharmacy records, and internal messaging as core modules",
          "Paired the app with Make and Zapier automations to reduce manual intake handling and speed up response time",
        ],
        outcome: [
          "Single source of truth for prescription, GLP-1, and patient data across the team",
          "Reduced manual data handling in intake-related workflows",
          "Clearer operational visibility across patient, workflow, and program-related activities",
        ],
        metrics: [
          { num: "1", label: "Unified system" },
          { num: "4+", label: "Workflows centralized" },
        ],
      },
    },
    {
      num: "02",
      featured: true,
      title: "ImagineSD CRM Dashboard",
      titleEm: "· a Base44 rebuild",
      year: "2024 — Now",
      type: "Case study",
      stack: ["Base44", "Follow Up Boss", "Luxury Presence"],
      desc: "A custom internal CRM dashboard for a San Diego real estate team, replacing a fragmented stack with one place for lead, client, and transaction tracking.",
      previewLabel: "CRM dashboard",
      image: "images/imaginesd-pipelines.png",
      gallery: [
        { src: "images/imaginesd-pipelines.png", caption: "Pipelines — lead stages from New Lead through Offer Submitted" },
        { src: "images/imaginesd-hub.png", caption: "Transaction Management hub — central home for active files" },
        { src: "images/imaginesd-documents.png", caption: "Documents — deadline, phase, and status tracking per transaction" },
      ],
      caseStudy: {
        problem: "The ImagineSD team was juggling Luxury Presence, SIDE Okta, Follow Up Boss, and other tools with no single view of leads, clients, or transactions — handoffs leaked and follow-up discipline was hard to maintain.",
        approach: [
          "Architected and built a custom dashboard on Base44 tailored to the team's lead and transaction workflow",
          "Migrated lead-management practices into cleaner Follow Up Boss routines, with training and reinforcement",
          "Layered in CRM activity reviews and workflow automations to reduce process friction",
        ],
        outcome: [
          "Replaced a fragmented tool stack with one internal system",
          "Cleaner follow-up processes and improved lead-management discipline across the team",
          "Day-to-day visibility into leads, clients, and transactions in a single pane",
        ],
        metrics: [
          { num: "4→1", label: "Tools consolidated" },
          { num: "1", label: "Source of truth" },
        ],
      },
    },
    {
      num: "03",
      featured: true,
      title: "MedsPLUS social design system",
      titleEm: "· six templates, one brand",
      year: "2025 — Now",
      type: "Case study",
      stack: ["Design system", "Claude Design", "Remotion"],
      desc: "A reusable pubmat system for a healthcare brand's social channels — six locked templates with swappable slots, so a new post is a slot change rather than a new design.",
      previewLabel: "Social design system",
      image: "images/medsplus-social-wall.jpg",
      gallery: [
        { src: "images/medsplus-social-wall.jpg", caption: "Two months of published posts — one brand system across every one" },
        { src: "images/medsplus-template-dark.png", caption: "Wellness Friday — Dark Spotlight master, slots bracketed for reuse" },
        { src: "images/medsplus-template-cream.png", caption: "Wellness Friday — Editorial Cream, the paired light variant" },
      ],
      caseStudy: {
        problem: "Weekly social graphics were being designed one at a time. Output looked inconsistent post to post, and every new asset cost a full design cycle even when only the date and headline changed.",
        approach: [
          "Audited the published feed and pulled out the six post types that actually recur — Medical Minute, Wellness Friday, Awareness, Service Spotlight, Holiday, Community Spotlight",
          "Built each as a master template with the layout, colour and type locked and only named slots editable, in two paired styles so the whole series stays visually related",
          "Documented the library and the reuse commands so a post can be produced without reopening the design decisions",
          "Extended the same brand tokens into short-form video, so motion and static stay on one system",
        ],
        outcome: [
          "New posts are a slot swap instead of a design cycle",
          "Consistent brand treatment across every post in the run",
          "The same tokens now drive both the static graphics and the video",
        ],
        metrics: [
          { num: "6", label: "Reusable templates" },
          { num: "25+", label: "Posts shipped" },
        ],
      },
    },
    {
      num: "04",
      featured: true,
      title: "Short-form brand video",
      titleEm: "· built in code",
      year: "2026 — Now",
      type: "Case study",
      stack: ["Remotion", "React", "TypeScript"],
      desc: "Client reels produced as React components rendered frame by frame to MP4 — so a new cut is a data change, and one source ships every aspect ratio.",
      previewLabel: "Programmatic video",
      image: "images/reels-three-ratios.jpg",
      gallery: [
        { src: "images/reels-three-ratios.jpg", caption: "One component rendered live at 9:16, 1:1 and 16:9, in sync" },
        { src: "images/reels-neighborhoods.jpg", caption: "Imagine SD neighborhood spotlight — photo motion with animated captions" },
        { src: "images/reels-cashflow.jpg", caption: "CashFLOW — animated data visualisation" },
      ],
      caseStudy: {
        problem: "Short-form video is the format clients ask for most and the slowest to produce by hand. Every platform wants a different aspect ratio, and every re-cut means going back into a timeline.",
        approach: [
          "Built a composition system where a piece is authored once and registered at multiple aspect ratios, sized from a shared unit so type stays consistent across formats",
          "Moved copy, figures, colours and timing into typed data files, so a revision is an edit to a value rather than a re-edit",
          "Imported each client's real brand tokens from their existing design system, so a piece cannot drift off-brand",
          "Wrote the captions and the music generator in the same repo — burned-in captions for muted autoplay plus a real subtitle track for accessibility",
        ],
        outcome: [
          "Reformatting for a new platform is a parameter, not a rebuild",
          "Recurring posts regenerate from a copy change in minutes",
          "Every piece ships a platform-safe cut that keeps text clear of the Reels and TikTok interface",
        ],
        metrics: [
          { num: "3", label: "Aspect ratios, one source" },
          { num: "5", label: "Pieces shipped" },
        ],
      },
    },
    {
      num: "05",
      featured: false,
      title: "Real estate transaction coordination",
      titleEm: "",
      year: "2023 — Now",
      type: "Operations",
      stack: ["CAR forms", "Follow Up Boss", "Claude skills"],
      desc: "Daily transaction coordination for a San Diego brokerage — deadlines, disclosures, and document flow from contract to close, backed by a purpose-built agent skill suite.",
    },
    {
      num: "06",
      featured: false,
      title: "AI Real Estate Transaction Coordination Agent",
      titleEm: "",
      year: "2025",
      type: "AI workflow",
      stack: ["Claude", "Prompt design", "Follow Up Boss"],
      desc: "A Claude-based prompting system that monitors transaction status, surfaces missing items, and nudges deadlines across active real-estate files.",
      image: "images/imaginesd-documents.png",
    },
    {
      num: "07",
      featured: false,
      title: "AIRA — AI Virtual Assistant",
      titleEm: "",
      year: "2025",
      type: "AI system",
      stack: ["Claude", "ChatGPT", "Notion AI"],
      desc: "A personal AI assistant framework for task prioritization, communication drafts, and operational support across multiple client contexts.",
      image: "images/aira-skill.png",
    },
    {
      num: "08",
      featured: false,
      title: "MedsPLUS website rebuild",
      titleEm: "",
      year: "2024",
      type: "Web + SEO",
      stack: ["WordPress", "Analytics", "SEMrush"],
      desc: "Rebuilt and optimized the MedsPLUS site for usability, session quality, and lead form performance — supporting engagement and positioning.",
      image: "images/medsplus-website.png",
    },
  ],

  skills: [
    {
      heading: "Automation & AI",
      lead: "Stitch the dull parts together. Keep the judgment with humans.",
      items: [
        { name: "Make · Zapier · n8n", level: "Daily" },
        { name: "Claude · ChatGPT · Notion AI", level: "Daily" },
        { name: "Prompt engineering", level: "Daily" },
        { name: "Workflow design", level: "Daily" },
        { name: "Basic API & integration logic", level: "Often" },
      ],
    },
    {
      heading: "Web, CRM & Internal Tools",
      lead: "Lightweight front-ends so automation is visible, not a black box.",
      items: [
        { name: "HubSpot · Follow Up Boss", level: "Daily" },
        { name: "Base44 · Internal dashboards", level: "Daily" },
        { name: "WordPress · SEO", level: "Often" },
        { name: "SIDE Okta · Radius Agent", level: "Often" },
        { name: "Google Analytics · SEMrush", level: "Sometimes" },
      ],
    },
    {
      heading: "Ops & Back-Office",
      lead: "SOPs that stick, projects that ship, inboxes that close.",
      items: [
        { name: "SOP documentation", level: "Daily" },
        { name: "Asana · Monday · Trello · Notion", level: "Daily" },
        { name: "Executive / admin support", level: "Daily" },
        { name: "Canva · Figma · Loom", level: "Often" },
        { name: "Remotion · programmatic video", level: "Building" },
        { name: "Google Workspace · Slack · Zoom", level: "Daily" },
      ],
    },
  ],

  // Short-form video. Files live in mark-reels-site — absolute URLs on purpose, so no
  // video binaries ever enter this repo.
  reels: {
    kicker: "Short-form video",
    title: "Reels —",
    titleEm: "brand video, built in code",
    blurb:
      "Client reels produced in Remotion: React components rendered frame by frame to MP4. The same brand tokens drive the video and the page it sits on.",
    // Set this once mark-reels-site is deployed. While it is null the whole Reels
    // section is skipped — an empty section with broken thumbnails on a live
    // job-hunting portfolio is worse than no section at all.
    siteUrl: null,
    items: [
      {
        slug: "medsplus-template-system",
        title: "Six templates, one system",
        brand: "MedsPLUS",
        format: "9:16",
        duration: "0:24",
        proves: "Published campaign output at volume",
      },
      {
        slug: "medsplus-wellness-friday",
        title: "Wellness Friday — event teaser",
        brand: "MedsPLUS × LIV",
        format: "9:16",
        duration: "0:12",
        proves: "Brand-faithful event promo",
      },
      {
        slug: "imaginesd-neighborhoods",
        title: "Neighborhood spotlight",
        brand: "Imagine SD",
        format: "9:16",
        duration: "0:20",
        proves: "Photo-led edit with animated captions",
      },
      {
        slug: "cashflow-where-it-goes",
        title: "Where it goes",
        brand: "CashFLOW",
        format: "9:16",
        duration: "0:20",
        proves: "Motion-graphics data visualisation",
      },
      {
        slug: "self-three-ratios",
        title: "One component, three formats",
        brand: "Process",
        format: "16:9",
        duration: "0:20",
        proves: "How the rest of the work gets made",
      },
    ],
  },

  experience: [
    {
      when: "Aug 2026 — Now",
      role: "Product, Social & Brand Video",
      at: "MedsPLUS Consulting",
      body: "Continuing engagement following the business development role. Own MedsPLUS Connect alongside the social design system and the brand video built on top of it.",
      bullets: [
        "Continue leading MedsPLUS Connect, the internal clinical webapp",
        "Built a six-template pubmat system so a new post is a slot swap, not a new design",
        "Extended the system into short-form video rendered from code, in the same brand tokens",
        "Write captions and schedule against the monthly content calendar and awareness anchors",
      ],
    },
    {
      when: "Jun 2023 — Jul 2026",
      role: "Business Development Specialist",
      at: "MedsPLUS Consulting",
      body: "Drove workflow improvement across CRM, marketing, automation, and internal operations to reduce manual work and improve day-to-day execution for a healthcare consultancy.",
      bullets: [
        "Managed HubSpot workflows, lead pipelines, and follow-up processes to strengthen handoffs",
        "Led development and refinement of MedsPLUS Connect — an internal webapp centralizing prescription tracking, GLP-1 workflows, and patient management",
        "Built Make and Zapier automations to reduce manual intake handling and speed up response time",
        "Rebuilt and optimized the company website for usability, session quality, and lead form performance",
        "Documented workflows and managed Asana boards to keep priorities and ownership clear",
      ],
    },
    {
      when: "Oct 2023 — Now",
      role: "Virtual Assistant",
      at: "ImagineSD",
      body: "Support operations, CRM coordination, marketing execution, and process improvement for a real-estate business running multiple active workflows.",
      bullets: [
        "Designed and deployed a custom internal dashboard on Base44, consolidating lead management, client records, and transaction tracking",
        "Improved Follow Up Boss usage through training and reinforcement of lead-management discipline",
        "Created and published marketing materials, and maintained website content and SEO updates",
        "Worked across Luxury Presence, SIDE Okta, Follow Up Boss, and related real-estate tools",
      ],
    },
    {
      when: "Jan 2022 — Apr 2023",
      role: "Chief Operations Officer",
      at: "De Cuero Bueno · leather bag brand",
      body: "Co-founded the business and helped establish its early operating structure, internal coordination, and day-to-day execution.",
      bullets: [
        "Oversaw core operations across fulfillment, coordination, and process execution",
        "Supported planning and implementation of growth-related initiatives",
        "Contributed to brand-building decisions, workflow improvements, and expansion efforts",
      ],
    },
    {
      when: "2019 — 2023",
      role: "BS Management",
      at: "Ateneo de Manila University",
      body: "Studied management fundamentals — strategy, operations, and the systems thinking behind how businesses actually run.",
      bullets: [],
    },
  ],
};

window.PORTFOLIO = PORTFOLIO;
