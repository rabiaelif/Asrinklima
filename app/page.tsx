// pages/index.js
'use client'

import Image from '@/src/components/HomePage/Image';
import React from 'react';
import AboutPage from '@/src/components/AboutPage/AboutPage';

const HomePage = () => {
  return (

    <div className=''>
      <Image/>
        <AboutPage/>
    </div>
  );
};

export default HomePage;
