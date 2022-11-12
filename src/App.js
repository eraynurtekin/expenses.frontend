import HomePage from './components/HomePage';
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route,Switch,Redirect } from 'react-router-dom';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import StatisticsPages from './components/StatisticsPages';
import { useDispatch, useSelector } from 'react-redux';
import { userAuthenticated } from './app/authenticationSlice';

const App = () => {
  const {isLoggedIn} = useSelector(state => state.authenticationSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if(token !== null && token !== undefined){
      dispatch(userAuthenticated({token}));
    }
  },[]);
  return <BrowserRouter>
  <Navbar />
  <Switch>
  <Route exact path='/' render= {() => (isLoggedIn ? <HomePage /> : <SignInPage />)} />
  <Route path='/signup' render= {() => (isLoggedIn ? <Redirect to='/' /> : <SignUpPage />)} />
  <Route path='/signin' render= {() => (isLoggedIn ? <Redirect to='/' /> : <SignInPage />)} />
  <Route path='/statistics' render= {() => (isLoggedIn ? <StatisticsPages /> : <SignInPage />)} />
  <Route components={() => <h2>Page not Found!</h2>} />
  </Switch>
  </BrowserRouter>
}

export default App;
