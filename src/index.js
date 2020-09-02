import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase'

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBAzs-QImn7g8_AFSm8-4NJx5buHWBRxvM",
  authDomain: "todoapp-framermotion.firebaseapp.com",
  databaseURL: "https://todoapp-framermotion.firebaseio.com",
  projectId: "todoapp-framermotion",
  storageBucket: "todoapp-framermotion.appspot.com",
  messagingSenderId: "888896775080",
  appId: "1:888896775080:web:8a50f5798b27d94730739d"
};
firebase.initializeApp(firebaseConfig)


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
