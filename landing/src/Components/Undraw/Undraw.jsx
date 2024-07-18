import React from 'react';
import './Undraw.css';

function Undraw() {
  return (
    <section className="undraw">
      <div className="content">
        <h1>Light, Fast & Powerful</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        </p>
        <div className="icons">
          <div className='icon'>
            <img src='Icon.svg' alt='icon'/>
            <h2>Title Goes Here</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.  </p>
          </div>
          <div className='icon'>
          <img src='Icon.svg' alt='icon'/>
            <h2>Title Goes Here</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.  </p>
            </div>
        </div>
      </div>
      <div className="undraw-image">
        <img src="undraw_mobile_login_ikmv.png" alt="Undraw" />
      </div>
    </section>
  );
}

export default Undraw;
