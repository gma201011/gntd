import React, { createContext, useState } from "react";
import classNames from "classnames";

type selctedCallback = (selctedIndex: number) => void;

interface ITabsContext {
  index: number;
  onSelect?: selctedCallback;
  children?: React.ReactNode;
  type?: string
}

interface TabsProps {
  className?: string;
  children: React.ReactNode;
  defaultIndex: number;
  onSelect?: selctedCallback;
  disabled?: boolean;
  type?: string;
}

export const TabsContext = createContext<ITabsContext>({ index: 0, type: "line" });

const Tabs: React.FC<TabsProps> = (props) => {
  const { className, children, defaultIndex, onSelect, type } = props;
  const [currentActive, setCurrentActive] = useState(defaultIndex);

  const classes = classNames("tabs", className);

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<ITabsContext>;
      const { displayName } = childElement.type;
      if (displayName === "TabItem") {
        return React.cloneElement(childElement, { index });
      } else {
        console.error(
          "Warning: Tabs has a child which is not a TabItem component."
        );
      }
    });
  };

  const renderLabel = () => {
    const labelArray = React.Children.map(children, (child) => {
      const childElement =
        child as React.FunctionComponentElement<ITabsContext>;
      const { displayName } = childElement.type;
      if (displayName === "TabItem") {
        return <div>{childElement.props.children}</div>;
      }
    });
    return labelArray ? labelArray[currentActive] : [];
  };

  const handleTabClick = (index: number) => {
    setCurrentActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };

  const passedContext: ITabsContext = {
    index: currentActive || 0,
    onSelect: handleTabClick,
    type: type
  };

  return (
    <TabsContext.Provider value={passedContext}>
      <ul className={classes}>{renderChildren()}</ul>
      <div>{renderLabel()}</div>
    </TabsContext.Provider>
  );
};

Tabs.defaultProps = {
  defaultIndex: 0,
  type: "line",
};

export default Tabs;
