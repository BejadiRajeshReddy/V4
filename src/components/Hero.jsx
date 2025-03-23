const Hero = () => {
  return (
    <div>
      <div className="hero flex flex-col items-center justify-center text-center gap-8 h-screen bg-gray-100/95 px-8">
        <span className="tag-label animate-bounce inline-flex bg-transparent border border-gray-400 rounded-full px-4 py-2 text-xs uppercase tracking-wider w-fit">
          WELCOME TO TECHSPIRA
        </span>
        <h1 className="text-2xl sm:text-5xl font-[Fraunces] leading-[1.2] mb-4">
          We help interns to work <br />
          their way to the stars
        </h1>
        <p className="text-md sm:text-[1.3rem]">
          Join TechSpira and launch your career in technology
        </p>
        <button className="bg-[var(--color-accent)] text-[var(--color-dark)] px-6 py-3 rounded-[var(--radius-small)] uppercase tracking-wide font-medium font-['Inter'] transition-transform duration-300 hover:scale-105 hover:bg-[#646cffb6]">
          <a href="#apply">Start Your Journey →</a>
        </button>
      </div>
    </div>
  );
};
export default Hero;
