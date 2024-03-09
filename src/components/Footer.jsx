import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()}
          <Image
            src="/assets/icons/github.svg"
            width={20}
            height={20}
            alt="github icon"
          />
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
