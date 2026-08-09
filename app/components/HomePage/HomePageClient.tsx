'use client'

import Image from '@/app/components/HomePage/Image';
import React, { useEffect } from 'react';
import AboutPage from '@/app/components/AboutPage/AboutPage';
import OurServices from '@/app/components/OurServices/OurSercives';
import ContactUs from '@/app/components/ContactUs/ContactUs';

const HomePageClient = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
          });
        }
      }
    }
  }, []);

  return (
    <div className=''>
      <Image />
      <AboutPage />
      <OurServices />
      <ContactUs />
    </div>
  );
};

export default HomePageClient;
