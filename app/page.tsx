// pages/index.js
'use client'

import Image from '@/src/components/HomePage/Image';
import React from 'react';
import AboutPage from '@/src/components/AboutPage/AboutPage';
import OurServices from '@/src/components/OurServices/OurSercives';
import HeaderOurServices from '@/src/components/OurServices/ProgressBar';

const HomePage = () => {
  return (

    <div className=''>
      <Image/>
        <AboutPage/>
        <HeaderOurServices/>
        <OurServices/>
    </div>
  );
};

export default HomePage;
