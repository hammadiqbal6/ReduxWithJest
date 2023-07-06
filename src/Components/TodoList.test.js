import { screen } from "@testing-library/react";
import TodoList from "./TodoList";
import { render } from "../utils/test-utils";

describe("TodoList component test", () => {
  test("component is rendered", () => {
    render(<TodoList />);
    const listElement = screen.getByTestId("todoList-element");
    expect(listElement).toBeInTheDocument();
  });
});
