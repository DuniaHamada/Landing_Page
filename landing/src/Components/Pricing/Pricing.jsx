import React from 'react';
import './Pricing.css';

function Pricing() {
  return (
    <section className="pricing">
      <div className="pricing-content">
        <h2>A Price To Suit Everyone</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. 
          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <div className="pricing-price">
          <h1>$40</h1>
          <p>UI Design Kit</p>
        </div>
        <div className='pricingPrice'>
        <p>See, One price. Simple.</p>
        <button className="btnPrimary_1">Purchase Now</button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
