import React from 'react';
import './Cta.css';

function Cta() {
  return (
    <section className="cta">
      
      <div className="cta-image">
        <img src="undraw_mention_6k5d.png" alt="Undraw-social" />
      </div>
      <div className="cta-content">
        <h1>Light, Fast & Powerful</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        </p>
        <div className="cta-buttons">
          <button className="btnPrimary">Purchase Now</button>
          
        </div>
      </div>
     
    </section>
  );
}

export default Cta;
