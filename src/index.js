import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import EQ from 'css-element-queries';


// EQ.ElementQueries.listen();
// EQ.ElementQueries.init();
ReactDOM.render(<App />, document.getElementById('root'));

setTimeout(() => {
  EQ.ElementQueries.init();
  setTimeout(() => {
    document.body.style.WebkitAnimation = 'mymove 4s 2';
  }, 1000)
}, 4000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
