const HomeHero = () => {
  return (
    <section className="h-screen w-screen flex flex-col justify-center items-center text-center lg:pb-40">
      <div className="h-screen w-screen flex flex-col justify-center items-center text-center">
        <h1 className="lg:max-w-[1000px] md:max-w-[800px] max-w-[600px] from-primary to-secondary bg-gradient-to-r bg-clip-text font-bold tracking-tighter text-transparent text-7xl lg:text-[10rem] animate-gradient">
          The Ultimate Hardware Experience
        </h1>
        <p className="max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] text-gray-500 md:text-xl dark:text-gray-400">
          Experience the power of your hardware like never before. Unleash
          potential.
        </p>
      </div>
    </section>
  );
};

export default HomeHero;
