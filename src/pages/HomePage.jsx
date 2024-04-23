import React from "react";

import home from "../assets/home.webp";

const Convertor = () => {
  return (
    <main className="w-full h-full md:h-[90vh] flex flex-col md:flex-row items-center justify-center md:space-x-24 pb-8 md:pb-0">
      <section className="sm:min-w-[40%] h-[90vh] md:h-full flex flex-col justify-center items-center">
        <img src={home} alt="Currency convert Image" />
        <p className="text-center text-base sm:text-lg lg:text-xl">
          Effortlessly convert currencies with our intuitive tool. Instant rates
          for over 30+ currencies. Simplify your transactions today!
        </p>
      </section>

      <section
        className="flex flex-col items-center justify-center h-[90vh] md:h-full min-w-[100%] sm:min-w-[70%] md:min-w-[40%]"
        id="convertor"
      >
        <h1 className="text-4xl text-center lg:text-5xl xl:text-6xl text-primary">
          Check live rates
        </h1>
        {/* (Converter Component) */}
      </section>
    </main>
  );
};

export default Convertor;
