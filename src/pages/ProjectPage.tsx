import { useTranslation } from "react-i18next";
import { Link, Navigate, useParams } from "react-router-dom";
import { MediaPlaceholder } from "../components/MediaPlaceholder";
import { ProjectMedia } from "../components/ProjectMedia";
import { Reveal } from "../components/Reveal";
import { projectConfig, projectKeyBySlug, projectOrder } from "../projectConfig";
import { projectAssets, type ProjectAsset } from "../projectAssets";
import type { ProjectContent, ValidationType } from "../types";

function CaseSection({ number, title, children, className = "" }: { number: string; title: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`case-section section-shell ${className}`.trim()}>
      <Reveal>
        <div className="case-section__heading">
          <span>{number}</span>
          <h2>{title}</h2>
        </div>
        {children}
      </Reveal>
    </section>
  );
}

const validationClass: Record<ValidationType, string> = {
  verified: "verified",
  engineering: "engineering",
  target: "target",
  unvalidated: "unvalidated",
};

function VisualGroup({ assets = [], project, start, captionBefore = false }: { assets?: ProjectAsset[]; project: ProjectContent; start: number; captionBefore?: boolean }) {
  if (!assets.length || !project.visuals) return null;
  return (
    <div className="visual-story">
      {assets.map((asset, index) => (
        <ProjectMedia key={asset.src} asset={asset} content={project.visuals![start + index]} captionBefore={captionBefore} />
      ))}
    </div>
  );
}

export function ProjectPage() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const key = slug ? projectKeyBySlug[slug] : undefined;

  if (!key) return <Navigate to="/" replace />;

  const project = t(`projects.${key}`, { returnObjects: true }) as ProjectContent;
  const config = projectConfig[key];
  const currentIndex = projectOrder.indexOf(key);
  const nextKey = projectOrder[(currentIndex + 1) % projectOrder.length];
  const next = t(`projects.${nextKey}`, { returnObjects: true }) as ProjectContent;
  const nextConfig = projectConfig[nextKey];
  const assets = projectAssets[key];
  const visualStarts = {
    urbaninsight: { problem: 0, strategy: 0, solution: 1, system: 6 },
    qwen: { problem: 1, strategy: 2, solution: 3, system: 0 },
    drl: { problem: 0, strategy: 0, solution: 1, system: 0 },
    hospital: { problem: 0, strategy: 0, solution: 1, system: 0 },
  }[key];

  return (
    <main id="main-content" className={`case-study case-study--${key}`}>
      <section className="project-hero section-shell">
        <div className="project-hero__eyebrow">
          <Link to="/">{t("common.backHome")}</Link>
          <span>{project.number}</span>
        </div>
        <div className="project-hero__title-row">
          <div>
            <ul className="tag-list" aria-label="Project tags">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            <h1>{project.title}</h1>
            <p className="project-hero__subtitle">{project.subtitle}</p>
          </div>
          <p className="project-hero__summary">{project.summary}</p>
        </div>
        <div className="project-hero__actions">
          {config.demo ? <a className="action-link" href={config.demo} target="_blank" rel="noreferrer">{t("common.liveDemo")} <span aria-hidden="true">↗</span></a> : null}
          {config.github ? <a className="action-link action-link--quiet" href={config.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a> : null}
        </div>
        {assets.hero && project.visuals?.[0] ? (
          <ProjectMedia asset={assets.hero} content={project.visuals[0]} priority variant="hero" />
        ) : (
          <MediaPlaceholder title={project.media} note={project.mediaNote} kind={config.mediaKind} />
        )}
      </section>

      <CaseSection number="01" title={t("caseStudy.overview")} className="case-overview">
        <div className="overview-grid">
          <p className="case-lead">{project.overview}</p>
          <dl className="project-meta-grid">
            <div><dt>{t("caseStudy.role")}</dt><dd>{project.role}</dd></div>
            <div><dt>{t("caseStudy.timeline")}</dt><dd>{project.timeline}</dd></div>
            <div><dt>{t("caseStudy.status")}</dt><dd>{project.status}</dd></div>
          </dl>
        </div>
      </CaseSection>

      <CaseSection number="02" title={t("caseStudy.problem")} className="case-problem">
        <div className="problem-grid">
          <div><span className="mini-label">{t("caseStudy.targetUser")}</span><p>{project.problem.user}</p></div>
          <div><span className="mini-label">{t("caseStudy.currentFlow")}</span><p className="mono-flow">{project.problem.flow}</p></div>
          <div className="problem-break"><span className="mini-label">{t("caseStudy.coreBreak")}</span><p>{project.problem.break}</p></div>
        </div>
        <VisualGroup assets={assets.problem} project={project} start={visualStarts.problem} />
      </CaseSection>

      <CaseSection number="03" title={t("caseStudy.strategy")} className="case-strategy">
        <div className="strategy-list">
          {project.strategies.map((item, index) => (
            <article key={`${item.observation}-${index}`} className="strategy-row">
              <span className="strategy-index">{String(index + 1).padStart(2, "0")}</span>
              {item.title ? <h3 className="strategy-title">{item.title}</h3> : null}
              <div><span className="mini-label">{t("caseStudy.observation")}</span><p>{item.observation}</p></div>
              <div><span className="mini-label">{t("caseStudy.insight")}</span><p>{item.insight}</p></div>
              <div className="strategy-decision"><span className="mini-label">{t("caseStudy.decision")}</span><p>{item.decision}</p></div>
            </article>
          ))}
        </div>
        <VisualGroup assets={assets.strategy} project={project} start={visualStarts.strategy} />
      </CaseSection>

      <CaseSection number="04" title={t("caseStudy.solution")} className="case-solution">
        <div className="moment-grid">
          {project.moments.map((moment, index) => (
            <article key={moment.title} className="moment-card">
              <div className="moment-card__media"><span>{String(index + 1).padStart(2, "0")}</span><i aria-hidden="true" /></div>
              <h3>{moment.title}</h3>
              <p>{moment.text}</p>
              {moment.capabilities?.length ? (
                <ul className="moment-card__capabilities">
                  {moment.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
        <VisualGroup assets={assets.solution} project={project} start={visualStarts.solution} captionBefore={key === "urbaninsight"} />
        {!assets.solution?.length && key === "hospital" ? <p className="pending-note"><i aria-hidden="true" /> {t("caseStudy.mediaPending")}</p> : null}
      </CaseSection>

      <CaseSection number="05" title={t("caseStudy.system")} className="case-system">
        {project.architectureLayers?.length ? (
          <div className="architecture-layers" aria-label={t("caseStudy.system")}>
            {project.architectureLayers.map((layer) => (
              <section className="architecture-layer" key={layer.title}>
                <h3>{layer.title}</h3>
                <ul>{layer.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>
            ))}
          </div>
        ) : (
          <div className="system-flow" aria-label={t("caseStudy.system")}>
            {project.system.map((node, index) => (
              <div className="system-node" key={node}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{node}</strong>
                {index < project.system.length - 1 ? <i aria-hidden="true">→</i> : null}
              </div>
            ))}
          </div>
        )}
        <VisualGroup assets={assets.system} project={project} start={visualStarts.system} captionBefore={key === "urbaninsight"} />
        {project.techStack?.length ? (
          <section className="tech-stack" aria-labelledby="tech-stack-title">
            <div className="tech-stack__heading">
              <span>TECH STACK</span>
              <h3 id="tech-stack-title">{t("caseStudy.techStack")}</h3>
            </div>
            <div className="tech-stack__grid">
              {project.techStack.map((group) => (
                <div key={group.label}>
                  <h4>{group.label}</h4>
                  <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              ))}
            </div>
          </section>
        ) : null}
      </CaseSection>

      <CaseSection number="06" title={t("caseStudy.validation")} className="case-validation">
        {project.experiment ? (
          <section className="experiment-plan" aria-labelledby="experiment-plan-title">
            <div className="experiment-plan__heading">
              <span>{project.experiment.eyebrow}</span>
              <h3 id="experiment-plan-title">{project.experiment.title}</h3>
              <p>{project.experiment.note}</p>
            </div>
            <dl>
              {project.experiment.groups.map((group) => <div key={group.label}><dt>{group.label}</dt><dd>{group.value}</dd></div>)}
            </dl>
          </section>
        ) : null}
        <div className="validation-grid">
          {project.validation.map((item, index) => (
            <article key={`${item.label}-${index}`} className={`validation-card validation-card--${validationClass[item.type]}`}>
              <div className="validation-card__type"><i aria-hidden="true" /> {t(`caseStudy.${item.type}`)}</div>
              <h3>{item.label}</h3>
              <p>{item.value}</p>
            </article>
          ))}
        </div>
      </CaseSection>

      <CaseSection number="07" title={t("caseStudy.reflection")} className="case-reflection">
        <p className="reflection-copy">{project.reflection}</p>
      </CaseSection>

      <nav className="next-project section-shell" aria-label={t("common.nextProject")}>
        <span>{t("common.nextProject")}</span>
        <Link to={`/work/${nextConfig.slug}`}>
          {next.title}<span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </main>
  );
}
