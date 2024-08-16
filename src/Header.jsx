import React from 'react';

function Header() {
  return (
    <header className="text-white p-4"
      style={{
        backgroundImage: 'linear-gradient(to right, #000000, #16040d, #20091a, #260e28, #27133a, #231441, #1d1649, #101851, #0c134e, #090f4c, #060949, #050246)'
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo en lugar de C T B */}
        <img src="./ctb.jpg" alt="Logo" className="w-13 h-12 rounded-full" />

        <nav>
          <ul className="flex space-x-6">
            <li><a href="#services" className="hover:underline">Servicios</a></li>
            <li><a href="#contact" className="hover:underline">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
