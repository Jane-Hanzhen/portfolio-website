# DRL 项目档案

## 项目名称

基于深度强化学习（DRL）的人格驱动室内人群行为模拟

**English Title:**\
Personality-Driven Crowd Simulation in Indoor Environments with Deep
Reinforcement Learning

**项目时间：** 2025.02 - 2025.09

**项目类型：** 学术研究 / AI算法项目

**项目角色：** Research Project Lead

------------------------------------------------------------------------

# 1. 项目概述

## 项目背景

随着城市空间复杂度提升，人群仿真（Crowd
Simulation）成为室内环境设计、空间管理和行为预测的重要技术手段。

传统深度强化学习人群仿真模型主要关注智能体的物理状态，例如位置、速度和环境约束，但通常忽略个体之间的社会心理差异，导致模拟行为趋于同质化。

本项目提出一种人格驱动的人群仿真框架（Personality-Driven Crowd
Simulation），将大五人格特质（Big Five Personality
Traits）引入多智能体强化学习模型，使智能体能够表现出更加差异化、可解释的人类行为模式。

------------------------------------------------------------------------

# 2. 核心问题

## Research Questions

### RQ1

人格参数引入后，是否会影响人群仿真的整体表现指标？

包括：

-   Goal achievement rate
-   Path efficiency
-   Convergence speed

### RQ2

不同人格类型的智能体是否会表现出不同的行为模式和任务表现？

------------------------------------------------------------------------

# 3. 数据与分析流程

## 数据来源

数据来自 UCL PEARL（Person--Environment--Activity Research
Laboratory）的：

**100 Minds in Motion Studies**

数据包含：

-   110名参与者轨迹数据
-   问卷调查数据
-   个体属性信息

研究数据用于分析：

-   个体差异
-   环境交互
-   人群行为模式

------------------------------------------------------------------------

# 4. 数据处理与特征工程

## 轨迹数据处理

构建数据处理流程：

Trajectory Data

↓

Data Cleaning

↓

Behavior Feature Extraction

↓

Personality-Behavior Analysis

提取行为指标：

-   Trajectory range
-   Speed statistics
-   Location entropy
-   Navigation performance

## 人格特征建模

基于问卷数据计算 Big Five Personality Traits：

-   Openness
-   Conscientiousness
-   Extraversion
-   Agreeableness
-   Neuroticism

通过相关分析探索：

人格特征 → 行为指标

例如：

-   Openness 与 Location Entropy 正相关
-   Conscientiousness 与 Maximum Speed 相关
-   Extraversion 与 Trajectory Range 相关

为后续人格-行为映射提供依据。

------------------------------------------------------------------------

# 5. 方法设计

## 整体框架

构建 Personality-Driven Deep Reinforcement Learning Framework：

Data Processing

↓

Personality-aware Agent Definition

↓

Socialized State Space

↓

TD3 Reinforcement Learning

↓

Crowd Simulation

------------------------------------------------------------------------

# 6. 个性化智能体设计

传统模型：

Physical Agent

仅包含：

-   Position
-   Velocity
-   Environment information

本项目：

Personalized Agent

加入：

-   Big Five Personality Traits
-   Age
-   Gender

形成更加完整的智能体定义。

------------------------------------------------------------------------

# 7. 双模态状态空间设计

设计 Socialized State Space：

## Physical State

包括：

-   Agent velocity
-   Agent position
-   Static potential field
-   Obstacle information

## Social State

包括：

-   Personality
-   Age
-   Gender

最终状态空间：

S = (S_physical, S_social)

实现从：

Physical Agent

到：

Socialized Agent

的扩展。

------------------------------------------------------------------------

# 8. 强化学习模型

## Algorithm

采用：

**TD3 (Twin Delayed Deep Deterministic Policy Gradient)**

基于 Actor-Critic 架构学习智能体导航策略。

## Simulation Setup

-   20 agents
-   4 teams
-   Each team contains 5 personality types

训练目标：

学习不同人格智能体在环境中的导航策略。

------------------------------------------------------------------------

# 9. 人格-行为映射机制

核心创新：

将人格特征映射至 Reward Function，使人格影响智能体行为学习。

## Openness

目标：

增强探索行为

方法：

通过 Location Entropy 增加探索奖励。

## Conscientiousness

目标：

模拟任务导向行为

方法：

提高速度能力，并增强任务完成奖励。

## Extraversion

目标：

模拟更加主动的社会互动行为

方法：

降低社交距离惩罚。

## Agreeableness

目标：

促进合作行为

方法：

提高团队目标奖励。

## Neuroticism

目标：

模拟更加不稳定的行为模式

方法：

增加速度波动和碰撞敏感度。

------------------------------------------------------------------------

# 10. 实验设计

设计两类控制实验：

## Fixed-target Evaluation

固定目标位置：

用于测试稳定环境下导航表现。

## Random-target Evaluation

随机生成目标：

用于测试模型泛化能力。

实验：

-   10 independent trials
-   Performance metrics averaged across trials

------------------------------------------------------------------------

# 11. 实验结果

## 人格模块影响分析

结果显示：

-   人格模块能够提升行为差异性
-   不显著增加模型复杂度
-   不增加碰撞风险

## 不同人格行为表现

### High Extraversion

表现：

-   更高成功率
-   更低碰撞率
-   更短路径

### High Openness

表现：

-   更强探索倾向
-   更长轨迹

### High Neuroticism

表现：

-   更不稳定导航
-   更高碰撞次数

实验验证：

人格参数能够影响智能体行为模式，使模拟结果更加具有可解释性。

------------------------------------------------------------------------

# 12. 项目成果

-   构建人格驱动的多智能体深度强化学习仿真框架。
-   将社会心理属性引入传统物理型agent模型。
-   实现人格特征与行为策略之间的动态映射。
-   验证不同人格智能体能够产生差异化运动模式。

------------------------------------------------------------------------

# 13. 技术栈

## Programming

-   Python
-   NumPy
-   Pandas

## AI / ML

-   PyTorch
-   Deep Reinforcement Learning
-   TD3
-   Actor-Critic

## Data Processing

-   Trajectory Data Processing
-   Feature Engineering
-   Statistical Correlation Analysis

------------------------------------------------------------------------

# 14. 求职定位

## AI Product / Strategy 视角

该项目体现：

-   AI算法理解能力
-   数据驱动的问题分析能力
-   从研究问题到模型方案的完整设计能力

## Technical PM 价值

能够支持：

-   AI产品技术沟通
-   算法方案理解
-   数据与模型评估
-   AI应用场景探索

------------------------------------------------------------------------

# 15. 简历关键词

Deep Reinforcement Learning

Multi-Agent Simulation

Personality-aware AI Agent

Behavior Modeling

Feature Engineering

PyTorch

TD3

AI Simulation System
