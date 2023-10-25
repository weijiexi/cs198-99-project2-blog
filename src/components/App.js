import React from 'react';
import { Route } from "react-router-dom";
import styled from 'styled-components';

import Header from './Header';
import BlogHeader from './BlogHeader';
import Login from './Login';

import Logout from './Logout';
import View from './View';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <AppContainer>
      <BlogHeader/>
      <Header/>
      <RouteContainer>

        <PrivateRoute exact path="/view" component={View} />
        <PrivateRoute exact path="/logout" component={Logout} />
        <Route path="/login" component={Login} /> 
        <Route exact path="/">
          <Login/>
        </Route>          
      </RouteContainer>
    </AppContainer>
  )
}

export default App;


const AppContainer = styled.div`
  height: 100%;
`
const RouteContainer = styled.div`
  display: flex;
  height: 85%;
  align-items: center;
  flex-direction: column;
`
