import React from "react";

import "./status.css";

interface IStatusProps {
  status: "completed" | "performed" | "available" | "not_available" | undefined | "unknown";
}

const Status = (props: IStatusProps) => {
  const { status } = props;
  let el = <span></span>;
  switch (status) {
    case "available":
      el = <span className="status_available">Доступно</span>;
      break;
    case "completed":
      el = <span className="status_complated">Завершено</span>;
      break;
    case "performed":
      el = <span className="status_performed">Выполняется</span>;
      break;
    case "not_available":
      el = <span className="status_not-available">Недоступно</span>;
      break;
    default:
      break;
  }
  return <div className="status">{el}</div>;
};

export default Status;