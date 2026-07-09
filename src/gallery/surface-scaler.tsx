import * as React from "react";

type SurfaceScalerProps = {
  baseWidth?: number;
  baseHeight?: number;
  children: React.ReactNode;
};

/**
 * Renders children at a fixed desktop size (default 1024x640 — the minimum the
 * Toolcraft app expects) and scales the whole thing down to fit the available
 * width. This keeps the panel layout correct instead of letting sub-1024px
 * widths mis-position the panels.
 */
export function SurfaceScaler({
  baseWidth = 1024,
  baseHeight = 640,
  children,
}: SurfaceScalerProps): React.JSX.Element {
  const outerRef = React.useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = React.useState(1);

  React.useLayoutEffect(() => {
    const element = outerRef.current;
    if (!element) {
      return;
    }

    const update = (): void => {
      const width = element.clientWidth;
      setScale(Math.min(1, width / baseWidth));
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => observer.disconnect();
  }, [baseWidth]);

  return (
    <div
      className="gallery-scale-outer"
      ref={outerRef}
      style={{ height: baseHeight * scale }}
    >
      <div
        className="gallery-scale-inner"
        style={{
          height: baseHeight,
          transform: `scale(${scale})`,
          width: baseWidth,
        }}
      >
        {children}
      </div>
    </div>
  );
}
