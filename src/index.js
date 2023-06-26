import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

let  EarningsDAta=[
  
  {
    id:1,
    text: "Earnings (Monthly)",
    amount: "$40,000",
    textcolor: "primary",
    icon: "fa-calendar",
    progressbar: false
  },
  {
    id:2,
    text: "Earnings (Annual)",
    amount: "$215,000",
    textcolor: "success",
    icon: "fa-dollar-sign",
    progressbar: false
  },
  {
    id:3,
    text: "Tasks",
    amount: "50%",
    textcolor: "info",
    icon: "fa-clipboard-list",
    progressbar: true
  },
  {
    id:4,
    text: "Pending Requests",
    amount: "18",
    textcolor: "warning",
    icon: "fa-comments",
    progressbar: false
  },
];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App EarningsDAta={EarningsDAta} />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
