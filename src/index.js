import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Wrapper, Status } from "@googlemaps/react-wrapper";

// const render = (status: Status) => {
//   return <h1>{status}</h1>;
// };

// <Wrapper apiKey={"AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg"} render={render}>
//   {/* <YourComponent/> */}
// </Wrapper>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

