import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <aside>
        <p className="flex items-center gap-2">
          Copyright © {new Date().getFullYear()} -
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://github.com/LosmanDev"
          >
            <Image
              src="/assets/icons/github.svg"
              width={20}
              height={20}
              alt="github icon"
            />
          </Link>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
