import { useTranslation } from "react-i18next";
import type { ProjectAsset } from "../projectAssets";
import type { ProjectVisual } from "../types";

type ProjectMediaProps = {
  asset: ProjectAsset;
  content: ProjectVisual;
  priority?: boolean;
  variant?: "hero" | "story" | "card";
  captionBefore?: boolean;
};

export function ProjectMedia({ asset, content, priority = false, variant = "story", captionBefore = false }: ProjectMediaProps) {
  const { i18n } = useTranslation();
  const localizedAsset = i18n.resolvedLanguage?.startsWith("zh") && asset.zh ? { ...asset, ...asset.zh } : asset;
  const orientation = localizedAsset.height > localizedAsset.width * 1.2 ? "portrait" : "landscape";
  const caption = variant !== "card" ? (
    <figcaption>
      <span>{content.label}</span>
      <div><strong>{content.title}</strong><p>{content.caption}</p></div>
    </figcaption>
  ) : null;

  return (
    <figure className={`project-media project-media--${variant} project-media--${localizedAsset.fit} project-media--${orientation}${captionBefore ? " project-media--caption-before" : ""}`}>
      {captionBefore ? caption : null}
      <div className="project-media__frame">
        <img
          src={localizedAsset.src}
          width={localizedAsset.width}
          height={localizedAsset.height}
          alt={content.alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          style={{ objectPosition: localizedAsset.position }}
        />
      </div>
      {!captionBefore ? caption : null}
    </figure>
  );
}
