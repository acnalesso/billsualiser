import React from "react";
import DisplayCallCharges from "./DisplayCallCharges.jsx";
import DisplaySimpleTable from "./DisplaySimpleTable.jsx";
import Anchor from "./Anchor.jsx"

export default class Overview extends React.Component {

  formatFloat (n) {
    return parseFloat(Math.round(n * 100) / 100).toFixed(2);
  }

  getTvTitle() {
    return this.props.data.package.subscriptions.map(function (subscription) {
      if (subscription.type === "tv")
        return subscription.name;
    });
  };

  getBroadbandTitle() {
    return this.props.data.package.subscriptions.map(function (subscription) {
      if (subscription.type === "broadband")
        return subscription.name;
    });
  };

  getTalkTitle() {
    return this.props.data.package.subscriptions.map(function (subscription) {
      if (subscription.type === "talk")
        return subscription.name;
    });
  };

  getTotalCostFor (type) {
    let cost = 0;
    this.props.data.package.subscriptions.map(function (subscription) {
      if (subscription.type === type)
        cost = subscription.cost;
    });
    return this.formatFloat(cost);
  };

  getTalkTotalCost () {
    let talkCost = parseFloat(this.getTotalCostFor('talk'));
    return this.formatFloat(talkCost + this.props.data.callCharges.total);
  }

  addUpTotalCostsFor (property) {
    let total = 0;
    let items = this.props.data.skyStore[property];

    items.map(function (item) {
      total += item.cost;
    });
    return total;
  }

  formatDate(date) {
    return moment(date).format('LL');
  }

  render () {
    return <div className="panel panel-info">
      <div className="panel-heading">
        <h3 className="panel-title">Packages & Charges <small id="period">{this.formatDate(this.props.data.statement.period.from)} - {this.formatDate(this.props.data.statement.period.to)}</small></h3>
      </div>

      <a id="tv_title" className="list-group-item" data-toggle="collapse" data-target="#tv" href="#tv"><span className="glyphicon glyphicon-chevron-right"></span> Sky TV {this.getTvTitle()} <span className="badge">£ {this.getTotalCostFor('tv')}</span></a>
      <div id="tv" className="panel-collapse collapse">
        <img src="./images/sky-tv.jpg" className="img" />
        <a href="#more-tv-channels">Want to add more TV Channels?</a><br />
        <a href="#help">Help</a>
      </div>

      <a id="broadband_title" className="list-group-item" data-toggle="collapse" data-target="#broadband" href="#broadband"><span className="glyphicon glyphicon-chevron-right"></span> Sky Broadband {this.getBroadbandTitle()} <span className="badge">£ {this.getTotalCostFor('broadband')}</span></a>
      <div id="broadband" className="panel-collapse collapse">
        <img src="./images/sky-broadband.jpg" className="img" />
        <a href="#change-bb-plan">Change broadband speed</a><br />
        <a href="#help">Help</a>
      </div>

      <Anchor id="talk_title"  target="talk" title={this.getTalkTitle()} totalCost={this.getTalkTotalCost()} />
      <DisplayCallCharges id="talk" subscriptionCost={this.getTotalCostFor('talk')} totalCallChargesCost={this.props.data.callCharges.total} callCharges={this.props.data.callCharges.calls} />

      <Anchor id="rentals_title"  target="rentals" title="Rentals" totalCost={this.addUpTotalCostsFor('rentals')} />
      <DisplaySimpleTable id="rentals" rows={this.props.data.skyStore.rentals} />

      <Anchor id="buy_and_keep_title"  target="buy_and_keep" title="Buy & Keep" totalCost={this.addUpTotalCostsFor('buyAndKeep')} />
      <DisplaySimpleTable id="buy_and_keep" rows={this.props.data.skyStore.buyAndKeep} />
    </div>;
  };
};
