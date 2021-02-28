import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Payment from './Payment'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import {auth} from './firebase'
import { useStateValue } from './StateProvider';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Orders from './Orders';

const promise= loadStripe('pk_test_51IPXmrJi4iod4NIdx4SpkRU5O3HFttGU0eflto8sgc7rMUvaVSOERA5XzU05TaxpBU4PBFYZrVaixbPxgeQSd0nx00ooJLAVni');

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() =>{
    auth.onAuthStateChanged(authUser =>{
      console.log('the user is >>>',authUser);
      if (authUser){
          dispatch({
            type:'SET_USER',
            user:authUser,
          })
      }
      else{
        dispatch({
          type:'SET_USER',
          user:null,
        })
      }
    })
    
  }, [])

  return (
    <Router>
      <div className="app">
          <Header />

          <Switch>
            <Route path="/orders">
              <Orders/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/checkout">
              <Checkout/>
            </Route>
            <Route path="/payment">
              <Elements stripe={promise}>
                <Payment/>
              </Elements>
              
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
