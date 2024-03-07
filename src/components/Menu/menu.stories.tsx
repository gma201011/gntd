import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import Menu from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";

const menuMeta: Meta<typeof Menu> = {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onSelect: {
      type: 'function',
    },
  },
  tags: ['autodocs'],
};

export default menuMeta;
type Story = StoryObj<typeof Menu>

export const Default: Story = (args: any) => {
  return (
    <Menu {...args}>
      <MenuItem>Menu1</MenuItem>
      <MenuItem>
        Menu2
      </MenuItem>
      <SubMenu title="dropdown">
        <MenuItem>Menu1</MenuItem>
        <MenuItem>
          <a target="_blank" href="https://www.google.com">
            Google Link
          </a>
        </MenuItem>
        <MenuItem>Menu3</MenuItem>
        <MenuItem disabled>Menu4</MenuItem>
      </SubMenu>
      <MenuItem>Menu3</MenuItem>
      <MenuItem disabled>Menu4</MenuItem>
    </Menu>
  )
}

Default.storyName = "Horizontal Menu";

export const Vertical: Story = () => {
  return (
    <div>
      <Menu onSelect={(index) => alert("selected index: " + index)} mode="vertical" defaultOpenSubMenus={['2']}>
        <MenuItem>Menu1</MenuItem>
        <MenuItem>
          Menu2
        </MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>Menu A</MenuItem>
          <MenuItem>
            Menu B
          </MenuItem>
          <MenuItem>Menu C</MenuItem>
          <MenuItem disabled>Menu D</MenuItem>
        </SubMenu>
        <MenuItem>Menu3</MenuItem>
        <MenuItem disabled>Menu4</MenuItem>
      </Menu>
    </div>
  )
}

Vertical.storyName = "Vertical menu";



