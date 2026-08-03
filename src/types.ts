export type ProjectKey = "urbaninsight" | "qwen" | "drl" | "hospital";

export type StrategyItem = {
  title?: string;
  observation: string;
  insight: string;
  decision: string;
};

export type MomentItem = {
  title: string;
  text: string;
  capabilities?: string[];
};

export type TechStackGroup = {
  label: string;
  items: string[];
};

export type ArchitectureLayer = {
  title: string;
  items: string[];
};

export type ValidationType = "verified" | "engineering" | "target" | "unvalidated";

export type ValidationItem = {
  type: ValidationType;
  label: string;
  value: string;
};

export type ProjectVisual = {
  label: string;
  title: string;
  caption: string;
  alt: string;
};

export type ExperimentGroup = {
  label: string;
  value: string;
};

export type ExperimentPlan = {
  eyebrow: string;
  title: string;
  note: string;
  groups: ExperimentGroup[];
};

export type ProjectContent = {
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  role: string;
  timeline: string;
  status: string;
  media: string;
  mediaNote: string;
  overview: string;
  problem: {
    user: string;
    flow: string;
    break: string;
  };
  strategies: StrategyItem[];
  moments: MomentItem[];
  system: string[];
  architectureLayers?: ArchitectureLayer[];
  techStack?: TechStackGroup[];
  validation: ValidationItem[];
  reflection: string;
  visuals?: ProjectVisual[];
  experiment?: ExperimentPlan;
};
