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
  LevelRight
} from "./styles";

import { Checklist as ChecklistIcon, Delete as DeleteIcon } from "./icons";

import "./global.css";

import Panel from "./components/Panel";
import Tasks from "./components/Tasks";
import Button from "./components/Button";

function App() {
  const tasks = useSelector(({ tasks }) => tasks.data);
  const filter = useSelector(({ tasks }) => tasks.filter);

  const dispatch = useDispatch();

  const [checklistFill, setChecklistFill] = useState("#dbdbdb");
  const [deleteFill, setDeleteFill] = useState("#ff3660");

  const iconsColor = {
    inputIconColor: {
      FOCUSED: "#4a4a4a",
      NORMAL: "#dbdbdb"
    },
    butttonIconColor: {
      HOVERED: "#ffffff",
      NORMAL: "#ff3660"
    }
  };

  const [task, setTask] = useState({ value: "", completed: false });

  const handleSubmitTask = e => {
    e.preventDefault();

    dispatch(Actions.addTask(task));
    setTask({ ...task, value: "" });
  };

  const renderTasks = () => {
    const filteredTasks = tasks.filter(task => task.completed === filter);

    if (filter === "all" && tasks.length !== 0) {
      return <Panel content={<Tasks filter={filter} />} />;
    } else if (filteredTasks.length !== 0 && tasks.length !== 0) {
      return <Panel content={<Tasks filter={filter} />} />;
    }
  };

  const setFilter = filter => {
    dispatch(Actions.setFilter(filter));
  };

  const handleFocus = () => {
    setChecklistFill(iconsColor.inputIconColor.FOCUSED);
  };

  const handleBlur = () => {
    setChecklistFill(iconsColor.inputIconColor.NORMAL);
  };

  const handleMouseEnter = () => {
    setDeleteFill(iconsColor.butttonIconColor.HOVERED);
  };

  const handleMouseLeave = () => {
    setDeleteFill(iconsColor.butttonIconColor.NORMAL);
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
              <ChecklistIcon width="20" height="20" fill={checklistFill} />
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
            fullwidth={true}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClickFullWidthButton}
          >
            <DeleteIcon width="20" height="20" fill={deleteFill} />
            Clear
          </Button>
        </Panel>
      </OuterContainer>
    </Container>
  );
}

export default App;
