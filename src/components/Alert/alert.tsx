import React, { useState } from "react";
import classNames from "classnames";
import Icon from "../Icon/icon";

export enum AlertType {
  Success = "success",
  Default = "default",
  Danger = "danger",
  Warning = "warning",
}

interface BaseAlertProps {
  className?: string;
  alertType?: AlertType;
  title?: string;
  description?: string;
  onShow?: boolean;
}

type alertProps = BaseAlertProps & React.HTMLAttributes<HTMLElement>;

export const Alert: React.FC<alertProps> = (props) => {
  const { className, alertType, title, description, onShow, ...restProps } =
    props;

  const [alertShow, setAlertShow] = useState(onShow);

  const classes = classNames("alert", className, {
    [`alert-${alertType}`]: alertType,
  });

  return alertShow ? (
    <div className={classes} {...restProps}>
      {title && <div className="alert-title">{title}</div>}
      <div className="alert-description">{description}</div>
      <div className="alert-close-button" onClick={() => setAlertShow(false)}>
        <Icon icon="xmark" />
      </div>
    </div>
  ) : (
    <></>
  );
};

Alert.defaultProps = {
  alertType: AlertType.Default,
  onShow: true,
};

export default Alert;
