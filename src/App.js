import './styles/App.scss';

import React, { useEffect, useState } from 'react';

import About from './pages/About';
import Approach from './pages/Approach';
import CaseStudies from './pages/CaseStudies';
import Header from './components/Header';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import { Route } from 'react-router-dom';
import Services from './pages/Services';
import gsap from 'gsap';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/case-studies', name: 'Case Studies', Component: CaseStudies },
  { path: '/approach', name: 'Approach', Component: Approach },
  { path: '/services', name: 'Services', Component: Services },
  { path: '/about-me', name: 'About me', Component: About },
];

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  // prevents flashing
  gsap.to('body', 0, { css: { visibility: 'visible' } });
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    //Grab inner height of window for mobile reasons when dealing with vh
    let vh = dimensions.height * 0.01;
    //Set css variable vh
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

  return (
    <>
      <Header />
      <div className="App">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>
      <Navigation />
    </>
  );
}

export default App;
