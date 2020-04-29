import '../styles/components/ImageReveal.scss';

import { Power2, TimelineLite } from 'gsap';
import React, { useEffect, useRef } from 'react';

import CSSRulePlugin from 'gsap/CSSRulePlugin';
import Project from '../assets/projects.jpg';

const ImageReveal = () => {
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule('.img-container:after');

  let tl = new TimelineLite();

  useEffect(() => {
    tl.to(container, 0, { css: { visibility: 'visible' } })
      .to(imageReveal, 1.4, { width: '0%', ease: Power2.easeInOut })
      .from(image, 1.4, { scale: 1.6, ease: Power2.easeInOut, delay: -1.6 });
  });

  return (
    <section className="main-image">
      <div ref={(el) => (container = el)} className="container">
        <>
          <div className="img-container">
            <img alt="project" ref={(el) => (image = el)} src={Project} />
          </div>
        </>
      </div>
    </section>
  );
};

export default ImageReveal;
