import React from "react";
import Status from "../status";
import { statusType } from "../status/status";

interface ITaskCard {
  title: string;
  description: string | undefined;
  text: string;
  status: statusType;
  handleClick: () => void;
}

const TaskCard = (props: ITaskCard) => {
  let btn = <></>;
  switch (props.status) {
    case "available":
      btn = (
        <button onClick={props.handleClick} className="button green-bg">
          Приступить
        </button>
      );
      break;
    default:
      break;
  }
  return (
    <div className="task">
      <Status status={props.status} />
      <h1 className="task__title">{props.title}</h1>
      <p className="task__description">{props.description}</p>
      <div className="task__text">{props.text}</div>
      {btn}
    </div>
  );
};

export default TaskCard;