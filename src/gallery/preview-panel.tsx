import * as React from "react";

import { Panel } from "@/toolcraft/ui";

export type PreviewPanelProps = {
  children: React.ReactNode;
  title?: string;
  variant?: "panel" | "bare" | "surface";
};

/**
 * Frames a story for preview. Control components render inside the Toolcraft
 * `Panel` (the "Master Controls" surface); primitives, composites, and overlays
 * render on a plain centered stage; higher-order Surfaces render in a tall,
 * full-width stage with room to be interactive.
 */
export function PreviewPanel({
  children,
  title = "Master Controls",
  variant = "panel",
}: PreviewPanelProps): React.JSX.Element {
  if (variant === "surface") {
    return <div className="gallery-preview-surface">{children}</div>;
  }

  return (
    <div className="gallery-preview-stage">
      {variant === "panel" ? (
        <div className="gallery-preview-panel">
          <Panel title={title}>{children}</Panel>
        </div>
      ) : (
        <div className="gallery-preview-bare">{children}</div>
      )}
    </div>
  );
}
