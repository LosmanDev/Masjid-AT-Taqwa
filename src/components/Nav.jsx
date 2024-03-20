'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Nav = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1200"
      className="navbar bg-base-100 radius-b-2xl shadow-lg fixed top-0 w-full z-[1] rounded"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg font-normal text-neutral"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
        <Link href="/">
          <Image
            src="/assets/images/nav-logo.png"
            width={250}
            height={250}
            className="object-contain"
            alt="logo"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-2xl font-normal text-neutral">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/donate" alt="donate">
              Donate
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          className="pr-2"
          target="_blank"
          href="https://t.co/lZQcuTmccK"
          alt="whatsapp"
        >
          <Image
            src="/assets/images/whatsapp.svg"
            width={25}
            height={25}
            className="object-contain lg:w-20 lg:h-1/2"
            alt="whatsapp"
          />
        </Link>
        <Link
          className="lg:pr-20 pr-2"
          target="_blank"
          href="https://www.facebook.com/taqwamalden"
          alt="facebook"
        >
          <Image
            src="/assets/images/facebook.svg"
            width={20}
            height={20}
            className="object-contain lg:w-16 lg:h-16"
            alt="whatsapp"
          />
        </Link>
        <Link
          href="/donate"
          className="btn lg:hidden font-bold text-neutral"
          alt="donate"
        >
          Donate
        </Link>
      </div>
    </div>
  );
};

export default Nav;
