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

  const [darkMode, setDarkMode] = useState('');

  const handleChange = (newValue) => {
    setDarkMode(newValue);
  };

  return (
    <Provider store={store}>
      <div className={darkMode}>
        <Router>
          <Fragment>
            <Navbar onChange={handleChange} />
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
          </Fragment>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
