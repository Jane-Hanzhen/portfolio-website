import urbanHome from "./assets/projects/urban/01-urban-home.png";
import urbanHomeZh from "./assets/projects/urban/ZN-01-urban-home.png";
import urbanMapHover from "./assets/projects/urban/02-map-hover-preview.png";
import urbanMapHoverZh from "./assets/projects/urban/ZN-02-map-hover-preview.png";
import urbanAnalysis from "./assets/projects/urban/02-analysis-overview.png";
import urbanAnalysisZh from "./assets/projects/urban/ZN-02-analysis-overview.png";
import urbanInsight from "./assets/projects/urban/03-ai-insight.png";
import urbanInsightZh from "./assets/projects/urban/ZN-03-ai-insight.png";
import urbanCompare from "./assets/projects/urban/04-compare.png";
import urbanCompareZh from "./assets/projects/urban/ZN-04-compare.png";
import urbanReport from "./assets/projects/urban/06-report-summary.png";
import urbanReportZh from "./assets/projects/urban/ZN-06-report-summary.png";
import urbanBoundary from "./assets/projects/urban/07-analysis.png";
import urbanBoundaryZh from "./assets/projects/urban/ZN-07-analysis.png";
import qwenHero from "./assets/projects/qwen/01-qwen-hero.png";
import qwenProblem from "./assets/projects/qwen/02-problem-ai-gui-insight.png";
import qwenSolution from "./assets/projects/qwen/03-core-solution-before-after.png";
import qwenFlow from "./assets/projects/qwen/04-prototype-flow-ai-gui.png";
import qwenRecovery from "./assets/projects/qwen/05-critical-state-recovery.png";
import qwenGrowth from "./assets/projects/qwen/06-growth-extension-rewards.png";
import drlFramework from "./assets/projects/drl/01-drl-system-framework.png";
import drlTraining from "./assets/projects/drl/02-drl-training-performance.png";
import drlEnvironment from "./assets/projects/drl/03-experimental-environments.png";
import drlResults from "./assets/projects/drl/04-personality-behavior-results.png";
import hospitalMapping from "./assets/projects/hospital/01-Crowdsourced Hospital Mapping.png";
import hospitalAnalytics from "./assets/projects/hospital/02-Queue Analytics & User Ranking.png";
import hospitalDashboard from "./assets/projects/hospital/03-Spatial Monitoring Dashboard.png";
import type { ProjectKey } from "./types";

export type ProjectAsset = {
    src: string;
    width: number;
    height: number;
    fit: "cover" | "contain";
    position?: string;
    zh?: Pick<ProjectAsset, "src" | "width" | "height">;
};

export type ProjectAssetSet = {
    hero?: ProjectAsset;
    problem?: ProjectAsset[];
    strategy?: ProjectAsset[];
    solution?: ProjectAsset[];
    system?: ProjectAsset[];
};

export const projectAssets: Record<ProjectKey, ProjectAssetSet> = {
    urbaninsight: {
        hero: {
            src: urbanHome,
            width: 3148,
            height: 1661,
            fit: "cover",
            zh: { src: urbanHomeZh, width: 2510, height: 1326 },
        },
        solution: [
            {
                src: urbanMapHover,
                width: 3024,
                height: 1592,
                fit: "contain",
                zh: { src: urbanMapHoverZh, width: 3024, height: 1610 },
            },
            {
                src: urbanAnalysis,
                width: 3778,
                height: 3692,
                fit: "contain",
                zh: { src: urbanAnalysisZh, width: 1612, height: 1450 },
            },
            {
                src: urbanInsight,
                width: 3778,
                height: 3556,
                fit: "contain",
                zh: { src: urbanInsightZh, width: 1706, height: 1396 },
            },
            {
                src: urbanCompare,
                width: 588,
                height: 1286,
                fit: "contain",
                zh: { src: urbanCompareZh, width: 692, height: 1478 },
            },
            {
                src: urbanReport,
                width: 1241,
                height: 1754,
                fit: "contain",
                zh: { src: urbanReportZh, width: 1156, height: 1664 },
            },
        ],
        system: [
            {
                src: urbanBoundary,
                width: 3250,
                height: 1723,
                fit: "contain",
                zh: { src: urbanBoundaryZh, width: 3250, height: 1723 },
            },
        ],
    },
    qwen: {
        hero: { src: qwenHero, width: 1680, height: 1750, fit: "cover", position: "center top" },
        problem: [{ src: qwenProblem, width: 1680, height: 2200, fit: "contain" }],
        strategy: [{ src: qwenSolution, width: 1680, height: 1450, fit: "contain" }],
        solution: [
            { src: qwenFlow, width: 1680, height: 2550, fit: "contain" },
            { src: qwenRecovery, width: 1680, height: 2000, fit: "contain" },
            { src: qwenGrowth, width: 1680, height: 2050, fit: "contain" },
        ],
    },
    drl: {
        hero: { src: drlFramework, width: 1892, height: 1148, fit: "contain" },
        solution: [
            { src: drlTraining, width: 2464, height: 1144, fit: "contain" },
            { src: drlEnvironment, width: 2466, height: 1134, fit: "contain" },
            { src: drlResults, width: 2428, height: 1188, fit: "contain" },
        ],
    },
    hospital: {
        hero: { src: hospitalMapping, width: 1682, height: 1480, fit: "contain" },
        solution: [
            { src: hospitalAnalytics, width: 1682, height: 1480, fit: "contain" },
            { src: hospitalDashboard, width: 1975, height: 1480, fit: "contain" },
        ],
    },
};
