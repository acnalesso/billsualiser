import React from "react";
import chai from "chai";
import DisplaySimpleTable from "./../../app/js/components/DisplaySimpleTable.jsx";

const expect = chai.expect;
let component;
let shallowRenderer = React.addons.TestUtils.createRenderer();

const renderComponent = (componentToBeRendered) => {
  shallowRenderer.render(componentToBeRendered);
  component = shallowRenderer.getRenderOutput();
}

const rentals = [
  { "title": "50 Shades of Grey", "cost": 4.99 },
  { "title": "50 Shades of Grey", "cost": 4.99 }
];

describe('DisplayRentals', function () {
  before(function () {
    renderComponent(<DisplaySimpleTable id="id-here" rows={rentals} />);
  });

  it('has an id', function () {
    expect(component.props.id).to.equal('id-here');
  });

  it('displays given rows', function () {
    expect(component.props.children.props.children[1].props.children.length).to.equal(2);
  });
});
