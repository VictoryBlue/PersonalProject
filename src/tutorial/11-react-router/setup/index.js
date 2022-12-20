import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {
  return (
    <Router>
      {/* 如果不添加exact:/people既匹配HomePage也匹配peoplePage，页面会出现两个UI */}
      {/* 在Switch里面包含Route，只会显示匹配的第一个页面 */}
      {/* Error Page包裹在最后一个Route中，并且设置为*，可以匹配一切路径 */}
      {/* 如果不加<link>标签，那么我们只能通过在地址栏输入path来进行跳转。所以为了避免让用户输入url，我们应该提供一些按钮帮用户完成这个操作 */}
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/people">
          <People></People>
        </Route>
        <Route path="/person/:id">
          <Person />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
