import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { MediaPlaceholder } from "../components/MediaPlaceholder";
import { ProjectMedia } from "../components/ProjectMedia";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { projectConfig, projectOrder } from "../projectConfig";
import { projectAssets } from "../projectAssets";
import workbenchCream from "../assets/projects/workbench/01-cream-matcha.png";
import workbenchMocha from "../assets/projects/workbench/02-mocha-milk.png";
import workbenchLotus from "../assets/projects/workbench/03-lotus-blush.png";
import type { ProjectContent, ProjectKey } from "../types";

const EMAIL = "963528370@qq.com";
const GITHUB = "https://github.com/Jane-Hanzhen";

function Highlight({ text, phrase }: { text: string; phrase?: string }) {
  if (!phrase) return <>{text}</>;
  const index = text.indexOf(phrase);
  if (index === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, index)}
      <mark className="text-highlight">{phrase}</mark>
      {text.slice(index + phrase.length)}
    </>
  );
}

function ProjectCard({ projectKey }: { projectKey: ProjectKey }) {
  const { t } = useTranslation();
  const project = t(`projects.${projectKey}`, { returnObjects: true }) as ProjectContent;
  const outcome = t(`home.projectOutcomes.${projectKey}`) as string;
  const config = projectConfig[projectKey];
  const asset = projectAssets[projectKey].hero;
  const visual = project.visuals?.[0];

  return (
    <article className={`project-card project-card--${projectKey} ${config.featured ? "project-card--featured" : "project-card--secondary"}`}>
      <Link to={`/work/${config.slug}`} className="project-card__link" aria-label={`${t("common.viewProject")}: ${project.title}`}>
        <div className="project-card__topline">
          <span className="project-number">{project.number}</span>
          <span className="project-arrow" aria-hidden="true">↗</span>
        </div>
        <div className="project-card__copy">
          <h3>{project.title}</h3>
          <p>{project.subtitle}</p>
          <p className="project-card__outcome">{outcome}</p>
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

type WorkbenchTheme = {
  name: string;
  code: string;
  caption: string;
  alt: string;
};

const workbenchShots = [
  { src: workbenchCream, width: 1400, height: 961 },
  { src: workbenchMocha, width: 1400, height: 961 },
  { src: workbenchLotus, width: 1400, height: 961 },
];

function SideProject() {
  const { t } = useTranslation();
  const facts = t("home.sideProject.facts", { returnObjects: true }) as { label: string; value: string }[];
  const themeCopy = t("home.sideProject.themes", { returnObjects: true }) as WorkbenchTheme[];
  const themes = themeCopy.map((theme, index) => ({ ...theme, ...workbenchShots[index] }));

  const [activeTheme, setActiveTheme] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const isLightboxOpen = activeTheme !== null;

  useEffect(() => {
    if (!isLightboxOpen) return;

    returnFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveTheme(null);
      if (event.key === "ArrowLeft") {
        setActiveTheme((current) => (current === null ? null : (current + themes.length - 1) % themes.length));
      }
      if (event.key === "ArrowRight") {
        setActiveTheme((current) => (current === null ? null : (current + 1) % themes.length));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      returnFocusRef.current?.focus();
    };
  }, [isLightboxOpen, themes.length]);

  const showPrevious = () => {
    setActiveTheme((current) => (current === null ? null : (current + themes.length - 1) % themes.length));
  };
  const showNext = () => {
    setActiveTheme((current) => (current === null ? null : (current + 1) % themes.length));
  };

  const activeThemeName = activeTheme === null ? "" : themes[activeTheme].name;
  const activeThemeCode = activeTheme === null ? "" : themes[activeTheme].code;
  const activeThemeTitle =
    activeThemeCode.toLowerCase() === activeThemeName.toLowerCase()
      ? activeThemeName
      : `${activeThemeCode} · ${activeThemeName}`;

  return (
    <article className="side-project">
      <div className="side-project__intro">
        <div className="side-project__copy">
          <h3>{t("home.sideProject.cardTitle")}</h3>
          <p className="side-project__body">{t("home.sideProject.cardBody")}</p>
        </div>
        <dl className="side-project__facts">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="side-project__gallery-head">
        <span className="mini-label">{t("home.sideProject.galleryLabel")}</span>
        <span className="mini-label">{t("home.sideProject.galleryHint")}</span>
      </div>
      <div className="side-project__gallery">
        {themes.map((theme, index) => (
          <button
            key={theme.code}
            type="button"
            className="theme-card"
            onClick={() => setActiveTheme(index)}
            aria-label={`${theme.name}: ${t("home.sideProject.galleryHint")}`}
          >
            <span className="theme-card__window">
              <span className="theme-card__bar" aria-hidden="true">
                <span className="theme-card__dots"><i /><i /><i /></span>
                <span className="theme-card__window-title">我的工作台</span>
              </span>
              <img
                src={theme.src}
                width={theme.width}
                height={theme.height}
                alt={theme.alt}
                loading="lazy"
                decoding="async"
              />
            </span>
            <span className="theme-card__caption">
              <span className="theme-card__name">{theme.name}<em>{theme.code}</em></span>
              <span className="theme-card__desc">{theme.caption}</span>
            </span>
          </button>
        ))}
      </div>

      {activeTheme !== null ? createPortal(
        <div
          className="workbench-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby="workbench-lightbox-title"
        >
          <button
            type="button"
            className="workbench-lightbox__backdrop"
            aria-label={t("common.close")}
            onClick={() => setActiveTheme(null)}
          />
          <div className="workbench-lightbox__panel">
            <div className="workbench-lightbox__head">
              <p id="workbench-lightbox-title">{activeThemeTitle}</p>
              <button
                ref={closeButtonRef}
                type="button"
                className="workbench-lightbox__close"
                aria-label={t("common.close")}
                onClick={() => setActiveTheme(null)}
              >
                ×
              </button>
            </div>
            <div className="workbench-lightbox__stage">
              <button
                type="button"
                className="workbench-lightbox__nav"
                aria-label={t("home.sideProject.previousTheme")}
                onClick={showPrevious}
              >
                ←
              </button>
              <img src={themes[activeTheme].src} alt={themes[activeTheme].alt} />
              <button
                type="button"
                className="workbench-lightbox__nav"
                aria-label={t("home.sideProject.nextTheme")}
                onClick={showNext}
              >
                →
              </button>
            </div>
            <div className="workbench-lightbox__foot">
              <p>{themes[activeTheme].caption}</p>
              <span>
                {String(activeTheme + 1).padStart(2, "0")} / {String(themes.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>,
        document.body,
      ) : null}
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

function ContactCta() {
  const { t } = useTranslation();
  return (
    <section className="contact-cta section-shell" aria-labelledby="contact-cta-title">
      <div className="contact-cta__copy">
        <p className="eyebrow">{t("home.contactCta.eyebrow")}</p>
        <h2 id="contact-cta-title">{t("home.contactCta.title")}</h2>
        <p>{t("home.contactCta.body")}</p>
      </div>
      <div className="contact-cta__actions">
        <a className="contact-cta__primary" href={`mailto:${EMAIL}`}>
          {t("home.contactCta.email")} <span aria-hidden="true">↗</span>
        </a>
        <a className="contact-cta__secondary" href={GITHUB} target="_blank" rel="noreferrer">
          {t("home.contactCta.github")} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}

export function HomePage() {
  const { t } = useTranslation();
  const education = t("home.hero.education", { returnObjects: true }) as { school: string; degree: string; years: string }[];
  const eventStats = t("home.about.eventStats", { returnObjects: true }) as { value: string; label: string }[];

  return (
    <main id="main-content">
      <section className="personal-hero section-shell" aria-labelledby="hero-title">
        <div className="personal-hero__identity">
          <p className="eyebrow">{t("home.hero.eyebrow")}</p>
          <h1 id="hero-title">{t("home.hero.name")}</h1>
          <p className="personal-hero__direction">{t("home.hero.direction")}</p>
          <p className="personal-hero__statement">
            <Highlight text={t("home.hero.statement")} phrase={t("home.hero.statementEmphasis")} />
          </p>
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
          <a className="personal-hero__cta" href="#work">{t("home.hero.cta")} <span aria-hidden="true">↓</span></a>
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

      <section id="side-project" className="side-project-section section-shell">
        <Reveal>
          <SectionHeading
            eyebrow={t("home.sideProject.eyebrow")}
            title={t("home.sideProject.title")}
            intro={t("home.sideProject.intro")}
          />
        </Reveal>
        <Reveal><SideProject /></Reveal>
      </section>

      <section id="about" className="about-section section-shell" aria-labelledby="about-heading">
        <Reveal className="about-grid">
          <SectionHeading eyebrow={t("home.about.eyebrow")} title={t("home.about.title")} />
          <div className="about-copy">
            <p id="about-heading">{t("home.about.body1")}</p>
            <p>{t("home.about.body2")}</p>
            <div className="about-copy__aside">
              <span className="mini-label">{t("home.about.eventLabel")}</span>
              <dl className="about-event__stats">
                {eventStats.map((stat) => (
                  <div key={stat.label}>
                    <dt>{stat.value}</dt>
                    <dd>{stat.label}</dd>
                  </div>
                ))}
              </dl>
              <p>
                <Highlight text={t("home.about.event")} phrase={t("home.about.eventEmphasis")} />
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="capabilities" className="capabilities-section section-shell" aria-labelledby="capabilities-heading">
        <Reveal>
          <SectionHeading
            eyebrow={t("home.capabilities.eyebrow")}
            title={t("home.capabilities.title")}
            intro={t("home.capabilities.intro")}
          />
        </Reveal>
        <Reveal><CapabilityGrid /></Reveal>
      </section>

      <Reveal><ContactCta /></Reveal>
    </main>
  );
}
