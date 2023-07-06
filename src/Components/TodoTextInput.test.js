import TodoTextInput from "./TodoTextInput";
import user from "@testing-library/user-event";
import { act, render, screen } from "../utils/test-utils";
import { Simulate } from "react-dom/test-utils";

describe("todoTextInput test cases", () => {
  test("call on save when on mode new", () => {
    user.setup();
    const handleOnSave = jest.fn();
    render(
      <TodoTextInput
        mode="editing"
        onSave={handleOnSave}
        note={{ id: 1, text: "abc" }}
      />
    );
    const inputElement = screen.getByPlaceholderText("abc");
    act(() => {
      user.type(inputElement, "new todo");
      Simulate.keyDown(inputElement, { key: "Enter", keyCode: 13, which: 13 });
      expect(handleOnSave).toHaveBeenCalledTimes(1);
    });
  });
});
