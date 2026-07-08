import * as React from "react";

import {
  Actions,
  AnchorGrid,
  ChannelMixer,
  Checkbox,
  CodeTextarea,
  Color,
  ColorOpacity,
  Curves,
  FileDrop,
  FontPicker,
  Gradient,
  ImagePicker,
  RangeInput,
  RangeSlider,
  Segmented,
  Select,
  Slider,
  Switch,
  TextInput,
  Vector,
} from "@/toolcraft/ui";
import type {
  ChannelMixerValues,
  CurveChannel,
  CurvePoint,
  FontPickerValue,
  GradientStop,
  GradientType,
} from "@/toolcraft/ui";
import type { AnchorGridValue } from "@/toolcraft/ui/components/controls/anchor-grid/anchor-grid-control";

export type GalleryStory = {
  code: string;
  id: string;
  label: string;
  render: () => React.JSX.Element;
};

export type GalleryComponent = {
  description: string;
  group: string;
  id: string;
  name: string;
  stories: GalleryStory[];
};

/* -------------------------------------------------------------------------- */
/* Slider                                                                     */
/* -------------------------------------------------------------------------- */

function SliderDefaultStory(): React.JSX.Element {
  const [value, setValue] = React.useState(50);
  return (
    <Slider
      max={100}
      min={0}
      name="Amount"
      onValueChange={(next) => setValue(next)}
      step={1}
      unit="%"
      value={value}
    />
  );
}

function SliderDiscreteStory(): React.JSX.Element {
  const [value, setValue] = React.useState(70);
  return (
    <Slider
      markerCount={11}
      max={100}
      min={0}
      name="Threshold"
      onValueChange={(next) => setValue(next)}
      step={10}
      unit="%"
      value={value}
      variant="discrete"
    />
  );
}

function RangeStory(): React.JSX.Element {
  const [value, setValue] = React.useState<readonly number[]>([25, 70]);
  return (
    <RangeSlider
      max={100}
      min={0}
      name="Input range"
      onValueChange={(next) => setValue(next)}
      step={0.1}
      unit="%"
      value={value}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Color                                                                      */
/* -------------------------------------------------------------------------- */

function ColorPairStory(): React.JSX.Element {
  const [fill, setFill] = React.useState("#C1FF00");
  const [stroke, setStroke] = React.useState("#FF6A00");
  return (
    <>
      <Color hex={fill} name="Fill" onValueChange={(next) => setFill(next.hex)} />
      <Color
        hex={stroke}
        name="Stroke"
        onValueChange={(next) => setStroke(next.hex)}
      />
    </>
  );
}

function ColorOpacityStory(): React.JSX.Element {
  const [fill, setFill] = React.useState({ hex: "#C1FF00", opacity: 82 });
  const [stroke, setStroke] = React.useState({ hex: "#FF6A00", opacity: 48 });
  return (
    <>
      <ColorOpacity
        hex={fill.hex}
        name="Fill"
        onValueChange={(next) => setFill(next)}
        opacity={fill.opacity}
      />
      <ColorOpacity
        hex={stroke.hex}
        name="Stroke"
        onValueChange={(next) => setStroke(next)}
        opacity={stroke.opacity}
      />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* Gradient                                                                   */
/* -------------------------------------------------------------------------- */

type GradientState = {
  angle: number;
  gradientType: GradientType;
  stops: readonly GradientStop[];
};

function GradientStory(): React.JSX.Element {
  const [value, setValue] = React.useState<GradientState>({
    angle: 90,
    gradientType: "linear",
    stops: [
      { color: "#0A0A0A", position: "0%" },
      { color: "#8EC5FF", position: "61%" },
      { color: "#FAFAFA", position: "100%" },
    ],
  });
  return (
    <Gradient
      angle={value.angle}
      gradientType={value.gradientType}
      name="Gradient"
      onValueChange={(next) => setValue(next)}
      stops={value.stops}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Channel Mixer                                                              */
/* -------------------------------------------------------------------------- */

const identityMixer: ChannelMixerValues = {
  B: { B: 100, G: 0, R: 0 },
  G: { B: 0, G: 100, R: 0 },
  R: { B: 0, G: 0, R: 100 },
};

function ChannelMixerStory(): React.JSX.Element {
  const [values, setValues] = React.useState<ChannelMixerValues>(identityMixer);
  return (
    <ChannelMixer
      name="Output mix"
      onValueChange={(next) => setValues(next.values)}
      values={values}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Curves                                                                     */
/* -------------------------------------------------------------------------- */

const identityCurve: readonly CurvePoint[] = [
  { x: 0, y: 0 },
  { x: 0.5, y: 0.5 },
  { x: 1, y: 1 },
];

function CurvesStory(): React.JSX.Element {
  const [points, setPoints] = React.useState<
    Record<CurveChannel, readonly CurvePoint[]>
  >({
    B: identityCurve,
    G: identityCurve,
    R: identityCurve,
    RGB: identityCurve,
  });
  const [activeChannel, setActiveChannel] = React.useState<CurveChannel>("RGB");
  return (
    <Curves
      activeChannel={activeChannel}
      name="Curves"
      onValueChange={(next) => {
        setPoints(next.points);
        setActiveChannel(next.activeChannel);
      }}
      points={points}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Font Picker                                                                */
/* -------------------------------------------------------------------------- */

const initialFontValue: FontPickerValue = {
  color: "#FFFFFF",
  fontId: "inter",
  fontSize: 16,
  fontWeight: "400",
  letterSpacing: "normal",
  lineHeight: "normal",
  opacity: 100,
  textCase: "original",
};

function FontPickerStory(): React.JSX.Element {
  const [value, setValue] = React.useState<FontPickerValue>(initialFontValue);
  return (
    <FontPicker name="Font" onValueChange={(next) => setValue(next)} value={value} />
  );
}

/* -------------------------------------------------------------------------- */
/* Segmented                                                                  */
/* -------------------------------------------------------------------------- */

function SegmentedStory(): React.JSX.Element {
  const [value, setValue] = React.useState("g");
  return (
    <Segmented
      name="Channels"
      onValueChange={(next) => setValue(next)}
      options={[
        { label: "R", value: "r" },
        { label: "G", value: "g" },
        { label: "B", value: "b" },
      ]}
      value={value}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Actions                                                                    */
/* -------------------------------------------------------------------------- */

function ActionsStory(): React.JSX.Element {
  return (
    <Actions
      actions={["Reset", "Apply", "Export"]}
      buttonColumns={3}
      name="Actions"
      showActionLabels
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Anchor Grid                                                                */
/* -------------------------------------------------------------------------- */

function AnchorGridStory(): React.JSX.Element {
  const [value, setValue] = React.useState<AnchorGridValue>("center");
  return (
    <AnchorGrid
      name="Anchor"
      onValueChange={(next) => setValue(next)}
      value={value}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Checkbox / Switch                                                          */
/* -------------------------------------------------------------------------- */

function CheckboxStory(): React.JSX.Element {
  const [checked, setChecked] = React.useState(true);
  return (
    <Checkbox
      checked={checked}
      name="Snap to grid"
      onCheckedChange={(next) => setChecked(next)}
    />
  );
}

function SwitchStory(): React.JSX.Element {
  const [checked, setChecked] = React.useState(true);
  return (
    <Switch
      checked={checked}
      name="Auto preview"
      onCheckedChange={(next) => setChecked(next)}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Code                                                                       */
/* -------------------------------------------------------------------------- */

function CodeStory(): React.JSX.Element {
  const [value, setValue] = React.useState(
    "vec3 color = mix(a, b, t);\ncolor *= exposure;",
  );
  return (
    <CodeTextarea
      name="Shader"
      onValueChange={(next) => setValue(next)}
      value={value}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* File                                                                       */
/* -------------------------------------------------------------------------- */

function FileStory(): React.JSX.Element {
  return <FileDrop accept="image/*" />;
}

/* -------------------------------------------------------------------------- */
/* Image Picker                                                               */
/* -------------------------------------------------------------------------- */

function swatch(hex: string): string {
  const fill = encodeURIComponent(hex);
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='72' height='72'%3E%3Crect width='72' height='72' fill='${fill}'/%3E%3C/svg%3E`;
}

const imagePickerItems = [
  { alt: "Lime", src: swatch("#C1FF00"), value: "lime" },
  { alt: "Sky", src: swatch("#8EC5FF"), value: "sky" },
  { alt: "Ember", src: swatch("#FF6A00"), value: "ember" },
];

function ImagePickerStory(): React.JSX.Element {
  const [value, setValue] = React.useState("lime");
  return (
    <ImagePicker
      items={imagePickerItems}
      name="Texture"
      onValueChange={(next) => setValue(next)}
      value={value}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Range (numeric input pair)                                                 */
/* -------------------------------------------------------------------------- */

function RangeInputStory(): React.JSX.Element {
  const [range, setRange] = React.useState({ end: "100", start: "0" });
  return (
    <RangeInput
      end={range.end}
      name="Bounds"
      onValueChange={(next) => setRange(next)}
      start={range.start}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Select                                                                     */
/* -------------------------------------------------------------------------- */

function SelectStory(): React.JSX.Element {
  const [value, setValue] = React.useState("cubic");
  return (
    <Select
      name="Easing"
      onValueChange={(next) => setValue(next)}
      options={[
        { label: "Linear", value: "linear" },
        { label: "Cubic", value: "cubic" },
        { label: "Bounce", value: "bounce" },
      ]}
      value={value}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Text                                                                       */
/* -------------------------------------------------------------------------- */

function TextInputStory(): React.JSX.Element {
  const [value, setValue] = React.useState("Editable text");
  return (
    <TextInput name="Label" onValueChange={(next) => setValue(next)} value={value} />
  );
}

/* -------------------------------------------------------------------------- */
/* Vector                                                                     */
/* -------------------------------------------------------------------------- */

function VectorStory(): React.JSX.Element {
  const [value, setValue] = React.useState({ x: "0.5", y: "0.5" });
  return (
    <Vector
      name="Offset"
      onValueChange={(next) => setValue(next)}
      x={value.x}
      y={value.y}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Registry                                                                   */
/* -------------------------------------------------------------------------- */

const CONTROLS = "Control Components";

export const galleryComponents: GalleryComponent[] = [
  {
    description:
      "A stacked group of action buttons for triggering commands such as reset, apply, or export.",
    group: CONTROLS,
    id: "actions",
    name: "Actions",
    stories: [
      {
        code: '<Actions name="Actions" actions={["Reset", "Apply", "Export"]} buttonColumns={3} />',
        id: "default",
        label: "Default",
        render: ActionsStory,
      },
    ],
  },
  {
    description:
      "A nine-point anchor selector for choosing an alignment origin.",
    group: CONTROLS,
    id: "anchor-grid",
    name: "Anchor Grid",
    stories: [
      {
        code: '<AnchorGrid name="Anchor" value="center" onValueChange={setValue} />',
        id: "default",
        label: "Default",
        render: AnchorGridStory,
      },
    ],
  },
  {
    description:
      "Per-channel RGB output mixing with R/G/B channel selection and contribution sliders.",
    group: CONTROLS,
    id: "channel-mixer",
    name: "Channel Mixer",
    stories: [
      {
        code: '<ChannelMixer name="Output mix" values={values} onValueChange={setValues} />',
        id: "default",
        label: "Default",
        render: ChannelMixerStory,
      },
    ],
  },
  {
    description: "A labelled boolean checkbox control.",
    group: CONTROLS,
    id: "checkbox",
    name: "Checkbox",
    stories: [
      {
        code: '<Checkbox name="Snap to grid" checked onCheckedChange={setChecked} />',
        id: "default",
        label: "Default",
        render: CheckboxStory,
      },
    ],
  },
  {
    description: "A multi-line code input for shader snippets and expressions.",
    group: CONTROLS,
    id: "code",
    name: "Code",
    stories: [
      {
        code: '<CodeTextarea name="Shader" value={value} onValueChange={setValue} />',
        id: "default",
        label: "Default",
        render: CodeStory,
      },
    ],
  },
  {
    description:
      "A hex color control with an eyedropper, swatch, and optional opacity, usable singly or as a labelled pair.",
    group: CONTROLS,
    id: "color",
    name: "Color",
    stories: [
      {
        code: '<Color name="Fill" hex="#C1FF00" onValueChange={setFill} />\n<Color name="Stroke" hex="#FF6A00" onValueChange={setStroke} />',
        id: "pair",
        label: "Pair",
        render: ColorPairStory,
      },
      {
        code: '<ColorOpacity name="Fill" hex="#C1FF00" opacity={82} onValueChange={setFill} />\n<ColorOpacity name="Stroke" hex="#FF6A00" opacity={48} onValueChange={setStroke} />',
        id: "opacity",
        label: "Opacity",
        render: ColorOpacityStory,
      },
    ],
  },
  {
    description:
      "An RGB tone-curve editor with per-channel points for color grading.",
    group: CONTROLS,
    id: "curves",
    name: "Curves",
    stories: [
      {
        code: '<Curves name="Curves" points={points} activeChannel="RGB" onValueChange={setValue} />',
        id: "default",
        label: "Default",
        render: CurvesStory,
      },
    ],
  },
  {
    description:
      "A drag-and-drop file dropzone with click-to-browse for images and assets.",
    group: CONTROLS,
    id: "file",
    name: "File",
    stories: [
      {
        code: '<FileDrop accept="image/*" onFileSelect={handleFile} />',
        id: "default",
        label: "Default",
        render: FileStory,
      },
    ],
  },
  {
    description:
      "A font select with live font previews, virtualized search, category filters, weight, size, text case, color, letter spacing, and line height.",
    group: CONTROLS,
    id: "font-picker",
    name: "Font Picker",
    stories: [
      {
        code: "<FontPicker name=\"Font\" value={fontValue} onValueChange={setFontValue} />",
        id: "default",
        label: "Default",
        render: FontPickerStory,
      },
    ],
  },
  {
    description:
      "An adjustable gradient editor with draggable stops, type, and angle.",
    group: CONTROLS,
    id: "gradient",
    name: "Gradient",
    stories: [
      {
        code: '<Gradient\n  name="Gradient"\n  gradientType="linear"\n  angle={90}\n  stops={[\n    { color: "#0A0A0A", position: "0%" },\n    { color: "#8EC5FF", position: "61%" },\n    { color: "#FAFAFA", position: "100%" },\n  ]}\n/>',
        id: "default",
        label: "Default",
        render: GradientStory,
      },
    ],
  },
  {
    description:
      "A swatch grid for picking a preset image or texture, with backing item data.",
    group: CONTROLS,
    id: "image-picker",
    name: "Image Picker",
    stories: [
      {
        code: '<ImagePicker\n  name="Texture"\n  value="lime"\n  items={[\n    { value: "lime", src: limeSrc, alt: "Lime" },\n    { value: "sky", src: skySrc, alt: "Sky" },\n    { value: "ember", src: emberSrc, alt: "Ember" },\n  ]}\n  onValueChange={setValue}\n/>',
        id: "default",
        label: "Default",
        render: ImagePickerStory,
      },
    ],
  },
  {
    description:
      "A paired start/end numeric input for entering an explicit range.",
    group: CONTROLS,
    id: "range",
    name: "Range",
    stories: [
      {
        code: '<RangeInput name="Bounds" start="0" end="100" onValueChange={setRange} />',
        id: "default",
        label: "Default",
        render: RangeInputStory,
      },
    ],
  },
  {
    description:
      "A compact segmented switch for choosing one option from a small labelled set.",
    group: CONTROLS,
    id: "segmented",
    name: "Segmented",
    stories: [
      {
        code: '<Segmented\n  name="Channels"\n  value="g"\n  options={[\n    { label: "R", value: "r" },\n    { label: "G", value: "g" },\n    { label: "B", value: "b" },\n  ]}\n/>',
        id: "default",
        label: "Default",
        render: SegmentedStory,
      },
    ],
  },
  {
    description: "A dropdown select for choosing one option from a list.",
    group: CONTROLS,
    id: "select",
    name: "Select",
    stories: [
      {
        code: '<Select\n  name="Easing"\n  value="cubic"\n  options={[\n    { label: "Linear", value: "linear" },\n    { label: "Cubic", value: "cubic" },\n    { label: "Bounce", value: "bounce" },\n  ]}\n/>',
        id: "default",
        label: "Default",
        render: SelectStory,
      },
    ],
  },
  {
    description:
      "A numeric value control for continuous, stepped, range, and visually discrete Toolcraft inputs.",
    group: CONTROLS,
    id: "slider",
    name: "Slider",
    stories: [
      {
        code: '<Slider name="Amount" min={0} max={100} step={1} unit="%" value={50} />',
        id: "default",
        label: "Default",
        render: SliderDefaultStory,
      },
      {
        code: '<Slider name="Threshold" min={0} max={100} step={10} unit="%" value={70} variant="discrete" markerCount={11} />',
        id: "discrete",
        label: "Discrete",
        render: SliderDiscreteStory,
      },
      {
        code: '<RangeSlider name="Input range" min={0} max={100} step={0.1} unit="%" value={[25, 70]} />',
        id: "range",
        label: "Input range",
        render: RangeStory,
      },
    ],
  },
  {
    description: "A labelled boolean toggle switch.",
    group: CONTROLS,
    id: "switch",
    name: "Switch",
    stories: [
      {
        code: '<Switch name="Auto preview" checked onCheckedChange={setChecked} />',
        id: "default",
        label: "Default",
        render: SwitchStory,
      },
    ],
  },
  {
    description: "A single-line text input for editable labels and values.",
    group: CONTROLS,
    id: "text",
    name: "Text",
    stories: [
      {
        code: '<TextInput name="Label" value="Editable text" onValueChange={setValue} />',
        id: "default",
        label: "Default",
        render: TextInputStory,
      },
    ],
  },
  {
    description:
      "A two-axis vector control with an interactive pad plus X and Y inputs.",
    group: CONTROLS,
    id: "vector",
    name: "Vector",
    stories: [
      {
        code: '<Vector name="Offset" x="0.5" y="0.5" onValueChange={setValue} />',
        id: "default",
        label: "Default",
        render: VectorStory,
      },
    ],
  },
];
