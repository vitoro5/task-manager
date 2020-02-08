import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Creators as Actions } from "./store/ducks/tasks";

import Panel from "./components/Panel";
import Tasks from "./components/Tasks";
import Button from "./components/Button";

import {
  Container,
  OuterContainer,
  PanelHeader,
  InputControl,
  Input,
  Level,
  LevelLeft,
  LevelRight
} from "./styles";

import "./global.css";

import { ReactComponent as Checklist } from "./icons/checklist.svg";
import { ReactComponent as Delete } from "./icons/delete.svg";

const STATUS = {
  FOCUSED: "focused",
  NORMAL: "normal"
};

function App() {
  const tasks = useSelector(({ tasks }) => tasks.data);
  const filter = useSelector(({ tasks }) => tasks.filter);

  const dispatch = useDispatch();

  const [task, setTask] = useState({ value: "", completed: false });
  const [className, setClassName] = useState(STATUS.NORMAL);

  const handleSubmitTask = e => {
    e.preventDefault();

    dispatch(Actions.addTask(task));
    setTask({ ...task, value: "" });
  };

  const renderTasks = () => {
    const filteredTasks = tasks.filter(task => task.completed === filter);

    if (filter === "all" && tasks.length !== 0) {
      return <Panel>{<Tasks filter={filter} />}</Panel>;
    } else if (filteredTasks.length !== 0 && tasks.length !== 0) {
      return <Panel>{<Tasks filter={filter} />}</Panel>;
    }
  };

  const setFilter = filter => {
    dispatch(Actions.setFilter(filter));
  };

  const handleFocus = () => {
    setClassName(STATUS.FOCUSED);
  };

  const handleBlur = () => {
    setClassName(STATUS.NORMAL);
  };

  const handleClickFullWidthButton = () => {
    dispatch(Actions.clearTasks());
  };

  return (
    <Container className="App">
      <OuterContainer>
        <PanelHeader>Task Manager</PanelHeader>
        <Panel>
          <InputControl onSubmit={handleSubmitTask}>
            <Input
              type="text"
              name="test"
              placeholder="Whats needs to be done?"
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={task.value}
              onChange={e => setTask({ ...task, value: e.target.value })}
            />
            <span>
              <Checklist width="22" height="22" className={className} />
            </span>
          </InputControl>
        </Panel>

        {renderTasks()}

        <Panel>
          <Level>
            <LevelLeft>
              <strong>
                {tasks.filter(task => task.completed === false).length}
              </strong>{" "}
              Items left
            </LevelLeft>
            <LevelRight>
              <Button
                onClick={() => setFilter("all")}
                active={filter === "all" && true}
              >
                All
              </Button>
              <Button
                onClick={() => setFilter(false)}
                active={filter === false && true}
              >
                Active
              </Button>
              <Button
                onClick={() => setFilter(true)}
                active={filter === true && true}
              >
                Completed
              </Button>
            </LevelRight>
          </Level>
        </Panel>
        <Panel>
          <Button
            onClick={handleClickFullWidthButton}
            color="#ff3660"
            fullwidth={true}
          >
            <Delete width="20" height="20" />
            Clear
          </Button>
        </Panel>
      </OuterContainer>
    </Container>
  );
}

export default App;
