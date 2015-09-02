import React from "react";
import Overview from "./Overview.jsx";

export default class BillInfo extends React.Component {

  render () {
    return <div className="col-md-8">
      <div className="page-header">
        <h1>My Bill</h1>
        <br />
        <ul>
          <li id="generated"><strong>Generated: </strong><small>{this.props.data.statement.generated}</small></li>
          <li id="due"><strong>Due: </strong><small>{this.props.data.statement.due}</small></li>
        </ul>
        <hr />
        <h3 id="total">Total: £{this.props.data.total}</h3>
      </div>

      <Overview package={this.props.data.package} period={this.props.data.statement.period} />
    </div>
  };

};
