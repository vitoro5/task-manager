export const Types = {
  ADD_TASK: "tasks/ADD_TASK",
  TOGGLE_TASK: "tasks/TOGGLE_TASK",
  CLEAR_TASKS: "tasks/CLEAR_TASKS",
  SET_FILTER: "tasks/SET_FILTER"
};

const INITIAL_STATE = {
  data: [],
  filter: "all"
};

export default function tasks(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_TASK:
      return {
        ...state,
        data: [...state.data, action.task]
      };

    case Types.TOGGLE_TASK:
      const index = state.data.indexOf(action.task);

      const newTasks = state.data.map((task, i) => {
        if (i !== index) {
          return task;
        }

        const updatedTask = () => {
          return { ...task, completed: !task.completed };
        };

        return updatedTask();
      });
      return { ...state, data: newTasks };

    case Types.CLEAR_TASKS:
      return {
        ...state,
        data: []
      };

    case Types.SET_FILTER:
      return {
        ...state,
        filter: action.filter
      };

    default:
      return state;
  }
}

export const Creators = {
  addTask: task => ({
    type: Types.ADD_TASK,
    task
  }),

  toggleTask: task => ({
    type: Types.TOGGLE_TASK,
    task
  }),

  clearTasks: () => ({
    type: Types.CLEAR_TASKS
  }),

  setFilter: filter => ({
    type: Types.SET_FILTER,
    filter
  })
};
