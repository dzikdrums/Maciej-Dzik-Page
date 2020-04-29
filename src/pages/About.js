// import ImageReveal from '../components/ImageReveal';
import React, { useEffect } from 'react';

import AboutMeDescription from '../components/AboutMeDescription';
import AboutOverlay from '../components/AboutOverlay';
import gsap from 'gsap';

const tl = gsap.timeline();

const About = () => {
  useEffect(() => {
    tl.to('.about-overlay', 2, {
      height: 0,
      ease: 'expo.inOut',
    })
      .to('.about-header-title', 0.7, {
        css: {
          opacity: 1,
        },
        ease: 'expo-inOut',
      })
      .to('.about-header-desc', 0.7, {
        css: {
          opacity: 1,
        },
        ease: 'Power4.easeIn',
      });
  });

  return (
    <div className="page">
      <div className="container">
        <div className="row" id="about">
          {/* <h3>This is the about page</h3> */}
          {/* <ImageReveal /> */}
          <AboutOverlay />
          <div className="about-header">
            <div className="about-header-info">
              <h3 className="about-header-title">About me</h3>
              <h2 className="about-header-desc">
                I'am a front-end developer from Kraków, currently searching for
                a job
              </h2>
            </div>
          </div>
          <AboutMeDescription />
        </div>
      </div>
    </div>
  );
};

export default About;
