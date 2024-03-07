import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import DatePicker from './datePicker';

const datePickerMeta: Meta<typeof DatePicker> = {
  title: 'Date Picker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default datePickerMeta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = (args: any) => {
  return (
    <DatePicker {...args} />
  )
}

Default.storyName = "Default";

export const Operation: Story = (args: any) => {
  return (
    <DatePicker {...args} value={new Date("2000-1-1")} onChange={(date: Date) => alert(date.toLocaleDateString())} />
  )
}

Operation.storyName = "With specific date";




