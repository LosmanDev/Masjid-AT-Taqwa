'use client';
import Link from 'next/link';
import { useEffect } from 'react';

const Facebook = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src =
      'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0&appId=1059198042044580';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    script.nonce = '9kMmw6V3';
    // Append the script to the body
    document.body.appendChild(script);
  }, []);
  return (
    <section className="grid justify-center">
      <div
        data-aos="fade-in"
        data-aos-duration="2000"
        data-aos-id="super-duper"
        data-width="100%"
        className="grid grid-cols-1 gap-4 px-3 mt-10 mb-10"
      >
        <h1 className="text-center text-4xl font-bold font-serif bg-gradient-to-r from-lime-900 to-lime-500 text-transparent bg-clip-text">
          Join our Facebook page for updates and more..
        </h1>
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-id="super-duper"
        className="flex items-center justify-center mb-10"
      >
        <div id="fb-root"></div>
        <div
          className="fb-page shadow-[0_45px_70px_-25px_rgb(48,109,60)]"
          data-href="https://www.facebook.com/taqwamalden"
          data-tabs="timeline"
          data-small-header="true"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/taqwamalden"
            className="fb-xfbml-parse-ignore"
          >
            <Link href="https://www.facebook.com/taqwamalden">
              Masjid At-Taqwa
            </Link>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Facebook;
