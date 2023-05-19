import React from 'react';
import PropTypes from 'prop-types';
import {motion} from 'framer-motion'

const Message = ({ count }) => {
  return (
    <motion.div className='message'
    animate={{y:20}}
    transition={{
      type: "spring",
      stiffness:500
    }}
    >
      <p>La recherche a donné {count} résultat(s)</p>
    </motion.div>
  );
};

Message.propTypes = {count: PropTypes.number.isRequired,};

export default Message;