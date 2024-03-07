import image from '../../public/assets/images/facebook.png';
import Image from 'next/image';
const Facebook = () => {
  return (
    <section className="flex justify-center mt-10">
      <div className=" mockup-browser lg:w-1/2 mx-10 border border-base-300 shadow-[0_45px_60px_-15px_rgba(48,109,60,0.9)]">
        <div className="mockup-browser-toolbar">
          <div className="input border border-base-300">
            https://www.facebook.com/taqwamalden
          </div>
        </div>

        <div className="flex justify-center border-t border-base-300">
          <Image src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Facebook;
