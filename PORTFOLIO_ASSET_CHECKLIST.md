# Portfolio Asset Checklist

> 用途：Portfolio Website 搭建前的视觉素材清单。本清单只记录现有资料和可从当前 Demo 截取的内容，不代表已新生成或重新设计素材。
>
> 状态说明：
>
> - `Available`：现有文件中已有可复用的截图、图表或架构图。
> - `Need Capture`：当前 Demo 或原型已包含该画面，但尚未整理为 Portfolio 独立素材。
> - `Missing`：现有资料中没有可直接使用的视觉成品；如有文字基础，会在备注中说明。

---

## 1. UrbanInsight AI

**Demo：** https://modelscope.cn/studios/Janewithhz/UrbanInsight_AI

| 素材 | 状态 | 现有来源 / 后续动作 |
|---|---|---|
| Cover / Hero | `Need Capture` | 从 ModelScope Demo 选择能同时体现地图和 AI 分析的首屏。 |
| Map | `Need Capture` | 从 Demo 截取伦敦行政区地图、搜索和区域选择状态。 |
| Borough Analysis | `Need Capture` | 截取综合评分、排名、三维度和贡献度分析工作区。 |
| AI Insight | `Need Capture` | 截取基于数据库结果的优势、短板、建议或追问画面。 |
| Compare | `Need Capture` | 截取两个行政区的结构化对比画面。 |
| Export Conversation PDF | `Need Capture` | 从当前 Demo 截取对话 PDF 导出的入口或完成状态；使用前人工确认公开 Demo 中该流程可用。 |
| Architecture | `Available` | `specs/UrbanInsight AI/README.md` 的 Mermaid System Overview；`DEPLOYMENT.md` 另有原 Vercel + Railway 部署架构。 |
| AI Boundary | `Available` | 项目总档案已完整说明“PCA–TOPSIS 确定性计算 / AI 解释”边界；可复用 README 架构图与相应文案。 |

### 需手动处理

- 截取 Cover、Map、Borough Analysis、AI Insight 和 Compare。
- 确认对话 PDF 导出在公开 Demo 中的实际状态后截图。
- 将已有 Mermaid 架构图导出为 Website 可用的 SVG/PNG 属于后续建站阶段，本轮不执行。

---

## 2. Qwen AI Case Study

**国内主要展示入口：** https://qwen-product-case-study.pages.dev

| 素材 | 状态 | 现有来源 / 后续动作 |
|---|---|---|
| Cover / Hero | `Need Capture` | 从 Cloudflare Pages Demo 截取 Case Study 首屏。 |
| Problem / Existing Experience | `Need Capture` | Demo 已展示产品挑战、用户痛点与现有断点，尚未整理为独立图片。 |
| AI Conversation | `Need Capture` | 截取 AI 理解需求和补全条件的对话画面。 |
| Flight Recommendation / Comparison | `Need Capture` | 截取推荐卡片、“更多航班”入口与 GUI 比较界面。 |
| Round-trip Selection | `Need Capture` | 截取去程 / 返程分步选择及组合价格反馈。 |
| Rewards / 权益 | `Need Capture` | 截取首页权益触点、权益中心或任务完成后的价值反馈。 |
| Error / Recovery Flow | `Need Capture` | 截取价格变化、库存变化或订单异常恢复状态。 |
| Prototype Flow | `Need Capture` | 从 Demo 中整理“需求理解 → 推荐 → 比较 → 去返程确认 → 权益”的关键画面序列。 |

### 需手动处理

- 当前文件夹没有独立截图文件，上述素材均需从 Cloudflare Pages Demo 手动截取。
- 优先保留一组能串起端到端流程的 5–7 张图，避免只展示零散 UI。

---

## 3. DRL

**主要来源：** `specs/DRL/Hanzhen Fang - Presentation.pdf`

| 素材 | 状态 | 现有来源 / 页码 |
|---|---|---|
| System / Method Architecture | `Available` | PDF 第 6 页：P-CSim Overall Research Framework；第 7–9 页可作为 Agent、Reward Function 和 TD3 细节的辅助图。 |
| Training Curve | `Available` | PDF 第 10 页：Average Reward、Success Rate、Collisions 和 Cost Steps per Distance 对比曲线。 |
| Experiment Environment | `Available` | PDF 第 11 页：Fixed-target 与 Random-target 环境；第 5 页包含简化 100×100 二值地图。 |
| Personality Trajectory Comparison | `Available` | PDF 第 12 页：不同人格的 Fixed-target / Random-target 轨迹对比。 |
| Key Result Comparison | `Available` | PDF 第 12 页：成功率、碰撞次数和路径长度结果；第 10 页可补充人格模块与非人格模块对比。 |
| Personality-Behavior Data Evidence | `Available` | PDF 第 5 页：Big Five 与 Location Entropy、Max Speed、Trajectory Range、Speed Std 的相关结果。 |

### 需手动处理

- 不需要重做图或开发 Dashboard。
- 从 PDF 导出第 6、10、11、12 页或裁切其中的主图，作为 Portfolio Website 素材。
- 导出时保留指标标签、图例和必要数值，避免将实验结果变成无上下文的装饰图。

---

## 4. Hospital Spatial Intelligence Platform

| 素材 | 状态 | 现有来源 / 缺口 |
|---|---|---|
| Mobile Data Collection | `Missing` | 文档只有 GPS 定位、附近医院匹配和排队 / 环境提交的文字说明，没有移动端截图。 |
| GPS / Location Trigger | `Missing` | 文档有“最近 5 次 GPS 位置 + 持续接近”的逻辑说明，没有可用的视觉图。 |
| Map View | `Missing` | 文档说明使用 Leaflet 和 GeoJSON，没有地图截图。 |
| Dashboard / 3D Visualization | `Missing` | 文档说明使用 Cesium、状态颜色编码和历史报告，没有 Dashboard 截图。 |
| System Architecture | `Missing` | 现有 Markdown 有 Frontend → REST API → Express → PostgreSQL/PostGIS 的文本架构，但没有独立视觉成品。 |
| Data Flow | `Missing` | 现有 Markdown 有采集 → 管理 → 分析 → 可视化的文本流程，但没有独立流程图。 |

### 需手动补充

- 如旧项目仍可运行或有历史素材，优先查找并整理移动采集、地图和 Cesium Dashboard 截图。
- 若无法恢复旧画面，保留文字架构和数据流作为建站时的绘图依据，但不应标记为现有截图。
- 本轮不重建旧功能，不根据文字虚构产品画面。

---

## Portfolio Website 搭建前的最小素材包

- **UrbanInsight AI：** 5 张 Demo 截图 + 1 张已有架构图。
- **Qwen AI Case Study：** 5–7 张能连续讲完 AI + GUI + 权益闭环的 Demo 截图。
- **DRL：** 直接复用 PDF 第 6、10、11、12 页的图，无需新制作。
- **Hospital Platform：** 尽可能找回 3 张历史截图（移动采集、地图、3D Dashboard）；若找不到，作为文字型次要项目呈现。
