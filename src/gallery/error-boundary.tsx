import * as React from "react";

type PreviewErrorBoundaryProps = {
  children: React.ReactNode;
};

type PreviewErrorBoundaryState = {
  error: Error | null;
};

/**
 * Catches render errors from a single story so one failing component can't
 * blank the whole gallery. Remount it with a `key` to reset after navigation.
 */
export class PreviewErrorBoundary extends React.Component<
  PreviewErrorBoundaryProps,
  PreviewErrorBoundaryState
> {
  constructor(props: PreviewErrorBoundaryProps) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error): PreviewErrorBoundaryState {
    return { error };
  }

  render(): React.ReactNode {
    if (this.state.error) {
      return (
        <div className="gallery-preview-error" role="alert">
          <strong>This preview failed to render.</strong>
          <span>{this.state.error.message}</span>
        </div>
      );
    }

    return this.props.children;
  }
}
