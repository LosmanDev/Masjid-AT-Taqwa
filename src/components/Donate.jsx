'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Donate = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-in"
      data-aos-duration="2000"
      data-aos-id="super-duper"
      className="hero min-h-screen rounded pb-80"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1487800940032-1cf211187aea?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
      }}
    >
      {/* <div className="hero-overlay sm:bg-opacity-10 bg-opacity-10 "></div> */}
      <div className="hero-content text-center text-neutral-content">
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-id="super-duper"
          className="max-w-md"
        >
          <h1 className="mb-5 text-5xl font-bold ">
            Become a Sustainer for out beloved Masjid!
          </h1>
          <p className="mb-5 leading-8 font-medium">
            Every contribution, big or small, brings us closer to our goal. With
            your support, we can ensure remains a vibrant center of worship,
            education, and connection for generations to come. Donate today and
            be a part of something special.
          </p>
          <button className="btn btn-base-300">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Donate;
