import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import Wrapper from '../../assets/wrappers/DashboardFormPage';
import FormRow  from '../../components/FormRow';
import { updateUser } from '../../features/user/userSlice';


const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  
  const [userData, setUserData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    lastName: user?.lastName || '',
    location: user?.location || ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, lastName, location } = userData;

    if (!name || !email || !lastName || !location) {
      toast.error('Please fill out all the fields')
      return;
    }
    dispatch(updateUser(userData))
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Profile</h3>
        <div className="form-center">
          <FormRow 
            type="text" 
            name='name' 
            value={userData.name} 
            handleChange={handleChange}
          />
          <FormRow 
            type="text" 
            labelText='last name' 
            name='lastName' 
            value={userData.lastName} 
            handleChange={handleChange}
          />
          <FormRow 
            type="email" 
            name='email' 
            value={userData.email} 
            onChange={handleChange}
          />
          <FormRow 
            type="text" 
            name='location' 
            value={userData.location} 
            handleChange={handleChange}
          />
          <button 
            type="submit" 
            className="btn btn-block" 
            disabled={isLoading}>
              { isLoading ? 'Please wait...' : 'Save Changes' }
            </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default Profile