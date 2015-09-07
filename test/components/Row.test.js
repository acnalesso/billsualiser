import React from "react/addons";
import chai from "chai";
import Row from "./../../app/js/components/Row.jsx";

const expect = chai.expect;
let component;
let shallowRenderer = React.addons.TestUtils.createRenderer();

const renderComponent = (componentToBeRendered) => {
  shallowRenderer.render(componentToBeRendered);
  component = shallowRenderer.getRenderOutput();
}

const contents = [
  "item-1",
  "item-2",
  "item-3",
  "item-4",
  "item-5"
];

describe('Row', function () {
  before(function () {
    renderComponent(<Row contents={contents} />);
  });

  it('has a tr as its first element', function () {
    expect(component.type).to.equal('tr');
  });

  it('displays a number of rows', function () {
    expect(component.props.children[1].length).to.equal(5);
  });

  it('generates a random key for each th', function () {
    for (let i = 0; i < contents.length; i++) {
      expect(component.props.children[1][i].key).to.match(/\d\.\d+/);
    }
  });

});
