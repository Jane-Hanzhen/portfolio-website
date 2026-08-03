# DRL Portfolio 页面结构 & 简历版本

# Part 1. Portfolio 页面结构（One-page Case Study）

## Title

# Personality-Driven Crowd Simulation with Deep Reinforcement Learning

### Subtitle

Building socially-aware AI agents by integrating personality traits into
multi-agent reinforcement learning.

------------------------------------------------------------------------

# 01 Problem

## Traditional Crowd Simulation Limitation

Most crowd simulation approaches focus on physical factors:

-   Position
-   Velocity
-   Obstacle avoidance
-   Navigation efficiency

However, human movement is also influenced by individual differences and
social characteristics.

Existing DRL-based crowd simulation models often generate homogeneous
agents and lack behavioral diversity.

------------------------------------------------------------------------

# 02 Research Insight

## Human Behavior Is Not Purely Physical

Different individuals may respond differently under the same
environment.

For example:

-   Some people explore more actively.
-   Some people prioritize efficiency.
-   Some people show unstable movement patterns.

Therefore:

> AI agents should not only understand the environment, but also
> represent individual behavioral characteristics.

------------------------------------------------------------------------

# 03 Solution

## Personality-driven AI Agent Framework

Designed a multi-agent deep reinforcement learning framework that
integrates:

### Physical Information

-   Position
-   Velocity
-   Environmental constraints

### Social Information

-   Big Five Personality Traits
-   Age
-   Gender

Creating:

**Socialized State Space**

S = (Physical State, Social State)

------------------------------------------------------------------------

# 04 Model Architecture

## Data → Personality Mapping → DRL Agent → Simulation

### Data Processing

Input:

-   Motion trajectory data
-   Questionnaire data

Processing:

-   Trajectory cleaning
-   Behavioral feature extraction
-   Personality score calculation

↓

### Personality-Behavior Mapping

Mapped personality traits into behavioral mechanisms:

  Personality         Behavioral Influence
  ------------------- ----------------------
  Openness            Exploration tendency
  Conscientiousness   Task efficiency
  Extraversion        Social interaction
  Agreeableness       Cooperation
  Neuroticism         Movement instability

↓

### Reinforcement Learning

Algorithm:

TD3 (Twin Delayed Deep Deterministic Policy Gradient)

Framework:

Actor-Critic Architecture

------------------------------------------------------------------------

# 05 Experiment Design

## Evaluation Setup

Two controlled experiments:

### Fixed-target Evaluation

Testing navigation performance under predictable targets.

### Random-target Evaluation

Testing generalization ability under changing targets.

Experimental setup:

-   20 agents
-   4 teams
-   Different personality profiles
-   Multiple independent trials

------------------------------------------------------------------------

# 06 Results & Insights

## Personality Creates Different Behavioral Patterns

### High Extraversion Agents

-   Higher navigation success rate
-   Lower collision rate
-   More efficient paths

### High Openness Agents

-   Stronger exploration behavior
-   Larger trajectory variation

### High Neuroticism Agents

-   Less stable navigation
-   Higher collision tendency

## Key Finding

Personality parameters successfully influenced agent decision-making and
generated more interpretable crowd behaviors.

------------------------------------------------------------------------

# 07 Impact

## From Physical Agent to Socialized Agent

This project demonstrates how psychological features can be integrated
into AI simulation systems to improve behavioral diversity and
interpretability.

Potential applications:

-   Indoor space planning
-   Crowd management
-   Simulation-based decision support

------------------------------------------------------------------------

# Part 2. Resume Bullet Version

## Version A - AI Product / Technical PM

**Personality-Driven Crowd Simulation with Deep Reinforcement
Learning**\
2025.02 - 2025.09

-   Developed a multi-agent DRL simulation framework integrating Big
    Five personality traits, age and gender into agent state
    representations to address homogeneous behaviors in traditional
    crowd simulation.
-   Processed UCL "100 Minds in Motion" trajectory and questionnaire
    datasets, extracting behavioral features and conducting
    personality-behavior correlation analysis to support agent behavior
    modeling.
-   Designed personality-aware reward mechanisms within TD3
    reinforcement learning, mapping personality dimensions to
    exploration, efficiency, social interaction and movement stability.
-   Conducted controlled experiments under fixed-target and
    random-target scenarios, validating that personality-conditioned
    agents generated differentiated navigation behaviors.
-   Built an interpretable AI simulation framework connecting
    psychological attributes with reinforcement learning-based decision
    making.

------------------------------------------------------------------------

# Version B - AI Algorithm / Data Science

-   Built a personality-driven multi-agent crowd simulation framework
    based on TD3 reinforcement learning, incorporating physical and
    social state representations.
-   Developed ETL pipelines for trajectory data preprocessing, feature
    extraction and behavioral metric analysis using Python, NumPy and
    Pandas.
-   Constructed personality-behavior mapping mechanisms by integrating
    Big Five personality traits into dynamic reward functions.
-   Evaluated model performance through controlled experiments and
    analyzed the impact of personality parameters on navigation success,
    path efficiency and behavioral diversity.

------------------------------------------------------------------------

# Version C - Short Resume Version

-   Developed a TD3-based multi-agent crowd simulation framework by
    integrating Big Five personality traits into agent state space and
    reward functions.
-   Processed trajectory and questionnaire data to identify
    personality-behavior relationships and construct interpretable AI
    agents.
-   Validated differentiated navigation behaviors across personality
    profiles through controlled simulation experiments.

------------------------------------------------------------------------

# Interview Storyline

## 1. Why this project?

Traditional AI simulation models often treat people as identical agents.
This project explores whether introducing human behavioral differences
can make AI agents more realistic.

## 2. What was your contribution?

I mainly worked on data processing, personality-behavior analysis, state
space design, reward function construction and simulation evaluation.

## 3. What is the key innovation?

The key idea is transforming personality characteristics from static
labels into dynamic factors that influence reinforcement learning
decisions.

## 4. Why is it valuable?

It improves AI simulation interpretability by connecting human
characteristics with agent behaviors, providing a foundation for more
realistic simulation systems.
