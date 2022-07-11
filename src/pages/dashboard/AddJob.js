import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';

import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { FormRow, FormRowSelect } from '../../components';
import { handleChange, clearValues, createJob, editJob } from '../../features/job/jobSlice';


const AddJob = () => {
  const { 
    isLoading, 
    position, 
    company, 
    jobLocation, 
    jobType, 
    jobTypesOptions,
    status, 
    statusOptions, 
    isEditing,
    editJobId
  } = useSelector((store) => store.job);

  const { user } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!position || !company || !jobLocation) {
      toast.error('Please fill out all the fields')
      return;
    }
    
    if (isEditing) {
      dispatch(editJob({ jobId: editJobId, job: { position, company, jobLocation, jobType, status } }))
      return;
    }

    dispatch(createJob({ position, company, jobLocation, jobType, status }))
  };

  const handleJobInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    dispatch(handleChange({ name, value }))
  };

  useEffect(() => {
    if (!isEditing) {
      dispatch(handleChange({
        name: 'jobLocation',
        value: user.location
      }))    
    }
  }, [])

  return (
    <Wrapper>
      <form className="form">
        <h3>{ isEditing ? 'Edit Job' : 'Add Job' }</h3>
        <div className="form-center">
          {/* Position */}
          <FormRow 
            type="text" 
            name='position' 
            value={position} 
            handleChange={handleJobInput} 
          />

          {/* Company */}
          <FormRow 
            type="text" 
            name='company' 
            value={company} 
            handleChange={handleJobInput} 
          />

          {/* Job Location */}
          <FormRow 
            type="text" 
            name='jobLocation' 
            labelText='Job Location' 
            value={jobLocation} 
            handleChange={handleJobInput} 
          />

          {/* status */}
          <FormRowSelect 
            name="status" 
            value={status} 
            handleChange={handleJobInput} 
            list={statusOptions} 
          />

          {/* job type */}
          <FormRowSelect 
            name="jobType"
            labelText='job type' 
            value={jobType} 
            handleChange={handleJobInput} 
            list={jobTypesOptions} 
          />

          <div className='btn-container'>
            <button 
              type='button' 
              className='btn btn-block clear-btn' 
              onClick={() => dispatch(clearValues())}
              >
                Clear
              </button>
            <button 
              type='submit' 
              className='btn btn-block submit-btn' 
              onClick={handleSubmit}
              disabled={isLoading}
              >
                Submit
              </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
};


export default AddJob;