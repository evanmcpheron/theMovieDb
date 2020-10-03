import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
// import moment from 'moment';

const Navbar = (props) => {
  const [checkIfChecked, setCheckIfChecked] = useState(true);
  const [modeType, setModeType] = useState('LIGHT');

  const clickCheckbox = () => {
    // console.log(checkIfChecked);
    if (checkIfChecked === true) {
      setCheckIfChecked(false);
      setModeType('DARK');
      handleChange('dark');
    } else {
      setCheckIfChecked(true);
      setModeType('LIGHT');
      handleChange('light');
    }
  };

  const handleChange = (event) => {
    // Here, we invoke the callback with the new value
    props.onChange(event);
  };

  return (
    <nav className="navbar bg-dark">
      <div className="logo-container">
        {/* <img src="https://the-movie-db-io.s3.us-east-2.amazonaws.com/logo.png" alt="Logo" /> */}
        <h3>theMovieDb.io</h3>
      </div>
      <div class="dark-mode-toggle">
        <h5>
          <span id="dark-mode-mode">{modeType}</span> MODE
        </h5>
        <label id="dark-mode-label">
          <input
            type="checkbox"
            id="dark-mode-switch"
            class="ios-switch green bigswitch"
            checked={checkIfChecked}
            onClick={() => clickCheckbox()}
          />
          <div>
            <div id="button-center">
              <i class="fas fa fa-adjust"></i>
            </div>
          </div>
        </label>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
