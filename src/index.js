import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global-styles.css';
import { Home } from './templates/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ABC } from './templates/ABC'
import { AlocarPage } from './templates/AlocarPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={ABC} />
        <Route exact path="/posts/:postid" component={AlocarPage} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

