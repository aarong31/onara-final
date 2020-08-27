
import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';
import './main.styles.scss';

import Spinner from './components/spinner/spinner';

import Nav from './components/nav/nav';
import Nav2 from './components/nav-two/nav-two';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
//ddsssssss

const HomePage = lazy(() => import( './pages/homepage/homepage'));
const ShopPage = lazy(() => import('./pages/shop/shop.js'));
const SignIn = lazy(() => import('./pages/signin/signin'));
const SignUp = lazy(() => import('./pages/signin/sign-up'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout'));
const Contact = lazy(() => import('./pages/contact/contact'));


const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
    < Nav2 />
    < Nav />
    <Switch>
    <Suspense fallback={<Spinner />}>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/contact' component={Contact} />
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
          </Suspense>
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