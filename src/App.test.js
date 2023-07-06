// import { render, screen } from "@testing-library/react";
import { screen } from "@testing-library/react";
import App from "./App";
import { render } from "./utils/test-utils";

import {
  noteAdded,
  noteCompleted,
  clearCompleted,
  noteEdited,
  noteDeleted,
} from "./Features/TodoSlice";

test("renders learn react link", () => {
  render(<App />);
  // console.log(container, baseElement, asFragment);
  const linkElement = screen.getByText(/items completed/i);
  expect(linkElement).toBeInTheDocument();
});

describe("testing actions", () => {
  it("should add a new note", () => {
    expect(noteAdded("use redux")).toEqual({
      type: "todo/noteAdded",
      payload: "use redux",
    });
  });

  it("should add a edit the existing note", () => {
    expect(noteEdited({ id: 1, text: "abc", completed: true })).toEqual({
      type: "todo/noteEdited",
      payload: { id: 1, text: "abc", completed: true },
    });
  });

  it("should add a delete an existing node", () => {
    expect(noteDeleted({ id: 1 })).toEqual({
      type: "todo/noteDeleted",
      payload: { id: 1 },
    });
  });

  it("should add a complete an existing note", () => {
    expect(noteCompleted({ id: 1 })).toEqual({
      type: "todo/noteCompleted",
      payload: { id: 1 },
    });
  });

  it("should add a complete all existing notes", () => {
    expect(clearCompleted()).toEqual({
      type: "todo/clearCompleted",
    });
  });
});
