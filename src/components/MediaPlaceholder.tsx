export function MediaPlaceholder({
  title,
  note,
  kind,
  compact = false,
}: {
  title: string;
  note: string;
  kind: "product" | "research" | "typography";
  compact?: boolean;
}) {
  return (
    <div className={`media-placeholder media-placeholder--${kind} ${compact ? "is-compact" : ""}`} role="img" aria-label={`${title}. ${note}`}>
      <span className="media-placeholder__status"><i aria-hidden="true" /> ASSET SLOT</span>
      <strong>{title}</strong>
      <span className="media-placeholder__note">{note}</span>
      <span className="media-placeholder__index" aria-hidden="true">{kind === "typography" ? "ARCHIVE" : "16:09"}</span>
    </div>
  );
}
