import React, { useState, useEffect } from 'react'
import Logo from '../../assets/dribbble.jpg';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass
  
} from '@fortawesome/free-solid-svg-icons';
import {
  faGrid2,
  faHeart

  
} from '@fortawesome/free-regular-svg-icons';
import './index.css'
import optionsData from '../../data/data.json';

function Navbar() {
  const [selectedItem, setSelectedItem] = useState('');
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(optionsData);
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleMouseLeave = () => {
    setSelectedItem('');
  };

  const ListItem = ({ item, children }) => (
    <li
      onMouseEnter={() => handleItemClick(item)}
      onMouseLeave={handleMouseLeave}
    >
      {item}
      {selectedItem === item && (
        <div className="dropdown-content">
          
          <ul >
            {options[selectedItem].map((option) => (
              <li key={option}>{option.header}</li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
  return (
    <section className='nav-container'>
        <article className='nav-info-1'>
        <h2 className="nav-logo">dribbble</h2>
            <ul>
            <li><ListItem item="Inspiration">Inspiration</ListItem></li>
          <ListItem item="Find Work">Find Work</ListItem>
          <ListItem item="Learn Design">Learn Design</ListItem>
          <ListItem item="Go Pro">Go Pro</ListItem>
          <ListItem item="Hire Designers">Hire Designers</ListItem>     
            </ul>
        </article>
        <article className='nav-info-1'>
            <div className="input-flex">
                <input type='text' className="input-nav"/>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="glassicon" />
            </div>
            <button className="signup-btn">Sign In</button>
            <button className="signin-btn">Sign Up</button>
        </article>
    </section>
  )
}

export default Navbar