import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Creators as Actions } from "./store/ducks/tasks";

import {
  Container,
  OuterContainer,
  PanelHeader,
  InputControl,
  Input,
  Level,
  LevelLeft,
  LevelRight,
  Button,
  ButttonFullWidth
} from "./styles";

import { Checklist as ChecklistIcon, Delete as DeleteIcon } from "./icons";

import "./global.css";

import Panel from "./components/Panel";
import Tasks from "./components/Tasks";

function App() {
  const tasks = useSelector(({ tasks }) => tasks.data);
  const dispatch = useDispatch();

  const [checklistFill, setChecklistFill] = useState("#dbdbdb");
  const [deleteFill, setDeleteFill] = useState("#ff3660");

  const [task, setTask] = useState({ value: "", completed: false });

  const [filter, setFilter] = useState("all");

  const handleSubmitTask = e => {
    e.preventDefault();

    dispatch(Actions.addTask(task));
    setTask({ ...task, value: "" });
  };

  const handleInputFocus = () => {
    setChecklistFill("#4a4a4a");
  };

  const handleInputBlur = () => {
    setChecklistFill("#dbdbdb");
  };

  const handleMouseOver = () => {
    setDeleteFill("#ffffff");
  };

  const handleMouseOut = () => {
    setDeleteFill("#ff3660");
  };

  const handleClickFullWidthButton = () => {
    dispatch(Actions.clearTasks());
  };

  const renderTasks = () => {
    const filteredTasks = tasks.filter(task => task.completed === filter);

    if (filter === "all" && tasks.length !== 0) {
      return <Panel content={<Tasks filter={filter} />} />;
    } else if (filteredTasks.length !== 0 && tasks.length !== 0) {
      return <Panel content={<Tasks filter={filter} />} />;
    }
  };

  return (
    <Container className="App">
      <OuterContainer>
        <PanelHeader>Task Manager</PanelHeader>
        <Panel
          content={
            <InputControl onSubmit={handleSubmitTask}>
              <Input
                type="text"
                name="test"
                placeholder="Whats needs to be done?"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                value={task.value}
                onChange={e => setTask({ ...task, value: e.target.value })}
              />
              <span>
                <ChecklistIcon width="20" height="20" fill={checklistFill} />
              </span>
            </InputControl>
          }
        />

        {renderTasks()}

        <Panel
          content={
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
          }
        />
        <Panel
          content={
            <ButttonFullWidth
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={handleClickFullWidthButton}
            >
              <DeleteIcon width="20" height="20" fill={deleteFill} />
              Clear
            </ButttonFullWidth>
          }
        />
      </OuterContainer>
    </Container>
  );
}

export default App;
