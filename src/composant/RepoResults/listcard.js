import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion'


const listcard = ({ repos }) => {
  return (
    <motion.div className='repos-results'
    animate={{y: 40}}
    transition={{
      type:'spring',
      stiffness:400
    }}
    >
      {repos.map((repo) => (
        <div key={repo.id} className='repo-card'>
          <img src={repo.owner.avatar_url} alt='' />
          <h3>{repo.name}</h3>
          <div className='repo-card-content'>
            <p>{repo.description}</p>
          </div>
          <p>Language: {repo.language}</p>
          <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
            View on GitHub
          </a>
        </div>
      ))}
    </motion.div>
  );
};


listcard.propTypes = {repos: PropTypes.array.isRequired,};

export default listcard;