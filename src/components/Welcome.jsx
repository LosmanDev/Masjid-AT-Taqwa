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
    <section className="mt-20">
      <div
        data-aos="fade-down"
        data-aos-duration="2000"
        data-aos-id="super-duper"
      >
        <ImagesSliderDemo />
      </div>
      <main className="mt-10">
        <div className="grid justify-center mt-10">
          <div
            data-aos="fade-in"
            data-aos-duration="2000"
            data-aos-id="super-duper"
            className="flex items-center justify-center"
          >
            <h1 className="card-title pr-2 text-4xl font-bold font-serif bg-gradient-to-r from-lime-900 to-lime-500 text-transparent bg-clip-text">
              Prayer Times
            </h1>
            <Image src={image1} width={50} height={50} alt="prayer times" />
          </div>
          <div className="text-center card w-80 bg-base-100 shadow-[0_45px_70px_-25px_rgb(48,109,60)] sm:p-8">
            <div className="card-body">
              <div
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-id="super-duper"
                className="col-span-3 sm:col-span-1 mb-5"
              >
                <div className="flex items-center justify-center">
                  <h2 className="text-2xl pr-2 flex-shrink-0 font-semibold bg-gradient-to-r from-lime-900 to-lime-500 text-transparent bg-clip-text">
                    Fajr
                  </h2>
                  <Image
                    src={image2}
                    width={30}
                    height={30}
                    alt="fajr sun rise"
                  />
                </div>
                <p className="font-semibold">
                  Adan:{' '}
                  <span className=" bg-gradient-to-r from-lime-900 to-lime-500 text-transparent bg-clip-text">
                    5:19AM
                  </span>
                </p>
                <p className="font-semibold">
                  Eqamah:{' '}
                  <span className=" bg-gradient-to-r from-lime-900 to-lime-500 text-transparent bg-clip-text">
                    5:40AM
                  </span>
                </p>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-id="super-duper"
                className="col-span-3 sm:col-span-1 mb-5"
              >
                <div className="flex items-center justify-center">
                  <h2 className="text-2xl pr-2 flex-shrink-0 font-semibold bg-gradient-to-r from-lime-900 to-lime-500 text-transparent bg-clip-text">
                    Dhuhr
                  </h2>
                  <Image src={image3} width={30} height={30} alt="dhuhr sun" />
                </div>
                <p className="font-semibold">
                  Adan:
                  <span className=" bg-gradient-to-r from-lime-900 to-lime-500 text-transparent bg-clip-text">
                    11:59PM
                  </span>
                </p>
                <p className="font-semibold">
                  Eqamah:
                  <span className=" bg-gradient-to-r from-lime-900 to-lime-500 text-transparent bg-clip-text">
                    12:20PM
                  </span>
                </p>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-id="super-duper"
                className="col-span-3 sm:col-span-1 mb-5"
              >
                <div className="flex items-center justify-center">
                  <h2 className="text-2xl pr-2 flex-shrink-0 font-semibold bg-gradient-to-r from-lime-900 to-lime-500 text-transparent bg-clip-text">
                    Asr
                  </h2>
                  <Image
                    src={image4}
                    width={30}
                    height={30}
                    alt="ar sun and clouds"
                  />
                </div>
                <p className="font-semibold">
                  Adan:{' '}
                  <span className=" bg-gradient-to-r from-lime-900 to-lime-500 text-transparent bg-clip-text">
                    2:54PM
                  </span>
                </p>
                <p className="font-semibold">
                  Eqamah:{' '}
                  <span className=" bg-gradient-to-r from-lime-900 to-lime-500 text-transparent bg-clip-text">
                    3:10PM
                  </span>
                </p>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-id="super-duper"
                className="col-span-3 sm:col-span-1 mb-5"
              >
                <div className="flex items-center justify-center">
                  <h2 className="text-2xl pr-2 flex-shrink-0 font-semibold bg-gradient-to-r from-lime-900 to-lime-500 text-transparent bg-clip-text">
                    Maghrib
                  </h2>
                  <Image
                    src={image5}
                    width={30}
                    height={30}
                    alt="maghrib sun set"
                  />
                </div>
                <p className="font-semibold">
                  Adan:{' '}
                  <span className=" bg-gradient-to-r from-lime-900 to-lime-500 text-transparent bg-clip-text">
                    5:21PM
                  </span>
                </p>
                <p className="font-semibold">
                  Eqamah:{' '}
                  <span className=" bg-gradient-to-r from-lime-900 to-lime-500 text-transparent bg-clip-text">
                    5:28PM
                  </span>
                </p>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-id="super-duper"
                className="col-span-3 sm:col-span-1 mb-5"
              >
                <div className="flex items-center justify-center">
                  <h2 className="text-2xl pr-2 flex-shrink-0 font-semibold bg-gradient-to-r from-lime-900 to-lime-500 text-transparent bg-clip-text">
                    Isha
                  </h2>
                  <Image
                    src={image6}
                    width={30}
                    height={30}
                    alt="isha crescent moon"
                  />
                </div>
                <p className="font-semibold">
                  Adan:{' '}
                  <span className=" bg-gradient-to-r from-lime-900 to-lime-500 text-transparent bg-clip-text">
                    6:39PM
                  </span>
                </p>
                <p className="font-semibold">
                  Eqamah:{' '}
                  <span className=" bg-gradient-to-r from-lime-900 to-lime-500 text-transparent bg-clip-text">
                    7:00PM
                  </span>
                </p>
              </div>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Welcome;
