import React from "react/addons";
import chai from "chai";
import DisplayCallCharges from "./../../app/js/components/DisplayCallCharges.jsx";

const expect = chai.expect;
let component;
let shallowRenderer = React.addons.TestUtils.createRenderer();

const renderComponent = (componentToBeRendered) => {
  shallowRenderer.render(componentToBeRendered);
  component = shallowRenderer.getRenderOutput();
}

const callCharges = [
  { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
  { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
  { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 }
];

describe("DisplayCallCharges", function () {

  before(function () {
    renderComponent(<DisplayCallCharges id="id-here" callCharges={callCharges} />);
  });

  it('sets the id', function () {
    expect(component.props.id).to.equal("id-here");
  });

  it('shows the titles', function () {
    let numberOfTitles = component.props.children.props.children[0].props.children.length; expect(numberOfTitles).to.equal(4);
    expect(numberOfTitles).to.equal(4);
  });

  it('shows call charges', function () {
    let numberOfCallCharges = component.props.children.props.children[1].props.children.length;
    expect(numberOfCallCharges).to.equal(3);
  });
});
