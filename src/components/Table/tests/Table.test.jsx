import React from "react";
import renderer from "react-test-renderer";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Table } from "..";

Enzyme.configure({ adapter: new Adapter() });

describe("Table", () => {
  const props = {
    list: [
      { title: "1", author: "1", num_comments: 1, points: 1, objectID: "y" },
      { title: "2", author: "2", num_comments: 1, points: 1, objectID: "z" },
    ],
    onDismiss: jest.fn(),
    sortKey: 'TITLE',
    onSort: jest.fn(),
    isSortReverse: false
  };
  test("should have snapshot", () => {
    const component = renderer.create(<Table {...props} />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("must shows two items in list", () => {
    const element = shallow(<Table {...props} />);
    expect(element.find(".table-row").length).toEqual(2);
  });
});
