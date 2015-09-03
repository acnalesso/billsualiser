import React from "react";
import Overview from "./Overview.jsx";

export default class BillInfo extends React.Component {

  render () {
    return <div className="col-md-8">
      <div id="bill_info_dates">
        <h1>My Bill</h1>
        <ul>
          <li id="generated"><strong>Generated: </strong><small>{this.props.data.statement.generated}</small></li>
        </ul>
        <hr />
        <div id="bill_info">
          <div id="due">Payment due on {this.props.data.statement.due}</div>
          <h4 id="total">Total: £{this.props.data.total}</h4>
        </div>
      </div>

      <Overview data={this.props.data} />
    </div>
  };

};
