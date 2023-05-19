import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

const Navigation = () => {
  return (
    <motion.div  className='nav-container'
    animate={{y: 50}}
    > 
    <nav className='nav'>
      <ul className='nav-ul'>
        <li className='left'>
          <Link to="/">Recherche</Link>
        </li>
        <li className='right'>
          <Link to="/faq">FAQ</Link>
        </li>
      </ul>
    </nav>
    </motion.div>
  );
}

export default Navigation;