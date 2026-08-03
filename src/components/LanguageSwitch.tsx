import { useTranslation } from "react-i18next";

export function LanguageSwitch({ onChange }: { onChange?: () => void }) {
  const { i18n, t } = useTranslation();
  const current = i18n.resolvedLanguage === "en" ? "en" : "zh-CN";

  const switchLanguage = async (language: "zh-CN" | "en") => {
    if (language === current) return;
    await i18n.changeLanguage(language);
    localStorage.setItem("jane-portfolio-language", language);
    document.documentElement.lang = language;
    onChange?.();
  };

  return (
    <div className="language-switch" aria-label={t("common.language")}>
      <button
        type="button"
        className={current === "zh-CN" ? "is-active" : ""}
        aria-pressed={current === "zh-CN"}
        onClick={() => void switchLanguage("zh-CN")}
      >
        中文
      </button>
      <span aria-hidden="true">/</span>
      <button
        type="button"
        className={current === "en" ? "is-active" : ""}
        aria-pressed={current === "en"}
        onClick={() => void switchLanguage("en")}
      >
        EN
      </button>
    </div>
  );
}
