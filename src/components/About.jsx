import Image from 'next/image';

const About = () => {
  return (
    <section className="sm:mt-40 mt-32">
      <div
        data-aos="fade-in"
        data-aos-duration="2000"
        data-aos-id="super-duper"
        className="grid grid-cols-1 gap-4 text-center"
      >
        <h1 className="mt-10 mb-2 text-4xl font-bold bg-gradient-to-r from-lime-900 to-lime-500 text-transparent bg-clip-text ">
          At-Taqwa Masjid
        </h1>
        <h2 className="mb-5 text-2xl font-bold bg-gradient-to-r from-lime-900 to-lime-500 text-transparent bg-clip-text">
          A Beacon of Faith and Education
        </h2>
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/8-eV2hM6n3o?autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-id="super-duper"
          className="grid grid-col-1 gap-4 justify-items-center mb-10 "
        >
          <Image src="/assets/images/moon.png" width={50} height={50} />
          <h1 className="text-2xl font-medium bg-gradient-to-r from-lime-900 to-lime-500 text-transparent bg-clip-text">
            Our Mission
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut esse
            earum animi quasi necessitatibus voluptas.
          </p>
          <Image src="/assets/images/quran.png" width={50} height={50} />
          <h1 className="text-2xl font-medium bg-gradient-to-r from-lime-900 to-lime-500 text-transparent bg-clip-text">
            Our Vision
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut esse
            earum animi quasi necessitatibus voluptas.
          </p>
          <Image src="/assets/images/sujud.png" width={50} height={50} />
          <h1 className="text-2xl font-medium bg-gradient-to-r from-lime-900 to-lime-500 text-transparent bg-clip-text">
            Our Values
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut esse
            earum animi quasi necessitatibus voluptas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
