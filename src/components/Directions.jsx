import Image from 'next/image';
import Link from 'next/link';

const Directions = () => {
  return (
    <section className="text-gray-600 body-font mt-6 lg:mt-20">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <Image
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          width={400}
          height={500}
          alt="hero"
          src="/assets/images/direction.png"
        />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2945.1380267381783!2d-71.06778892349449!3d42.42479683100855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37163870c5add%3A0xa598da5d852032f7!2sMasjid%20At-Taqwa!5e0!3m2!1sen!2sus!4v1710966382384!5m2!1sen!2sus"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 mt-4 font-medium bg-gradient-to-r from-lime-900 to-lime-500 text-transparent bg-clip-text">
            Located in The Basement. Please follow the signs.
          </h1>

          <div className="flex justify-center">
            <Link
              className="btn btn-ghost shadow-xl"
              target="_blank"
              href="https://t.co/Mxvt0wXiJX"
            >
              Open Maps
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directions;
