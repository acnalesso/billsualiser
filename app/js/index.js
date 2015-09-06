import BillInfo from "./components/BillInfo.jsx";
import React from "react";


$.get(window.serviceURL, function (payload) {
  React.render(<BillInfo data={payload} />, document.getElementById('content'));
});
