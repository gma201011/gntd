import React from "react";
import Menu, { MenuProps } from "./components/Menu/menu";
import MenuItem, { MenuItemProps } from "./components/Menu/menuItem";
import SubMenu, { SubMenuProps } from "./components/Menu/subMenu";

const App = (props: any) => {
  return (
    <>
      <div style={{ margin: "20px" }}>
        <Menu onSelect={(index) => console.log("index", index)} mode="vertical" defaultOpenSubMenus={['2']}>
        {/* <Menu onSelect={(index) => console.log("index", index)} mode="vertical"> */}
        {/* <Menu onSelect={(index) => console.log("index", index)}> */}
          <MenuItem>Menu1</MenuItem>
          <MenuItem>
            <a target="_blank" href="https://www.google.com">
              Google Link
            </a>
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
      </div>
    </>
  );
};

export default App;
