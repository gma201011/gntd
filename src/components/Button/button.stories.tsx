import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import Button, { ButtonSize, ButtonType } from './button';

const buttonMeta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default buttonMeta;
type Story = StoryObj<typeof Button>;

export const Default: Story = (args: any) => {
  return (
    <Button {...args}>Default Button</Button>
  )
}

Default.storyName = "Default";


export const Size: Story = () => {
  return (
    <div style={{ display: "flex", width: "15vw", justifyContent: "space-between" }}>
      <Button size={ButtonSize.Large}>Large</Button>
      <Button size={ButtonSize.Small}>Small</Button>
    </div>
  )
}

Size.storyName = "With Different Sizes";

export const Type: Story = () => {
  return (
    <div style={{ display: "flex", width: "30vw", justifyContent: "space-between" }}>
      <Button btnType={ButtonType.Primary}>Primary</Button>
      <Button btnType={ButtonType.Danger}>Danger</Button>
      <Button btnType={ButtonType.Link} href="https://www.google.com" target="_blank">Google Link</Button>
    </div>
  )
}

Type.storyName = "With Types";


