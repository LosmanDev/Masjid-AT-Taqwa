const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200 flex justify-center">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="/assets/images/slide-1.png"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-lime-900 to-lime-600 text-transparent bg-clip-text">
            A Beacon of Faith and Education
          </h1>
          <p className="p-6 text-slate-500 font-medium leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            veritatis ut tempore quam eum, molestiae architecto pariatur
            voluptatem ducimus culpa odio, repudiandae necessitatibus dolorum
            totam quasi hic, beatae laudantium rerum. Beatae voluptatibus dolor
            aliquid quaerat, deleniti non ipsa magnam tempora.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
