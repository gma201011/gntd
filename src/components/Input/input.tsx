import React, { ReactElement, InputHTMLAttributes, ChangeEvent } from "react";
import classNames from "classnames";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Icon from '../Icon/icon';


interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  className?: string;
  disabled?: boolean;
  icon?: IconProp;
  size?: "lg" | "sm";
  prepend?: string | ReactElement;
  append?: string | ReactElement;
  // for controlled component onchange event
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const fixControlledValue = (value: any) => {
  return typeof value == undefined ? "" : value;
}

export const Input: React.FC<InputProps> = (props) => {
  const { className, size, disabled, icon, prepend, append, style, ...restProps } = props;

  // btn, btn-lg, btn-primary
  const classes = classNames("input-wrapper", className, {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    "input-group": prepend || append,
    "input-group-append": !!append,
    "input-group-prepend": !!prepend,
  });

  if (props["value"]) {
    delete restProps.defaultValue;
    restProps.value = fixControlledValue(props["value"]);
  }

  return (
    <div className={classes} style={style}>
      {prepend && <div className="input-group-prepend">{prepend}</div>}
      {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`} /></div>}
      <input
        // ref={ref}
        className="input-inner"
        disabled={disabled}
        {...restProps}
      />
      {append && <div className="input-group-append">{append}</div>}
    </div>
  );
};

// Input.defaultProps = {
//   disabled: false,
// };

export default Input;
