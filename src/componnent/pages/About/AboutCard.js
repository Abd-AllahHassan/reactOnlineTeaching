import React from "react";
import Heading from "../../common/Heading";
import { homeAbout } from "../../../dummydata";
import "./about.css"; 
import Awrapper from "../Home/Awrapper";

const AboutCard = () => {
  return (
    <>
      <Heading subtitle='LEARN ANYTHING' title='Benefits of Online Learning Expertise' />
      <section className='aboutBenefitsSection'>
        <div className='imageContainer'>
          <img src='./images/about.jpg' alt='About' />
        </div>
        <div className='contentContainer'>
          <div className='benefitsItems'>
            {homeAbout.map((val, index) => (
              <div key={index} className='benefitItem'>
                <div className='benefitIcon'>
                  <img src={val.cover} alt={val.title} />
                </div>
                <div className='benefitDetails'>
                  <h2>{val.title}</h2>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  );
};

export default AboutCard;
