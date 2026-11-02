import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes, useLocation } from "react-router-dom";
import { SiteHeader } from "./components/SiteHeader";
import { HomePage } from "./pages/HomePage";
import { ProjectPage } from "./pages/ProjectPage";

const EMAIL = "963528370@qq.com";
const GITHUB = "https://github.com/Jane-Hanzhen";

type Variant = "a" | "b";

function readVariant(): Variant {
  if (typeof window === "undefined") return "b";
  return new URLSearchParams(window.location.search).get("variant") === "a" ? "a" : "b";
}

function RouteEffects() {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.resolvedLanguage === "en" ? "en" : "zh-CN";
  }, [i18n.resolvedLanguage]);

  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => document.querySelector(location.hash)?.scrollIntoView({ behavior: "smooth" }));
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  const { t } = useTranslation();
  const [variant, setVariant] = useState<Variant>(readVariant);

  useEffect(() => {
    document.body.dataset.variant = variant;
  }, [variant]);

  const changeVariant = (next: Variant) => {
    setVariant(next);
    const url = new URL(window.location.href);
    url.searchParams.set("variant", next);
    window.history.replaceState({}, "", url);
  };

  return (
    <>
      <a className="skip-link" href="#main-content">{t("common.skip")}</a>
      <RouteEffects />
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/:slug" element={<ProjectPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <footer className="site-footer section-shell">
        <span>{t("home.hero.name")}</span>
        <div className="site-footer__links">
          <a href={`mailto:${EMAIL}`}>{t("common.email")}</a>
          <a href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <span>© 2026</span>
      </footer>
      {import.meta.env.DEV ? (
        <div className="variant-switch" role="group" aria-label="A/B 预览样式">
          <span className="variant-switch__label">STYLE</span>
          <button type="button" aria-pressed={variant === "a"} title="切换到 A 版（纸感）" onClick={() => changeVariant("a")}>
            A
          </button>
          <button type="button" aria-pressed={variant === "b"} title="切换到 B 版（暖色）" onClick={() => changeVariant("b")}>
            B
          </button>
        </div>
      ) : null}
    </>
  );
}

export default App;
