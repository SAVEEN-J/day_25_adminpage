import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
const EarningsDAta=[
  {
 
  "id": 1,
  "earn": "EARNINGS (MONTHLY)",
  "amount":"$40,000",
  "classicon":"fas fa-calendar fa-2x text-gray-300"


},
{
 
  "id": 2,
  "earn": "Earnings (Annual)",
  "amount":"$215,000",
  "classicon":"fas fa-dollar-sign fa-2x text-gray-300"


},
{
 
  "id": 3,
  "earn": "TASKS",
  
  "amount":"h5 mb-0 mr-3 font-weight-bold text-gray-800",
  "classicon":"fas fa-clipboard-list fa-2x text-gray-300"


},
{
 
  "id": 4,
  "earn": "PENDING REQUESTS",
  "amount":"18",
  "classicon":"fas fa-comments fa-2x text-gray-300"


},




]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App data={EarningsDAta} />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
