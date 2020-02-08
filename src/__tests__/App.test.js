import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "../App";
import reducer from "../store/ducks";

describe("<App /> unit test", () => {
  const initialState = {
    tasks: {
      data: [],
      filter: "all"
    }
  };

  const mockStore = createStore(reducer, initialState);

  const getWrapper = () =>
    mount(
      <Provider store={mockStore}>
        <App />
      </Provider>
    );

  it("should renders without crashing", () => {
    getWrapper();
  });

  it("should renders tasks on submit input", () => {
    const wrapper = getWrapper();

    expect(wrapper.exists("ul")).toBeFalsy();
    wrapper.find("input").simulate("change", { target: { value: "testing" } });
    expect(wrapper.find("input").props().value).toEqual("testing");
    wrapper.find("form").simulate("submit");
    expect(wrapper.exists("ul")).toBeTruthy();
  });

  it("should highlight the input icon on focus", () => {
    const wrapper = getWrapper();

    let input = wrapper.find("input");
    expect(input).toMatchSnapshot();
  });
});
