import type { ProjectKey } from "./types";

export const projectOrder: ProjectKey[] = ["urbaninsight", "qwen", "drl", "hospital"];

export const projectConfig: Record<
  ProjectKey,
  {
    slug: string;
    featured: boolean;
    demo?: string;
    backup?: string;
    github?: string;
    mediaKind: "product" | "research" | "typography";
  }
> = {
  urbaninsight: {
    slug: "urbaninsight-ai",
    featured: true,
    demo: "https://modelscope.cn/studios/Janewithhz/UrbanInsight_AI",
    github: "https://github.com/Jane-Hanzhen/urbaninsight-ai",
    mediaKind: "product",
  },
  qwen: {
    slug: "qwen-ai-case-study",
    featured: true,
    demo: "https://qwen-product-case-study.pages.dev",
    backup: "https://qwen-product-case-study.vercel.app",
    github: "https://github.com/Jane-Hanzhen/qwen-product-case-study",
    mediaKind: "product",
  },
  drl: {
    slug: "intelligent-crowd-simulation",
    featured: false,
    mediaKind: "research",
  },
  hospital: {
    slug: "hospital-information-platform",
    featured: false,
    mediaKind: "typography",
  },
};

export const projectKeyBySlug = Object.fromEntries(
  Object.entries(projectConfig).map(([key, value]) => [value.slug, key]),
) as Record<string, ProjectKey>;
