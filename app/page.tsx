'use client'

import Image from '@/app/components/HomePage/Image';
import React from 'react';
import AboutPage from '@/app/components/AboutPage/AboutPage';
import OurServices from '@/app/components/OurServices/OurSercives';
import HeaderOurServices from '@/app/components/OurServices/HeaderOurServices';
import ContactUs from './components/ContactUs/ContactUs';

const HomePage = () => {
  return (

    <div className=''>
      <Image/>
        <AboutPage/>
        <HeaderOurServices/>
        <OurServices/>
        <ContactUs/>
    </div>
  );
};

export default HomePage;
