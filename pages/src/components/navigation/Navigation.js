import React, { Fragment, useEffect } from 'react';
import { enableCrisp } from '../crisp/Crisp';
import useBreakpoint from '../utils/useBreakpoint';

import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';


const Navigation = () => {
  useEffect(() => {
    enableCrisp();
  });

  const HandleNavigation = () => {
    return useBreakpoint() ? <MobileNavigation /> : <DesktopNavigation />;
  };

  return (
    <Fragment>
      <nav className="main-navigation">{HandleNavigation()}</nav>
    </Fragment>
  );
};

export default Navigation;
