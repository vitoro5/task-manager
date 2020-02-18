import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Tasks from "../components/Tasks";
import reducer from "../store/ducks";
import { Creators as Actions } from "../store/ducks/tasks";

describe("<Tasks /> unit test", () => {
  const initialState = {
    tasks: {
      data: [
        { value: "testing1", completed: false },
        { value: "testing2", completed: false }
      ],
      filter: "all"
    }
  };

  const getWrapper = (mockStore = createStore(reducer, initialState)) =>
    mount(
      <Provider store={mockStore}>
        <Tasks />
      </Provider>
    );

  it("should renders without crashing", () => {
    getWrapper();
  });

  it("should renders when filter is setted to all", () => {
    const wrapper = getWrapper();

    expect(wrapper).toMatchSnapshot();
  });

  it("should renders when filter is not setted to all", () => {
    const newState = {
      tasks: {
        data: [{ value: "testing", completed: false }],
        filter: true
      }
    };

    const mockStore = createStore(reducer, newState);

    const wrapper = getWrapper(mockStore);
    expect(wrapper).toMatchSnapshot();
  });

  it("should toggle completed status on click", () => {
    const mockStore = createStore(reducer, initialState);
    mockStore.dispatch = jest.fn();

    const wrapper = getWrapper(mockStore);
    let button = wrapper.find("button").first();

    button.simulate("click");
    expect(mockStore.dispatch).toHaveBeenCalledWith(
      Actions.toggleTask(initialState.tasks.data[0])
    );
  });
});
