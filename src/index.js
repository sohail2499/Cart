import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAcg7YTKrE9tHnYg1MHJFnxYdc3bParDPw",
  authDomain: "cart-8e79d.firebaseapp.com",
  databaseURL: "https://cart-8e79d.firebaseio.com",
  projectId: "cart-8e79d",
  storageBucket: "cart-8e79d.appspot.com",
  messagingSenderId: "602653327681",
  appId: "1:602653327681:web:a98e26592e84b2f4a0e1c0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
