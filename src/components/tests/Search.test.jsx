import React from "react";
import renderer from "react-test-renderer";

import { Search } from "../Search";

describe("Search", () => {
  const props = {
    value: "",
    children: "",
    onSubmit: jest.fn(),
    onChange: jest.fn(),
  };
  test("should have snapshot", () => {
    const component = renderer.create(<Search {...props} />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
