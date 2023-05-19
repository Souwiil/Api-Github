import React from 'react';

const loadbtn = ({ onClick }) => {
  return (
    <div className="load-more">
      <button className='btn-load' onClick={onClick}>Plus de résultats</button>
    </div>
  );
};

export default loadbtn;





