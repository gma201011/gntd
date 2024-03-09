import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import Input from "./input";
import Icon from "../Icon/icon";

const inputMeta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default inputMeta;
type Story = StoryObj<typeof Input>;

export const Default: Story = (args: any) => {
  const [value, setValue] = useState("Default Value");

  return (
    <Input
      {...args}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};

Default.storyName = "Default";

export const Prepend: Story = (args: any) => {
  const [value, setValue] = useState("Default Value");

  return (
    <Input
      size="lg"
      style={{ width: "300px" }}
      prepend="https://"
    />
  );
};

Prepend.storyName = "Prepend Value";

export const Append: Story = (args: any) => {
  const [value, setValue] = useState("Default Value");

  return (
    <Input
      size="sm"
      style={{ width: "300px" }}
      append={<Icon icon="check" theme="primary" />}
    />
  );
};

Append.storyName = "Appended Value";
