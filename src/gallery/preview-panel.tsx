import * as React from "react";

import { Panel } from "@/toolcraft/ui";

export type PreviewPanelProps = {
  children: React.ReactNode;
  title?: string;
  variant?: "panel" | "bare";
};

/**
 * Frames a story for preview. Control components render inside the Toolcraft
 * `Panel` (the "Master Controls" surface); primitives and composites render on
 * a plain centered stage so they read the way they would in real UI.
 */
export function PreviewPanel({
  children,
  title = "Master Controls",
  variant = "panel",
}: PreviewPanelProps): React.JSX.Element {
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
