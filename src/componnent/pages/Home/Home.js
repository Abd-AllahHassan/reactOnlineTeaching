import React from 'react'
import {Hero} from './hero';
import AboutCard from '../About/AboutCard';
import HAbout from './HAbout';
import Testimonal from '../AllCourses/testominal/Testimonal';
import Hprice from './Hprice';
export const Home = () => {
  return (
    <>
    <Hero/>
    <AboutCard/>
    <HAbout/>
    <Testimonal/>
    <Hprice/>
    </>
  )
}
