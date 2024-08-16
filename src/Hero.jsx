import React from "react";

function Hero() {
  return (
    <section
      className="relative bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 py-20"
      style={{
        backgroundImage: `url('counters.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
        <h2 className="text-5xl font-extrabold text-white mb-2">
          Asesor Contable y Fiscal
        </h2>
        <h3 className="text-4xl font-bold text-white mb-4">
          Carlos Tlilayatzi Barrera
        </h3>
        <p className="text-xl text-white mb-1">
          Licenciado en Contaduría Pública
        </p>
        <p className="text-lg text-white mb-8">
          Universidad Autónoma de Tlaxcala
        </p>
        <a
          href="#services"
          className="bg-blue-900 text-white text-lg font-medium py-3 px-6 rounded-lg shadow-md hover:bg-blue-800 transition duration-300"
        >
          Ver Servicios
        </a>
      </div>
    </section>
  );
}

export default Hero;
