import React from 'react';
import './home.css';


export const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className='homeh1'>WELCOME TO ACADEMIA</h1>
          <h3 className='homeh3'>Best Online Education Expertise</h3>
          <p>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="button">
            <button className="primary-btn">
              GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
            </button>
            <button>
              VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
            </button>
          </div>
        </div>
      </section>
      <div className="Hmargin"></div>
    </>
  );
};
