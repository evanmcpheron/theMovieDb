import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = (props) => {
  const [checkIfChecked, setCheckIfChecked] = useState(true);
  const [modeType, setModeType] = useState('DARK');
  const [openNav, setOpenNav] = useState('');

  const hamburgerClick = () => {
    console.log('clicked');
    if (openNav === '') {
      setOpenNav('open');
      handleOpen('open');
    } else {
      setOpenNav('');
      handleOpen('');
    }
  };

  const clickCheckbox = () => {
    if (checkIfChecked === true) {
      setCheckIfChecked(false);
      setModeType('LIGHT');
      handleChange('light');
    } else {
      setCheckIfChecked(true);
      setModeType('DARK');
      handleChange('dark');
    }
  };

  const handleChange = (event) => {
    props.onChange(event);
  };

  const handleOpen = (event) => {
    props.onEdit(event);
  };

  return (
    <nav className="navbar bg-dark">
      <div className="logo-container">
        {props ? <img src="https://picsum.photos/50" class="profile-pic" /> : null}
        <h5>Testing</h5>
        <h5>Testing</h5>
        <h5>Testing</h5>
        <h5>Testing</h5>
      </div>
      <div className="right-nav">
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
        <div className={`fa-fixed ${openNav}`} onClick={() => hamburgerClick()}>
          <i className="fas fa-hamburger"></i>
        </div>

        <div className={`${openNav} nav-drawer`}>
          <div className="fa-times-button" onClick={() => hamburgerClick()}>
            <i className="fas fa-times"></i>
          </div>
          <div className="open-nav-item-container">
            <div className="search-container">
              <i class="fad fa-search"></i>
              <input type="text" placeholder="Search"></input>
              <div className="search-drawer-underline"></div>
            </div>
            <h5>Testing</h5>
            <h5>Testing</h5>
            <h5>Testing</h5>
            <h5>Testing</h5>
            <h5>Testing</h5>
          </div>
        </div>
        <div onClick={() => hamburgerClick()} className={`${openNav} nav-overlay`}></div>
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
