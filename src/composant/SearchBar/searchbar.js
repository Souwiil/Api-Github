import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/logo-github.png'
import { motion } from 'framer-motion';

const SearchBar = ({ onSearch }) => {
  const [searchRepos, setSearchRepos] = useState('');

  const handleChange = (event) => {
    setSearchRepos(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchRepos);
  };

  return (
    <div className='search-bar'>
      <motion.h1
      animate={{y: 50, scale: 1}} 
      initial={{scale:0}}
      transition={{ type: "tween", duration: 1}}
      >
        <img src={logo} alt=''/>
      </motion.h1>
      <form onSubmit={handleSubmit}>
        <input 
          className='search-input'
          type='text'
          value={searchRepos}
          onChange={handleChange}
          placeholder='Rechercher un repo sur GitHub'
        />
        <button className='search-btn' type='submit'>Rechercher</button>
      </form>
     
    </div>
  );
};

SearchBar.propTypes = {onSearch: PropTypes.func.isRequired,};

export default SearchBar;