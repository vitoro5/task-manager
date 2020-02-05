import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Creators } from "../../store/ducks/tasks";

import { Container } from "./styles";

import { ReactComponent as Unchecked } from "../../icons/circle.svg";
import { ReactComponent as Checked } from "../../icons/check-mark.svg";

function Tasks({ filter }) {
  const tasks = useSelector(({ tasks }) => tasks.data);
  const dispatch = useDispatch();

  const handleClick = task => {
    dispatch(Creators.toggleTask(task));
  };

  if (filter === "all") {
    return (
      <Container>
        {tasks.map((task, i) => (
          <li key={i}>
            <button onClick={() => handleClick(task)}>
              {!task.completed && <Unchecked width="12" height="12" />}
              {task.completed && <Checked width="12" height="12" />}
              <p>{task.value}</p>
            </button>
          </li>
        ))}
      </Container>
    );
  } else {
    return (
      <Container>
        {tasks
          .filter(task => task.completed === filter)
          .map((task, i) => (
            <li key={i}>
              <button onClick={() => handleClick(task)}>
                {!task.completed && <Unchecked width="12" height="12" />}
                {task.completed && <Checked width="12" height="12" />}
                <p>{task.value}</p>
              </button>
            </li>
          ))}
      </Container>
    );
  }
}

export default Tasks;
