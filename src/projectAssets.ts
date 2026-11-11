import urbanHome from "./assets/projects/urban/01-urban-home.png";
import urbanHomeZh from "./assets/projects/urban/ZN-01-urban-home.png";
import urbanMapHover from "./assets/projects/urban/02-map-hover-preview.png";
import urbanMapHoverZh from "./assets/projects/urban/ZN-02-map-hover-preview.png";
import urbanAnalysis from "./assets/projects/urban/02-analysis-overview.png";
import urbanAnalysisZh from "./assets/projects/urban/ZN-02-analysis-overview.png";
import urbanIndicators from "./assets/projects/urban/03-indicators.png";
import urbanIndicatorsZh from "./assets/projects/urban/ZN-03-indicators.png";
import urbanInsight from "./assets/projects/urban/03-ai-insight.png";
import urbanInsightZh from "./assets/projects/urban/ZN-03-ai-insight.png";
import urbanAskSources from "./assets/projects/urban/03b-ask-sources.png";
import urbanAskSourcesZh from "./assets/projects/urban/ZN-03b-ask-sources.png";
import urbanCompare from "./assets/projects/urban/04-compare.png";
import urbanCompareZh from "./assets/projects/urban/ZN-04-compare.png";
import urbanReport from "./assets/projects/urban/06-report-summary.png";
import urbanReportZh from "./assets/projects/urban/ZN-06-report-summary.png";
import urbanBoundary from "./assets/projects/urban/07-analysis.png";
import urbanBoundaryZh from "./assets/projects/urban/ZN-07-analysis.png";
import urbanEval from "./assets/projects/urban/08-eval-report.png";
import qwen01 from "./assets/projects/qwen/01.png";
import qwen02 from "./assets/projects/qwen/02.png";
import qwen03 from "./assets/projects/qwen/03.png";
import qwen04 from "./assets/projects/qwen/04.png";
import qwen05 from "./assets/projects/qwen/05.png";
import qwen06 from "./assets/projects/qwen/06.png";
import qwen07 from "./assets/projects/qwen/07.png";
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
    gallery?: ProjectAsset[];
};

export const projectAssets: Record<ProjectKey, ProjectAssetSet> = {
    urbaninsight: {
        hero: {
            src: urbanHome,
            width: 3024,
            height: 1890,
            fit: "cover",
            zh: { src: urbanHomeZh, width: 3024, height: 1890 },
        },
        solution: [
            {
                src: urbanMapHover,
                width: 3024,
                height: 1890,
                fit: "contain",
                zh: { src: urbanMapHoverZh, width: 3024, height: 1890 },
            },
            {
                src: urbanAnalysis,
                width: 3024,
                height: 1890,
                fit: "contain",
                zh: { src: urbanAnalysisZh, width: 2276, height: 1344 },
            },
            {
                src: urbanIndicators,
                width: 2824,
                height: 2346,
                fit: "contain",
                zh: { src: urbanIndicatorsZh, width: 1898, height: 1498 },
            },
            {
                src: urbanInsight,
                width: 3024,
                height: 1890,
                fit: "contain",
                zh: { src: urbanInsightZh, width: 1820, height: 1588 },
            },
            {
                src: urbanCompare,
                width: 3024,
                height: 1890,
                fit: "contain",
                zh: { src: urbanCompareZh, width: 2256, height: 1336 },
            },
            {
                src: urbanAskSources,
                width: 996,
                height: 2254,
                fit: "contain",
                zh: { src: urbanAskSourcesZh, width: 996, height: 2254 },
            },
            {
                src: urbanReport,
                width: 1414,
                height: 2000,
                fit: "contain",
                zh: { src: urbanReportZh, width: 1414, height: 2000 },
            },
        ],
        system: [
            {
                src: urbanBoundary,
                width: 4872,
                height: 1134,
                fit: "contain",
                zh: { src: urbanBoundaryZh, width: 4872, height: 1134 },
            },
            {
                src: urbanEval,
                width: 2360,
                height: 1582,
                fit: "contain",
            },
        ],
    },
    qwen: {
        hero: { src: qwen01, width: 1330, height: 1317, fit: "cover", position: "center top" },
        gallery: [
            { src: qwen02, width: 544, height: 1090, fit: "contain" },
            { src: qwen03, width: 744, height: 1504, fit: "contain" },
            { src: qwen04, width: 748, height: 1504, fit: "contain" },
            { src: qwen05, width: 1125, height: 2436, fit: "contain" },
            { src: qwen06, width: 1165, height: 2450, fit: "contain" },
            { src: qwen07, width: 1134, height: 2445, fit: "contain" },
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
