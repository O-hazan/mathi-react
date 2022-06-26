import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./component/App";
import reportWebVitals from "./reportWebVitals";
// import Stats from "./component/stats";
import Around from "./component/around";
import Carousel from "./component/carousel";
import App from "./component/App";

// ReactDOM.render(<App>,)

const element1 = <h1>hello world</h1>;
// console.log(element1);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Carousel />
  </React.StrictMode>
);

// const stats = document.getElementById("stats");
// console.log(stats);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
