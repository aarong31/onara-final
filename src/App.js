
import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';
import './main.styles.scss';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop.js';
import SignIn from './pages/signin/signin';
import SignUp from './pages/signin/sign-up';
import Nav from './components/nav/nav';
import Nav2 from './components/nav-two/nav-two';
import CheckoutPage from './pages/checkout/checkout';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
//sds


const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
    < Nav2 />
    < Nav />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route exact path='/checkout' component={CheckoutPage} />
      <Route  exact
            path='/signin'
            render={() =>
              currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignIn />
              )
            }/>
      <Route  exact
            path='/signup'
            render={() =>
              currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignUp />
              )
            }/>
    </Switch>
  </div>
  );
  }


  const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
  });
  
  const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);