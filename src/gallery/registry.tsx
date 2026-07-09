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

import {
  Button,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Separator,
  Textarea,
  Toggle,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/toolcraft/ui/components/primitives";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertTitle,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Progress,
  RadioGroup,
  RadioGroupItem,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/toolcraft/ui/components/composites";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AspectRatio,
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/toolcraft/ui/components/composites";
import { defineToolcraft } from "@/toolcraft/runtime";
import {
  CanvasShell,
  ControlsPanel,
  LayersPanel,
  TimelinePanel,
  ToolbarPanel,
  ToolcraftApp,
  ToolcraftRoot,
} from "@/toolcraft/runtime/react";

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

/* -------------------------------------------------------------------------- */
/* Primitives                                                                 */
/* -------------------------------------------------------------------------- */

function ButtonStory(): React.JSX.Element {
  return (
    <div className="gallery-row">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  );
}

function ToggleStory(): React.JSX.Element {
  const [pressed, setPressed] = React.useState(true);
  return (
    <Toggle pressed={pressed} onPressedChange={(next) => setPressed(next)}>
      Snap
    </Toggle>
  );
}

function InputStory(): React.JSX.Element {
  return <Input defaultValue="" placeholder="Search components…" />;
}

function TextareaStory(): React.JSX.Element {
  return <Textarea placeholder="Notes…" rows={3} />;
}

function LabelStory(): React.JSX.Element {
  return (
    <div className="gallery-stack">
      <Label htmlFor="gallery-label-demo">Layer name</Label>
      <Input defaultValue="Background" id="gallery-label-demo" />
    </div>
  );
}

function SeparatorStory(): React.JSX.Element {
  return (
    <div className="gallery-stack">
      <span>Fill</span>
      <Separator />
      <span>Stroke</span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Composites                                                                 */
/* -------------------------------------------------------------------------- */

function AccordionStory(): React.JSX.Element {
  return (
    <Accordion defaultValue={["colors"]}>
      <AccordionItem value="colors">
        <AccordionTrigger>Colors</AccordionTrigger>
        <AccordionContent>
          Fill, stroke, and gradient stops for the active layer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="effects">
        <AccordionTrigger>Effects</AccordionTrigger>
        <AccordionContent>
          Blur, noise, and grain applied after compositing.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

function AlertStory(): React.JSX.Element {
  return (
    <Alert>
      <AlertTitle>Render queued</AlertTitle>
      <AlertDescription>
        Your export will be ready in a few seconds.
      </AlertDescription>
    </Alert>
  );
}

function AvatarStory(): React.JSX.Element {
  return (
    <Avatar>
      <AvatarImage alt="NS" src="" />
      <AvatarFallback>NS</AvatarFallback>
    </Avatar>
  );
}

function BadgeStory(): React.JSX.Element {
  return (
    <div className="gallery-row">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}

function BreadcrumbStory(): React.JSX.Element {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Project</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Scene</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Layer 3</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

function CardStory(): React.JSX.Element {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Export preset</CardTitle>
        <CardDescription>1080p · 8s loop · WebM</CardDescription>
      </CardHeader>
      <CardContent>
        Reuse this preset across scenes to keep exports consistent.
      </CardContent>
      <CardFooter>
        <Button variant="secondary">Apply</Button>
      </CardFooter>
    </Card>
  );
}

function ProgressStory(): React.JSX.Element {
  return <Progress value={64} />;
}

function RadioGroupStory(): React.JSX.Element {
  return (
    <RadioGroup defaultValue="comfortable">
      <Label className="gallery-inline">
        <RadioGroupItem value="compact" />
        Compact
      </Label>
      <Label className="gallery-inline">
        <RadioGroupItem value="comfortable" />
        Comfortable
      </Label>
      <Label className="gallery-inline">
        <RadioGroupItem value="spacious" />
        Spacious
      </Label>
    </RadioGroup>
  );
}

function SpinnerStory(): React.JSX.Element {
  return <Spinner />;
}

function TableStory(): React.JSX.Element {
  const rows = [
    { blend: "Normal", layer: "Background", opacity: "100%" },
    { blend: "Screen", layer: "Glow", opacity: "82%" },
    { blend: "Multiply", layer: "Shadow", opacity: "48%" },
  ];
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Layer</TableHead>
          <TableHead>Blend</TableHead>
          <TableHead>Opacity</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.layer}>
            <TableCell>{row.layer}</TableCell>
            <TableCell>{row.blend}</TableCell>
            <TableCell>{row.opacity}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function TabsStory(): React.JSX.Element {
  return (
    <Tabs defaultValue="fill">
      <TabsList>
        <TabsTrigger value="fill">Fill</TabsTrigger>
        <TabsTrigger value="stroke">Stroke</TabsTrigger>
        <TabsTrigger value="effects">Effects</TabsTrigger>
      </TabsList>
      <TabsContent value="fill">Solid, gradient, or image fill.</TabsContent>
      <TabsContent value="stroke">Stroke width, color, and dash.</TabsContent>
      <TabsContent value="effects">Blur, noise, and grain.</TabsContent>
    </Tabs>
  );
}

/* -------------------------------------------------------------------------- */
/* Overlays (interactive / portal)                                            */
/* -------------------------------------------------------------------------- */

function DialogStory(): React.JSX.Element {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline">Open dialog</Button>} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rename layer</DialogTitle>
          <DialogDescription>Give this layer a clear name.</DialogDescription>
        </DialogHeader>
        <Input defaultValue="Background" />
        <DialogFooter>
          <DialogClose render={<Button variant="secondary">Cancel</Button>} />
          <DialogClose render={<Button>Save</Button>} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function AlertDialogStory(): React.JSX.Element {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={<Button variant="destructive">Delete layer</Button>}
      />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete this layer?</AlertDialogTitle>
          <AlertDialogDescription>
            This action can&apos;t be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

function DropdownMenuStory(): React.JSX.Element {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="outline">Layer options</Button>}
      />
      <DropdownMenuContent>
        <DropdownMenuLabel>Layer</DropdownMenuLabel>
        <DropdownMenuItem>
          Duplicate
          <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>Rename</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function ContextMenuStory(): React.JSX.Element {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="gallery-contextmenu-target">
        Right-click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          Cut
          <ContextMenuShortcut>⌘X</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Copy
          <ContextMenuShortcut>⌘C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

function SheetStory(): React.JSX.Element {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline">Open sheet</Button>} />
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Export settings</SheetTitle>
          <SheetDescription>
            Configure the export for this scene.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

function PopoverStory(): React.JSX.Element {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline">Open popover</Button>} />
      <PopoverContent>Adjust quick settings for the layer.</PopoverContent>
    </Popover>
  );
}

function TooltipStory(): React.JSX.Element {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline">Hover me</Button>} />
        <TooltipContent>Resets the panel</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function HoverCardStory(): React.JSX.Element {
  return (
    <HoverCard>
      <HoverCardTrigger render={<Button variant="link">@toolcraft</Button>} />
      <HoverCardContent>
        The component toolkit for Toolcraft apps.
      </HoverCardContent>
    </HoverCard>
  );
}

/* -------------------------------------------------------------------------- */
/* Inline composites                                                          */
/* -------------------------------------------------------------------------- */

function PaginationStory(): React.JSX.Element {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

function EmptyStory(): React.JSX.Element {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>No layers yet</EmptyTitle>
        <EmptyDescription>Add a layer to start compositing.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Add layer</Button>
      </EmptyContent>
    </Empty>
  );
}

function AspectRatioStory(): React.JSX.Element {
  return (
    <AspectRatio ratio={16 / 9}>
      <div className="gallery-aspect-fill">16 : 9</div>
    </AspectRatio>
  );
}

/* -------------------------------------------------------------------------- */
/* Surfaces (higher-order, schema-driven)                                     */
/* -------------------------------------------------------------------------- */

const surfaceSchema = defineToolcraft({
  canvas: { enabled: true, upload: true },
  panels: {
    controls: { sections: [], title: "Settings" },
    layers: true,
    timeline: { defaultDurationSeconds: 8, enabled: true, mode: "keyframes" },
  },
  toolbar: { history: true, radar: true, theme: true, zoom: true },
});

function AppSurfaceStory(): React.JSX.Element {
  return <ToolcraftApp className="gallery-surface-app" schema={surfaceSchema} />;
}

function SettingsPanelStory(): React.JSX.Element {
  return (
    <ToolcraftRoot schema={surfaceSchema}>
      <ControlsPanel />
    </ToolcraftRoot>
  );
}

function LayersPanelStory(): React.JSX.Element {
  return (
    <ToolcraftRoot schema={surfaceSchema}>
      <LayersPanel groupCreation />
    </ToolcraftRoot>
  );
}

function ToolbarSurfaceStory(): React.JSX.Element {
  return (
    <ToolcraftRoot schema={surfaceSchema}>
      <ToolbarPanel />
    </ToolcraftRoot>
  );
}

function TimelineSurfaceStory(): React.JSX.Element {
  return (
    <ToolcraftRoot schema={surfaceSchema}>
      <TimelinePanel />
    </ToolcraftRoot>
  );
}

function CanvasSurfaceStory(): React.JSX.Element {
  return (
    <ToolcraftRoot schema={surfaceSchema}>
      <CanvasShell />
    </ToolcraftRoot>
  );
}

const CONTROLS = "Control Components";
const PRIMITIVES = "Primitives";
const COMPOSITES = "Composites";
const OVERLAYS = "Overlays";
const SURFACES = "Surfaces";

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

  /* ---- Primitives ---- */
  {
    description:
      "The base button primitive with default, secondary, outline, ghost, and destructive variants.",
    group: PRIMITIVES,
    id: "button",
    name: "Button",
    stories: [
      {
        code: '<Button>Default</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="outline">Outline</Button>\n<Button variant="ghost">Ghost</Button>\n<Button variant="destructive">Destructive</Button>',
        id: "variants",
        label: "Variants",
        render: ButtonStory,
      },
    ],
  },
  {
    description: "A single-line text input primitive.",
    group: PRIMITIVES,
    id: "input",
    name: "Input",
    stories: [
      {
        code: '<Input placeholder="Search components…" />',
        id: "default",
        label: "Default",
        render: InputStory,
      },
    ],
  },
  {
    description: "A form label primitive, paired with an input.",
    group: PRIMITIVES,
    id: "label",
    name: "Label",
    stories: [
      {
        code: '<Label htmlFor="name">Layer name</Label>\n<Input id="name" defaultValue="Background" />',
        id: "default",
        label: "Default",
        render: LabelStory,
      },
    ],
  },
  {
    description: "A horizontal or vertical divider primitive.",
    group: PRIMITIVES,
    id: "separator",
    name: "Separator",
    stories: [
      {
        code: "<span>Fill</span>\n<Separator />\n<span>Stroke</span>",
        id: "default",
        label: "Default",
        render: SeparatorStory,
      },
    ],
  },
  {
    description: "A multi-line text input primitive.",
    group: PRIMITIVES,
    id: "textarea",
    name: "Textarea",
    stories: [
      {
        code: '<Textarea placeholder="Notes…" rows={3} />',
        id: "default",
        label: "Default",
        render: TextareaStory,
      },
    ],
  },
  {
    description: "A two-state pressed toggle primitive.",
    group: PRIMITIVES,
    id: "toggle",
    name: "Toggle",
    stories: [
      {
        code: "<Toggle pressed={pressed} onPressedChange={setPressed}>Snap</Toggle>",
        id: "default",
        label: "Default",
        render: ToggleStory,
      },
    ],
  },

  /* ---- Composites ---- */
  {
    description: "A vertically stacked set of collapsible sections.",
    group: COMPOSITES,
    id: "accordion",
    name: "Accordion",
    stories: [
      {
        code: '<Accordion defaultValue={["colors"]}>\n  <AccordionItem value="colors">\n    <AccordionTrigger>Colors</AccordionTrigger>\n    <AccordionContent>…</AccordionContent>\n  </AccordionItem>\n</Accordion>',
        id: "default",
        label: "Default",
        render: AccordionStory,
      },
    ],
  },
  {
    description: "A callout for surfacing status or contextual messages.",
    group: COMPOSITES,
    id: "alert",
    name: "Alert",
    stories: [
      {
        code: "<Alert>\n  <AlertTitle>Render queued</AlertTitle>\n  <AlertDescription>…</AlertDescription>\n</Alert>",
        id: "default",
        label: "Default",
        render: AlertStory,
      },
    ],
  },
  {
    description: "A user or entity avatar with image and fallback.",
    group: COMPOSITES,
    id: "avatar",
    name: "Avatar",
    stories: [
      {
        code: "<Avatar>\n  <AvatarImage src={url} alt=\"NS\" />\n  <AvatarFallback>NS</AvatarFallback>\n</Avatar>",
        id: "default",
        label: "Default",
        render: AvatarStory,
      },
    ],
  },
  {
    description: "A small status or category label with several variants.",
    group: COMPOSITES,
    id: "badge",
    name: "Badge",
    stories: [
      {
        code: '<Badge>Default</Badge>\n<Badge variant="secondary">Secondary</Badge>\n<Badge variant="warning">Warning</Badge>\n<Badge variant="destructive">Destructive</Badge>',
        id: "variants",
        label: "Variants",
        render: BadgeStory,
      },
    ],
  },
  {
    description: "A navigation trail showing the current location in a hierarchy.",
    group: COMPOSITES,
    id: "breadcrumb",
    name: "Breadcrumb",
    stories: [
      {
        code: "<Breadcrumb>\n  <BreadcrumbList>\n    <BreadcrumbItem><BreadcrumbLink href=\"#\">Project</BreadcrumbLink></BreadcrumbItem>\n    <BreadcrumbSeparator />\n    <BreadcrumbItem><BreadcrumbPage>Layer 3</BreadcrumbPage></BreadcrumbItem>\n  </BreadcrumbList>\n</Breadcrumb>",
        id: "default",
        label: "Default",
        render: BreadcrumbStory,
      },
    ],
  },
  {
    description: "A surface for grouping related content with header, body, and footer.",
    group: COMPOSITES,
    id: "card",
    name: "Card",
    stories: [
      {
        code: "<Card>\n  <CardHeader>\n    <CardTitle>Export preset</CardTitle>\n    <CardDescription>1080p · 8s loop · WebM</CardDescription>\n  </CardHeader>\n  <CardContent>…</CardContent>\n  <CardFooter><Button>Apply</Button></CardFooter>\n</Card>",
        id: "default",
        label: "Default",
        render: CardStory,
      },
    ],
  },
  {
    description: "A determinate progress bar.",
    group: COMPOSITES,
    id: "progress",
    name: "Progress",
    stories: [
      {
        code: "<Progress value={64} />",
        id: "default",
        label: "Default",
        render: ProgressStory,
      },
    ],
  },
  {
    description: "A set of mutually exclusive radio options.",
    group: COMPOSITES,
    id: "radio-group",
    name: "Radio Group",
    stories: [
      {
        code: '<RadioGroup defaultValue="comfortable">\n  <Label><RadioGroupItem value="compact" /> Compact</Label>\n  <Label><RadioGroupItem value="comfortable" /> Comfortable</Label>\n</RadioGroup>',
        id: "default",
        label: "Default",
        render: RadioGroupStory,
      },
    ],
  },
  {
    description: "An indeterminate loading spinner.",
    group: COMPOSITES,
    id: "spinner",
    name: "Spinner",
    stories: [
      {
        code: "<Spinner />",
        id: "default",
        label: "Default",
        render: SpinnerStory,
      },
    ],
  },
  {
    description: "A data table with header and body rows.",
    group: COMPOSITES,
    id: "table",
    name: "Table",
    stories: [
      {
        code: "<Table>\n  <TableHeader>\n    <TableRow><TableHead>Layer</TableHead>…</TableRow>\n  </TableHeader>\n  <TableBody>\n    <TableRow><TableCell>Background</TableCell>…</TableRow>\n  </TableBody>\n</Table>",
        id: "default",
        label: "Default",
        render: TableStory,
      },
    ],
  },
  {
    description: "A tabbed interface for switching between related panels.",
    group: COMPOSITES,
    id: "tabs",
    name: "Tabs",
    stories: [
      {
        code: '<Tabs defaultValue="fill">\n  <TabsList>\n    <TabsTrigger value="fill">Fill</TabsTrigger>\n    <TabsTrigger value="stroke">Stroke</TabsTrigger>\n  </TabsList>\n  <TabsContent value="fill">…</TabsContent>\n</Tabs>',
        id: "default",
        label: "Default",
        render: TabsStory,
      },
    ],
  },
  {
    description: "Constrains content to a fixed width-to-height ratio.",
    group: COMPOSITES,
    id: "aspect-ratio",
    name: "Aspect Ratio",
    stories: [
      {
        code: "<AspectRatio ratio={16 / 9}>\n  <img src={url} alt=\"\" />\n</AspectRatio>",
        id: "default",
        label: "Default",
        render: AspectRatioStory,
      },
    ],
  },
  {
    description: "An empty-state placeholder with a title, description, and action.",
    group: COMPOSITES,
    id: "empty",
    name: "Empty",
    stories: [
      {
        code: "<Empty>\n  <EmptyHeader>\n    <EmptyTitle>No layers yet</EmptyTitle>\n    <EmptyDescription>…</EmptyDescription>\n  </EmptyHeader>\n  <EmptyContent><Button>Add layer</Button></EmptyContent>\n</Empty>",
        id: "default",
        label: "Default",
        render: EmptyStory,
      },
    ],
  },
  {
    description: "Page navigation with previous/next and numbered links.",
    group: COMPOSITES,
    id: "pagination",
    name: "Pagination",
    stories: [
      {
        code: "<Pagination>\n  <PaginationContent>\n    <PaginationItem><PaginationPrevious href=\"#\" /></PaginationItem>\n    <PaginationItem><PaginationLink href=\"#\">1</PaginationLink></PaginationItem>\n    <PaginationItem><PaginationNext href=\"#\" /></PaginationItem>\n  </PaginationContent>\n</Pagination>",
        id: "default",
        label: "Default",
        render: PaginationStory,
      },
    ],
  },

  /* ---- Overlays (interactive / portal) ---- */
  {
    description:
      "A confirmation dialog for destructive actions, with cancel and confirm.",
    group: OVERLAYS,
    id: "alert-dialog",
    name: "Alert Dialog",
    stories: [
      {
        code: "<AlertDialog>\n  <AlertDialogTrigger render={<Button variant=\"destructive\">Delete</Button>} />\n  <AlertDialogContent>…</AlertDialogContent>\n</AlertDialog>",
        id: "default",
        label: "Default",
        render: AlertDialogStory,
      },
    ],
  },
  {
    description:
      "A right-click menu of contextual actions anchored to a target area.",
    group: OVERLAYS,
    id: "context-menu",
    name: "Context Menu",
    stories: [
      {
        code: "<ContextMenu>\n  <ContextMenuTrigger>Right-click here</ContextMenuTrigger>\n  <ContextMenuContent>\n    <ContextMenuItem>Cut</ContextMenuItem>\n    …\n  </ContextMenuContent>\n</ContextMenu>",
        id: "default",
        label: "Default",
        render: ContextMenuStory,
      },
    ],
  },
  {
    description: "A modal dialog opened from a trigger, with header and footer.",
    group: OVERLAYS,
    id: "dialog",
    name: "Dialog",
    stories: [
      {
        code: "<Dialog>\n  <DialogTrigger render={<Button>Open dialog</Button>} />\n  <DialogContent>\n    <DialogHeader><DialogTitle>Rename layer</DialogTitle></DialogHeader>\n    …\n  </DialogContent>\n</Dialog>",
        id: "default",
        label: "Default",
        render: DialogStory,
      },
    ],
  },
  {
    description: "A menu of actions opened from a trigger button.",
    group: OVERLAYS,
    id: "dropdown-menu",
    name: "Dropdown Menu",
    stories: [
      {
        code: "<DropdownMenu>\n  <DropdownMenuTrigger render={<Button>Layer options</Button>} />\n  <DropdownMenuContent>\n    <DropdownMenuItem>Duplicate</DropdownMenuItem>\n    …\n  </DropdownMenuContent>\n</DropdownMenu>",
        id: "default",
        label: "Default",
        render: DropdownMenuStory,
      },
    ],
  },
  {
    description: "A card of rich preview content shown on hover.",
    group: OVERLAYS,
    id: "hover-card",
    name: "Hover Card",
    stories: [
      {
        code: "<HoverCard>\n  <HoverCardTrigger render={<Button variant=\"link\">@toolcraft</Button>} />\n  <HoverCardContent>…</HoverCardContent>\n</HoverCard>",
        id: "default",
        label: "Default",
        render: HoverCardStory,
      },
    ],
  },
  {
    description: "A floating panel of secondary controls anchored to a trigger.",
    group: OVERLAYS,
    id: "popover",
    name: "Popover",
    stories: [
      {
        code: "<Popover>\n  <PopoverTrigger render={<Button>Open popover</Button>} />\n  <PopoverContent>…</PopoverContent>\n</Popover>",
        id: "default",
        label: "Default",
        render: PopoverStory,
      },
    ],
  },
  {
    description: "A side panel that slides in from the edge of the viewport.",
    group: OVERLAYS,
    id: "sheet",
    name: "Sheet",
    stories: [
      {
        code: "<Sheet>\n  <SheetTrigger render={<Button>Open sheet</Button>} />\n  <SheetContent>\n    <SheetHeader><SheetTitle>Export settings</SheetTitle></SheetHeader>\n  </SheetContent>\n</Sheet>",
        id: "default",
        label: "Default",
        render: SheetStory,
      },
    ],
  },
  {
    description: "A small hint shown on hover or focus of a trigger.",
    group: OVERLAYS,
    id: "tooltip",
    name: "Tooltip",
    stories: [
      {
        code: "<TooltipProvider>\n  <Tooltip>\n    <TooltipTrigger render={<Button>Hover me</Button>} />\n    <TooltipContent>Resets the panel</TooltipContent>\n  </Tooltip>\n</TooltipProvider>",
        id: "default",
        label: "Default",
        render: TooltipStory,
      },
    ],
  },

  /* ---- Surfaces (higher-order, schema-driven) ---- */
  {
    description:
      "The complete Toolcraft app composed from a schema: app bar, canvas, settings panel, layers, and timeline.",
    group: SURFACES,
    id: "app",
    name: "App",
    stories: [
      {
        code: 'const schema = defineToolcraft({\n  canvas: { enabled: true, upload: true },\n  panels: {\n    controls: { sections: [], title: "Settings" },\n    layers: true,\n    timeline: { defaultDurationSeconds: 8, enabled: true, mode: "keyframes" },\n  },\n  toolbar: { history: true, radar: true, theme: true, zoom: true },\n});\n\n<ToolcraftApp schema={schema} />',
        id: "default",
        label: "Default",
        render: AppSurfaceStory,
      },
    ],
  },
  {
    description:
      "The canvas surface with upload, panning, and zoom, driven by the app schema.",
    group: SURFACES,
    id: "canvas",
    name: "Canvas",
    stories: [
      {
        code: "<ToolcraftRoot schema={schema}>\n  <CanvasShell />\n</ToolcraftRoot>",
        id: "default",
        label: "Default",
        render: CanvasSurfaceStory,
      },
    ],
  },
  {
    description:
      "The layers panel with grouping, selection, and visibility toggles.",
    group: SURFACES,
    id: "layers-panel",
    name: "Layers Panel",
    stories: [
      {
        code: "<ToolcraftRoot schema={schema}>\n  <LayersPanel groupCreation />\n</ToolcraftRoot>",
        id: "default",
        label: "Default",
        render: LayersPanelStory,
      },
    ],
  },
  {
    description:
      "The settings panel (ControlsPanel) that hosts control sections defined in the schema.",
    group: SURFACES,
    id: "settings-panel",
    name: "Settings Panel",
    stories: [
      {
        code: "<ToolcraftRoot schema={schema}>\n  <ControlsPanel />\n</ToolcraftRoot>",
        id: "default",
        label: "Default",
        render: SettingsPanelStory,
      },
    ],
  },
  {
    description: "The timeline surface for keyframes and playback.",
    group: SURFACES,
    id: "timeline",
    name: "Timeline",
    stories: [
      {
        code: "<ToolcraftRoot schema={schema}>\n  <TimelinePanel />\n</ToolcraftRoot>",
        id: "default",
        label: "Default",
        render: TimelineSurfaceStory,
      },
    ],
  },
  {
    description:
      "The app bar (ToolbarPanel) with history, radar, zoom, and theme controls.",
    group: SURFACES,
    id: "toolbar",
    name: "Toolbar",
    stories: [
      {
        code: "<ToolcraftRoot schema={schema}>\n  <ToolbarPanel />\n</ToolcraftRoot>",
        id: "default",
        label: "Default",
        render: ToolbarSurfaceStory,
      },
    ],
  },
];
