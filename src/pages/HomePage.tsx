import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { MediaPlaceholder } from "../components/MediaPlaceholder";
import { ProjectMedia } from "../components/ProjectMedia";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { projectConfig, projectOrder } from "../projectConfig";
import { projectAssets } from "../projectAssets";
import type { ProjectContent, ProjectKey } from "../types";

const EMAIL = "963528370@qq.com";
const GITHUB = "https://github.com/Jane-Hanzhen";

function ProjectCard({ projectKey }: { projectKey: ProjectKey }) {
  const { t } = useTranslation();
  const project = t(`projects.${projectKey}`, { returnObjects: true }) as ProjectContent;
  const config = projectConfig[projectKey];
  const asset = projectAssets[projectKey].hero;
  const visual = project.visuals?.[0];

  return (
    <article className={`project-card ${config.featured ? "project-card--featured" : "project-card--secondary"}`}>
      <Link to={`/work/${config.slug}`} className="project-card__link" aria-label={`${t("common.viewProject")}: ${project.title}`}>
        <div className="project-card__topline">
          <span className="project-number">{project.number}</span>
          <span className="project-arrow" aria-hidden="true">↗</span>
        </div>
        <div className="project-card__copy">
          <h3>{project.title}</h3>
          <p>{project.subtitle}</p>
          <ul className="tag-list" aria-label="Project tags">
            {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        </div>
        <div className="project-card__media">
          {asset && visual ? (
            <ProjectMedia asset={asset} content={visual} priority={projectKey === "urbaninsight"} variant="card" />
          ) : (
            <MediaPlaceholder title={project.media} note={project.mediaNote} kind={config.mediaKind} compact={!config.featured} />
          )}
        </div>
      </Link>
    </article>
  );
}

function CapabilityGrid() {
  const { t } = useTranslation();
  const items = t("home.capabilities.items", { returnObjects: true }) as { title: string; description: string }[];
  return (
    <div className="capabilities-grid">
      {items.map((item, index) => (
        <article className="capability-item" key={item.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );
}

export function HomePage() {
  const { t } = useTranslation();
  const education = t("home.hero.education", { returnObjects: true }) as { school: string; degree: string; years: string }[];

  return (
    <main id="main-content">
      <section className="personal-hero section-shell" aria-labelledby="hero-title">
        <div className="personal-hero__identity">
          <p className="eyebrow">{t("home.hero.eyebrow")}</p>
          <h1 id="hero-title">{t("home.hero.name")}</h1>
          <p className="personal-hero__direction">{t("home.hero.direction")}</p>
          <p className="personal-hero__statement">{t("home.hero.statement")}</p>
        </div>
        <div className="personal-hero__education" aria-label={t("home.hero.educationLabel")}>
          {education.map((item) => (
            <article key={item.school}>
              <h2>{item.school}</h2>
              <p>{item.degree}</p>
              <time>{item.years}</time>
            </article>
          ))}
        </div>
        <div className="personal-hero__actions">
          <div className="personal-hero__contacts">
            <a href={`mailto:${EMAIL}`}>{t("common.email")} <span aria-hidden="true">↗</span></a>
            <a href={GITHUB} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          </div>
          <a className="text-link" href="#work">{t("home.hero.cta")} <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section id="work" className="work-section section-shell" aria-labelledby="work-heading">
        <Reveal>
          <SectionHeading
            eyebrow={t("home.selectedWork.eyebrow")}
            title={t("home.selectedWork.title")}
            intro={t("home.selectedWork.intro")}
          />
        </Reveal>
        <div className="featured-work">
          {projectOrder.slice(0, 2).map((key) => <Reveal key={key}><ProjectCard projectKey={key} /></Reveal>)}
        </div>
        <div className="secondary-work">
          {projectOrder.slice(2).map((key) => <Reveal key={key}><ProjectCard projectKey={key} /></Reveal>)}
        </div>
      </section>

      <section id="about" className="about-section section-shell" aria-labelledby="about-heading">
        <Reveal className="about-grid">
          <SectionHeading eyebrow={t("home.about.eyebrow")} title={t("home.about.title")} />
          <div className="about-copy">
            <p id="about-heading">{t("home.about.body1")}</p>
            <p>{t("home.about.body2")}</p>
          </div>
        </Reveal>
      </section>

      <section id="capabilities" className="capabilities-section section-shell" aria-labelledby="capabilities-heading">
        <Reveal>
          <SectionHeading eyebrow={t("home.capabilities.eyebrow")} title={t("home.capabilities.title")} />
        </Reveal>
        <Reveal><CapabilityGrid /></Reveal>
      </section>
    </main>
  );
}
