import React from "react";
import Tabs from "./components/Tab/Tabs";
import TabItem from "./components/Tab/TabItem";

const App = (props: any) => {
  return (
    <>
      <div style={{ margin: "20px" }}>
        <Tabs type="box" defaultIndex={0} onSelect={(index) => console.log(index)}>
          <TabItem label="label A">This is card one</TabItem>
          <TabItem label="label B">This is card two</TabItem>
          <TabItem label="label C" disabled>The content is disabled</TabItem>
        </Tabs>
        {/* <Menu onSelect={(index) => console.log("index", index)} mode="vertical" defaultOpenSubMenus={['2']}>
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
        </Menu> */}
      </div>
    </>
  );
};

export default App;
