import React from "react";

export default class Overview extends React.Component {

  render () {
    return <a id={this.props.id} className="list-group-item" data-toggle="collapse" data-target={'#'+ this.props.target} href="#">
      <span className="glyphicon glyphicon-chevron-right"></span> {this.props.title}
      <span className="badge">£ {this.props.totalCost}</span>
    </a>;
  };

}
