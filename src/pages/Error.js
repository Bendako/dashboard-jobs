import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';


const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='not found page' />
        <h3>Page not found</h3>
        <p>Sorry, we can't find the page you were looking for</p>
        <Link to='/'>Back home</Link>
      </div>
    </Wrapper>
  )
};


export default Error;