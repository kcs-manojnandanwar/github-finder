import React from 'react';

import PropType from 'prop-types';

const Navbar = ({icon,title}) => {

    
 
    return (
        <nav className='navbar bg-primary'>
      <h1> 
         <i className={icon}/> {title}
        </h1>
    
      </nav>
    );
  
}

Navbar.defaultProps={
  title: 'Github Find',
  icon : 'fab fa-github'

};
Navbar.propType={
  title:PropType.string.isRequired,
  icon:PropType.string.isRequired
}

export default Navbar;
