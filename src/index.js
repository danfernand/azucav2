import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { unregister } from "./registerServiceWorker";
import "scss/style.scss";

ReactDOM.render(<App />, document.getElementById("root"));
unregister();
