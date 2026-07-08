import * as React from "react";

import { PreviewPanel } from "./preview-panel";
import { galleryComponents } from "./registry";

function groupComponents(): { group: string; items: typeof galleryComponents }[] {
  const order: string[] = [];
  const byGroup = new Map<string, typeof galleryComponents>();

  for (const component of galleryComponents) {
    if (!byGroup.has(component.group)) {
      byGroup.set(component.group, []);
      order.push(component.group);
    }
    byGroup.get(component.group)?.push(component);
  }

  return order.map((group) => ({ group, items: byGroup.get(group) ?? [] }));
}

export function GalleryApp(): React.JSX.Element {
  const groups = React.useMemo(groupComponents, []);
  const [activeId, setActiveId] = React.useState(galleryComponents[0]?.id ?? "");
  const active =
    galleryComponents.find((component) => component.id === activeId) ??
    galleryComponents[0];
  const [storyId, setStoryId] = React.useState(active?.stories[0]?.id ?? "");
  const story =
    active?.stories.find((entry) => entry.id === storyId) ?? active?.stories[0];

  function selectComponent(id: string): void {
    const next = galleryComponents.find((component) => component.id === id);
    setActiveId(id);
    setStoryId(next?.stories[0]?.id ?? "");
  }

  if (!active || !story) {
    return <div className="gallery-empty">No components registered.</div>;
  }

  const Story = story.render;

  return (
    <div className="gallery-shell">
      <aside className="gallery-nav">
        <div className="gallery-brand">
          <span className="gallery-brand-mark" />
          Toolcraft
        </div>
        {groups.map(({ group, items }) => (
          <div className="gallery-nav-group" key={group}>
            <div className="gallery-nav-heading">{group}</div>
            <ul>
              {items.map((component) => (
                <li key={component.id}>
                  <button
                    className={
                      component.id === active.id
                        ? "gallery-nav-link is-active"
                        : "gallery-nav-link"
                    }
                    onClick={() => selectComponent(component.id)}
                    type="button"
                  >
                    {component.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>

      <main className="gallery-main">
        <div className="gallery-breadcrumb">
          <span>Components</span>
          <span className="gallery-breadcrumb-sep">/</span>
          <span className="gallery-breadcrumb-current">{active.name}</span>
        </div>
        <h1 className="gallery-title">{active.name}</h1>
        <p className="gallery-description">{active.description}</p>

        {active.stories.length > 1 ? (
          <div className="gallery-tabs" role="tablist">
            {active.stories.map((entry) => (
              <button
                aria-selected={entry.id === story.id}
                className={
                  entry.id === story.id
                    ? "gallery-tab is-active"
                    : "gallery-tab"
                }
                key={entry.id}
                onClick={() => setStoryId(entry.id)}
                role="tab"
                type="button"
              >
                {entry.label}
              </button>
            ))}
          </div>
        ) : null}

        <div className="gallery-preview-card">
          <PreviewPanel>
            <Story key={`${active.id}:${story.id}`} />
          </PreviewPanel>
        </div>

        <pre className="gallery-code">
          <code>{story.code}</code>
        </pre>
      </main>

      <aside className="gallery-toc">
        <div className="gallery-toc-heading">On this page</div>
        <ul>
          <li className="is-active">Preview</li>
          <li>Props</li>
        </ul>
        <a
          className="gallery-suggest"
          href="https://github.com/NSDesign/toolcraft"
          rel="noreferrer"
          target="_blank"
        >
          Suggest edits
        </a>
      </aside>
    </div>
  );
}
