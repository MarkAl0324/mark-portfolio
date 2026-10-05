// Portfolio content: Mark Al S. Alejandro (updated 2026-10-06)
const PORTFOLIO = {
  name: "Mark Al S. Alejandro",
  role: "Operations Integrator",
  focus: "AI · Web · Back-Office",
  location: "Commonwealth, Quezon City · PH",
  email: "markalejandro1115@gmail.com",
  phone: "+63 945 459 3273",
  timeZone: "UTC+8 · Asia / Manila",
  // Shown on the Now section. Change it whenever the Now list changes.
  nowUpdated: "October 2026",

  taglineLines: [
    { text: "I find the inefficiency.", italic: false },
    { text: "I build the fix.", script: true },
  ],

  heroMeta: [
    {
      label: "What I do",
      body: "I run the day-to-day operations of small US businesses (transaction coordination, marketing, admin) and build the AI systems that take the manual work out of them: CRMs, workflows, dashboards, SOPs.",
    },
    {
      label: "Currently",
      body: "Operations support for Imagine SD, a San Diego brokerage. Transaction coordination picks back up with the next deal. Social and brand video for MedsPLUS. Building Eudomia, my own organization of AI agents. Open to part-time and freelance work.",
    },
    {
      label: "Tools I live in",
      body: "Make · Zapier · n8n · HubSpot · Follow Up Boss · Claude · Supabase · Base44 · Notion · Asana.",
    },
  ],

  nowItems: [
    {
      tag: "Building",
      title: "Eudomia, an AI organization that runs my work",
      body: "About 25 AI agents in departments such as marketing, creative, sales, operations, product and compliance. A manager agent reviews each task before it reaches me. They draft, I decide, and nothing is sent, posted or published without my approval.",
    },
    {
      tag: "Now",
      title: "Operations support for Imagine SD",
      body: "I support a San Diego brokerage beyond the deal desk: a new website in progress, a federal-bid monitor and the CRM dashboard I built for the team. Transaction coordination is on hold until the next deal. The Claude workflow I built for it is ready for the next file.",
    },
    {
      tag: "Now",
      title: "Social and brand video for MedsPLUS",
      body: "I write captions, build the branded posts and schedule them once the client approves. I also build their recap videos in code from the same brand templates.",
    },
    {
      tag: "Testing",
      title: "A government-bid monitor",
      body: "Screens public procurement listings against a company's qualification gates, so only the bids it can actually go after reach a person. Now in user testing.",
    },
    {
      tag: "Building",
      title: "A code-driven pipeline for short-form video",
      body: "React components rendered frame by frame to MP4, sharing brand tokens with the static work. One source ships every aspect ratio, and a re-cut is a change to a data file.",
    },
  ],

  // Every project carries a gallery. All images are 1600x1000 (16:10) on the same dark
  // stage, so the showcase shows them at one size with nothing cropped. The first
  // gallery image is the card picture.
  projects: [
    {
      num: "01",
      featured: true,
      title: "Transaction coordination system",
      titleEm: "· Claude skills for deal files",
      year: "2026",
      type: "Case study",
      stack: ["Claude Cowork", "Claude Code", "Notion", "DocuSign"],
      desc: "The system I built for transaction coordination at a San Diego brokerage: Claude skills that track every file, flag what is missing or due, and draft the updates the broker needs. It is on hold until the next deal.",
      gallery: [
        { src: "images/tc-documents-tracker-v2.png", caption: "Documents tracker: status, timeline and deadline for every document on a file (transaction column blurred)" },
        { src: "images/tc-skills-suite.png", caption: "The eight tc skills in the project's skills folder: start of day, end of day, new file, document update, email check, log, agent message, close" },
        { src: "images/tc-dashboard.png", caption: "The TC dashboard as it stands now: no active transactions, ready for the next deal" },
        { src: "images/tc-notion-hub-v2.png", caption: "The Notion hub the agent keeps up to date (April 2026 version)" },
      ],
      caseStudy: {
        problem: "A brokerage usually has several deals open at once, and each one carries a dozen or more dated deadlines across the client, escrow, the lender and the other agent. Checking the status of every file by hand ate hours each week, and one missed contingency date can put a client's deposit at risk.",
        approach: [
          "Built a set of Claude skills around the daily routine: start-of-day and end-of-day reviews, an inbox scan that matches incoming documents to each file, checklist updates, new-file setup and closing, all written back to one Notion hub",
          "Wrote the rules the skills follow: calendar versus business-day deadline math, a fixed document status vocabulary, and a hard stop on any email carrying wire instructions",
          "Drafted broker updates that carry only deadlines, changes and items that need action, so a status check takes seconds",
        ],
        outcome: [
          "Cut manual status checking by about 50% on active files, roughly 1.5 hours a day (my estimate)",
          "Missing documents and deadline risks surface before they are due, not after",
          "Every active file has one written status that anyone on the team can read",
        ],
        metrics: [
          { num: "~50%", label: "Less manual status checking" },
          { num: "1.5h", label: "Saved per day with deals open" },
        ],
      },
    },
    {
      num: "02",
      featured: true,
      title: "Eudomia",
      titleEm: "· an AI organization that runs my work",
      year: "2026 – Now",
      type: "AI system",
      stack: ["Claude Code", "Paperclip", "Agent skills"],
      desc: "An organization of AI agents that runs my client and venture work: departments for marketing, creative, sales, operations, product and compliance, each with a manager agent that reviews every task. The agents draft. I decide and send.",
      gallery: [
        { src: "images/eudomia-paperclip-board.png", caption: "Paperclip board: agents at work, task and run charts (task titles naming a partner blurred)" },
      ],
      caseStudy: {
        problem: "I run client work and my own ventures alone. The work that cuts across them, like copy, design, research and review, had no natural home, and every piece of it came back to me.",
        approach: [
          "Set up departments with a manager agent each, and specialists that serve every client instead of one project",
          "Gave every agent the same house rules: read the client's context first, draft only, and never send, post, push or pay. I do the sending",
          "Made the manager review each finished task against what I originally asked for before it reaches me. Regulated work goes through a compliance check first",
          "Added a daily context page that tells every agent what is paused or stopped, and a weekly review that turns repeated mistakes into lessons I approve",
        ],
        outcome: [
          "Client and venture work runs through one structure, with the same rules for every agent",
          "Nothing is sent, posted, pushed or paid for without my approval",
          "Work I put on hold stays on hold: the daily context page carries it to every agent",
        ],
        metrics: [
          { num: "25", label: "Agents in departments" },
        ],
      },
    },
    {
      num: "03",
      featured: true,
      title: "ImagineSD CRM Dashboard",
      titleEm: "· a Base44 rebuild",
      year: "2024 – Now",
      type: "Case study",
      stack: ["Base44", "Follow Up Boss", "Luxury Presence"],
      desc: "A custom internal CRM dashboard for a San Diego real estate team, replacing a fragmented stack with one place for lead, client, and transaction tracking.",
      gallery: [
        { src: "images/crm-pipelines-v2.png", caption: "Pipelines: lead stages from New Lead onward (deal value and card blurred)" },
      ],
      caseStudy: {
        problem: "The ImagineSD team was juggling Luxury Presence, SIDE Okta, Follow Up Boss, and other tools with no single view of leads, clients or transactions. Handoffs leaked, and follow-up discipline was hard to keep up.",
        approach: [
          "Architected and built a custom dashboard on Base44 tailored to the team's lead and transaction workflow",
          "Migrated lead-management practices into cleaner Follow Up Boss routines, with training and reinforcement",
          "Layered in CRM activity reviews and workflow automations to reduce process friction",
        ],
        outcome: [
          "Replaced the team's Monday.com subscription and became the main lead and transaction system within two weeks",
          "Cleaner follow-up processes and improved lead-management discipline across the team",
          "Day-to-day visibility into leads, clients, and transactions in a single pane",
        ],
        metrics: [
          { num: "4→1", label: "Tools consolidated" },
          { num: "~30%", label: "Lower platform cost" },
        ],
      },
    },
    {
      num: "04",
      featured: true,
      title: "MedsPLUS Connect",
      titleEm: "· internal clinical webapp",
      year: "2024 – 2026",
      type: "Case study",
      stack: ["React", "Supabase", "HubSpot"],
      desc: "A React + Supabase webapp that brings pharmacy workflows, GLP-1 program tracking, genomics data and patient management into one place for a pharmacist-led healthcare company.",
      gallery: [
        { src: "images/meds-connect-command-center-v2.png", caption: "Command Center: pharmacy, GLP-1, genomics and education modules" },
        { src: "images/meds-connect-pharmacy-v2.png", caption: "Pharmacy Dashboard: prescription status, cost avoidance, refill distribution" },
      ],
      caseStudy: {
        problem: "A team of under ten was running community health programs, pharmacy services and grant-funded projects across at least four tools that didn't talk to each other: deliveries in one platform, leads in HubSpot, refills in a separate app, and SOPs and messages spread across more. The same details were entered more than once, and the links between tools lived in people's heads, which is a real risk on a team that small.",
        approach: [
          "Led design and ongoing refinement of MedsPLUS Connect to centralize workflows in a single internal system",
          "Built out authentication, role-based access, patient and pharmacy records, and internal messaging as core modules",
          "Paired the app with Make and Zapier automations to reduce manual intake handling and speed up response time",
        ],
        outcome: [
          "Adopted by 100% of clinical staff from the first rollout",
          "Single source of truth for prescription, GLP-1 and patient data across the team",
          "Reduced manual data handling in intake-related workflows",
          "Clearer operational visibility across patient, workflow and program activity",
        ],
        metrics: [
          { num: "100%", label: "Clinical staff adoption" },
          { num: "4+", label: "Workflows centralized" },
        ],
      },
    },
    {
      num: "05",
      featured: true,
      title: "MedsPLUS social design system",
      titleEm: "· six templates, one brand",
      year: "2026",
      type: "Case study",
      stack: ["Design system", "Claude Design", "Remotion"],
      desc: "A reusable pubmat system for a healthcare brand's social channels: six locked templates with swappable slots, so a new post is a slot change rather than a new design.",
      gallery: [
        { src: "images/meds-social-wall.jpg", caption: "Eight published posts from the template system" },
        { src: "images/meds-social-template-dark.png", caption: "Wellness Friday: Dark Spotlight master" },
        { src: "images/meds-social-template-cream.png", caption: "Wellness Friday: Editorial Cream, the paired light variant" },
      ],
      caseStudy: {
        problem: "Weekly social graphics were being designed one at a time. Output looked inconsistent post to post, and every new asset cost a full design cycle even when only the date and headline changed.",
        approach: [
          "Audited the published feed and pulled out the six post types that actually recur: Medical Minute, Wellness Friday, Awareness, Service Spotlight, Holiday, Community Spotlight",
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
      num: "06",
      featured: true,
      title: "Short-form brand video",
      titleEm: "· built in code",
      year: "2026 – Now",
      type: "Case study",
      stack: ["Remotion", "React", "TypeScript"],
      desc: "Client reels produced as React components rendered frame by frame to MP4. A new cut is a data change, and one source ships every aspect ratio.",
      gallery: [
        { src: "images/reels-frames.jpg", caption: "Imagine SD neighborhood spotlight and MedsPLUS Wellness Friday, frames rendered from the project" },
        { src: "images/reels-cashflow-chart.jpg", caption: "CashFLOW: animated bars and line chart, frames rendered from the Remotion project" },
        { src: "images/reels-one-source-code.png", caption: "The same data file drives every format" },
      ],
      caseStudy: {
        problem: "Short-form video is the format clients ask for most and the slowest to produce by hand. Every platform wants a different aspect ratio, and every re-cut means going back into a timeline.",
        approach: [
          "Built a composition system where a piece is authored once and registered at multiple aspect ratios, sized from a shared unit so type stays consistent across formats",
          "Moved copy, figures, colours and timing into typed data files, so a revision is an edit to a value rather than a re-edit",
          "Imported each client's real brand tokens from their existing design system, so a piece cannot drift off-brand",
          "Wrote the captions and the music generator in the same repo: burned-in captions for muted autoplay plus a real subtitle track for accessibility",
        ],
        outcome: [
          "Reformatting for a new platform is a parameter, not a rebuild",
          "Recurring posts regenerate from a copy change in minutes",
          "Every piece ships a platform-safe cut that keeps text clear of the Reels and TikTok interface",
        ],
        metrics: [
          { num: "3", label: "Aspect ratios, one source" },
          { num: "8", label: "Pieces built" },
        ],
      },
    },
    {
      num: "07",
      featured: false,
      title: "Wholesale lead pipeline + CRM",
      titleEm: "",
      year: "Sep 2026",
      type: "AI workflow",
      stack: ["Claude agents", "Hunter", "Supabase"],
      desc: "Claude agents that found and vetted wholesale buyers for a golf apparel brand, verified emails through Hunter and left ready-to-send drafts for the owner to review. I also started a Supabase CRM to replace the sales spreadsheet. The engagement ended in September 2026.",
      gallery: [
        { src: "images/wholesale-pipeline-outline.png", caption: "Outline of the workflow, redrawn with no client data" },
      ],
    },
    {
      num: "08",
      featured: false,
      title: "GovCon bid pipeline",
      titleEm: "",
      year: "2026",
      type: "Internal tool",
      stack: ["SAM.gov", "AI scoring", "Pipeline"],
      desc: "Screens federal contract listings against a company's qualification gates, then carries the ones worth chasing through intake, approvals and award. Now in user testing.",
      gallery: [
        { src: "images/govcon-pipeline-board.png", caption: "GovCon Hub pipeline board in its demo workspace (fictional pursuits and names), with the stage gate for one pursuit" },
      ],
    },
    {
      num: "09",
      featured: false,
      title: "AIRA: my own Claude operating system",
      titleEm: "",
      year: "2025 – Now",
      type: "AI system",
      stack: ["Claude Code", "Cowork", "MCP"],
      desc: "About 40 skills across Claude Code and Cowork, with scheduled tasks, memory files and connectors to Google Workspace, Notion, Supabase and Hunter. It runs prioritization, drafting and reporting across several client engagements from one git-tracked, backed-up source.",
      gallery: [
        { src: "images/aira-skills-folder.png", caption: "A selection of the skills in the git-tracked skills folder" },
      ],
    },
    {
      num: "10",
      featured: false,
      title: "MedsPLUS website rebuild",
      titleEm: "",
      year: "2024",
      type: "Web + SEO",
      stack: ["WordPress", "Analytics", "SEMrush"],
      desc: "Rebuilt and optimized the MedsPLUS site for usability and lead generation: 35% longer average sessions and 20% more lead form conversions.",
      gallery: [
        { src: "images/meds-website-home.jpg", caption: "Rebuilt homepage hero" },
      ],
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
        { name: "Multi-agent systems · Claude Code · Paperclip", level: "Daily" },
        { name: "Basic API & integration logic", level: "Often" },
      ],
    },
    {
      heading: "Web, CRM & Internal Tools",
      lead: "Lightweight front-ends so automation is visible, not a black box.",
      items: [
        { name: "HubSpot · Follow Up Boss", level: "Daily" },
        { name: "Supabase · Base44 · internal dashboards", level: "Daily" },
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

  // Short-form video. Files live in mark-reels-site. Absolute URLs on purpose, so no
  // video binaries ever enter this repo.
  reels: {
    kicker: "Short-form video",
    title: "Reels:",
    titleEm: "brand video, built in code",
    blurb:
      "Client reels produced in Remotion: React components rendered frame by frame to MP4. The same brand tokens drive the video and the page it sits on.",
    // Set this once mark-reels-site is deployed. While it is null the whole Reels
    // section is skipped. An empty section with broken thumbnails on a live
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
        title: "Wellness Friday: event teaser",
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
      when: "Sep 2026",
      role: "Executive & Operations Support (freelance)",
      at: "US founder · golf apparel brand",
      body: "Executive and operations support for a founder running four small businesses. I started with wholesale sales for the golf apparel brand.",
      bullets: [
        "Ran a research routine that found and qualified wholesale buyers, verified their emails and left ready-to-send drafts for the founder to review",
        "Started an internal CRM on Supabase to replace the spreadsheet the sales team works from",
      ],
    },
    {
      when: "Oct 2023 – Now",
      role: "Transaction Coordinator & Operations Support",
      at: "ImagineSD",
      body: "Coordinate residential deals from signed contract to close for a San Diego brokerage, and support the team's CRM, marketing and back office. Transaction coordination is on hold until the next deal.",
      bullets: [
        "On every open deal, track each contingency, escrow and disclosure deadline and keep the broker updated on what needs him",
        "Prepare offers and addendums in ZipForms, route signatures through DocuSign and file in Brokermint",
        "Own the Follow Up Boss CRM: database clean-up, lead follow-up, routing and KPI reporting",
        "Built a custom Base44 dashboard that replaced Monday.com, adopted by the team within two weeks at about 30% lower platform cost",
        "Built a Claude workflow that cut manual status checks by about 50%",
        "Building the brokerage's new website and a federal-bid monitor",
      ],
    },
    {
      when: "Aug 2026 – Now",
      role: "Product, Social & Brand Video",
      at: "MedsPLUS Consulting",
      body: "Continued engagement after the business development role, covering the social design system, the brand video built on top of it and day-to-day social posting.",
      bullets: [
        "Maintained MedsPLUS Connect, the internal clinical webapp",
        "Built a six-template pubmat system so a new post is a slot swap, not a new design",
        "Extended the system into short-form video rendered from code, in the same brand tokens",
        "Write captions, build the branded posts and schedule them once the client approves",
      ],
    },
    {
      when: "Jun 2023 – Jul 2026",
      role: "Business Development Specialist",
      at: "MedsPLUS Consulting",
      body: "Drove workflow improvement across CRM, marketing, automation and internal operations for a pharmacist-led healthcare company.",
      bullets: [
        "Designed and built MedsPLUS Connect, used by 100% of clinical staff from the first rollout",
        "Built Make and Zapier automations that cut manual data entry by about 40% and doubled intake response speed",
        "Managed HubSpot workflows and follow-up, improving follow-up efficiency by 20%",
        "Rebuilt the company website: 35% longer sessions, 20% more lead form conversions",
        "Wrote SOPs used for onboarding and managed Asana boards to keep priorities and ownership clear",
      ],
    },
    {
      when: "Jan 2022 – Apr 2023",
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
      when: "2019 – 2023",
      role: "BS Management",
      at: "Ateneo de Manila University",
      body: "Studied management fundamentals: strategy, operations and the systems thinking behind how businesses actually run.",
      bullets: [],
    },
  ],
};

window.PORTFOLIO = PORTFOLIO;
