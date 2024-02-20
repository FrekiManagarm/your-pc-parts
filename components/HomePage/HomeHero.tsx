const HomeHero = () => {
  return (
    <section className="h-screen w-screen flex flex-row justify-center items-start">
      <div className="h-screen w-1/2 flex flex-col justify-center">
        <h1 className="pl-12 max-w-[600px] from-primary to-secondary bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-5xl xl:text-6xl/none">
          The Ultimate Hardware Experience
        </h1>
        <p className="pl-12 max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
          Experience the power of your hardware like never before. Unleash
          potential.
        </p>
      </div>
      <div className="w-1/2 h-screen flex justify-center items-center">

      </div>
    </section>
  );
};

export default HomeHero;
