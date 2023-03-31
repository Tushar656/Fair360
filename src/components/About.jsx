import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className='about-Wrapper'>
        <div className="about-Containor">
            <div className="about-left">
                <div class="about-Upper-section" data-aos-duration="1500" data-aos="zoom-in">
                    <div className="AboWrapper">
                        <span class="About-sub-title"><span className='logon1'>FAIR </span><span className='logon2'>360</span></span>
                        <h2 class="About-title">NOT JUST ANOTHER PLATFORM</h2>
                        <p><span className='logon1'>FAIR </span><span className='logon2'>360</span>is the fastest growing platform in India Open your account today.</p>
                    </div>
                </div>
            </div>
            <div className="about-right" data-aos-duration="1500" data-aos="zoom-in">
                <img src="assets/about.png" alt="" />
            </div>
        </div>
    </div>
  )
}
