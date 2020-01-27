import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Creators } from "../../store/ducks/tasks";

import { Container } from "./styles";

import { Circle as UncheckedIcon, CheckMark as CheckedIcon } from "../../icons";

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
              {!task.completed && <UncheckedIcon width="12" height="12" />}
              {task.completed && <CheckedIcon width="12" height="12" />}
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
                {!task.completed && <UncheckedIcon width="12" height="12" />}
                {task.completed && <CheckedIcon width="12" height="12" />}
                <p>{task.value}</p>
              </button>
            </li>
          ))}
      </Container>
    );
  }
}

export default Tasks;
