import React from 'react'
import './index.css'
import Profile from '../../assets/dog.png';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faFolderPlus,
  faShare,
  faMessage,
  faCircleInfo

  
} from '@fortawesome/free-solid-svg-icons';

function SideComponent() {
  return (
    <div className='side-container'>
        <img src={Profile} alt='' className='profile-image'/>
        <FontAwesomeIcon icon={faMessage} className='icon'/>
        <FontAwesomeIcon icon={faShare} className='icon'/>
        <FontAwesomeIcon icon={faCircleInfo} className='icon'/>
        <div className='sticky'>
        <FontAwesomeIcon icon={faFolderPlus} className='icon'/>
        <FontAwesomeIcon icon={faHeart} className='icon'/>
        </div>
    </div>
  )
}

export default SideComponent