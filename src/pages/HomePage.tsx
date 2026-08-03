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

function CapabilityColumn({ name }: { name: "product" | "ai" | "build" }) {
  const { t } = useTranslation();
  const group = t(`home.capabilities.${name}`, { returnObjects: true }) as { title: string; items: string[] };
  return (
    <div className="capability-group">
      <h3>{group.title}</h3>
      <ol>
        {group.items.map((item, index) => (
          <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>
        ))}
      </ol>
    </div>
  );
}

export function HomePage() {
  const { t } = useTranslation();
  const path = t("home.about.path", { returnObjects: true }) as string[];

  return (
    <main id="main-content">
      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero__meta">
          <span>{t("home.hero.eyebrow")}</span>
          <span><i aria-hidden="true" /> AI / PRODUCT / BUILD</span>
        </div>
        <div className="hero__body">
          <h1 id="hero-title">
            <span>{t("home.hero.titleLine1")}</span>
            <span>{t("home.hero.titleLine2")}</span>
          </h1>
          <div className="hero__statement">
            <p>{t("home.hero.statement")}</p>
            <a className="text-link" href="#work">{t("home.hero.cta")} <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <p className="hero__note">{t("home.hero.note")}</p>
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
            <p id="about-heading">{t("home.about.body")}</p>
            <ol className="career-path" aria-label="Career path">
              {path.map((item, index) => (
                <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>
              ))}
            </ol>
          </div>
        </Reveal>
      </section>

      <section className="capabilities-section section-shell" aria-labelledby="capabilities-heading">
        <Reveal>
          <SectionHeading eyebrow={t("home.capabilities.eyebrow")} title={t("home.capabilities.title")} />
        </Reveal>
        <Reveal className="capabilities-grid">
          <CapabilityColumn name="product" />
          <CapabilityColumn name="ai" />
          <CapabilityColumn name="build" />
        </Reveal>
      </section>

      <section className="education-section section-shell" aria-labelledby="education-heading">
        <Reveal>
          <SectionHeading eyebrow={t("home.education.eyebrow")} title={t("home.education.title")} />
        </Reveal>
        <Reveal className="education-grid">
          <article>
            <span className="project-number">01</span>
            <h3>{t("home.education.ucl.school")}</h3>
            <p>{t("home.education.ucl.degree")}</p>
            <time>{t("home.education.ucl.years")}</time>
          </article>
          <article>
            <span className="project-number">02</span>
            <h3>{t("home.education.cug.school")}</h3>
            <p>{t("home.education.cug.degree")}</p>
            <time>{t("home.education.cug.years")}</time>
            <small>{t("home.education.cug.honors")}</small>
          </article>
        </Reveal>
      </section>

      <section className="contact-section section-shell" aria-labelledby="contact-heading">
        <Reveal>
          <p className="eyebrow">{t("home.contact.eyebrow")}</p>
          <h2 id="contact-heading">{t("home.contact.title")}</h2>
          <div className="contact-links">
            <a href={`mailto:${EMAIL}`}>{EMAIL} <span aria-hidden="true">↗</span></a>
            <a href={GITHUB} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
