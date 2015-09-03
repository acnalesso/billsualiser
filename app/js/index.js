import BillInfo from "./components/BillInfo.jsx";
import React from "react";


$.get('http://localhost:3000/payload', function (payload) {
  payload = JSON.parse(payload);
  React.render(<BillInfo data={payload} />, document.getElementById('content'));
});
