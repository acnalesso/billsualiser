import React from "react";
import Row from "./Row.jsx";

export default class DisplayRentals extends React.Component {
  render () {
    return <div id="rentals" className="panel-collapse collapse">
          <table className="table table-striped">
            <thead>
              <th></th>
              <th>Name</th>
              <th>Cost</th>
            </thead>

            <tbody>
              {this.props.rentals.map(function (rental) {
                return <Row key={Math.random()} contents={[rental.title, rental.cost]} />;
              })}
            </tbody>
          </table>
        </div>;
  };
};
