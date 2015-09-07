import React from "react";
import Row from "./Row.jsx";

export default class DisplaySimpleTable extends React.Component {
  render () {
    return <div id={this.props.id} className="panel-collapse collapse">
          <table className="table table-striped">
            <thead>
              <th></th>
              <th>Name</th>
              <th>Cost</th>
            </thead>

            <tbody>
              {this.props.rows.map(function (content) {
                return <Row key={Math.random()} contents={[content.title, content.cost]} />;
              })}
            </tbody>
          </table>
        </div>;
  };
};
