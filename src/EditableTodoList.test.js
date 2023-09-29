import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import EditableTodoList from "./EditableTodoList";

describe("EditableTodoList Component", function () {
  it("renders without crashing", function () {
    render(<EditableTodoList todos={[{
      id: "1",
      title: "test",
      description: "testDescription"
    }]} />);
  });

  it("matches snapshot", function () {
    const { container } = render(<EditableTodoList todos={[{
      id: "1",
      title: "test",
      description: "testDescription"
    }]} />);
    expect(container).toMatchSnapshot();
  });

  it("Todo contains provided information", function () {
    const { container } = render(<EditableTodoList todos={[{
      id: "1",
      title: "test",
      description: "testDescription"
    }]} />);

    expect(container).toContainHTML("test");
    expect(container).toContainHTML("testDescription");
  });


});