import React from "react";
import renderer from "react-test-renderer";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Button } from "../Button";

Enzyme.configure({ adapter: new Adapter() });

describe("Button", () => {
  const props = {
    onClick: jest.fn(),
    children: "Press",
    className: "",
  };

  test("should have snapshot", () => {
    const component = renderer.create(<Button {...props} />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should call onClick when press on button", () => {
    const element = shallow(<Button {...props} />);
    const button = element.find("button");
    button.simulate("click");
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});
