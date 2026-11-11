export type UrbanHybridContent = {
  eyebrow: string;
  tags: string[];
  title: string;
  subtitle: string;
  summary: string;
  meta: { label: string; value: string }[];
  demoLabel: string;
  githubLabel: string;
  problem: {
    no: string;
    title: string;
    sub: string;
    cards: { label: string; title: string; body: string }[];
  };
  insights: {
    no: string;
    title: string;
    sub: string;
    cards: { observation: string; insight: string; decision: string }[];
  };
  experience: {
    no: string;
    title: string;
    sub: string;
    steps: { title: string; body: string }[];
    figures: { no: string; title: string; caption: string; alt: string }[];
  };
  system: {
    no: string;
    title: string;
    sub: string;
    layers: { label: string; title: string; body: string; chips: string[] }[];
    boundary: { label: string; body: string; alt: string };
  };
  results: {
    no: string;
    title: string;
    sub: string;
    metrics: { num: string; small?: boolean; label: string; sub: string }[];
    evalLine: string;
    figure: { no: string; title: string; caption: string; alt: string };
    platformNote: string;
  };
  reflection: { no: string; title: string; body: string };
  next: { label: string; title: string; href: string };
};

export const urbanHybridZh: UrbanHybridContent = {
  eyebrow: "01 / 04",
  tags: ["AI Product", "Urban Analytics", "GIS"],
  title: "UrbanInsight AI",
  subtitle: "城市决策分析与 AI 解读平台",
  summary:
    "将伦敦生活质量研究产品化为可交互的城市分析工具：以地图建立区域上下文，通过确定性分析生成评分，再由 LLM Agent 通过只读工具调用读取已存储结果，完成解释、比较与报告表达。",
  meta: [
    { label: "项目类型", value: "AI 城市分析平台 · Agentic RAG Demo" },
    { label: "我的角色", value: "独立产品设计与开发" },
    { label: "时间", value: "2024.11–2025.01 研究分析 · 2026.06 产品化" },
    { label: "状态", value: "ModelScope 公开 Demo · Vercel + Railway 备用部署" },
  ],
  demoLabel: "在线 Demo",
  githubLabel: "GitHub",
  problem: {
    no: "01",
    title: "问题",
    sub: "目标用户 / 场景",
    cards: [
      {
        label: "TARGET",
        title: "目标用户 / 场景",
        body: "城市规划、公共部门与区域研究用户，需要在有限时间内比较多个行政区并形成可解释的判断。",
      },
      {
        label: "WORKFLOW",
        title: "原有流程",
        body: "数据收集 → 统计建模 → 地图制图 → 手工解读 → 报告整理，环节之间依赖人工转录与口头解释。",
      },
      {
        label: "BREAKPOINT",
        title: "核心断点",
        body: "数据、模型结果与空间位置分散，专业评分难以被非技术用户理解并转化为决策依据。",
      },
    ],
  },
  insights: {
    no: "02",
    title: "洞察与策略",
    sub: "四个产品判断",
    cards: [
      {
        observation: "综合评分只告诉用户结果。",
        insight: "决策者还需要理解区域差异的原因。",
        decision: "同时展示排名、维度、贡献度与 AI 解释。",
      },
      {
        observation: "直接让 LLM 计算评分不可复现。",
        insight: "生成式模型适合解释，不应成为确定性计算的事实来源。",
        decision: "PCA–TOPSIS 独立计算并持久化，AI 只读取权威上下文。",
      },
      {
        observation: "指标墙会增加首屏认知负担。",
        insight: "空间任务应从区域选择开始。",
        decision: "采用 Map-first 与渐进式信息披露。",
      },
      {
        observation: "“AI 说得头头是道”但无法核对来源。",
        insight: "可追溯性决定分析结论能否被采用。",
        decision:
          "每条回答附 Sources：引用由服务端生成、模型无法伪造，逐条给出发布方、原文片段与「打开原文」链接；证据不足时明确拒答。",
      },
    ],
  },
  experience: {
    no: "03",
    title: "产品体验",
    sub: "Explore → Analyze → Compare → Ask AI → Export",
    steps: [
      { title: "Explore", body: "通过地图、搜索与行政区选择建立分析上下文。" },
      { title: "Analyze", body: "阅读综合评分、排名、三维度和指标贡献。" },
      { title: "Compare", body: "在相同数据口径下对比两个行政区。" },
      {
        title: "Ask AI",
        body: "Agent 通过只读工具调用读取评分、指标与排名，解释优势与短板；回答附可展开的 Sources 引用，支持围绕分析结果多轮追问。",
      },
      { title: "Export", body: "将分析整理为面向决策沟通的结构化输出。" },
    ],
    figures: [
      {
        no: "01 / EXPLORE",
        title: "Map-first 区域探索",
        caption:
          "搜索或直接浏览地图定位伦敦 Borough，地图与右侧面板同步建立上下文；悬停时同步预览区域名称，点击进入完整分析。",
        alt: "UrbanInsight AI 首页：地图与右侧面板同步预览伦敦行政区",
      },
      {
        no: "02 / ANALYZE",
        title: "确定性评分引擎",
        caption: "Overall Score、排名、三个维度与贡献度均由 PCA–TOPSIS 计算；LLM 不重算排名。",
        alt: "综合评分、排名与三个维度的分析概览",
      },
      {
        no: "03 / INDICATORS",
        title: "得分背后的信号",
        caption:
          "12 项指标按经济、社会、生态分组，各带数值、单位与一句语境说明；ⓘ 浮层写清“衡量内容”与“如何解读”。",
        alt: "12 项指标按经济、社会、生态分组，含数值、单位与语境说明",
      },
      {
        no: "04 / INTERPRET",
        title: "从得分到可执行的判断",
        caption:
          "「解读」页把存储的评分与指标组织成主要驱动因素，以及优势、短板、建议三栏，建议按优先级标注。文字由模型基于引擎结果生成，排名与数值仍来自 PCA–TOPSIS，模型不重算。",
        alt: "AI 深度解读：主要驱动因素与指标解读，以及优势、短板、建议三栏",
      },
      {
        no: "05 / COMPARE",
        title: "跨行政区决策支持",
        caption:
          "在相同数据口径下比较两个行政区：先说明差距来自哪些维度，再给出各自的定位，用来理解优势结构，而不是定义区域的绝对价值。",
        alt: "跨行政区对比：地图与右侧对比结论同屏",
      },
      {
        no: "06 / ASK AI",
        title: "Ask AI：把分析结果变成可以追问的对象",
        caption:
          "分析完成后可就当前区域继续提问，也可以选另一个行政区发起比较。回答来自只读工具读取的已存储结果，并附可展开的 Sources——每条引用带编号、发布方与原文片段，可回到原文链接；证据不足时明确拒答。",
        alt: "Ask AI 回答与展开的 Sources 引用列表",
      },
      {
        no: "07 / EXPORT",
        title: "报告是产品输出的一部分",
        caption: "Executive Summary 汇总评分、排名、优势与风险；PDF 生成时不再调用模型。",
        alt: "PDF 报告执行摘要",
      },
    ],
  },
  system: {
    no: "04",
    title: "系统与 AI 设计",
    sub: "数据 → 服务 → 体验",
    layers: [
      {
        label: "01 / DATA & ANALYSIS",
        title: "数据与分析层",
        body: "多源公开数据入库，PCA–TOPSIS 生成可复现的分数与贡献度；76 份语料进入检索索引。",
        chips: ["Multi-source Data", "SQLite", "PCA–TOPSIS", "2,090 chunks"],
      },
      {
        label: "02 / AGENTIC RAG PIPELINE",
        title: "服务与 AI 层",
        body: "Agent Runtime 在只读 SQL 与知识库检索之间路由；检索层提供混合召回与引用注册，输出经过结构化校验。",
        chips: ["FastAPI", "Agent Runtime", "BM25 + RRF", "Citations", "Structured Output"],
      },
      {
        label: "03 / PRODUCT",
        title: "产品体验层",
        body: "地图、分析、对比与对话在同一上下文中切换，导出面向沟通的报告。",
        chips: ["React", "MapLibre", "Compare", "Export"],
      },
    ],
    boundary: {
      label: "AI BOUNDARY · 基础分析 → AI 深度分析",
      body: "PCA + TOPSIS 产生结构化分数、排名与贡献度；LLM Agent 通过只读工具调用获取这些结果，负责解释、比较、建议与决策叙事。检索层只提供带来源的文本证据，不产生数字。",
      alt: "确定性分析层与生成式解释层边界",
    },
  },
  results: {
    no: "05",
    title: "结果与验证",
    sub: "已实现、已评测、可复现",
    metrics: [
      { num: "33 × 12 × 3", small: true, label: "行政区 × 指标 × 维度", sub: "已覆盖全部 33 个伦敦 Borough" },
      { num: "105", label: "后端自动化测试", sub: "工具调用 · RAG/引用 · 备忘录 · 评测" },
      { num: "76 / 2,090", label: "RAG 语料来源 / chunks", sub: "公开报告 + 官方统计 + 方法论" },
      { num: "127 / 127", label: "12 题评测可追溯引用", sub: "路由 12/12 · 拒答 2/2" },
    ],
    evalLine: "12 题评测平均响应 17.7s；引用由服务端按 chunk_id 回查生成，不采信客户端传入的来源信息。",
    figure: {
      no: "EVALUATION",
      title: "把评测从文字变成证据",
      caption: "自动指标覆盖路由、引用完整性、拒答与检索命中；人工抽查回答事实。评测集与脚本在仓库内可复现。",
      alt: "十二题 agentic RAG 评测报告：自动指标与人工校验清单",
    },
    platformNote:
      "平台对照：同一批 12 份语料在 Dify 知识库搭建最小 Chatflow。裸检索基线下可答题 0/4；为指标行补充区域归属、并把中文问题改写为检索句后，最终 6/6 符合预期。结论：检索质量取决于数据工程与护栏，平台不会自动解决。",
  },
  reflection: {
    no: "06",
    title: "反思与下一步",
    body: "最重要的产品判断是将“统计计算”与“AI 解释”分开：分数必须可复现，解释必须可追溯。若继续迭代，应优先验证标准问题的事实一致性、目标用户的核心任务完成率，以及拒答边界在真实问题分布下的表现。",
  },
  next: { label: "下一个项目", title: "千问 AI 新用户体验与留存优化", href: "/work/qwen-ai-case-study" },
};

export const urbanHybridEn: UrbanHybridContent = {
  eyebrow: "01 / 04",
  tags: ["AI Product", "Urban Analytics", "GIS"],
  title: "UrbanInsight AI",
  subtitle: "Urban Decision Analytics & AI Interpretation Platform",
  summary:
    "Productizes a London quality-of-life study as an interactive urban analysis tool: maps establish regional context, deterministic analysis produces scores, and an LLM Agent reads stored results through read-only tool calls to support interpretation, comparison and report writing.",
  meta: [
    { label: "Project type", value: "AI urban analytics platform · Agentic RAG demo" },
    { label: "My role", value: "Independent product design & development" },
    { label: "Timeline", value: "2024.11–2025.01 research · 2026.06 productization" },
    { label: "Status", value: "Public ModelScope demo · Vercel + Railway backup deployment" },
  ],
  demoLabel: "Live Demo",
  githubLabel: "GitHub",
  problem: {
    no: "01",
    title: "Problem",
    sub: "Target user / scenario",
    cards: [
      {
        label: "TARGET",
        title: "Target user / scenario",
        body: "Urban planning, public-sector and regional research users who must compare multiple boroughs and form an explainable judgement within limited time.",
      },
      {
        label: "WORKFLOW",
        title: "Original workflow",
        body: "Collect data → model statistics → make maps → interpret manually → assemble reports, with hand transcription and verbal explanation between steps.",
      },
      {
        label: "BREAKPOINT",
        title: "Core breakpoint",
        body: "Data, model results and spatial location live in separate places; professional scores are hard for non-technical users to understand and turn into decisions.",
      },
    ],
  },
  insights: {
    no: "02",
    title: "Insights & strategy",
    sub: "Four product judgements",
    cards: [
      {
        observation: "A composite score only tells users the outcome.",
        insight: "Decision-makers also need to understand why boroughs differ.",
        decision: "Present rank, dimensions, contributions and AI interpretation together.",
      },
      {
        observation: "Letting an LLM calculate scores directly is not reproducible.",
        insight: "Generative models are suited to interpretation, not to being a source of deterministic facts.",
        decision: "Compute and persist PCA–TOPSIS separately; let AI read authoritative context only.",
      },
      {
        observation: "A wall of indicators overloads the first screen.",
        insight: "Spatial tasks should begin with place selection.",
        decision: "Use a map-first flow with progressive disclosure.",
      },
      {
        observation: "AI sounds convincing, but the source cannot be checked.",
        insight: "Traceability determines whether an analytical conclusion can be adopted.",
        decision:
          "Every answer carries Sources: citations are generated server-side and cannot be forged by the model, each with publisher, quoted passage and an open-original link; refuse when evidence is insufficient.",
      },
    ],
  },
  experience: {
    no: "03",
    title: "Product experience",
    sub: "Explore → Analyze → Compare → Ask AI → Export",
    steps: [
      { title: "Explore", body: "Build analysis context through the map, search and borough selection." },
      { title: "Analyze", body: "Read the composite score, rank, three dimensions and indicator contributions." },
      { title: "Compare", body: "Compare two boroughs under one consistent data definition." },
      {
        title: "Ask AI",
        body: "The agent reads scores, indicators and rankings through read-only tool calls, explains strengths and gaps, and attaches expandable Sources for follow-up questions.",
      },
      { title: "Export", body: "Turn the analysis into structured output for decision communication." },
    ],
    figures: [
      {
        no: "01 / EXPLORE",
        title: "Map-first borough exploration",
        caption:
          "Locate a London borough by search or by browsing the map; the map and side panel build context together, hovering previews the borough name, and clicking opens the full analysis.",
        alt: "UrbanInsight AI home screen with map and synchronised borough preview",
      },
      {
        no: "02 / ANALYZE",
        title: "A deterministic scoring engine",
        caption: "PCA–TOPSIS computes the overall score, rank, three dimensions and contributions; the LLM does not recalculate the ranking.",
        alt: "Analysis overview with overall score, rank and three dimensions",
      },
      {
        no: "03 / INDICATORS",
        title: "The signals behind the score",
        caption:
          "Twelve indicators grouped by economic, social and ecological dimensions, each with value, unit and a one-line context note; the ⓘ popover states what it measures and how to read it.",
        alt: "Twelve indicators grouped by dimension with values, units and context notes",
      },
      {
        no: "04 / INTERPRET",
        title: "From scores to actionable judgement",
        caption:
          "The Interpretation tab organises stored scores and indicators into main drivers, plus strengths, weaknesses and prioritised recommendations. Wording is model-generated from engine output; ranks and values still come from PCA–TOPSIS.",
        alt: "AI interpretation with main drivers and strengths, weaknesses and recommendations",
      },
      {
        no: "05 / COMPARE",
        title: "Cross-borough decision support",
        caption:
          "Two boroughs compared on identical data definitions: explain which dimensions create the gap, then position each borough to understand the shape of its strengths rather than declare an absolute value.",
        alt: "Cross-borough comparison with map and comparison conclusion",
      },
      {
        no: "06 / ASK AI",
        title: "Ask AI: results you can keep questioning",
        caption:
          "After an analysis you can keep asking about the current borough or start a comparison with another. Answers come from persisted results read through read-only tools and carry expandable Sources — each with id, publisher and quoted passage linked back to the original; when evidence is insufficient, the agent refuses.",
        alt: "Ask AI answer and expanded Sources citation list",
      },
      {
        no: "07 / EXPORT",
        title: "The report is part of the product output",
        caption: "The executive summary consolidates score, rank, strengths and risks; PDF generation does not call the model again.",
        alt: "PDF report executive summary",
      },
    ],
  },
  system: {
    no: "04",
    title: "System & AI design",
    sub: "Data → service → experience",
    layers: [
      {
        label: "01 / DATA & ANALYSIS",
        title: "Data & analysis layer",
        body: "Multi-source public data enters the store; PCA–TOPSIS produces reproducible scores and contributions; 76 sources feed the retrieval index.",
        chips: ["Multi-source Data", "SQLite", "PCA–TOPSIS", "2,090 chunks"],
      },
      {
        label: "02 / AGENTIC RAG PIPELINE",
        title: "Service & AI layer",
        body: "The Agent Runtime routes between read-only SQL and knowledge-base retrieval; the retrieval layer provides hybrid recall and citation registration, with structured output validation.",
        chips: ["FastAPI", "Agent Runtime", "BM25 + RRF", "Citations", "Structured Output"],
      },
      {
        label: "03 / PRODUCT",
        title: "Product experience layer",
        body: "Map, analysis, compare and chat switch within one context, and the analysis exports as a communication-ready report.",
        chips: ["React", "MapLibre", "Compare", "Export"],
      },
    ],
    boundary: {
      label: "AI BOUNDARY · Base analysis → AI deep analysis",
      body: "PCA + TOPSIS produces structured scores, rankings and contributions; an LLM Agent retrieves them through read-only tool calls and handles explanation, comparison, recommendations and decision narrative. The retrieval layer supplies sourced text evidence only; it never produces numbers.",
      alt: "Boundary between deterministic analysis and generative interpretation",
    },
  },
  results: {
    no: "05",
    title: "Results & validation",
    sub: "Implemented, evaluated, reproducible",
    metrics: [
      { num: "33 × 12 × 3", small: true, label: "Boroughs × indicators × dimensions", sub: "All 33 London boroughs covered" },
      { num: "105", label: "Backend automated tests", sub: "Tool calling · RAG/citations · memos · evaluation" },
      { num: "76 / 2,090", label: "RAG sources / chunks", sub: "Public reports + official statistics + methodology" },
      { num: "127 / 127", label: "Traceable citations in the 12-question evaluation", sub: "Routing 12/12 · Refusal 2/2" },
    ],
    evalLine: "Mean response time across the 12-question evaluation is 17.7s; citations are generated server-side by looking up chunk_id and never trust client-supplied source metadata.",
    figure: {
      no: "EVALUATION",
      title: "Evaluation as evidence, not adjectives",
      caption:
        "Automated metrics cover routing, citation completeness, refusal and retrieval hits; factual correctness is hand-checked. The evaluation set and scripts are reproducible from the repository.",
      alt: "Twelve-question agentic RAG evaluation report with automated metrics and manual checks",
    },
    platformNote:
      "Platform comparison: the same 12-source corpus was loaded into a Dify knowledge base with a minimal Chatflow. Under bare retrieval, 0/4 answerable questions passed; after adding borough attribution to indicator rows and rewriting Chinese questions into search queries, the final run met expectations 6/6. Conclusion: retrieval quality depends on data engineering and guardrails; a platform will not solve it for you.",
  },
  reflection: {
    no: "06",
    title: "Reflection & next steps",
    body: "The most important product judgement was separating statistical calculation from AI interpretation: scores must be reproducible, explanations must be traceable. Further iteration should first validate factual consistency on standard questions, core task completion with target users, and how refusal boundaries behave across a realistic question distribution.",
  },
  next: { label: "Next project", title: "Qwen AI: new-user experience & retention", href: "/work/qwen-ai-case-study" },
};
