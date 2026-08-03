# Portfolio Website Design Specification

> Version 1.0  
> Status: Approved direction for information architecture and future implementation  
> Scope: IA, page structure, visual system, wireframes, content model and implementation guidance  
> Out of scope: full website implementation, new project functionality, new experiments, fabricated results and new visual assets

---

## 0. Product Positioning

### Primary positioning

**AI Product × Technical Product**

The website should establish four conclusions within the first screen and first two projects:

1. Jane makes product and strategy decisions, rather than only executing specifications.
2. Jane understands AI, machine learning, data and system constraints.
3. Jane can turn a concept into a functioning, deployed product or validated technical system.
4. Jane can translate complex technical work into a clear user and decision experience.

### Positioning guardrails

The website must not read as:

- a GIS student portfolio;
- an academic research archive;
- a web version of a CV;
- a visual-design portfolio;
- a creative-development showcase driven by effects.

GIS and spatial analysis should appear as a useful foundation for understanding complex data and decision systems, not as the candidate's primary identity.

### Evidence hierarchy

All pages must follow this priority order:

1. **Verified project facts**
2. **Presentation framing defined in this specification**
3. **Legacy academic or technical naming**

When evidence is incomplete, use explicit labels such as `Target metric`, `Engineering validation`, `Experiment result`, `Not yet validated` or `Concept prototype`.

---

# 1. Final Information Architecture

## 1.1 Sitemap

```text
/
├─ Homepage
│  ├─ Navigation
│  ├─ Hero
│  ├─ Selected Work
│  ├─ About
│  ├─ Capabilities
│  ├─ Education
│  └─ Contact / Footer
├─ /work/urbaninsight-ai
├─ /work/qwen-ai-case-study
├─ /work/intelligent-crowd-simulation
├─ /work/hospital-information-platform
└─ Localized resume files
   ├─ Chinese resume
   └─ English resume
```

No independent About, Skills, Blog, Testimonials or Services page is required.

## 1.2 Global navigation

### Desktop

Left:

- `Jane Fang` — returns to homepage.

Right:

- `项目 / Work` — anchor to Selected Work.
- `关于 / About` — anchor to About.
- `简历 / Resume` — opens the resume for the active locale.
- `GitHub ↗` — external link.
- `中文 / EN` — locale switch.

### Mobile

- Keep `Jane Fang` visible.
- Use one compact menu button with a text label such as `Menu`, not an unexplained decorative icon.
- Menu opens a simple opaque panel containing Work, About, Resume, GitHub and language switch.
- Important links must not depend on hover.

### Navigation behavior

- Lightweight and visually quiet.
- Sticky behavior is permitted, with an opaque or lightly translucent ivory background and a single bottom divider.
- Do not use a large floating pill navigation.
- Locale switching preserves the current route and section whenever a translated equivalent exists.

## 1.3 Homepage content hierarchy

1. Hero establishes role and value proposition.
2. Selected Work supplies proof.
3. About explains the career transition and working perspective.
4. Capabilities groups product, AI/data and build expertise.
5. Education supplies concise credentials.
6. Contact provides a low-friction next action.

## 1.4 Selected Work order and role

| No. | Display title | Subtitle | Tags | Portfolio role | Layout weight |
|---|---|---|---|---|---|
| 01 | UrbanInsight AI | AI 城市决策智能平台 | AI Product, LLM, Full-stack | Primary proof of AI product architecture, trustworthy AI and end-to-end building | Large featured |
| 02 | 千问 AI 新用户体验与留存优化 | 从 AI 推荐到 GUI 决策闭环的消费 AI 产品策略 | AI Product, Growth Strategy, UX | Consumer AI, growth and product-strategy proof | Large featured |
| 03 | 智能人群行为模拟 | 用深度强化学习模拟人格差异驱动的室内行为 | Deep RL, Simulation, Experiment | AI/ML depth and experimental ability without false commercialization | Secondary half-width |
| 04 | 医院信息协同平台 | 连接移动采集、空间数据与管理可视化的数据平台 | Full-stack, Spatial Data, Mobile | Full-system construction and data-flow foundation | Secondary half-width |

English project titles:

- UrbanInsight AI
- Qwen AI New User Experience & Retention Strategy
- Intelligent Crowd Behavior Simulation
- Hospital Information Platform

---

# 2. Homepage Wireframe

## 2.1 Desktop wireframe

```text
┌───────────────────────────────────────────────────────────────┐
│ Jane Fang                      项目  关于  简历  GitHub↗  中文 / EN │
└──────────────────────────────────────────────────────────────┘

  PORTFOLIO 2026                                      AVAILABLE FOR...

  Jane Fang
  AI PRODUCT ×
  TECHNICAL PRODUCT

  把复杂的 AI、数据与模型，
  变成清晰、可用的产品体验。

  [Selected Work ↓]  [Resume ↗]  [GitHub ↗]

  ──────────────────────────────────────────────────────────────

  SELECTED WORK                                             01 / 04

  UrbanInsight AI
  AI 城市决策智能平台               AI Product  LLM  Full-stack
  ┌───────────────────────────── LARGE PROJECT VISUAL ─────────────────┐
  │ Map + analysis workspace / selected verified product capture         ↗ │
  └──────────────────────────────────────────────────────────────┘

  千问 AI 新用户体验与留存优化                            02 / 04
  从 AI 推荐到 GUI 决策闭环          AI Product  Growth Strategy  UX
  ┌───────────────────────────── LARGE PROJECT VISUAL ─────────────────┐
  │ AI conversation + GUI decision flow capture                        ↗ │
  └──────────────────────────────────────────────────────────────┘

  ┌─ 03 / 04 ─ Intelligent Crowd Simulation ─┐  ┌─ 04 / 04 ─ Hospital Platform ────┐
  │ [PDF experiment visual]                    │  │ [Historical visual / restrained fallback]  │
  │ Deep RL · Simulation · Experiment          ↗ │  │ Full-stack · Spatial Data · Mobile   ↗ │
  └─────────────────────────────────────┘  └─────────────────────────────────────┘

  ABOUT
  Spatial / Data → Machine Learning / AI → Product Building → AI Product
  [Short two-column narrative; no biography wall]

  CAPABILITIES
  Product                    AI & Data                  Build
  [5 focused items]          [5 focused items]          [6 focused items]

  EDUCATION
  UCL                        China University of Geosciences (Wuhan)
  MSc ...                    BSc ... / Top 5% / National Scholarship ×2

  LET'S TALK
  [Email] [LinkedIn if verified] [GitHub ↗]            Jane Fang · 2026
```

## 2.2 Homepage section specifications

### Hero

- Occupies approximately 70–85% of the initial desktop viewport without forcing scroll hijacking.
- Primary title is English even on the Chinese page: `AI PRODUCT × TECHNICAL PRODUCT`.
- Chinese or English value statement follows the active locale.
- `Jane Fang` may sit above the title or in the navigation, but should not compete with the positioning line.
- A small metadata row may show `PORTFOLIO 2026`, location or availability only when verified.
- No portrait is required for Version 1.

### Featured project module

- Project name and value description precede the image or align directly above it.
- Entire card is clickable, with a visible text link for accessibility.
- Image ratio target: between `16:9` and `3:2`; use one consistent ratio for the two featured projects.
- Project screenshots provide most of the page color.
- Do not overlay long copy on screenshots.

### Secondary project module

- Two columns on desktop; equal width but not equal visual weight to featured projects.
- DRL uses an existing diagram or result visual from the presentation.
- Hospital uses a verified historical visual if found. Until then, use a restrained typographic placeholder in design files, never a fabricated UI screenshot.

### About

Recommended Chinese draft direction:

> 我的背景始于空间数据与复杂系统分析，逐步延伸到机器学习、AI 产品设计与端到端产品实现。我关注的不只是模型能做什么，而是如何让技术在真实任务中变得可理解、可控且可用。

Recommended English draft direction:

> My background began with spatial data and complex systems analysis, then expanded into machine learning, AI product design and end-to-end product building. I focus not only on what a model can do, but on how technology becomes understandable, controllable and useful in real tasks.

These are presentation drafts and should be checked against the final resume before publication.

### Capabilities

Use exactly three groups:

| Product | AI & Data | Build |
|---|---|---|
| AI Product Strategy | LLM Product Design | Python |
| User Journey | Machine Learning | TypeScript / JavaScript |
| Product Discovery | Deep Learning | React |
| Experiment Design | Reinforcement Learning | FastAPI |
| Growth Strategy | Spatial Analytics | SQL |
|  |  | Git / Deployment |

Do not add progress bars, proficiency scores or software-logo clouds.

### Education

- **University College London** — MSc Geospatial Sciences, 2024–2025.
- **China University of Geosciences (Wuhan)** — BSc Geographic Information Science, 2019–2023.
- `Top 5%` and `National Scholarship ×2` may appear under the undergraduate entry because they were supplied in the brief; confirm exact English translations against the resume before publication.

### Contact

- One short invitation line.
- Email is the primary action once a verified address is supplied.
- GitHub is required.
- LinkedIn may be included only when a verified public URL is supplied.
- Do not add a contact form in Version 1.

## 2.3 Mobile wireframe

```text
[Jane Fang]                         [Menu]

PORTFOLIO 2026
AI PRODUCT ×
TECHNICAL
PRODUCT

把复杂的 AI、数据与模型，
变成清晰、可用的产品体验。

[Selected Work] [Resume ↗]

SELECTED WORK                      01 / 04
[UrbanInsight full-width visual]
UrbanInsight AI
AI Product · LLM · Full-stack              ↗

02 / 04
[Qwen full-width visual]
千问 AI 新用户体验与留存优化                  ↗

03 / 04
[DRL full-width visual]
智能人群行为模拟                          ↗

04 / 04
[Hospital full-width visual / text fallback]
医院信息协同平台                          ↗

ABOUT
[Short paragraph]

CAPABILITIES
[Product]
[AI & Data]
[Build]

EDUCATION
[UCL]
[CUG]

LET'S TALK
[Email] [GitHub]
```

---

# 3. Project Page Wireframe

## 3.1 Shared case-study architecture

Every project uses the same seven narrative sections:

1. Overview
2. Problem
3. Insight & Strategy
4. Solution Experience
5. System / AI Design
6. Results & Validation
7. Reflection

The shared structure creates consistency; content depth varies by project. DRL should remain an honest technical experiment, and Hospital should not receive fabricated commercial outcomes.

## 3.2 Desktop project wireframe

```text
┌─ Global navigation ─────────────────────────────────────┐

PROJECT 01 / 04                    AI Product · LLM · Full-stack
UrbanInsight AI
AI 城市决策智能平台
[One-sentence product value]

[Live Demo ↗] [GitHub ↗]                  Status / Role / Timeline

┌───────────────────── LARGE HERO VISUAL ─────────────────────┐
│ Product state that best communicates the complete experience          │
└───────────────────────────────────────────────────────────────┘

01 OVERVIEW
[What / Why paragraph]          [My Role] [Timeline] [Status] [Links]

02 PROBLEM
[Target user]                   [Current flow → breakdown]
[Why it matters]

03 INSIGHT & STRATEGY
┌─ Observation ─┐   ┌─ Insight ─┐   ┌─ Decision ─┐
│ Evidence       │ → │ Meaning      │ → │ Product move  │
└──────────────┘   └────────────┘   └────────────┘
[Trade-off / rejected option]   [Fact and assumption boundary]

04 SOLUTION EXPERIENCE
Moment 01             Moment 02             Moment 03 ...
[Large image]         [Large image]         [Large image]
[Problem solved]      [Problem solved]      [Problem solved]

05 SYSTEM / AI DESIGN
[Full-width architecture or method diagram]
[Three concise technical decisions and their product implications]

06 RESULTS & VALIDATION
[Verified result] [Engineering or experiment validation]
[Target metric]   [Not yet validated]

07 REFLECTION
[Most important product judgment]
[Technical/product boundary]
[First next validation]

[Previous project]                              [Next project ↗]
[Footer]
```

## 3.3 Section rules

### 01 Overview

Required fields:

- What
- Why
- My Role
- Timeline
- Status
- Live Demo and GitHub when available
- One large hero visual

Do not open with a long project background or technology list.

### 02 Problem

- Name the target user or decision-maker.
- Show the original workflow as a compact sequence.
- Identify one primary breakdown and supporting problems.
- Explain the consequence in user, decision or operational terms.
- Move literature review and algorithm history deeper or omit it.

### 03 Insight & Strategy

Use repeated `Observation → Insight → Decision` units. Each unit must distinguish evidence from interpretation.

Required elements:

- core insight;
- why the chosen solution fits the insight;
- one meaningful trade-off;
- rejected or deferred scope where documented;
- fact, assumption and validation boundary.

### 04 Solution Experience

Use 3–5 key moments rather than a screenshot gallery:

| Project | Recommended moments |
|---|---|
| UrbanInsight AI | Explore → Analyze → Compare → Ask AI → Export |
| Qwen | Intent → Recommendation → Compare → Confirm → Retain |
| DRL | Data evidence → Personality mapping → Training → Evaluate behavior |
| Hospital | Collect → Trigger → Store → Visualize, subject to available historical evidence |

Each moment contains a visual, a short action label and one sentence explaining the decision value.

### 05 System / AI Design

Required high-level flows:

- **UrbanInsight:** Data → PCA–TOPSIS → Structured Results → FastAPI → AI Interpretation → UI.
- **Qwen:** Conversation State ↔ GUI State, with comparison and confirmation returned to the conversation.
- **DRL:** Personality → Reward Mapping → TD3 Agent → Behavior.
- **Hospital:** Mobile Collection → API → PostGIS → Dashboard.

Diagrams should explain system boundaries, not reproduce every class or endpoint.

### 06 Results & Validation

Use four explicit evidence types:

| Label | Meaning | Presentation rule |
|---|---|---|
| Verified result | A result supported by existing project evidence | Show metric, method and scope |
| Engineering validation | Build, test, deployment or end-to-end technical verification | Do not present as user impact |
| Target metric | A metric proposed for future evaluation | Never display as achieved |
| Not yet validated | A claim or outcome without current evidence | State the limitation directly |

Project-specific guardrails:

- UrbanInsight can show 33 boroughs, 12 indicators, 3 dimensions, 43 backend tests, verified Qwen/DeepSeek chains and public ModelScope Demo. It must not claim formal user adoption or quantified time savings.
- Qwen can show a deployed interactive case study and experiment design. It must not claim real conversion or 7-day retention improvement.
- DRL can show experimental success rates, collision counts, paths and ten-trial averages from the presentation. It must not claim commercial adoption.
- Hospital can show implemented modules and documented testing practice. Quantified accuracy, usage or operational impact remains unavailable unless supported later.

### 07 Reflection

Answer three questions:

1. What was the most important judgment?
2. Where did product and technical responsibilities need a clear boundary?
3. What would be validated first in the next iteration?

Avoid generic tool-learning statements.

## 3.4 Project page variants

| Project | Narrative emphasis | Avoid |
|---|---|---|
| UrbanInsight AI | Trustworthy AI boundary, map-first workflow, productization of a repeatable analysis process | Presenting AI as the calculator; claiming formal production maturity |
| Qwen | Consumer AI task completion, AI + GUI division of labor, growth and retention hypothesis | Presenting target metrics as real results |
| DRL | Interpretable personality-to-behavior mechanism and controlled experiment | Academic title overload; fake product-market framing |
| Hospital | End-to-end collection and data-management loop | Invented screenshots, adoption or performance metrics |

---

# 4. Design Tokens

## 4.1 Token principles

- Warm editorial base with one muted burgundy accent.
- Project imagery is the main color source.
- Y2K / early-digital details occupy approximately 10–15% of the visual language.
- Use tokens semantically so a later theme adjustment does not require component rewrites.

## 4.2 Core token proposal

```css
/* Reference values for future implementation; this document does not create CSS files. */

--color-canvas: #F4F0E8;
--color-surface: #FAF8F3;
--color-ink: #191917;
--color-ink-soft: #4F4D48;
--color-meta: #74716A;
--color-line: #D7D1C7;
--color-accent: #7A4148;
--color-accent-soft: #E8D8D8;
--color-focus: #315C8A;

--radius-none: 0;
--radius-sm: 6px;
--radius-md: 12px;
--radius-pill: 999px;

--border-hairline: 1px;
--shadow-image: 0 12px 32px rgba(25, 25, 23, 0.08);

--duration-fast: 160ms;
--duration-base: 280ms;
--duration-reveal: 480ms;
--ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
```

Token values must be tested for WCAG contrast during implementation. `--color-meta` is for secondary metadata at normal readable sizes, not tiny low-contrast body copy.

## 4.3 Retro detail tokens

Use only on project numbering, metadata, tags and status:

- `01 / 04`
- `PORTFOLIO 2026`
- `LIVE ●`
- thin rectangular outlines;
- monospaced labels;
- arrows such as `↗` and `→`.

Do not add noise textures, chrome materials, cursor trails, pixel-art decoration or high-saturation pink/blue gradients.

---

# 5. Typography System

## 5.1 Font roles

| Role | Preferred family | Fallback | Use |
|---|---|---|---|
| Display / Latin | Instrument Sans | Arial, sans-serif | Hero and large English project titles |
| Chinese and body | Noto Sans SC | PingFang SC, Microsoft YaHei, sans-serif | Chinese headings, body and navigation |
| Metadata / system | IBM Plex Mono | SFMono-Regular, Consolas, monospace | Project number, year, tags, status |

If external webfonts are not self-hosted, use privacy-conscious loading and prevent layout shift. The fallback stack must remain acceptable without fonts.

## 5.2 Type scale

| Token | Desktop | Tablet | Mobile | Typical use |
|---|---:|---:|---:|---|
| Display XL | 88px / 0.94 | 68px / 0.98 | 44px / 1.00 | Hero positioning |
| Display L | 64px / 1.00 | 52px / 1.02 | 38px / 1.04 | Project title |
| Heading 1 | 44px / 1.08 | 38px / 1.10 | 30px / 1.12 | Major sections |
| Heading 2 | 30px / 1.15 | 27px / 1.18 | 24px / 1.20 | Case-study subsection |
| Heading 3 | 21px / 1.30 | 20px / 1.30 | 19px / 1.32 | Card title |
| Body L | 19px / 1.60 | 18px / 1.60 | 17px / 1.60 | Lead paragraph |
| Body | 16px / 1.65 | 16px / 1.65 | 16px / 1.60 | Main copy |
| Small | 14px / 1.50 | 14px / 1.50 | 14px / 1.50 | Supporting content |
| Metadata | 12px / 1.40 | 12px / 1.40 | 12px / 1.40 | Mono labels; uppercase Latin only |

### Rules

- Use weight 400 for most text and 500–600 for hierarchy.
- Avoid ultra-bold display text.
- Chinese body text should not be letter-spaced.
- Small uppercase English metadata may use `0.06em–0.10em` tracking.
- Keep body line length near 55–75 Latin characters or 28–40 Chinese characters.
- Do not place long all-caps sentences.

---

# 6. Color System

## 6.1 Base palette

| Name | Value | Usage |
|---|---|---|
| Warm Ivory | `#F4F0E8` | Main background |
| Paper | `#FAF8F3` | Cards, image mats, mobile menu |
| Ink | `#191917` | Primary typography |
| Soft Ink | `#4F4D48` | Secondary copy |
| Metadata Gray | `#74716A` | Labels and subdued metadata |
| Divider | `#D7D1C7` | Hairlines and grid structure |
| Muted Burgundy | `#7A4148` | Accent links, status dots, selected states |
| Dusty Rose | `#E8D8D8` | Sparse accent background |
| Focus Blue | `#315C8A` | Accessible keyboard focus indicator |

## 6.2 Usage ratio

- 80–85% warm neutral surfaces.
- 10–15% project imagery and its native colors.
- 5–10% accent at most.

## 6.3 Rules

- No AI-style blue-purple gradient.
- Do not assign a forced high-saturation color to each project.
- Accent color never replaces semantic validation labels by itself; use text labels.
- Links must remain identifiable through underline, arrow or position, not color alone.
- Full black `#000` and full white `#FFF` should not dominate the page.

---

# 7. Grid & Spacing

## 7.1 Breakpoints

| Mode | Width |
|---|---|
| Mobile | 320–767px |
| Tablet | 768–1023px |
| Desktop | 1024px and above |
| Wide desktop content cap | 1440px viewport / 1280px content |

Breakpoints should respond to content rather than device names during implementation.

## 7.2 Grid

| Mode | Columns | Gutter | Outer margin |
|---|---:|---:|---:|
| Wide desktop | 12 | 24px | 48–80px |
| Desktop | 12 | 20–24px | 32–48px |
| Tablet | 8 | 20px | 24–32px |
| Mobile | 4 | 16px | 18–24px |

- Maximum content width: `1280px`.
- Reading column: `680–760px` maximum.
- Case-study hero and primary visuals may span the full content grid.
- Text sections should not automatically use the full image width.

## 7.3 Spacing scale

Use an 8px base with limited 4px increments:

`4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128, 160`

Recommended applications:

- Inline icon / label gap: 8px.
- Tag gap: 8–12px.
- Card internal gap: 16–24px.
- Heading-to-body: 16–24px.
- Related content group: 32–48px.
- Homepage section padding: 96–160px desktop, 72–96px tablet, 56–80px mobile.
- Case-study section padding: 96–128px desktop, 64–96px tablet, 56–80px mobile.

Whitespace is structural; do not fill it with decorative cards.

---

# 8. Component List

## 8.1 Global

- `SiteHeader`
- `DesktopNavigation`
- `MobileMenu`
- `LanguageSwitch`
- `ExternalLink`
- `ResumeLink`
- `SectionHeader`
- `SiteFooter`
- `FocusRing`

## 8.2 Homepage

- `Hero`
- `HeroMetadata`
- `PrimaryCTAGroup`
- `SelectedWorkSection`
- `FeaturedProjectCard`
- `SecondaryProjectCard`
- `ProjectTagList`
- `AboutSection`
- `CapabilityGroup`
- `EducationEntry`
- `ContactBlock`

## 8.3 Case study

- `ProjectHero`
- `ProjectMetadataGrid`
- `ProjectLinkGroup`
- `ProjectHeroMedia`
- `ProblemFlow`
- `ObservationInsightDecision`
- `TradeoffBlock`
- `FactBoundaryNote`
- `SolutionMoment`
- `SystemDiagram`
- `TechnicalDecisionList`
- `EvidenceCard`
- `ValidationLegend`
- `ReflectionBlock`
- `ProjectPagination`

## 8.4 Component behavior rules

- Cards are editorial compositions, not generic rounded dashboard containers.
- Use borders and spacing before shadows.
- Tags are metadata, not colorful pills. Use thin outlines or plain mono text.
- Evidence cards must always display evidence type as text.
- Images require captions when their meaning is not self-evident.
- External links show `↗` and accessible external-link text.
- Live-demo links must reflect the documented URLs and current locale context.

---

# 9. Motion Guidelines

## 9.1 Approved motion

| Interaction | Motion |
|---|---|
| Section reveal | Opacity 0→1 and translateY 12→0 over 400–480ms |
| Image hover | Scale 1→1.02 over 280ms; image remains clipped |
| Arrow hover | Translate 0→2px right/up over 160ms |
| Link underline | Width or color transition over 160ms |
| Language switch | Short opacity transition; no page-flip effect |
| Mobile menu | Fade and translateY 8→0 over 200–280ms |

## 9.2 Rules

- Motion supports hierarchy and feedback, never discovery of essential information.
- Do not delay first content visibility for an entrance sequence.
- No cursor follower, heavy parallax, 3D scene, scroll hijacking or looping decoration.
- Respect `prefers-reduced-motion`; remove translation and scale while retaining immediate state changes.
- Avoid animating large layout dimensions that cause reflow.

---

# 10. Responsive Rules

## 10.1 Homepage

- Featured projects remain single-column at every width.
- DRL and Hospital are two columns only when both remain readable; otherwise stack.
- Hero type uses responsive sizing and natural wrapping, not forced one-line scaling.
- Capabilities move from three columns to stacked groups.
- Education moves from two columns to stacked entries.
- Navigation becomes a compact menu on mobile.

## 10.2 Case studies

- Metadata grid collapses from four columns to two, then one.
- `Observation → Insight → Decision` stacks vertically on mobile with arrows changing direction.
- Solution moments preserve narrative order and become one column.
- Architecture diagrams may use a mobile-specific vertical layout; do not shrink desktop diagrams until labels become unreadable.
- Wide result tables need responsive restructuring or horizontal scroll with a visible affordance.
- Captions remain immediately adjacent to their images.

## 10.3 Image behavior

- Use responsive sources and retain meaningful crops.
- Do not crop chart axes, legends, system labels or result values.
- Product UI may use `object-fit: cover` only when the cropped region is intentionally selected.
- Technical diagrams use `contain` and a neutral surface.
- Important content must not be available only on hover.

## 10.4 Accessibility

- Minimum interactive target: approximately 44×44px on touch devices.
- Maintain visible keyboard focus.
- Use semantic headings in a logical hierarchy.
- Every informative image receives localized alt text.
- Decorative images use empty alt text.
- Do not encode evidence status or project identity through color alone.

---

# 11. i18n Content Structure

## 11.1 Locale model

- Supported locales: `zh-CN`, `en`.
- Default: `zh-CN`.
- Do not render both languages in the same content view.
- Persist the explicit user selection locally.
- First visit may use the default Chinese experience rather than automatic browser detection.
- Project facts, numbers and evidence categories share one source of truth wherever practical.

## 11.2 Recommended content namespaces

```text
locales/
├─ zh-CN/
│  ├─ common.json
│  ├─ home.json
│  └─ projects/
│     ├─ urbaninsight.json
│     ├─ qwen.json
│     ├─ drl.json
│     └─ hospital.json
└─ en/
   ├─ common.json
   ├─ home.json
   └─ projects/
      ├─ urbaninsight.json
      ├─ qwen.json
      ├─ drl.json
      └─ hospital.json
```

This is an implementation target, not a request to create code in the current phase.

## 11.3 Project content schema

```json
{
  "slug": "urbaninsight-ai",
  "title": "UrbanInsight AI",
  "subtitle": "...",
  "summary": "...",
  "tags": ["AI Product", "LLM", "Full-stack"],
  "meta": {
    "role": "...",
    "timeline": "...",
    "status": "..."
  },
  "links": {
    "demo": "...",
    "github": "..."
  },
  "overview": {},
  "problem": {},
  "strategy": [],
  "moments": [],
  "system": {},
  "validation": {
    "verified": [],
    "engineering": [],
    "targets": [],
    "unvalidated": []
  },
  "reflection": {}
}
```

## 11.4 Translation rules

- Translate meaning rather than sentence structure.
- Keep stable technical names such as PCA–TOPSIS, TD3, FastAPI and PostGIS unchanged.
- Use localized display titles while retaining accurate technical names deeper in the page.
- Numbers, model names, test counts and URLs must remain synchronized.
- Alt text and image captions must be localized.
- Resume links can differ by locale.
- External demo language limitations should be described honestly when relevant.

## 11.5 Core interface labels

| Key | Chinese | English |
|---|---|---|
| nav.work | 项目 | Work |
| nav.about | 关于 | About |
| nav.resume | 简历 | Resume |
| home.selectedWork | 精选项目 | Selected Work |
| home.capabilities | 能力范围 | Capabilities |
| project.overview | 项目概览 | Overview |
| project.problem | 问题 | Problem |
| project.strategy | 洞察与策略 | Insight & Strategy |
| project.solution | 产品体验 | Solution Experience |
| project.system | 系统与 AI 设计 | System / AI Design |
| project.validation | 结果与验证 | Results & Validation |
| project.reflection | 反思与下一步 | Reflection |
| evidence.verified | 已验证结果 | Verified result |
| evidence.engineering | 工程验证 | Engineering validation |
| evidence.target | 目标指标 | Target metric |
| evidence.unvalidated | 尚待验证 | Not yet validated |

---

# 12. Asset Requirements

The detailed status and source list is maintained in `PORTFOLIO_ASSET_CHECKLIST.md`.

## 12.1 Homepage minimum

| Project | Homepage asset |
|---|---|
| UrbanInsight | One high-resolution map + analysis hero capture |
| Qwen | One high-resolution AI conversation + GUI decision capture |
| DRL | One clean crop from PDF page 6, 10, 11 or 12 |
| Hospital | One verified historical product visual; otherwise a restrained text-led fallback until supplied |

## 12.2 Case-study minimum

### UrbanInsight AI

- Cover / Hero: Need Capture.
- Map: Need Capture.
- Borough Analysis: Need Capture.
- AI Insight: Need Capture.
- Compare: Need Capture.
- Export Conversation PDF: Need Capture after confirming current public-demo behavior.
- Architecture / AI Boundary: Available in existing documentation.

### Qwen AI Case Study

- Cover / Hero: Need Capture.
- Problem / Existing Experience: Need Capture.
- AI Conversation: Need Capture.
- Flight Recommendation / Comparison: Need Capture.
- Round-trip Selection: Need Capture.
- Rewards: Need Capture.
- Error / Recovery: Need Capture.
- Prototype Flow: Need Capture.

### DRL

- Reuse the existing presentation rather than recreating graphics.
- Page 6: system/method architecture.
- Page 10: training and module comparison curves.
- Page 11: experiment environments.
- Page 12: personality trajectory and result comparison.
- Page 5 may support personality-behavior evidence.

### Hospital Platform

- Mobile Data Collection: Missing.
- GPS / Location Trigger: Missing.
- Map View: Missing.
- Dashboard / 3D Visualization: Missing.
- System Architecture: textual source exists, but visual asset is missing.
- Data Flow: textual source exists, but visual asset is missing.

## 12.3 Asset production rules for the later phase

- Do not fabricate product states.
- Capture consistent desktop viewport sizes for UrbanInsight and Qwen.
- Remove private keys, local paths and sensitive data from screenshots.
- Preserve readable UI at actual page display size.
- Save diagrams as SVG where possible; use WebP/AVIF plus fallback for raster screenshots.
- Provide localized captions without duplicating raster assets unless the UI itself differs by language.
- Record source, project, state and capture date in filenames or asset metadata.

Suggested naming:

```text
urbaninsight-hero-map-analysis.webp
urbaninsight-borough-analysis.webp
qwen-flight-comparison.webp
drl-personality-trajectories.webp
hospital-mobile-collection.webp
```

---

# 13. Implementation Notes

## 13.1 Recommended foundation for the next phase

The implementation can use the existing preferred front-end conventions when development begins:

- React + TypeScript.
- Vite or an equivalent static-first build setup.
- Route-level project pages.
- `react-i18next` or an equivalent structured i18n system.
- Content-driven project data rather than duplicated hard-coded page markup.
- CSS custom properties for the tokens in this document.

The final framework choice should be confirmed after inspecting the actual website repository. This specification does not authorize dependency installation or code scaffolding.

## 13.2 Content architecture

- Keep project facts separate from translated presentation copy where possible.
- Treat `status`, `timeline`, evidence values and links as structured fields.
- Use reusable project sections but allow per-project ordering inside Solution moments.
- Do not force empty fields into a page. For example, Hospital should omit Live Demo if none exists.
- Keep target metrics in a different data group from achieved results.

## 13.3 Routing and language

Preferred URL pattern:

```text
/
/work/urbaninsight-ai
/work/qwen-ai-case-study
/work/intelligent-crowd-simulation
/work/hospital-information-platform
```

Locale may be handled through persistent state or a locale path prefix. A path-prefix structure such as `/zh-CN/...` and `/en/...` is preferred if static SEO and shareable localized URLs are priorities. Choose one approach before implementation and apply it consistently.

## 13.4 SEO and metadata

- Unique localized title and description for every project.
- Canonical URLs and locale alternates when using locale-prefixed routes.
- Open Graph image for homepage and each featured project.
- Structured heading hierarchy.
- Descriptive alt text and link labels.
- Do not advertise unverified outcomes in metadata.

## 13.5 Performance

- Prioritize hero image loading; lazy-load below-the-fold assets.
- Set explicit image dimensions to prevent layout shift.
- Use responsive images and modern formats.
- Avoid animation libraries unless the required motion cannot be implemented cleanly with CSS.
- Keep the initial page readable before JavaScript enhancement where practical.

## 13.6 Analytics

If analytics are added later, track only useful portfolio actions:

- project card opened;
- Live Demo clicked;
- GitHub clicked;
- resume opened;
- contact email clicked;
- language changed.

Do not add invasive session replay by default. Analytics data is website usage evidence, not retrospective project impact.

## 13.7 Quality checklist before implementation sign-off

- Chinese is the default locale.
- No page displays both full Chinese and English copy together.
- Project order and visual hierarchy match this specification.
- UrbanInsight and Qwen are visually dominant.
- DRL and Hospital remain honest secondary projects.
- Every claimed result maps to existing evidence.
- Target metrics are never styled as achieved KPIs.
- ModelScope and Cloudflare Pages links match the current portfolio materials.
- Mobile reading order does not depend on desktop grid position.
- No essential information appears only on hover.
- Motion respects reduced-motion preferences.
- Hospital uses no fabricated screenshot.
- Existing DRL visuals are reused rather than rebuilt.

---

# 14. Final Design Direction Summary

The final direction is a **Korean editorial product portfolio with restrained early-digital details**:

- warm ivory editorial canvas;
- strong English display typography and readable Chinese body text;
- project imagery as the dominant color source;
- muted burgundy used sparingly;
- monospaced metadata, thin rules, numbering and arrows for a 10–15% Y2K layer;
- large whitespace and asymmetrical but structured composition;
- minimal motion that preserves recruiter reading speed;
- consistent case-study logic centered on product judgment, system understanding and verified evidence.

The Homepage should answer **who Jane is and which work proves it**. The Case Study template should answer **what judgment was made, how the system works, what was actually validated and where the boundary remains**.
