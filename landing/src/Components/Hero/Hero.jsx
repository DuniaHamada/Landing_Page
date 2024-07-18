import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Introduce Your Product Quickly & Effectively</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        </p>
        <div className="hero-buttons">
          <button className="btn primary">Purchase UI Kit</button>
          <button className="btn secondary">Learn More</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="/designer_1.png" alt="Introduction" />
      </div>
    </section>
  );
}

export default Hero;
