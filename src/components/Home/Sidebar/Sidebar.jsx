import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      This is sidebar
      <div className='flex flex-col'>
        <Link to='/category/computer'>computer</Link>
        <Link to='/category/tab'>tab</Link>
        <Link to='/category/mobile'>mobile</Link>
      </div>
    </div>
  );
};

export default Sidebar;