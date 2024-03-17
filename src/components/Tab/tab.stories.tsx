import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Tabs from "./tabs";
import TabItem from "./TabItem";

const tabMeta: Meta<typeof Tabs> = {
  title: "Tab",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onSelect: {
      type: "function",
    },
  },
  tags: ["autodocs"],
};

export default tabMeta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = (args: any) => {
  return (
    <Tabs defaultIndex={1} onSelect={(index) => alert("index: " + index)}>
      <TabItem label="label A">This is card one</TabItem>
      <TabItem label="label B">This is card two</TabItem>
      <TabItem label="label C" disabled>
        The content is disabled
      </TabItem>
    </Tabs>
  );
};

Default.storyName = "Default";
