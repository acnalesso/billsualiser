import React from "react";
import Row from "./Row.jsx";

export default class DisplayCallCharges extends React.Component {
  render () {
    return <div id={this.props.id} className="panel-collapse collapse">
      <div className="normalise panel-heading">
        <h3 className="panel-title">Sky Talk Subscription: £ <span>{this.props.subscriptionCost}</span></h3>
        <h3 className="panel-title">Total call charges cost: <span>{this.props.totalCallChargesCost}</span></h3>
      </div>

      <table className="table table-striped">
        <thead>
          <th></th>
          <th>Calls</th>
          <th>Duration</th>
          <th>Cost</th>
        </thead>

        <tbody>
          {this.props.callCharges.map(function (callCharge) {
            return <Row key={Math.random()} contents={[callCharge.called, callCharge.duration, callCharge.cost]} />;
          })}
        </tbody>
      </table>
    </div>
  }

};
