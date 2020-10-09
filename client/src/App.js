import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// PAGES
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';

// REDUX
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';
// import Admin from './components/admin/Admin';
import AdminRoute from './components/routing/AdminRoute';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  const [darkMode, setDarkMode] = useState('dark');
  const [openNav, setOpenNav] = useState('');

  const handleOpen = (newValue) => {
    setOpenNav(newValue);
  };

  const handleChange = (newValue) => {
    setDarkMode(newValue);
  };

  return (
    <Provider store={store}>
      <div className={darkMode}>
        <Router>
          <Fragment>
            <div className="navbar-container">
              <Navbar onChange={handleChange} onEdit={handleOpen} />
              <img
                src="https://the-movie-db-io.s3.us-east-2.amazonaws.com/logo.png"
                className={`main-logo ${openNav}`}
                alt="Logo"
              />
            </div>
            <div className="main-container">
              <Route exact path="/" component={Landing} />
              <section className="container">
                {/* <Alert /> */}
                <Switch>
                  {/* <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute>
                <AdminRoute exact path="/admin" component={Admin} />
              </PrivateRoute> */}
                </Switch>
              </section>
            </div>
          </Fragment>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
