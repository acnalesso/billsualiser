import React from "react";

export default class Overview extends React.Component {

  getTvTitle() {
    return this.props.package.subscriptions.map(function (subscription) {
      if (subscription.type === "tv")
        return subscription.name;
    });
  };

  getBroadbandTitle() {
    return this.props.package.subscriptions.map(function (subscription) {
      if (subscription.type === "broadband")
        return subscription.name;
    });
  };

  getTalkTitle() {
    return this.props.package.subscriptions.map(function (subscription) {
      if (subscription.type === "talk")
        return subscription.name;
    });
  };

  getTotalCostFor (type) {
    return this.props.package.subscriptions.map(function (subscription) {
      if (subscription.type === type)
        return parseFloat(Math.round(subscription.cost * 100) / 100).toFixed(2)
    });
  };

  addUpTotalCostsFor (property) {
    let total = 0;
    let items = this.props.skyStore[property];

    items.map(function (item) {
      total += item.cost;
    });
    return total;
  }

  render () {
    return <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title">Overview <small id="period">{this.props.period.from} - {this.props.period.to}</small></h3>
      </div>

      <a id="tv_title" className="list-group-item" data-toggle="collapse" data-target="#tv" href="#tv"><span className="glyphicon glyphicon-chevron-right"></span> TV - {this.getTvTitle()} <span className="badge">£ {this.getTotalCostFor('tv')}</span></a>
        <div id="tv" className="panel-collapse collapse">
          <a href="#more-tv-channels">Want to add more TV Channels?</a><br />
          <a href="#help">Help</a>
        </div>

      <a id="broadband_title" className="list-group-item" data-toggle="collapse" data-target="#broadband" href="#broadband"><span className="glyphicon glyphicon-chevron-right"></span> Broadband - {this.getBroadbandTitle()} <span className="badge">£ {this.getTotalCostFor('broadband')}</span></a>
        <div id="broadband" className="panel-collapse collapse">
          <a href="#change-bb-plan">Change broadband speed</a><br />
          <a href="#help">Help</a>
        </div>

      <a id="talk_title" className="list-group-item" data-toggle="collapse" data-target="#talk" href="#talk"><span className="glyphicon glyphicon-chevron-right"></span> Talk - {this.getTalkTitle()} <span className="badge">£ {this.getTotalCostFor('talk')} + {this.props.callCharges.total}</span></a>
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

        <a id="rentals_title" className="list-group-item" data-toggle="collapse" data-target="#rentals" href="#rentals"><span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> Rentals <span className="badge">£ {this.addUpTotalCostsFor('rentals')}</span></a>
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

        <a id="buy_and_keep_title" className="list-group-item" data-toggle="collapse" data-target="#buyAndKeep" href="#buyAndKeep"><span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> Buy & Keep <span className="badge">£ {this.addUpTotalCostsFor('buyAndKeep')}</span></a>
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
