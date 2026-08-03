# 千问 AI 新用户生态体验与 7 日留存优化产品 Demo

**AI Product Case Study**

探索 AI 助手如何从回答问题，进一步发展为帮助用户完成复杂任务的智能助手。

> Independent Product Case Study · AI Experience · Growth & Retention

---

## Overview

本项目是一个独立产品 Case Study，探索 AI + GUI 协同体验如何降低复杂决策成本，并通过生态权益设计建立持续使用触点。

以往返机票为切入点，重新设计 **AI 理解需求 + GUI 辅助决策 + 生态权益连接** 的完整用户流程，核心方向是 AI + GUI 协同体验设计。

项目希望回答两个问题：

1. AI 如何从“提供推荐”进一步承接用户的比较、确认与任务完成？
2. 一次性任务完成后，如何通过可感知的生态价值建立持续回访理由？

“7 日留存”是本案例的产品目标与优化方向，不代表已经验证的业务结果。

[查看完整 Case Study](specs/case-study-spec.md) · [查看项目总档案](docs/Qwen_AI_Project_Archive.md)

---

## Problem

当前 AI 推荐流程在复杂交易中存在三个关键断点：

- 推荐之后无法继续承接复杂决策；
- 用户需要离开 AI，回到传统工具重新搜索与比较；
- 已形成的 AI 上下文无法转化为完整任务闭环。

核心问题是：

> 推荐之后，AI 无法继续承接用户的比较和确认过程。

当前路径：

**提出需求 → AI 推荐 → 信息不足 → 打开传统 OTA → 重新搜索与决策**

---

## Product Insight

复杂任务不应该完全依赖纯聊天。不同任务阶段需要不同的交互形式。

### AI 更适合

- 理解用户需求；
- 补全信息；
- 生成初步推荐；
- 解释结果。

### GUI 更适合

- 展示高信息密度内容；
- 支持方案筛选与比较；
- 帮助用户确认最终选择。

核心判断：

> AI 不应该替用户完成所有决策，而应该与 GUI 协同帮助用户完成任务。

在高价值、高约束场景中，产品原则是：**AI 帮我筛，我来确认。**

---

## Solution

### 01 AI Workflow

AI 负责理解和收敛需求：

**需求理解 → 信息补全 → 初步筛选 → 生成推荐**

推荐卡片保留“更多航班”入口，让用户可以从对话自然进入后续决策流程。

### 02 GUI Decision Experience

在 AI 对话中引入 GUI 决策工具：

- 自动复用已识别参数；
- 承载航班筛选与比较；
- 支持去返程分步选择；
- 持续反馈组合价格；
- 将最终结果回传 AI 完成确认。

目标是让用户无需离开 AI，即可完成复杂决策，同时保留最终控制权。

### 03 Growth & Retention Loop

任务完成后，用生态权益形成持续价值反馈：

**完成任务 → 获得权益 → 使用生态服务 → 再次返回 AI**

权益入口被前置到首页，并通过统一权益中心承接发现、管理与兑换。激励只奖励真实任务推进，避免产品变成单纯签到工具。

---

## Experiment Design

核心验证问题：

> AI + GUI 是否提升推荐到订单确认的转化率？

| 实验设计 | 内容 |
| --- | --- |
| Control Group | 当前 AI 推荐卡片流程 |
| Experiment Group | AI 推荐 + GUI 筛选比较流程 |

### Primary Metric

- 推荐 → 订单确认转化率

### Secondary Metrics

- “查看更多”点击率；
- 去返程完成率；
- 弹窗退出率。

### Guardrail Metrics

- 页面响应时间；
- API 错误率；
- 支付前价格变化率。

本案例展示的是实验设计，不包含千问或阿里巴巴真实内部数据与实验结果。

---

## Prototype

### Live Demo

- **Cloudflare Pages（国内主要展示入口）：** https://qwen-product-case-study.pages.dev
- **Vercel（原部署入口 / 备用）：** https://qwen-product-case-study.vercel.app

### Current Prototype Includes

- 产品挑战分析；
- 用户洞察与痛点分析；
- AI 对话体验优化；
- GUI 决策体验设计；
- 航班推荐、比较与确认流程 Prototype；
- 订单异常恢复体验；
- 新用户权益生态 Prototype；
- 实验设计与验证路线图。

---

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- 组件化架构
- 响应式设计与移动端适配
- `prefers-reduced-motion` 可访问性支持

技术实现用于支持 Case Study 的交互展示，项目主体仍然是产品洞察、方案取舍与实验验证。

---

## Local Development

本项目使用 pnpm 管理依赖。

```bash
pnpm install
pnpm dev
```

构建并预览生产版本：

```bash
pnpm build
pnpm preview
```

本项目为静态前端 Case Study，无后端服务、数据库或必需环境变量。航班搜索、订单、支付和权益兑换均为概念原型，不连接真实业务接口。

---

## Role

**Independent Product Manager**

负责：

- 用户问题分析；
- 产品机会判断；
- AI Workflow 设计；
- UX Flow 设计；
- AI + GUI 交互策略设计；
- 增长与留存机制设计；
- 实验方案与指标设计。

---

## Disclaimer

本项目基于公开产品体验、竞品观察与模拟业务场景进行独立产品推演。

本项目不代表千问或阿里巴巴官方方案；页面中的产品界面均为用于表达策略的概念性 Mockup，不代表真实产品状态。文中的业务判断和指标设计均为 Case Study assumption。
