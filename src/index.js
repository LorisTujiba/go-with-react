import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home.jsx';
import UsersMaster from './pages/UsersMaster';
import PostsMaster from './pages/PostsMaster';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';
import reducers from './reducers/index';

const store = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={store(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/posts" component={PostsMaster}/>
        <Route path="/users" component={UsersMaster}/>
        <Route path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);
