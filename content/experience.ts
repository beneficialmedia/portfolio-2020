export type ExperienceEntry = {
  company: string;
  role: string;
  from: string;
  to: string | "present";
  location?: string;
  summary: string;
  /** Detailed bullets — rendered on /resume, omitted from /about timeline. */
  bullets?: string[];
  /** Slug into the case-study detail page if one exists. */
  workSlug?: string;
  /** Hide from the /about timeline (still shown on /resume). Used to roll up
   *  consecutive Aquent contract stints into a single visual entry on the
   *  timeline while preserving the granular detail on the résumé. */
  omitFromTimeline?: boolean;
  /** Mark a row as a synthetic rollup — shown only on the /about timeline,
   *  hidden from /resume so the résumé keeps its granular detail. */
  timelineOnly?: boolean;
};

export const experience: ExperienceEntry[] = [
  {
    company: "Pulumi",
    role: "Senior UX Designer",
    from: "2024-07",
    to: "present",
    location: "Seattle, WA",
    summary:
      "Lead product design for the Pulumi platform — shipped Insights from beta through GA. AI-native infrastructure tooling and agentic developer workflows for platform engineers, DevOps/SRE, and application developer personas.",
    bullets: [
      "Led UX for Pulumi Insights from public preview through general availability — cloud asset search, governance, policy-on-discovered-resources, and AI-assisted natural-language queries across AWS, Azure, GCP, and hundreds of other providers.",
      "Design AI-native product experiences including LLM-powered infrastructure tooling and agentic developer workflows — across Pulumi Cloud, Facet (the design system), ESC onboarding and approvals, VCS integrations, Policy as Code, and Pulumi Neo (our agentic AI platform engineer).",
      "Bridge design and engineering by contributing production code alongside design deliverables.",
      "Build and evolve design systems for complex, technical user audiences.",
      "Drive research strategy for platform engineers, DevOps/SRE, and application developer personas.",
    ],
    workSlug: "pulumi",
  },
  {
    company: "Eightfold",
    role: "Lead UX Engineer",
    from: "2022-02",
    to: "2024-07",
    location: "Remote",
    summary:
      "Founded and led Octuple — Eightfold's open-source design system — from zero to 10,000+ production implementation points in under eight months. Winner of the 2022 Eightfold Innovation Award.",
    bullets: [
      "Founded and led core development of Octuple, Eightfold's open-source design system, growing implementation from zero to 10,000+ production touchpoints in under eight months.",
      "Pushed for Octuple to become Eightfold's canonical component library, making the case across product, engineering, and design leadership over teams' existing tooling and switching costs — the foundation underneath the 10,000+ touchpoint adoption that followed. The consolidation would not have happened without it.",
      "Managed a cross-functional v-team of engineers using agile/scrum methodology, driving design system adoption across Eightfold's AI-powered talent intelligence platform.",
      "Authored the UX migration strategy to consolidate local and third-party components into a unified design system, reducing fragmentation and improving velocity.",
      "Established holistic regression testing methodology to ensure quality and risk mitigation across design system releases.",
      "Winner, Eightfold Innovation Award 2022.",
    ],
    workSlug: "eightfold",
  },
  {
    company: "Microsoft",
    role: "Design Engineer 2",
    from: "2017-03",
    to: "2022-02",
    location: "Redmond, WA",
    summary:
      "Final of three roles at Microsoft Education. Owned UX engineering for Immersive Reader at scale and OneNote web accessibility.",
    bullets: [
      "Designed the UX for AI-powered learning features built on Microsoft Cognitive Services — neural text-to-speech, neural machine translation, NLP for parts of speech and syllabification, speech-to-text — powering Immersive Reader, OneNote Live Captions, and Reading Assignments.",
      "Supported Immersive Reader scaling from zero to 46M MAU across multiple platforms by creating a React prototype that scaled directly to production, and improving portability for use by any web experience.",
      "Drove success within architecture of OneNote web application accessibility features, achieving SLA attainment of Level-C accessibility standards.",
      "Led UX/UI prototyping for Reading Assignments and Immersive Reader, focusing on process, production, and engineering — contributing critical code to three winning (best overall, best in category) Microsoft Hackathon projects.",
      "Drove process and creation of quick-cadence executive presentations representing Microsoft Education product vision.",
      "Coordinated longitudinal research studies that culminated in extensible features originating from Microsoft Classroom into Microsoft Teams Assignments and OneNote class notebooks.",
    ],
    workSlug: "microsoft",
  },
  {
    company: "Microsoft",
    role: "Design Developer 2",
    from: "2016-06",
    to: "2017-03",
    location: "Redmond, WA",
    summary:
      "Transition role between UX design and engineering leadership for Microsoft Classroom and School Data Sync.",
    bullets: [
      "Transitioned to leading engineering and front-end development for Microsoft Classroom and School Data Sync.",
      "Managed on-call engineer rotation and live-site incident mitigation, including resolution tasks, telemetry implementation, and continuous-delivery-focused DevOps.",
      "Innovated the Immersive Reader web application concept, taking the app from zero users to a fully formed reality.",
    ],
  },
  {
    company: "Microsoft",
    role: "Senior User Experience Designer",
    from: "2014-08",
    to: "2016-06",
    location: "Redmond, WA",
    summary:
      "First role on the direct Microsoft Education team. Originated the assignments schema in 2014.",
    bullets: [
      "Responsible for the creation of Microsoft Education products by creating the assignments schema in 2014.",
      "Achieved transition of Microsoft Classroom and School Data Sync SaaS APIs to Microsoft Teams Assignments by creating innovative conceptual UX, design integration, and full-stack engineering.",
      "Secured funding for Microsoft Education and successfully drove formal product group creation.",
      "Created code for Fresh Paint's final release, an application still available on Windows 10 devices many years later.",
      "Collaborated with design and engineering to implement Mix Gallery, enabling unlimited user sharing capabilities through front-end Office Mix code development.",
      "Moved Microsoft apps to the cloud by authoring web applications, including the Immersive Reader.",
    ],
  },
  // Synthetic rollup row — visible only on the /about timeline. The four
  // granular Aquent rows below are marked `omitFromTimeline` so they still
  // appear on /resume but collapse to this single entry on the public timeline.
  {
    company: "Aquent",
    role: "Microsoft & Amazon contracts · Design Integrator · Prototyper · Creative Technologist · Media Author",
    from: "2008-02",
    to: "2014-08",
    location: "Redmond / Seattle, WA",
    summary:
      "Six years of consecutive embedded contracts across Microsoft and Amazon. Sole UI dev on Fresh Paint shipping in-box on Windows 8 (1B MAU). Moved Amazon's brand advertising from Flash to HTML5 via the Cover Girl × Hunger Games: Catching Fire campaign. Invented the BoundsType property during the Windows 8 Metro era. Concluded with Office Mix design integration, transitioning directly into the direct-hire Microsoft Education role.",
    timelineOnly: true,
    workSlug: "fresh-paint",
  },
  {
    company: "Aquent",
    role: "Design Integrator (Office Mix · Microsoft)",
    from: "2014-04",
    to: "2014-08",
    location: "Redmond, WA",
    summary:
      "Designed and developed interactive UX for Office Mix application and website.",
    bullets: [
      "Designed and developed interactive UX for the Office Mix application and website.",
      "Contributed front-end code to Fresh Paint's Windows 10 update and Mix Gallery's sharing capabilities.",
    ],
    omitFromTimeline: true,
  },
  {
    company: "Aquent",
    role: "Visual Designer · Creative Technologist (Amazon Advertising)",
    from: "2013-10",
    to: "2014-04",
    location: "Seattle, WA",
    summary:
      "Among the early movers in shipping major HTML5-based brand advertising at scale. Pioneered Amazon's first HTML5-based ad takeover (Cover Girl × Hunger Games: Catching Fire) while the rest of the industry was still Flash.",
    bullets: [
      "Pioneered Amazon's first major HTML5-based ad takeover with the Cover Girl × Hunger Games: Catching Fire campaign — an early move off Flash at a moment when the digital ad industry was still SWF-heavy and the IAB HTML5 ad specs were freshly published.",
      "Implemented innovative, IAB-compliant web-based ads as both visual designer and front-end developer, from conceptual design through production code.",
      "Designed ad campaigns from concept to delivery for clients including Pepsi, Procter & Gamble, Johnson & Johnson, Clorox, Kimberly Clark, and Beiersdorf.",
    ],
    workSlug: "amazon",
    omitFromTimeline: true,
  },
  {
    company: "Aquent",
    role: "Design Integrator · Prototyper (Microsoft Fresh Paint)",
    from: "2012-10",
    to: "2013-09",
    location: "Redmond, WA",
    summary:
      "Sole design developer of Windows 8 Fresh Paint UI. Shipped in-box on Windows 8 reaching 1B MAU. Invented the BoundsType property.",
    bullets: [
      "Sole design developer of the Windows 8 Fresh Paint application UI, built end-to-end in XAML/C# with DirectX C++ integration for 3D paint effects.",
      "Shipped in-box on Windows 8, reaching 1B MAU on the platform.",
      "Invented the BoundsType property, enabling precise typographic grid control for designers and developers across the Windows platform.",
    ],
    workSlug: "fresh-paint",
    omitFromTimeline: true,
  },
  {
    company: "Metia",
    role: "Interactive Designer (Microsoft account)",
    from: "2011-05",
    to: "2012-10",
    location: "Kirkland, WA",
    summary:
      "Owned the Microsoft Dynamics creative platform — a multi-channel design system across video, web, and presentations.",
    bullets: [
      "Owned the Microsoft Dynamics creative platform, designing a multi-channel design system spanning video, web, and presentations — aligned to Windows brand standards.",
      "Created the Microsoft Case Studies app for Windows Phone 7.5, providing a key channel for partner value demonstration.",
    ],
    workSlug: "metia",
  },
  {
    company: "Aquent",
    role: "Media Author · Design Integrator (Microsoft)",
    from: "2008-02",
    to: "2011-05",
    location: "Redmond, WA",
    summary:
      "Authored UI variable scope for Windows 8 via Splash, contributing to the Metro design system. Built UI for Now Playing and About features.",
    bullets: [
      "Defined the UI variable scope of Windows 8 by authoring types and interfaces in C++ to be interpreted by C# and XAML using Splash — supporting internal engineers and contributing to Windows Metro design success.",
      "Created complex Now Playing and About feature UIs, implementing transition animations throughout the product using a new pattern (forward and backward hide/show).",
      "Invented the BoundsType property, allowing developers to strip insets around blocks of type, giving designers high-quality grid control.",
    ],
    omitFromTimeline: true,
  },
  {
    company: "Beneficialmedia",
    role: "Designer",
    from: "2008-01",
    to: "present",
    location: "Elko, NV",
    summary:
      "Independent design practice — the through-line across product design, creative technology, and AI-integrated workflows. Current focus: AI-native design tooling, automated design pipelines, and interaction design consulting.",
  },
  {
    company: "U.S. Marine Corps Recruiting",
    role: "Combat Motion Photographer",
    from: "1998-08",
    to: "2006-08",
    summary:
      "Visual storyteller and documentarian embedded with Marine Corps operations. Produced imagery and video across information operations, civil affairs, and recruiting — where I learned that the best design communicates clearly under pressure, for audiences who can't afford to misunderstand.",
  },
];

export type EducationEntry = {
  school: string;
  credential: string;
  from: string;
  to: string;
};

export const education: EducationEntry[] = [
  {
    school: "Harvard Extension School",
    credential: "Master's, Computer Software Engineering",
    from: "2018",
    to: "2021",
  },
  {
    school: "The Art Institute of Seattle",
    credential: "BFA, Graphic Design",
    from: "1997",
    to: "2005",
  },
  {
    school: "The Defense Information School",
    credential: "Diploma, Digital Video Production and Documentation",
    from: "1999",
    to: "2000",
  },
];
