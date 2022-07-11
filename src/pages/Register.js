import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { loginUser } from '../features/user/userSlice';
import { registerUser } from '../features/user/userSlice';


const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true
};

const Register = () => {
  const [values, setValues] = useState(initialState)

  const { user, isLoading } = useSelector(store => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    setValues({...values, [name]: value})
  };
  
  const onSubmit = (event) => {
    event.preventDefault();
    const { name, email,password, isMember } = values;

    if (!email || !password || (!isMember && !name)) {
      toast.error('Please fill all the fields')
      return
    }

    if (isMember) {
      dispatch(loginUser({ email, password}))
      return
    }

    dispatch(registerUser({ name, email, password }))
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 2000)
    }
  }, [user]);

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <h3>{ values.isMember ? 'Login' : 'Register'}</h3>

        { !values.isMember && <FormRow 
          type='text' 
          name='name' 
          value={values.name} 
          handleChange={handleChange}
        /> }
        
        {/* email field */}
        <FormRow 
          type='email' 
          name='email' 
          value={values.email} 
          handleChange={handleChange}
        />

        {/* password field */}
        <FormRow 
          type='password' 
          name='password' 
          value={values.password} 
          handleChange={handleChange}
        />
        <button 
          type='submit' 
          disabled={isLoading}
          className='btn btn-block btn-hipster'>
            { isLoading ? 'Loading...' : 'submit'}
          </button>

        <button 
          type='button' 
          disabled={isLoading}
          onClick={() => dispatch(loginUser({ email: 'ben@gmail.com', password: '123456'}))}
          className='btn btn-block'>
            { isLoading ? 'Loading...' : 'Join as Me'}
          </button>
        <p>
          { values.isMember ? 'Not a member yet?' : 'Already a member?' }

          <button 
          className='member-btn' 
          type='button' 
          onClick={toggleMember}
          >
            { values.isMember ? 'Register' : 'Login'}
        </button>
        </p>
        
      </form>
    </Wrapper>
  )
};


export default Register;