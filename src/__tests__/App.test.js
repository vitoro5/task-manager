import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "../App";
import reducer from "../store/ducks";
import { Creators as Actions } from "../store/ducks/tasks";

describe("<App /> unit test", () => {
  const initialState = {
    tasks: {
      data: [],
      filter: "all"
    }
  };

  const getWrapper = (mockStore = createStore(reducer, initialState)) =>
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

  it("should highlight input icon on focus", () => {
    const wrapper = getWrapper();

    expect(wrapper.find("form").find("svg")).toMatchSnapshot();
    wrapper.find("input").simulate("focus");
    expect(wrapper.find("form").find("svg")).toMatchSnapshot();
    wrapper.find("input").simulate("blur");
    expect(wrapper.find("form").find("svg")).toMatchSnapshot();
  });

  it("should highlight button when active", () => {
    const wrapper = getWrapper();

    let buttonsPanel = wrapper.find("div.fTfHBq").at(1);
    let activeButton = buttonsPanel.find({ active: true });

    expect(activeButton).toHaveStyleRule("color", "#ffffff");
    expect(activeButton).toHaveStyleRule("background", "#363636");
  });

  it("should change the filter on button click", () => {
    const mockStore = createStore(reducer, initialState);
    mockStore.dispatch = jest.fn();

    const wrapper = getWrapper(mockStore);
    let buttonsPanel = wrapper.find("div.fTfHBq").at(1);
    let allFilterSetButton = buttonsPanel.find("button").at(0);
    let aciveFilterSetButton = buttonsPanel.find("button").at(1);
    let completedFilterSetButton = buttonsPanel.find("button").at(2);

    allFilterSetButton.simulate("click");
    expect(mockStore.dispatch).toHaveBeenCalledWith(Actions.setFilter("all"));
    aciveFilterSetButton.simulate("click");
    expect(mockStore.dispatch).toHaveBeenCalledWith(Actions.setFilter(false));
    completedFilterSetButton.simulate("click");
    expect(mockStore.dispatch).toHaveBeenCalledWith(Actions.setFilter(true));
  });

  it("should clear all tasks on full width button click", () => {
    const mockStore = createStore(reducer, initialState);
    mockStore.dispatch = jest.fn();

    const wrapper = getWrapper(mockStore);

    let fullwidthButton = wrapper.find({ fullwidth: true }).first();
    fullwidthButton.simulate("click");
    expect(mockStore.dispatch).toHaveBeenCalledWith(Actions.clearTasks());
  });
});
