import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { urbanHybridEn, urbanHybridZh } from "../content/urbanHybrid";
import askChat from "../assets/projects/urban/ZN-04-ask-chat.png";
import askSources from "../assets/projects/urban/ZN-04-ask-sources.png";
import boundary from "../assets/projects/urban/ZN-07-analysis.png";
import compareFull from "../assets/projects/urban/ZN-compare-full.png";
import evalReport from "../assets/projects/urban/ZN-08-eval.png";
import home from "../assets/projects/urban/ZN-01-urban-home.png";
import indicators from "../assets/projects/urban/ZN-03-indicators.png";
import insightPanel from "../assets/projects/urban/ZN-insight-panel.png";
import mapHover from "../assets/projects/urban/ZN-02-map-hover-preview.png";
import overview from "../assets/projects/urban/ZN-02-analysis-overview.png";
import report from "../assets/projects/urban/ZN-06-report-summary.png";

const DEMO = "https://modelscope.cn/studios/Janewithhz/UrbanInsight_AI";
const GITHUB = "https://github.com/Jane-Hanzhen/urbaninsight-ai";

function SectionHead({ no, title, sub }: { no: string; title: string; sub?: string }) {
  return (
    <div className="ui-sec-head">
      <div className="ui-sec-no ui-mono">{no}</div>
      <div>
        <h2>{title}</h2>
        {sub ? <div className="ui-sec-sub">{sub}</div> : null}
      </div>
    </div>
  );
}

export function UrbanInsightHybridPage() {
  const { t, i18n } = useTranslation();
  const content = i18n.resolvedLanguage === "en" ? urbanHybridEn : urbanHybridZh;
  const noteIndex = Math.max(content.results.platformNote.indexOf("："), content.results.platformNote.indexOf(":"));
  const noteLead = noteIndex >= 0 ? content.results.platformNote.slice(0, noteIndex + 1) : "";
  const noteBody = noteIndex >= 0 ? content.results.platformNote.slice(noteIndex + 1) : content.results.platformNote;

  const figure = (index: number) => content.experience.figures[index];

  return (
    <main id="main-content" className="ui-hybrid">
      <div className="ui-wrap">
        <header className="ui-hero">
          <div className="ui-eyebrow">
            <Link to="/">{t("common.backHome")}</Link>
            <span>{content.eyebrow}</span>
          </div>

          <div className="ui-title-row">
            <div>
              <ul className="ui-tags" aria-label="Project tags">
                {content.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <h1>{content.title}</h1>
              <p className="ui-subtitle">{content.subtitle}</p>
            </div>
            <p className="ui-summary">{content.summary}</p>
          </div>

          <dl className="ui-meta">
            {content.meta.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="ui-actions">
            <a href={DEMO} target="_blank" rel="noreferrer">{content.demoLabel} <span aria-hidden="true">↗</span></a>
            <a href={GITHUB} target="_blank" rel="noreferrer">{content.githubLabel} <span aria-hidden="true">↗</span></a>
          </div>
        </header>

        <section className="ui-section">
          <SectionHead no={content.problem.no} title={content.problem.title} sub={content.problem.sub} />
          <div className="ui-cols3">
            {content.problem.cards.map((card) => (
              <div className="ui-card" key={card.label}>
                <div className="ui-lab ui-mono">{card.label}</div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="ui-section">
          <SectionHead no={content.insights.no} title={content.insights.title} sub={content.insights.sub} />
          <div className={`ui-observe${content.insights.cards.length === 4 ? " ui-observe--four" : ""}`}>
            {content.insights.cards.map((card, index) => (
              <div className="ui-card" key={index}>
                <div className="ui-kv">
                  <div className="ui-k ui-mono">OBSERVATION</div>
                  <p>{card.observation}</p>
                </div>
                <div className="ui-kv">
                  <div className="ui-k ui-mono">INSIGHT</div>
                  <p className="ui-muted">{card.insight}</p>
                </div>
                <div className="ui-kv">
                  <div className="ui-k ui-mono">DECISION</div>
                  <p>{card.decision}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="ui-section">
          <SectionHead no={content.experience.no} title={content.experience.title} sub={content.experience.sub} />

          <div className="ui-steps">
            {content.experience.steps.map((step, index) => (
              <div className="ui-step" key={step.title}>
                <div className="ui-n ui-mono">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <figure>
            <div className="ui-pair-media">
              <img src={home} alt={figure(0).alt} loading="lazy" />
              <img src={mapHover} alt={figure(0).alt} loading="lazy" />
            </div>
            <figcaption className="ui-cap">
              <span className="ui-fig-no ui-mono">{figure(0).no}</span>
              <div className="ui-body">
                <h4>{figure(0).title}</h4>
                <p>{figure(0).caption}</p>
              </div>
            </figcaption>
          </figure>

          <figure>
            <img className="ui-shot-mid" src={overview} alt={figure(1).alt} loading="lazy" />
            <figcaption className="ui-cap">
              <span className="ui-fig-no ui-mono">{figure(1).no}</span>
              <div className="ui-body">
                <h4>{figure(1).title}</h4>
                <p>{figure(1).caption}</p>
              </div>
            </figcaption>
          </figure>

          <figure>
            <img className="ui-shot-mid" src={indicators} alt={figure(2).alt} loading="lazy" />
            <figcaption className="ui-cap">
              <span className="ui-fig-no ui-mono">{figure(2).no}</span>
              <div className="ui-body">
                <h4>{figure(2).title}</h4>
                <p>{figure(2).caption}</p>
              </div>
            </figcaption>
          </figure>

          <figure>
            <img className="ui-shot-mid" src={insightPanel} alt={figure(3).alt} loading="lazy" />
            <figcaption className="ui-cap">
              <span className="ui-fig-no ui-mono">{figure(3).no}</span>
              <div className="ui-body">
                <h4>{figure(3).title}</h4>
                <p>{figure(3).caption}</p>
              </div>
            </figcaption>
          </figure>

          <figure>
            <img className="ui-shot-mid" src={compareFull} alt={figure(4).alt} loading="lazy" />
            <figcaption className="ui-cap">
              <span className="ui-fig-no ui-mono">{figure(4).no}</span>
              <div className="ui-body">
                <h4>{figure(4).title}</h4>
                <p>{figure(4).caption}</p>
              </div>
            </figcaption>
          </figure>

          <figure>
            <div className="ui-pair-ask">
              <img src={askChat} alt={figure(5).alt} loading="lazy" />
              <div className="ui-device-wrap">
                <div className="ui-device">
                  <div className="ui-dots"><i /><i /><i /></div>
                  <img src={askSources} alt={figure(5).alt} loading="lazy" />
                </div>
              </div>
            </div>
            <figcaption className="ui-cap">
              <span className="ui-fig-no ui-mono">{figure(5).no}</span>
              <div className="ui-body">
                <h4>{figure(5).title}</h4>
                <p>{figure(5).caption}</p>
              </div>
            </figcaption>
          </figure>

          <figure>
            <div className="ui-doc-wrap">
              <div className="ui-doc">
                <img src={report} alt={figure(6).alt} loading="lazy" />
              </div>
            </div>
            <figcaption className="ui-cap">
              <span className="ui-fig-no ui-mono">{figure(6).no}</span>
              <div className="ui-body">
                <h4>{figure(6).title}</h4>
                <p>{figure(6).caption}</p>
              </div>
            </figcaption>
          </figure>
        </section>

        <section className="ui-section">
          <SectionHead no={content.system.no} title={content.system.title} sub={content.system.sub} />

          <div className="ui-layers">
            {content.system.layers.map((layer) => (
              <div className="ui-layer" key={layer.label}>
                <div className="ui-k ui-mono">{layer.label}</div>
                <h3>{layer.title}</h3>
                <p>{layer.body}</p>
                <div className="ui-chips">
                  {layer.chips.map((chip) => <span className="ui-chip" key={chip}>{chip}</span>)}
                </div>
              </div>
            ))}
          </div>

          <div className="ui-boundary">
            <div className="ui-k ui-mono">{content.system.boundary.label}</div>
            <p>{content.system.boundary.body}</p>
            <img src={boundary} alt={content.system.boundary.alt} loading="lazy" />
          </div>
        </section>

        <section className="ui-section">
          <SectionHead no={content.results.no} title={content.results.title} sub={content.results.sub} />

          <div className="ui-metrics">
            {content.results.metrics.map((metric) => (
              <div className="ui-metric" key={metric.label}>
                <div className={`ui-num${metric.small ? " ui-num--small" : ""}`}>{metric.num}</div>
                <div className="ui-metric-label">{metric.label}</div>
                <div className="ui-metric-sub">{metric.sub}</div>
              </div>
            ))}
          </div>
          <p className="ui-eval-line">{content.results.evalLine}</p>

          <figure>
            <img className="ui-shot-narrow" src={evalReport} alt={content.results.figure.alt} loading="lazy" />
            <figcaption className="ui-cap">
              <span className="ui-fig-no ui-mono">{content.results.figure.no}</span>
              <div className="ui-body">
                <h4>{content.results.figure.title}</h4>
                <p>{content.results.figure.caption}</p>
              </div>
            </figcaption>
          </figure>

          <div className="ui-platform-note">
            <b>{noteLead}</b>{noteBody}
          </div>
        </section>

        <section className="ui-section">
          <SectionHead no={content.reflection.no} title={content.reflection.title} />
          <div className="ui-close-note">
            <p>{content.reflection.body}</p>
          </div>

          <div className="ui-next">
            <span className="ui-k ui-mono">{content.next.label}</span>
            <Link className="ui-next-link" to={content.next.href}>{content.next.title} <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </div>
    </main>
  );
}
