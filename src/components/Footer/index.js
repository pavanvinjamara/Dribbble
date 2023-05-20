import React from 'react'
import './index.css'
import LogoDri from '../../assets/dribble.png'

function Footer() {
  return (
    <>
    <div className='footer-container'>
        <div>
            <h1 className="footer-header">dribbble</h1>
            <p>Dribbble is the world’s leading community for creatives to share, grow, and get hired.</p>
            <div>
                
            </div>
        </div>

            <ul>
                <li><strong>For designers</strong></li>
                <li>Go Pro!</li>
                <li>Explore design work</li>
                <li>Design blog</li>
                <li>Overtime podcast</li>
                <li>Playoffs</li>
                <li>Code of conduct</li>
            </ul>
            <ul>
                <li><strong> Hire designers</strong></li>
                <li>Post a job opening</li>
                <li>Post a freelance project</li>
                <li>Search for designers</li>
                <li> <strong>Brands</strong></li>
                <li>Advertise with us</li>
                
            </ul>
            <ul>
                <li><strong>Company </strong> </li>
                <li>About</li>
                <li>Careers</li>
                <li>Support</li>
                <li>Media kit</li>
                <li>Testimonials</li>
                <li> API</li>
                <li>Terms of service</li>
                <li>Privacy policy</li>
                <li>Cookie policy</li>
              
            </ul>
            <ul>
                <li><strong>Directories</strong></li>
                <li>Design jobs</li>
                <li>Designers for hire</li>
                <li>Freelance designers for hire</li>
                <li>Tags</li>
                <li>Places</li>
                <li><strong>Design assets</strong></li>
                <li>Dribbble Marketplace</li>
                <li>Creative Market</li>
                <li>Fontspring</li>
                <li>Font Squirrel</li>
            </ul>

            <ul>
                <li><strong>Design Resources</strong></li>
                <li>Freelancing</li>
                <li>Design Hiring</li>
                <li>Design Portfolio</li>
                <li>Design Education</li>
                <li>Creative Process</li>
                <li>Design Industry Trends</li>
            </ul>
        
    </div>
    <hr/>
    <div className='sub-info8'>
        <p>© 2023 Dribbble. All rights reserved.</p>
        <div className='sub-info9'>
            <p>21,507,638 shots dribbbled
</p>
            <img src={LogoDri} alt=''/>

        </div>
    </div>
    </>
  )
}

export default Footer