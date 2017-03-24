import React from 'react';
import {Router, Route, IndexRoute, Redirect} from 'dva/router';
import Home from './routes/Home';
import IndexPage from './routes/IndexPage';
import NewsDetails from './routes/NewsDetails';
import List from './routes/List'

function RouterConfig({history}) {
  return (
    <Router history={history}>

      <Redirect from="/" to="/detail" />

      <Route path="/detail" component={Home}>
        <IndexRoute component={IndexPage}/>
        <Route path="/detail/:id" component={NewsDetails}/>
      </Route>

      <Route path="/list" component={Home}>
        <IndexRoute component={List}/>
      </Route>

    </Router>
  );
}

export default RouterConfig;
