import React from "react";

export default class Overview extends React.Component {

  render () {
    return <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title">Overview <small className="period">{this.props.period.from} - {this.props.period.to}</small></h3>
      </div>

      <a href="#" className="list-group-item"><span className="glyphicon glyphicon-chevron-right"></span> Tv - Title</a>
      <a href="#" className="list-group-item"><span className="glyphicon glyphicon-chevron-right"></span> Broadband - Title</a>

      <a className="list-group-item" data-toggle="collapse" data-target="#talk" href="#talk"><span className="glyphicon glyphicon-chevron-right"></span> Talk - Title<span className="badge">14</span></a>

        <div id="talk" className="panel-collapse collapse">
          <table className="table">
            <thead>
              <th></th>
              <th>Calls</th>
              <th>Duration</th>
              <th>Cost</th>
            </thead>

            <tbody>
              <th></th>
              <th>07989887865</th>
              <th>10 min</th>
              <th>20.0</th>
            </tbody>
          </table>
        </div>

        <a className="list-group-item" data-toggle="collapse" data-target="#rentals" href="#rentals"><span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> Rentals</a>
        <div id="rentals" className="panel-collapse collapse">
          <table className="table">
            <thead>
              <th></th>
              <th>Title</th>
              <th>Cost</th>
            </thead>

            <tbody>
              <th></th>
              <th>Shades</th>
              <th>20.0</th>
            </tbody>
          </table>
        </div>

        <a className="list-group-item" data-toggle="collapse" data-target="#buyAndKeep" href="#buyAndKeep"><span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> Buy & Keep</a>
        <div id="buyAndKeep" className="panel-collapse collapse">
          <table className="table">
            <thead>
              <th></th>
              <th>Title</th>
              <th>Cost</th>
            </thead>

            <tbody>
              <th></th>
              <th>Shades</th>
              <th>20.0</th>
            </tbody>
          </table>
      </div>
    </div>;
  };
};
