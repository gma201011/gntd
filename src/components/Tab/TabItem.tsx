import React, { useContext, useState, useEffect } from "react";
import classNames from "classnames";
import { TabsContext } from "./tabs";

export interface TabItemProps {
  index?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  label: string;
}

const TabItem: React.FC<TabItemProps> = (props) => {
  const { className, style, disabled, index, label } = props;
  const context = useContext(TabsContext);

  const classes = classNames("tab-item", className, {
    "is-disabled": disabled,
    "is-active": context.index === index,
  });

  const handleClick = () => {
    if (context.onSelect && !disabled && typeof index === "number") {
      context.onSelect(index);
    }
  };

  return (
    <li onClick={handleClick} className={classes} style={style}>
      {label}
    </li>
  );
};

TabItem.displayName = "TabItem";

export default TabItem;
