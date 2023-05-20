import React, {useEffect, useState} from 'react'
import '../../components/Home/index.css'
import Profile from '../../assets/dog.png';
import HomePage from '../../assets/homepage.png';

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faEnvelope,
  faFolderPlus
  
} from '@fortawesome/free-solid-svg-icons';
import images from '../../data/data.json'


function Home() {
  const contents = images.image;
  console.log(contents)
 
  return (
    <div className="home-container">
        <div className='home-info1'>
        <img src={Profile} alt='' className='profile-image'/>
          <div className='home-info2'>
            <h4>Mobile Design for Dating App</h4>
            <ul className='ul1'>
              <li>Lay</li>
              <li>Follow</li>
              <li className="color-change">Hire Me</li>
            </ul>
        </div>
        <div className="sub-info3">
        <button className="save-btn">save</button>
        <button className="like-btn">
        <FontAwesomeIcon icon={faHeart} className='icon'/>Like</button>
        </div>
        </div>
        <div>
        <img src={HomePage} alt='' className='homeimage'/>
        <div className="home-para-div">
          <p>Hi guys!</p>
          <p>Here's an app to find your partner in crime 😉</p>
          <p>L if you love it and share your thoughts on this one!</p>
          <p>We are open to new projects! Contact us: sethbukonen@gmail.com</p>
        </div>
        </div>

        <div className="home-info3">
          <hr/>
          <img src={Profile} alt=''/>
          <hr/>
        </div>
        
          <h2 className='header-home1'>Lay</h2>
          <p className='para-home1'>Looking to start an interesting project in May-June 👋</p>
          <button className="like-btn">
          <FontAwesomeIcon icon={faEnvelope} className='icon'/>Hire Me</button>
      
        <div className="home-info4">
        <div className="sub-info4">
          <h4>More by Lay</h4>
        
          <p className="color-change">
            View profile
          </p>
        </div>
        <div className="sub-info4-5"> 
        {
                    contents.map((content, idx) =>{
                        return (
                            <div className='image-box' key={idx}>
                                <img src={content.cover} alt="Image" className='cover-image'/>
                                <div className='content'>
                                    <p className='title'>{content.title}</p>
                                    <div className='icon-flex'>
                                    <FontAwesomeIcon icon={faFolderPlus} className='icon2'/>
                                    <FontAwesomeIcon icon={faHeart} className='icon2'/>
                                    </div>
                                    
                                    </div>
                            </div>
                        )

                    })
                }
        </div>
        
        </div>
        <div className="home-info5">
          <span>L</span>
          <span>F</span>
          <p>Like</p>
        </div>

    </div>
  )
}

export default Home