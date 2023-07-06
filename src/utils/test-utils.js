import React from "react";
import { render } from "@testing-library/react";
import ReduxProvider from "../Components/ReduxProvider";

const AllTheProviders = ({ children }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
