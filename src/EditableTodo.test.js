import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import EditableTodo from "./EditableTodo";

describe("EditableTodo Component", function () {
  it("renders without crashing", function () {
    render(<EditableTodo todo={{
      id: "1",
      title: "test",
      description: "testDescription"
    }} />);
  });

  it("matches snapshot", function () {
    const { container } = render(<EditableTodo todo={{
      id: "1",
      title: "test",
      description: "testDescription"
    }} />);
    expect(container).toMatchSnapshot();
  });

  it("Todo contains provided information", function () {
    const { container } = render(<EditableTodo todo={{
      id: "1",
      title: "test",
      description: "testDescription"
    }} />);

    expect(container).toContainHTML("test");
    expect(container).toContainHTML("testDescription");
  });


});