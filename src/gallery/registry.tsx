import * as React from "react";

import {
  ChannelMixer,
  Color,
  ColorOpacity,
  Curves,
  FontPicker,
  Gradient,
  RangeSlider,
  Segmented,
  Slider,
} from "@/toolcraft/ui";
import type {
  ChannelMixerValues,
  CurveChannel,
  CurvePoint,
  FontPickerValue,
  GradientStop,
  GradientType,
} from "@/toolcraft/ui";

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
      <Color
        hex={fill}
        name="Fill"
        onValueChange={(next) => setFill(next.hex)}
      />
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
  const [activeChannel, setActiveChannel] =
    React.useState<CurveChannel>("RGB");
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
    <FontPicker
      name="Font"
      onValueChange={(next) => setValue(next)}
      value={value}
    />
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
/* Registry                                                                   */
/* -------------------------------------------------------------------------- */

export const galleryComponents: GalleryComponent[] = [
  {
    description:
      "A numeric value control for continuous, stepped, range, and visually discrete Toolcraft inputs.",
    group: "Control Components",
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
    description:
      "A hex color control with an eyedropper, swatch, and optional opacity, usable singly or as a labelled pair.",
    group: "Control Components",
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
      "An adjustable gradient editor with draggable stops, type, and angle.",
    group: "Control Components",
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
      "Per-channel RGB output mixing with R/G/B channel selection and contribution sliders.",
    group: "Control Components",
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
    description:
      "An RGB tone-curve editor with per-channel points for color grading.",
    group: "Control Components",
    id: "curves",
    name: "Curves",
    stories: [
      {
        code: '<Curves name="Curves" value={value} onValueChange={setValue} />',
        id: "default",
        label: "Default",
        render: CurvesStory,
      },
    ],
  },
  {
    description:
      "A font select with live font previews, virtualized search, category filters, weight, size, text case, color, letter spacing, and line height.",
    group: "Control Components",
    id: "font-picker",
    name: "Font Picker",
    stories: [
      {
        code: "<FontPicker value={fontValue} onValueChange={setFontValue} />",
        id: "default",
        label: "Default",
        render: FontPickerStory,
      },
    ],
  },
  {
    description:
      "A compact segmented switch for choosing one option from a small labelled set.",
    group: "Control Components",
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
];
