import React from "react";
import chai from "chai";
import DisplayRentals from "./../../app/js/components/DisplayRentals.jsx";

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
    renderComponent(<DisplayRentals rentals={rentals} />);
  });

  it('has an id', function () {
    expect(component.props.id).to.equal('rentals');
  });

  it('displays given rows', function () {
    expect(component.props.children.props.children[1].props.children.length).to.equal(2);
  });
});
