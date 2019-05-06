import React from 'react';
import '../assets/romeo.png';

const Hero = () => (
  <section id="Hero" className="Hero">
    <header className="Hero__header">
      <svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.5 46.6" width="64.5">
        <path d="M7 46.6H0V0h64.5v46.6h-6.9V9.5H7v37.1z" fill="#e84d7a"/>
      </svg>
      <h1 className="Hero__title">UI & Front-end designer</h1>
      <p>v2.1.0 Romeo</p>
    </header>
  </section>
);

export default Hero;
