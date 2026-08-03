import type { ProjectAsset } from "../projectAssets";
import type { ProjectVisual } from "../types";

type ProjectMediaProps = {
  asset: ProjectAsset;
  content: ProjectVisual;
  priority?: boolean;
  variant?: "hero" | "story" | "card";
};

export function ProjectMedia({ asset, content, priority = false, variant = "story" }: ProjectMediaProps) {
  const orientation = asset.height > asset.width * 1.2 ? "portrait" : "landscape";
  return (
    <figure className={`project-media project-media--${variant} project-media--${asset.fit} project-media--${orientation}`}>
      <div className="project-media__frame">
        <img
          src={asset.src}
          width={asset.width}
          height={asset.height}
          alt={content.alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          style={{ objectPosition: asset.position }}
        />
      </div>
      {variant !== "card" ? (
        <figcaption>
          <span>{content.label}</span>
          <div><strong>{content.title}</strong><p>{content.caption}</p></div>
        </figcaption>
      ) : null}
    </figure>
  );
}
