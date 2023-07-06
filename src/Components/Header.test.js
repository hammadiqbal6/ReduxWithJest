import { act, screen } from "@testing-library/react";
import Header from "./Header";
import user from "@testing-library/user-event";
import { render } from "../utils/test-utils";

describe("Header component", () => {
  test("renders header", () => {
    render(<Header />);
    expect(screen.getByPlaceholderText("Add new note")).toBeInTheDocument();
  });

  test("can add write a new todo", async () => {
    user.setup();
    render(<Header />);
    const inputElement = screen.getByPlaceholderText("Add new note");
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      await user.type(inputElement, "new todo");
      expect(inputElement).toHaveValue("new todo");
    });
  });
});
