export const en = {
    translation: {
        common: {
            skip: "Skip to main content",
            work: "Work",
            about: "About",
            capabilities: "Capabilities",
            github: "GitHub",
            language: "Language",
            menu: "Menu",
            close: "Close",
            viewProject: "View project",
            liveDemo: "Live Demo",
            email: "Email",
            backHome: "Back home",
            nextProject: "Next project",
            portfolio: "PORTFOLIO 2026",
            pending: "Visual asset pending",
        },
        home: {
            hero: {
                eyebrow: "PORTFOLIO 2026",
                name: "Hanzhen Fang / Jane Fang",
                direction: "AI Product · Technical Product · Data-driven Product",
                statement:
                    "Combining data analytics, machine learning, and product design to build practical and explainable digital products.",
                cta: "View Selected Work",
                educationLabel: "Education",
                education: [
                    {
                        school: "UCL",
                        degree: "MSc Geospatial Sciences (GIS & Computing)",
                        years: "Sep 2024 – Sep 2025",
                    },
                    {
                        school: "China University of Geosciences",
                        degree: "BSc Geographic Information Science",
                        years: "Sep 2020 – Jun 2024",
                    },
                ],
            },
            selectedWork: {
                eyebrow: "SELECTED WORK",
                title: "Selected Work",
                intro: "Four projects showing AI product architecture, consumer AI strategy, machine-learning experimentation and complete system building.",
            },
            about: {
                eyebrow: "ABOUT",
                title: "From complex data systems to usable AI products",
                body1: "With an interdisciplinary background in GIS and computing, I focus on turning data analytics, machine learning, and complex systems into product experiences that people can understand and use.",
                body2: "My work spans AI product strategy, full-stack prototyping, spatial analytics, and deep reinforcement learning, allowing me to approach product design through user needs, system logic, and technical implementation.",
            },
            capabilities: {
                eyebrow: "CAPABILITIES",
                title: "Capabilities",
                items: [
                    {
                        title: "AI Product & Strategy",
                        description: "Product Insight · AI + GUI Experience · Metrics & Experimentation",
                    },
                    {
                        title: "Data & Machine Learning",
                        description: "Data Analysis · Machine Learning · Deep Reinforcement Learning",
                    },
                    {
                        title: "Product Prototyping",
                        description: "Interactive Prototypes · Full-stack Demos · API Integration",
                    },
                    {
                        title: "Spatial Analytics & Visualization",
                        description: "GIS · Spatial Analysis · Interactive Data Visualization",
                    },
                ],
            },
        },
        projects: {
            urbaninsight: {
                number: "01 / 04",
                title: "UrbanInsight AI",
                subtitle: "AI-powered urban decision intelligence platform",
                summary:
                    "An explorable, comparable and report-ready decision product combining urban indicators, PCA–TOPSIS evaluation, map-based discovery and constrained AI interpretation.",
                tags: ["AI Product", "LLM", "Full-stack"],
                projectType: "AI urban analytics platform / interactive demo",
                hero: {
                    subtitle: "Urban Decision Analytics & AI Interpretation Platform",
                    summary:
                        "Productizes a London quality-of-life study as an interactive urban analysis tool: maps establish regional context, deterministic analysis produces scores, and AI supports interpretation, comparison and report writing.",
                    tags: ["AI Product", "Urban Analytics", "GIS"],
                },
                role: "Independent Product Designer & Developer",
                timeline: "2024.11–2025.01 research · 2026.06 productization",
                status: "Public ModelScope demo · Vercel + Railway backup deployment",
                media: "UrbanInsight Hero Capture — Pending",
                mediaNote: "To be replaced with a verified map and analysis workspace capture from the ModelScope demo",
                overview:
                    "Static research reports are difficult to explore or reuse. I productized a London quality-of-life analysis around three clear responsibilities: maps establish place context, a deterministic engine produces scores, and AI explains, compares and communicates the stored results.",
                problem: {
                    user: "Urban planners, public-sector analysts and regional researchers",
                    flow: "Collect data → model statistics → make maps → interpret manually → assemble reports",
                    break: "Data, model results and spatial context lived in separate tools, while professional scores were difficult for non-model users to understand and reuse.",
                },
                strategies: [
                    {
                        observation: "A composite score only tells users the outcome.",
                        insight: "Decision-makers also need to understand why boroughs differ.",
                        decision: "Present rank, dimensions, contributions and AI interpretation together.",
                    },
                    {
                        observation: "Letting an LLM calculate scores directly is not reproducible.",
                        insight: "Generative models are better at interpretation than mathematical truth.",
                        decision: "Compute and persist PCA–TOPSIS separately; let AI read authoritative context only.",
                    },
                    {
                        observation: "A wall of indicators overloads the first screen.",
                        insight: "Spatial tasks should begin with place selection.",
                        decision: "Use a map-first flow and progressive disclosure.",
                    },
                ],
                moments: [
                    { title: "Explore", text: "Build analysis context through the map, search and borough selection." },
                    {
                        title: "Analyze",
                        text: "Read the composite score, rank, three dimensions and indicator contributions.",
                    },
                    { title: "Compare", text: "Compare two boroughs under one consistent data definition." },
                    { title: "Ask AI", text: "Use stored results to explain strengths, gaps and follow-up questions." },
                    { title: "Export", text: "Turn the analysis into structured output for decision communication." },
                ],
                system: [],
                architectureLayers: [
                    { title: "Data & Analysis", items: ["Multi-source Data", "SQLite", "PCA–TOPSIS"] },
                    { title: "Service & AI", items: ["FastAPI", "AI Provider", "Structured Output"] },
                    { title: "Product Experience", items: ["React", "MapLibre", "Compare", "Export"] },
                ],
                validation: [
                    { type: "verified", label: "Verified scope", value: "33 boroughs × 12 indicators × 3 dimensions" },
                    {
                        type: "engineering",
                        label: "Engineering validation",
                        value: "43 backend tests passed; Qwen and DeepSeek chains verified",
                    },
                    {
                        type: "engineering",
                        label: "Public access",
                        value: "Mainland-China-accessible ModelScope Studio demo",
                    },
                    {
                        type: "unvalidated",
                        label: "Not yet validated",
                        value: "Formal user testing, task completion and quantified efficiency versus manual analysis",
                    },
                ],
                reflection:
                    "The most important judgment was separating statistical calculation from AI interpretation. The next priority is to validate factual consistency on standard questions and core task completion with target users.",
                visuals: [
                    {
                        label: "PRODUCT EXPERIENCE",
                        title: "Map-first",
                        caption:
                            "The map establishes borough context before users move into analysis or the AI assistant.",
                        alt: "UrbanInsight AI home screen with a London borough map and AI assistant",
                    },
                    {
                        label: "01 / EXPLORE",
                        title: "Map-first borough exploration",
                        caption:
                            "Users can locate a London borough through search or direct map exploration. Hovering synchronizes the borough preview across the map and side panel, while clicking initiates the full analysis—keeping exploration lightweight and intentional.",
                        alt: "UrbanInsight AI borough hover tooltip synchronized with the side-panel preview",
                    },
                    {
                        label: "02 / ANALYSIS ENGINE",
                        title: "A deterministic scoring engine",
                        caption:
                            "PCA–TOPSIS produces the overall score, rank, three dimensions and contributions. The LLM does not recalculate the ranking.",
                        alt: "UrbanInsight AI analysis with overall score, rank, radar chart and contribution breakdown",
                    },
                    {
                        label: "03 / AI INTERPRETATION",
                        title: "Deep interpretation grounded in stored results",
                        caption:
                            "With AI_MODE set to live, AI reads persisted analysis results to explain drivers, strengths, weaknesses and recommendations.",
                        alt: "UrbanInsight AI deep interpretation view",
                    },
                    {
                        label: "04 / COMPARE",
                        title: "Cross-borough decision support",
                        caption:
                            "The City of London and Camden comparison reveals different strength profiles; it does not define either borough’s absolute value.",
                        alt: "Structured comparison between the City of London and Camden",
                    },
                    {
                        label: "05 / DECISION-READY REPORT",
                        title: "The report is part of the product output",
                        caption:
                            "The executive summary consolidates score, rank, strengths and risks. PDF generation does not make another model call.",
                        alt: "UrbanInsight AI PDF report executive summary",
                    },
                    {
                        label: "AI BOUNDARY",
                        title: "Base Analysis → AI Deep Analysis",
                        caption:
                            "PCA + TOPSIS produces scores, ranking and contributions; the LLM handles explanation, comparison, recommendations and decision-ready narrative.",
                        alt: "Boundary between UrbanInsight deterministic analysis and generative interpretation layers",
                    },
                ],
            },
            qwen: {
                number: "02 / 04",
                title: "Qwen AI New User Experience & Retention Strategy",
                subtitle: "An AI product experience optimization case study",
                summary:
                    "An AI product experience case study for new Qwen users, combining AI intent understanding, GUI-supported decisions and benefits that create a reason to return.",
                tags: ["AI Product", "Growth Strategy", "UX"],
                projectType: "AI product case study / interactive prototype",
                role: "Independent Product Manager Case Study",
                timeline: "2025 · Independent product exploration",
                status: "Product case study · Interactive prototype · Metrics pending validation",
                media: "Qwen Case Study Hero Capture — Pending",
                mediaNote:
                    "To be replaced with a verified AI conversation and GUI decision capture from the Cloudflare Pages demo",
                overview:
                    "This is an independent case study based on public product experience, competitive observation and a simulated business scenario. It does not represent an official Qwen or Alibaba proposal.",
                problem: {
                    user: "People making high-constraint, high-value travel decisions through AI",
                    flow: "State need → receive AI recommendation → lack detail → open an OTA → search and decide again",
                    break: "After recommending, AI could not support dense comparison and confirmation, wasting the context already established in the conversation.",
                },
                strategies: [
                    {
                        observation: "Users are willing to let AI narrow the option set.",
                        insight: "They still want final control in high-value transactions.",
                        decision:
                            "Use a clear collaboration rule: AI narrows the options; users stay in control of the final decision.",
                    },
                    {
                        observation: "Conversation understands intent but handles dense comparison poorly.",
                        insight: "Different task stages need different interaction forms.",
                        decision:
                            "Introduce GUI filtering, comparison and round-trip confirmation inside the conversation.",
                    },
                    {
                        observation: "Completing one task does not automatically create retention.",
                        insight: "Users need perceivable value after task completion.",
                        decision: "Use ecosystem benefits to create a reason to return.",
                    },
                ],
                moments: [
                    { title: "Intent", text: "Understand origin, destination, dates and key constraints." },
                    { title: "Recommend", text: "Explain shortlisted options and keep a clear path to more flights." },
                    { title: "Compare", text: "Use GUI for filters, schedules, prices and option comparison." },
                    {
                        title: "Confirm",
                        text: "Select outbound and return legs step by step, then return the result to AI.",
                    },
                    { title: "Retain", text: "Connect task completion with discoverable ecosystem benefits." },
                ],
                system: [
                    "Conversation State",
                    "Intent & Constraints",
                    "GUI Decision State",
                    "Round-trip Selection",
                    "Confirmation",
                    "Retention Touchpoint",
                ],
                validation: [
                    {
                        type: "verified",
                        label: "Completed",
                        value: "Responsive interactive case study with a mainland-China Cloudflare Pages entry",
                    },
                    {
                        type: "target",
                        label: "Primary target metric",
                        value: "Recommendation-to-order-confirmation conversion (experiment design, not an achieved result)",
                    },
                    {
                        type: "target",
                        label: "Secondary target metrics",
                        value: "More-flights CTR, round-trip completion and modal exit rate",
                    },
                    {
                        type: "unvalidated",
                        label: "Not yet validated",
                        value: "Real conversion, seven-day retention, user testing and internal business data",
                    },
                ],
                reflection:
                    "The central judgment is that complex transactions should not be compressed into pure conversation. The next validation is not whether users like the interface, but whether they will compare and confirm without leaving AI.",
                visuals: [
                    {
                        label: "01 / HERO",
                        title: "Complete complex decisions inside the AI conversation",
                        caption:
                            "Round-trip flights provide a high-constraint, information-dense task for testing the division of work between AI and GUI.",
                        alt: "Qwen AI new-user experience case study hero",
                    },
                    {
                        label: "02 / PROBLEM & INSIGHT",
                        title: "The breakdown begins after recommendation",
                        caption: "AI narrows the options; users stay in control of the final decision.",
                        alt: "Qwen case-study insight showing the gap between AI recommendation and GUI decision support",
                    },
                    {
                        label: "03 / BEFORE → AFTER",
                        title: "Bring the complex decision back into AI",
                        caption:
                            "The future journey reuses conversational context, supports comparison in GUI, and returns the confirmed choice to AI.",
                        alt: "Comparison of the current flight decision journey and the future AI plus GUI journey",
                    },
                    {
                        label: "04 / PROTOTYPE FLOW",
                        title: "AI narrows; GUI carries dense decisions",
                        caption:
                            "Four stages connect intent, filtering, round-trip composition and order generation without discarding context.",
                        alt: "Prototype flow from AI shortlisting through GUI comparison and round-trip selection to order generation",
                    },
                    {
                        label: "05 / CRITICAL STATE",
                        title: "Recovery is part of transaction trust",
                        caption:
                            "A consistent closed-order state preserves prior choices and provides a clear route to select again.",
                        alt: "Qwen flight transaction closed-order and recovery flow",
                    },
                    {
                        label: "06 / GROWTH EXTENSION",
                        title: "Benefits extend value after task completion",
                        caption: "Rewards follow the core transaction journey; they do not replace it.",
                        alt: "Qwen flow from task completion to ecosystem benefits and return",
                    },
                ],
                experiment: {
                    eyebrow: "VALIDATION PLAN / EXPERIMENT DESIGN",
                    title: "Test whether AI + GUI improves task completion",
                    note: "This is a proposed experiment, not an achieved result. Seven-day retention remains a future validation target.",
                    groups: [
                        { label: "Control Group", value: "Current AI recommendation-card flow" },
                        {
                            label: "Experimental Group",
                            value: "AI recommendation + GUI filtering, comparison and round-trip confirmation",
                        },
                        { label: "Primary Metric", value: "Recommendation-to-order-confirmation conversion" },
                        {
                            label: "Process Metrics",
                            value: "More-flights CTR, round-trip completion and modal exit rate",
                        },
                        {
                            label: "Guardrails",
                            value: "Page response time, API error rate and pre-payment price-change rate",
                        },
                        {
                            label: "Rollback",
                            value: "Stop the experiment and restore the current recommendation flow if guardrails deteriorate",
                        },
                    ],
                },
                portfolio: {
                    targetUser: "New Qwen users arriving with a specific task",
                    deploymentNote:
                        "The project is deployed on both Cloudflare Pages and Vercel. The Portfolio links to Cloudflare Pages by default, with Vercel as the backup deployment.",
                    links: { live: "Live Case Study", backup: "Vercel Backup", github: "GitHub" },
                    heroAlt: "Overview of the Qwen new-user experience and benefits journey case study",
                    problemInsight: {
                        intro: "Pure conversation still breaks between understanding a need and completing an action.",
                        problems: [
                            "Conversation can understand a need, but struggles to support continuous comparison, confirmation and action.",
                            "After completing a task, users lack a natural ecosystem entry and a clear reason to explore or return.",
                        ],
                        summary:
                            "AI handles intent and initial filtering; GUI supports comparison, confirmation, and action.",
                        visuals: [
                            {
                                label: "Before · AI-only Recommendation",
                                alt: "Qwen AI-only recommendation interface where the user journey stops after recommendation",
                            },
                            {
                                label: "After 01 · Action Entry",
                                alt: "Qwen AI shortlisting with an entry to continue the task",
                            },
                            {
                                label: "After 02 · GUI Decision",
                                alt: "Qwen GUI supporting option comparison, selection and confirmation",
                            },
                        ],
                    },
                    coreStrategy: [
                        {
                            title: "AI understands the need",
                            text: "Use natural language for intent understanding and initial filtering.",
                        },
                        {
                            title: "GUI supports decisions",
                            text: "Use structured interfaces for comparison, selection and confirmation.",
                        },
                        {
                            title: "Benefits create a return path",
                            text: "After task completion, provide a reason to explore ecosystem services.",
                        },
                    ],
                    strategyLine:
                        "AI helps users understand and filter; GUI helps them compare and act; benefits create a reason for the next visit.",
                    prototypeIntro: "Benefits extend the post-task journey from discovery to browsing and redemption.",
                    prototype: [
                        {
                            label: "01 Discover",
                            title: "Discover the Benefits entry",
                            text: "Surface benefits naturally on Home, connecting the core task to ecosystem services.",
                            alt: "Benefits entry on Qwen Home",
                        },
                        {
                            label: "02 Browse",
                            title: "Browse My Benefits",
                            text: "Present available benefits together to reduce the cost of finding and understanding them.",
                            alt: "My Benefits list in Qwen",
                        },
                        {
                            label: "03 Redeem",
                            title: "Complete redemption",
                            text: "Use a structured interface to select and redeem a benefit, completing the action loop.",
                            alt: "Benefit selection and redemption interface in Qwen",
                        },
                    ],
                    validationIntro:
                        "These are product experiment metrics to validate; the project does not include real online experiment results.",
                    metrics: [
                        "Seven-day retention",
                        "Benefits-entry click-through rate",
                        "Benefit browse or redemption conversion",
                        "Ecosystem feature adoption",
                    ],
                    cta: {
                        title: "View the full Case Study",
                        text: "Read the complete problem analysis, strategy rationale, user journey, experiment design and product roadmap.",
                    },
                },
            },
            drl: {
                number: "03 / 04",
                title: "Intelligent Crowd Behavior Simulation",
                subtitle: "Using deep reinforcement learning to model personality-driven indoor behavior",
                summary:
                    "A multi-agent experiment adding Big Five traits, age and gender to state and reward mechanisms to test how personality parameters shape navigation behavior and performance.",
                tags: ["Deep RL", "Simulation", "Experiment"],
                projectType: "DRL research and simulation project",
                hero: {
                    subtitle: "Using deep reinforcement learning to model personality-driven indoor behavior",
                    summary:
                        "Builds a TD3-based, personality-driven indoor crowd simulation by mapping personality, age and gender into state, reward and social constraints, then validates distinct navigation patterns in controlled experiments.",
                    tags: ["Deep Reinforcement Learning", "Crowd Simulation", "Behavioral Modeling"],
                },
                role: "Research Project Lead",
                timeline: "2025.02–2025.09",
                status: "Research validation completed",
                media: "DRL Presentation Visual — Pending Export",
                mediaNote: "To reuse verified charts from presentation pages 6, 10, 11 or 12",
                overview:
                    "The project addresses the tendency of traditional crowd simulation to treat people as homogeneous physical agents by building a personality-driven multi-agent deep reinforcement learning framework.",
                problem: {
                    user: "Indoor-environment and crowd-simulation research contexts",
                    flow: "Physical state → one navigation policy → homogeneous behavior",
                    break: "Position, velocity and obstacle information alone omit social and psychological differences, reducing behavioral diversity and interpretability.",
                },
                strategies: [
                    {
                        observation: "People react differently in the same environment.",
                        insight: "An agent definition should extend beyond physical state.",
                        decision: "Create a socialized state space with personality, age and gender.",
                    },
                    {
                        observation: "A static personality label does not change decisions by itself.",
                        insight: "Personality must enter learning to influence behavior.",
                        decision:
                            "Map OCEAN traits to exploration, efficiency, social, cooperation and stability rewards.",
                    },
                    {
                        observation: "Personality effects may depend on fixed goals.",
                        insight: "Stable and unpredictable targets require separate evaluation.",
                        decision: "Run controlled fixed-target and random-target experiments.",
                    },
                ],
                moments: [
                    {
                        title: "Data Evidence",
                        text: "Use questionnaire and trajectory data from 110 participants to support personality-behavior mappings.",
                    },
                    {
                        title: "Personality Mapping",
                        text: "Translate five personality dimensions into rewards and physical rules.",
                    },
                    { title: "Train", text: "Train 20 agents in four teams with a TD3 actor–critic architecture." },
                    {
                        title: "Evaluate",
                        text: "Compare success, collisions, paths and stability in fixed and random target settings.",
                    },
                ],
                system: [
                    "Questionnaire + Trajectory",
                    "Personality Mapping",
                    "Socialized State",
                    "Reward Function",
                    "TD3 Agent",
                    "Behavior",
                ],
                systemTitle: "System & Model Design",
                validation: [
                    {
                        type: "verified",
                        label: "Experiment setup",
                        value: "20 agents, 4 teams and averages across 10 independent trials",
                    },
                    {
                        type: "verified",
                        label: "Extraversion result",
                        value: "Highest success at 70% / 80%; collisions 9.1 / 6.95; paths 2.40m / 2.43m",
                    },
                    {
                        type: "verified",
                        label: "Behavioral difference",
                        value: "Openness showed stronger exploration; neurotic agents were less stable with higher collision counts",
                    },
                    {
                        type: "unvalidated",
                        label: "Application boundary",
                        value: "No verified real planning use, crowd-management adoption or commercial deployment",
                    },
                ],
                reflection:
                    "The value lies in turning personality from a static label into a dynamic factor in reinforcement-learning decisions. The evidence remains a controlled experiment and should not be framed as validated commercial value.",
                visuals: [
                    {
                        label: "01 / SYSTEM DESIGN",
                        title: "From personality traits to interpretable behavior",
                        caption:
                            "Personality enters the socialized state and reward function before the TD3 agent learns its navigation policy.",
                        alt: "P-CSim personality-driven deep reinforcement learning system framework",
                    },
                    {
                        label: "02 / TRAINING",
                        title: "Training behavior and model performance",
                        caption:
                            "Verified curves compare average reward, success rate, collisions and cost per unit distance.",
                        alt: "DRL training curves for reward, success, collisions and path cost",
                    },
                    {
                        label: "03 / EXPERIMENTAL SETUP",
                        title: "Separate stable and changing targets",
                        caption:
                            "Fixed Target evaluates navigation in a stable setting; Random Target tests behavioral differences when goals change.",
                        alt: "DRL Fixed Target and Random Target experiment environments",
                    },
                    {
                        label: "04 / RESULTS",
                        title: "Personality parameters produce interpretable trajectory differences",
                        caption:
                            "Trajectory, success, collision and path results come from controlled experiments, not commercial adoption.",
                        alt: "Trajectory, success-rate, collision and path comparison across personality types",
                    },
                ],
            },
            hospital: {
                number: "04 / 04",
                title: "Hospital Spatial Intelligence Platform",
                subtitle:
                    "A full-stack Web GIS platform enabling crowdsourced hospital status collection and spatial decision visualization.",
                summary:
                    "A technical product connecting mobile crowdsourcing, location intelligence, spatial APIs and interactive decision views in one hospital-information workflow.",
                tags: ["Technical Product", "Web GIS", "Spatial Data"],
                projectType: "Full-stack Web GIS technical product",
                hero: {
                    subtitle: "Hospital Spatial Data Collection & Collaboration Platform",
                    summary:
                        "Serves field contributors and hospital-status monitors by connecting mobile crowdsourcing, spatial APIs and interactive dashboards, keeping location, queue and environmental reports current and usable for spatial decisions.",
                    tags: ["Technical Product", "Web GIS", "Spatial Data"],
                },
                role: "Full-stack Web GIS Development",
                timeline: "2025.03–2025.05",
                status: "Completed full-stack Web GIS project",
                media: "HOSPITAL SPATIAL INTELLIGENCE PLATFORM",
                mediaNote: "VERIFIED PRODUCT INTERFACE",
                overview:
                    "This full-stack Web GIS system combines mobile crowdsourced collection, spatial data APIs and an interactive dashboard to dynamically manage hospital locations, queue conditions and environmental reports.",
                problem: {
                    user: "People reporting conditions near hospitals and users monitoring hospital status",
                    flow: "Official or manual reporting → delayed service and queue data → limited spatial analysis",
                    break: "Service status and queue conditions were difficult to update in time, while existing information lacked location-aware collection and spatial decision tools.",
                },
                strategies: [
                    {
                        title: "Location Intelligence",
                        observation: "A single GPS distance is vulnerable to location drift.",
                        insight: "A stable trigger should evaluate a sequence of positions rather than one coordinate.",
                        decision:
                            "Store the five latest location records and confirm that a user remains close to a hospital before enabling proximity-based reporting.",
                    },
                    {
                        title: "Spatial Data Platform",
                        observation: "Collection, storage and analysis otherwise remain fragmented.",
                        insight: "A shared spatial data model and API contract can connect each interface.",
                        decision:
                            "Manage hospital spatial data in PostGIS and serve it as GeoJSON through RESTful APIs.",
                    },
                    {
                        title: "Interactive Visualization",
                        observation: "Field contributors and monitoring users need different spatial views.",
                        insight: "One data source should support task-specific two- and three-dimensional interfaces.",
                        decision:
                            "Use Leaflet for interactive mapping and Cesium for the linked spatial monitoring dashboard.",
                    },
                ],
                moments: [
                    {
                        title: "Crowdsourced Hospital Mapping",
                        text: "Users submit hospital conditions through maps and location services.",
                        capabilities: [
                            "Hospital location management",
                            "GPS-based location tracking",
                            "Queue / cleanliness crowdsourcing",
                            "Proximity-based reporting",
                        ],
                    },
                    {
                        title: "Queue Analytics & User Ranking",
                        text: "Spatial statistics and contribution analysis turn submissions into hospital-status signals.",
                        capabilities: [
                            "Queue category distribution",
                            "User contribution ranking",
                            "Spatial filtering",
                            "Hospital status analysis",
                        ],
                    },
                    {
                        title: "Spatial Monitoring Dashboard",
                        text: "Maps, historical reports and statistics support interactive spatial decision exploration.",
                        capabilities: [
                            "Cesium 3D visualization",
                            "Hospital status monitoring",
                            "Historical report exploration",
                            "Interactive spatial analysis",
                        ],
                    },
                ],
                system: [
                    "Web Client",
                    "RESTful API (Node.js + Express)",
                    "PostgreSQL / PostGIS",
                    "Spatial Visualization (Leaflet + Cesium)",
                ],
                systemTitle: "System Architecture",
                techStack: [
                    { label: "Frontend", items: ["JavaScript", "HTML / CSS", "Bootstrap", "Leaflet", "Cesium"] },
                    { label: "Backend", items: ["Node.js", "Express"] },
                    { label: "Database", items: ["PostgreSQL", "PostGIS"] },
                    { label: "Engineering", items: ["RESTful API", "Jest", "JSDoc"] },
                ],
                validation: [
                    {
                        type: "verified",
                        label: "Product evidence",
                        value: "Three verified interfaces cover crowdsourced mapping, queue analytics and the spatial monitoring dashboard",
                    },
                    {
                        type: "engineering",
                        label: "End-to-end implementation",
                        value: "RESTful API, PostgreSQL / PostGIS, Leaflet and Cesium connect collection, storage and visualization",
                    },
                    {
                        type: "engineering",
                        label: "Engineering practice",
                        value: "Jest API testing and JSDoc documentation",
                    },
                    {
                        type: "unvalidated",
                        label: "Evidence gap",
                        value: "No quantified trigger improvement, data scale, user adoption or operational impact",
                    },
                ],
                reflection:
                    "The project demonstrates a complete technical-product loop from location-aware field collection to spatial storage, analytics and management visualization. The available evidence supports the implemented product and engineering scope, but not quantified accuracy improvement, hospital adoption or operational impact.",
                visuals: [
                    {
                        label: "01 / CROWDSOURCED MAPPING",
                        title: "Location-aware hospital status collection",
                        caption:
                            "The mobile and web mapping experience combines hospital location management, GPS tracking and proximity-based crowdsourced reporting.",
                        alt: "Crowdsourced hospital mapping interfaces with location tracking and status submission",
                    },
                    {
                        label: "02 / QUEUE ANALYTICS",
                        title: "From contributed reports to operational signals",
                        caption:
                            "Queue distributions, spatial filters and contribution rankings make submitted hospital conditions easier to compare.",
                        alt: "Hospital queue analytics and user contribution ranking interfaces",
                    },
                    {
                        label: "03 / SPATIAL MONITORING",
                        title: "Linked spatial and statistical decision views",
                        caption:
                            "The monitoring workspace brings together Cesium 3D visualization, historical reports and hospital-status analysis.",
                        alt: "Hospital spatial monitoring dashboard with 3D map, reports and statistics",
                    },
                ],
            },
        },
        caseStudy: {
            projectType: "Project type",
            problemInsight: "Problem & Product Insight",
            coreStrategy: "Core Strategy",
            prototypeExperience: "Prototype Experience",
            validationTitle: "Validation",
            overview: "Overview",
            problem: "Problem",
            strategy: "Insight & Strategy",
            solution: "Solution Experience",
            system: "System / AI Design",
            validation: "Results & Validation",
            reflection: "Reflection",
            role: "My Role",
            timeline: "Timeline",
            status: "Status",
            targetUser: "Target user / context",
            currentFlow: "Existing flow",
            coreBreak: "Core breakdown",
            observation: "Observation",
            insight: "Insight",
            decision: "Decision",
            mediaPending: "Media slot reserved for a verified asset",
            verified: "Verified result",
            engineering: "Engineering validation",
            target: "Target metric",
            unvalidated: "Not yet validated",
            techStack: "Technology stack",
        },
    },
} as const;
