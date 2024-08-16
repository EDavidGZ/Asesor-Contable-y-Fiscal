import React from 'react';

function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-900 text-white py-10">
  <div className="container mx-auto text-center">
    <div className="mb-6">
      <img src="./ctb.jpg" alt="Contador" className="w-24 h-24 mx-auto rounded-full mb-4" />
      <p className="text-lg">Servicios de Contaduria Pública</p>
    </div>
    <div className="mb-6">
      <p>&copy; 2024 C.P. Carlos Tlilayatzi Barrera. Todos los derechos reservados.</p>
      <p>Contáctanos en <a href="mailto:Carlos_tb1704@hotmail.com" className="underline">Carlos_tb1704@hotmail.com</a></p>
    </div>
    <div className="flex justify-center items-center space-x-6">
      <div>
        <img
          src="./qr.jpg" // Aquí va la imagen del QR de WhatsApp
          alt="QR para WhatsApp"
          className="w-32 h-32 mx-auto"
        />
        <p className="text-white text-lg mt-2">
          <a href="https://wa.me/522462143884" className="underline">WhatsApp: +52 246 214 3884</a>
        </p>
      </div>
    </div>
  </div>
</footer>

  );
}

export default Footer;
