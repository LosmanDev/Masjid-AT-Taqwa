import { ImagesSliderDemo } from './ui/ImagesSliderDemo';
import Image from 'next/image';
import image1 from '../../public/assets/images/clock.png';
import image2 from '../../public/assets/images/fajr.png';
import image3 from '../../public/assets/images/dhuhr.png';
import image4 from '../../public/assets/images/asr.png';
import image5 from '../../public/assets/images/maghrib.png';
import image6 from '../../public/assets/images/isha.png';

const Welcome = () => {
  return (
    <section>
      <ImagesSliderDemo />
      <main className="mt-10">
        <div className="flex items-center justify-center">
          <h1 className="pr-2 pl-10 text-4xl font-bold font-serif bg-gradient-to-r from-lime-900 to-lime-500 text-transparent bg-clip-text">
            Prayer Times
          </h1>
          <Image src={image1} width={50} height={50} alt="prayer times" />
        </div>
        <div className="text-center mt-5 grid grid-cols-3 gap-4">
          <div className="col-span-3 sm:col-span-1">
            <div className="flex items-center justify-center">
              <h2 className="pr-2 flex-shrink-0 font-semibold bg-gradient-to-r from-lime-900 to-lime-500 text-transparent bg-clip-text">
                Fajr
              </h2>
              <Image src={image2} width={30} height={30} alt="fajr sun rise" />
            </div>
            <p>Adan : 5:19AM</p>
            <p>Eqamah: 5:40AM</p>
          </div>
          <div className="col-span-3 sm:col-span-1">
            <div className="flex items-center justify-center">
              <h2 className="pr-2 flex-shrink-0 font-semibold bg-gradient-to-r from-lime-900 to-lime-500 text-transparent bg-clip-text">
                Dhuhr
              </h2>
              <Image src={image3} width={30} height={30} alt="dhuhr sun" />
            </div>
            <p>Adan : 11:59PM</p>
            <p>Eqamah:12:20PM</p>
          </div>
          <div className="col-span-3 sm:col-span-1">
            <div className="flex items-center justify-center">
              <h2 className="pr-2 flex-shrink-0 font-semibold bg-gradient-to-r from-lime-900 to-lime-500 text-transparent bg-clip-text">
                Asr
              </h2>
              <Image
                src={image4}
                width={30}
                height={30}
                alt="ar sun and clouds"
              />
            </div>
            <p>Adan : 2:54PM</p>
            <p>Eqamah: 3:10PM</p>
          </div>
          <div className="col-span-3 sm:col-span-1">
            <div className="flex items-center justify-center">
              <h2 className="pr-2 flex-shrink-0 font-semibold bg-gradient-to-r from-lime-900 to-lime-500 text-transparent bg-clip-text">
                Maghrib
              </h2>
              <Image
                src={image5}
                width={30}
                height={30}
                alt="maghrib sun set"
              />
            </div>
            <p>Adan : 5:21PM</p>
            <p>Eqamah: 5:28PM</p>
          </div>
          <div className="col-span-3 sm:col-span-1">
            <div className="flex items-center justify-center">
              <h2 className="pr-2 flex-shrink-0 font-semibold bg-gradient-to-r from-lime-900 to-lime-500 text-transparent bg-clip-text">
                Isha
              </h2>
              <Image
                src={image6}
                width={30}
                height={30}
                alt="isha crescent moon"
              />
            </div>
            <p>Adan : 6:39PM</p>
            <p>Eqamah: 7:00PM</p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Welcome;
