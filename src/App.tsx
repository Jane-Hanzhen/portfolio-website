import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes, useLocation } from "react-router-dom";
import { SiteHeader } from "./components/SiteHeader";
import { HomePage } from "./pages/HomePage";
import { ProjectPage } from "./pages/ProjectPage";

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
        <span>Jane Fang</span>
        <span>AI PRODUCT × TECHNICAL PRODUCT</span>
        <span>© 2026</span>
      </footer>
    </>
  );
}

export default App;
