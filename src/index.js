import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB6UMOUv38qt1Xhe47nFrOgVOzXnTWlpwg",
  authDomain: "wearboxarg.firebaseapp.com",
  projectId: "wearboxarg",
  storageBucket: "wearboxarg.appspot.com",
  messagingSenderId: "528576171101",
  appId: "1:528576171101:web:699f5e21cbfeef837011b4"
};
initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
