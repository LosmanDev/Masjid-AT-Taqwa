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
      className="navbar bg-base-100 shadow-[0_45px_60px_-15px_rgba(48,109,60,0.9)] mb-10"
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
              <Link href="/ramadan">
                Ramadan<span className="text-red-900">'24</span>
              </Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/">Programs</Link>
            </li>
            <li>
              <Link href="/">Services</Link>
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
            <Link href="/donate" alt="donate">
              Donate
            </Link>
          </li>
          <li>
            <Link href="/ramadan">
              Ramadan<span className="text-red-900">'24</span>
            </Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/">Programs</Link>
          </li>
          <li>
            <Link href="/">Services</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
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
