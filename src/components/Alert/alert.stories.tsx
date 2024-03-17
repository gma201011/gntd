import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import Alert, { AlertType } from './alert';

const alertMeta: Meta<typeof Alert> = {
  title: 'Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default alertMeta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = (args: any) => {
  return (
    <div style={{ width: "60vw" }}>
      <Alert {...args} title="This is an Alert with title." onShow></Alert>
      <Alert {...args} description="This is an Alert with description." onShow></Alert>
    </div>

  )
}

Default.storyName = "Default";


export const Type: Story = () => {
  return (
    <div style={{ width: "60vw" }}>
      <Alert title="Example 1" description="This is an success Alert." alertType={AlertType.Success} onShow></Alert>
      <Alert title="Example 2" description="This is an danger Alert." alertType={AlertType.Danger} onShow></Alert>
      <Alert title="Example 3" description="This is an warning Alert." alertType={AlertType.Warning} onShow></Alert>
    </div>
  )
}

Type.storyName = "With Types";


