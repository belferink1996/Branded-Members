import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUsers } from './actions/users';
import './style/style.css';
import BrandedLogo from './img/logo.png';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // upon startup of application, this side effect will fetch the users from database,
    // and save them to the global state in Redux
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Router>
      <div className='BRANDED-MEMBERS'>
        <header>
          <img src={BrandedLogo} alt='logo' width='250' height='45' />
        </header>
        <main>
          <Switch>
            <Route exact path='/'>
              <Login />
            </Route>
            <Route exact path='/register'>
              <Register />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
