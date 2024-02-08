import React, { useState } from "react";
import classNames from "classnames";

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
  discription?: string;
  onShow?: boolean;
}

type alertProps = BaseAlertProps & React.HTMLAttributes<HTMLElement>;

const Alert: React.FC<alertProps> = (props) => {
  const { className, alertType, title, discription, onShow, ...restProps } =
    props;

  const [alertShow, setAlertShow] = useState(onShow);

  const classes = classNames("alert", className, {
    [`alert-${alertType}`]: alertType,
  });

  return alertShow ? (
    <div className={classes} {...restProps}>
      {title && <div className="alert-title">{title}</div>}
      <div className="alert-discription">{discription}</div>
      <div className="alert-close-button" onClick={() => setAlertShow(false)}>
        x
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
