import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { LanguageSwitch } from "./LanguageSwitch";

export function SiteHeader() {
  const { t } = useTranslation();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const isHome = location.pathname === "/";

  useEffect(() => setOpen(false), [location.pathname]);

  const workHref = isHome ? "#work" : "/#work";
  const aboutHref = isHome ? "#about" : "/#about";
  const capabilitiesHref = isHome ? "#capabilities" : "/#capabilities";

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="wordmark" aria-label="Jane Fang home">
          Jane Fang
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href={workHref}>{t("common.work")}</a>
          <a href={aboutHref}>{t("common.about")}</a>
          <a href={capabilitiesHref}>{t("common.capabilities")}</a>
          <LanguageSwitch />
        </nav>

        <button
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? t("common.close") : t("common.menu")}
          <span className="menu-button__mark" aria-hidden="true">{open ? "×" : "+"}</span>
        </button>
      </div>

      <nav id="mobile-navigation" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Mobile navigation">
        <a href={workHref} onClick={() => setOpen(false)}>{t("common.work")}</a>
        <a href={aboutHref} onClick={() => setOpen(false)}>{t("common.about")}</a>
        <a href={capabilitiesHref} onClick={() => setOpen(false)}>{t("common.capabilities")}</a>
        <LanguageSwitch onChange={() => setOpen(false)} />
      </nav>
    </header>
  );
}
