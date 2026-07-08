import * as React from "react";

import { Panel } from "@/toolcraft/ui";

export type PreviewPanelProps = {
  children: React.ReactNode;
  title?: string;
};

/**
 * Recreates the framed "Master Controls" surface used across the Toolcraft docs
 * previews. The Panel primitive supplies the header (title + reset/collapse
 * affordances) and section chrome; we only center it on a soft backdrop so the
 * live control reads the same way it does inside a real app.
 */
export function PreviewPanel({
  children,
  title = "Master Controls",
}: PreviewPanelProps): React.JSX.Element {
  return (
    <div className="gallery-preview-stage">
      <div className="gallery-preview-panel">
        <Panel title={title}>{children}</Panel>
      </div>
    </div>
  );
}
