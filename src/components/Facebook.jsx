'use client';
import image from '../../public/assets/images/facebook.png';
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Facebook = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="sm:mt-24 sm:mb-24 mt-10 mb-10">
      <div
        data-aos="fade-in"
        data-aos-duration="2000"
        data-aos-id="super-duper"
        className="grid grid-rows-1 gap-4 px-3"
      >
        <h1 className="text-center text-4xl font-bold font-serif bg-gradient-to-r from-lime-900 to-lime-500 text-transparent bg-clip-text">
          Join our Facebook page for updates and more..
        </h1>
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-id="super-duper"
        className="flex justify-center mt-5"
      >
        <div className="mockup-browser lg:w-1/2 mx-10 border border-base-300 shadow-[0_45px_60px_-15px_rgba(48,109,60,0.9)]">
          <div className="mockup-browser-toolbar">
            <div className="input border border-base-300">
              https://www.facebook.com/taqwamalden
            </div>
          </div>

          <div className="flex justify-center border-t border-base-300">
            <Image src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facebook;
