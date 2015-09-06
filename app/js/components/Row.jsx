import React from "react";
import Th from "./Th.jsx";

export default class Row extends React.Component {
  render () {
    return <tr>
      <th></th>
      {this.props.contents.map(function (content) {
        return <Th key={Math.random()} content={content} />;
      })}
    </tr>;
  };
};
