import React from "react";
import Logo from '../../Logo/Logo';
import classes from './Toolbar.module.scss';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => {
  return (
      <header className={classes.Toolbar}>
          <DrawerToggle clicked={props.drawerToggleClicked}/>

          <div className={classes.Logo}>
              <Logo  />
          </div>
          <nav className={classes.DesktopOnly}>
              <NavigationItems isAuthenticated={props.isAuth} />
          </nav>
      </header>
  )
};

export default toolbar;