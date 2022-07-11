import React from 'react';
import { useSelector } from 'react-redux';

import NavLinks from './NavLinks';
import Wrapper from '../assets/wrappers/BigSidebar';


const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);

  return (
    <Wrapper>
      <div className={isSidebarOpen ? 'sidebar-container' : 'sidebar-container show-sidebar'}>
        <div className='content'>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
};


export default BigSidebar;