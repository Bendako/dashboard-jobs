import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const Landing = () => {
  return (
    <Wrapper>

        <div className="container page">
            {/* Info */}
            <div className="info">
                <h1>
                    Job <span>tracking</span> app
                </h1>
                <p>
                    A dashboard app that tracks searching jobs and displays information and the current status 
                </p>
                <Link to='/register' className='btn btn-hero'>Login/Register</Link>
            </div>
        </div>
    </Wrapper>
  )
};


const Wrapper = styled.main`
    nav {
        width: var(--fluid-width);
        max-width: var(max-width);
        margin: 0 auto;
        height: var(--nav-height);
        display: flex;
        align-items: center;
    }

    .page {
        min-height: calc(100vh - var(--nav-height));
        display: grid;
        align-items: center;
        /* margin-top: -3rem; */
    }
    h1 {
        font-weight: 700;
        span {
            color: var(--primary-500);
        }
    }
    p {
            color: var(--gray-600);
        }
    .main-img {
            display: none;
        }

    @media (min-width: 992px) {
        .page {
            grid-template-columns: 1fr 1fr;
            column-gap: 3rem;
        }
        .main-img {
            display: block;
        }
    }
`;

export default Landing;