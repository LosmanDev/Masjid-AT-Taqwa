const Live = () => {
  return (
    <section className="flex justify-center">
      <div className="shadow-[0_45px_60px_-15px_rgba(48,109,60,0.9)] card w-96 bg-base-100 ">
        <iframe
          className="px-10 pt-10"
          src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100009886118917%2Fvideos%2F202585822405733%2F&show_text=false&width=267&t=0"
          width="100%"
          height="476"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen="true"
        ></iframe>
        <div className="card-body items-center text-center">
          <h1 className="card-title text-green-800 font-medium ">
            Taraweeh Live
            <span className="loading loading-ring loading-lg text-red-600"></span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Live;
