import React, { useContext, useState } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import { MenuItemProps } from "./menuItem";
import Icon from "../Icon/icon";

export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
  children?: React.ReactNode;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { index, title, children, className } = props;

  const context = useContext(MenuContext);
  const openedSubmenus = context.defaultOpenSubMenus as Array<string>;
  const isOpen =
    index && context.mode === "vertical"
      ? openedSubmenus.includes(index)
      : false;

  const [menuOpen, setMenuOpen] = useState(isOpen);

  const classes = classNames("menu-item submenu-item", className, {
    "menu-opened": context.index === index,
    "is-opened": menuOpen,
    "is-vertical": context.mode === "vertical",
  });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (context.mode === "vertical") {
      setMenuOpen(!menuOpen);
    }
  };

  let timer: any;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    if (timer) clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setMenuOpen(toggle);
    }, 200);
  };

  const clickEvents =
    context.mode === "vertical"
      ? {
          onClick: handleClick,
        }
      : {};

  const hoverEvents =
    context.mode !== "vertical"
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true);
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false);
          },
        }
      : {};

  const renderChildren = () => {
    const subMenuClasses = classNames("submenu", {
      "menu-opened": menuOpen,
    });
    const childrenComponent = React.Children.map(
      children,
      (child, childIndex) => {
        const childElement =
          child as React.FunctionComponentElement<MenuItemProps>;
        if (childElement.type.displayName === "MenuItem") {
          return React.cloneElement(childElement, {
            index: `${index}-${childIndex}`,
          });
        } else {
          console.error(
            "Warning: Submenu has a child which is not a MenuItem component."
          );
        }
      }
    );
    return (
        <ul className={subMenuClasses}>{childrenComponent}</ul>
    );
  };

  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
        <Icon icon="angle-down" className="arrow-icon" />
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = "SubMenu";
export default SubMenu;
