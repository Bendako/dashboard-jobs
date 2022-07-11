import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FormRow, FormRowSelect } from '.';
import Wrapper from '../assets/wrappers/SearchContainer';
import { handleChange, clearValues } from '../features/allJobs/allJobsSlice';
const SearchContainer = () => {
  const { 
    isLoading, 
    search, 
    searchStatus, 
    searchType, 
    sort, 
    sortOptions 
  } = useSelector((store) => store.allJobs)

  const { 
    jobTypesOptions,
    statusOptions  
  } = useSelector((store) => store.job)

  const dispatch = useDispatch();

  const handleSearch = (event) => {
    if (isLoading) return;
    dispatch(handleChange({ name: event.target.name, value: event.target.value }))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(clearValues())
  };

  return (
    <Wrapper>
      <form className="form">
        <h4>Search Form</h4>
        <div className="form-center">

          {/* Search Position */}
          <FormRow 
            type='text' 
            name='search' 
            value={search} 
            handleChange={handleSearch} 
          />

        {/* Search By Status */}
        <FormRowSelect 
          labelText='status' 
          name='searchStatus' 
          value={searchStatus} 
          handleChange={handleSearch} 
          list={['all', ...statusOptions]}
        />

        {/* Search By Type */}
        <FormRowSelect 
          labelText='type' 
          name='searchType' 
          value={searchType} 
          handleChange={handleSearch} 
          list={['all', ...jobTypesOptions]}
        />

        {/* Sort */}
        <FormRowSelect 
          name='sort' 
          value={sort} 
          handleChange={handleSearch} 
          list={sortOptions}
        />

        <button 
          className='btn btn-block btn-danger' 
          disabled={isLoading} 
          onClick={handleSubmit}
        >
          Clear Filters
        </button>
        </div>
      </form>
    </Wrapper>
  )
};


export default SearchContainer;