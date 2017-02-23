import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import App from './routes/App';
import NewsDetails from './routes/NewsDetails'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/detail/:id" component={NewsDetails} />
      <Route path="/count" component={App} />
    </Router>
  );
}

export default RouterConfig;
