import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Redux from 'redux'
import store from './redux/reducer/root_reducer'
import PlainTextHtml from './components/plainHtml/index';

ReactDOM.render(
  <React.StrictMode>
    <PlainTextHtml />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
