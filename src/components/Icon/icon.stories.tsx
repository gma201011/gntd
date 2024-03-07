import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import Icon from './icon';
import Button, { ButtonSize, ButtonType } from "../Button/button";

const iconMeta: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default iconMeta;
type Story = StoryObj<typeof Icon>

export const Default: Story = (args: any) => {
  return (

    <div style={{ display: "flex", width: "50vw", justifyContent: "space-between", alignItems: "center" }}>
      <Icon icon="arrow-down" theme="primary" size="2x" />
      <Icon icon="check" theme="secondary" size="2x" />
      <Icon icon="anchor" theme="success" size="2x" />
      <Icon icon="trash" theme="info" size="2x" />
      <Icon icon="anchor" theme="warning" size="2x" />
      <Button size={ButtonSize.Large} btnType={ButtonType.Link} href="https://fontawesome.com/icons/" target="_blank">
        <Icon icon="arrow-up-right-from-square" /> For more icon
      </Button>
    </div>
  )
}

Default.storyName = "Default";



