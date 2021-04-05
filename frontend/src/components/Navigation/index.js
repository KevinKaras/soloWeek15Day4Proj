import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <div className="loginRoute">
          <NavLink  to="/login">Log In</NavLink>
        </div>
        <div className="signupRoute">
          <NavLink  to="/signup">Sign Up</NavLink>
        </div>
        <div className="createRoute">
          <NavLink to="/create">Create Listing</NavLink>
        </div>
          
      </>
    );
  }

  return (
    <div className="HEADER">
      <h1 className="titleHeader">Etsy</h1>
        <div className="navBar">
          <NavLink className="homeRoute" exact to="/">Home</NavLink>
          {isLoaded && sessionLinks}
        </div>
      </div>
  );
}

export default Navigation;