'use client';

export function EggOverlay({
  open,
  title,
  bodyHtml,
  onClose,
}: {
  open: boolean;
  title: string;
  bodyHtml: string;
  onClose: () => void;
}) {
  return (
    <div id="egg-overlay" className={open ? 'show' : ''} onClick={onClose} role="button" tabIndex={-1}>
      <div id="egg-content">
        <div id="egg-title">{title}</div>
        <div id="egg-body" dangerouslySetInnerHTML={{ __html: bodyHtml }} />
        <div id="egg-close">[ click anywhere to return from the void ]</div>
      </div>
    </div>
  );
}
