"use client";

import * as React from "react";

import {
  WheelPicker,
  WheelPickerOption,
  WheelPickerWrapper,
} from "@/registry/new-york/ui/wheel-picker";

const options = [
  {
    label: "React",
    value: "react",
  },
  {
    label: "Vue",
    value: "vue",
  },
  {
    label: "Angular",
    value: "angular",
  },
  {
    label: "Svelte",
    value: "svelte",
  },
] as const satisfies WheelPickerOption[];

export default function WheelPickerDemo() {
  const [value, setValue] = React.useState("react");

  return (
    <WheelPickerWrapper className="max-w-80">
      <WheelPicker options={options} value={value} onValueChange={setValue} />
    </WheelPickerWrapper>
  );
}
