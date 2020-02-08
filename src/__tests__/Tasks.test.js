import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Tasks from "../components/Tasks";
import reducer from "../store/ducks";

describe("<Tasks /> unit test", () => {
  const initialState = {
    tasks: {
      data: [],
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
});
