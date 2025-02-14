import React from 'react';
import { useRouter } from 'next/router';

const Landing = () => {
  const router = useRouter();

  const handleCreateAlbum = () => {
    router.push('/subpages/eleccion');
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-[#ECECEC] via-[#ECECEC] to-[#6096B9] p-4 relative">
      <h1 className="text-[#6096B9] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-center">
        <span className='text-[#727272] '>Atesora tus recuerdos</span> más preciados
      </h1>
      <button
        onClick={handleCreateAlbum}
        className="px-4 py-2 bg-[#6096B9] text-white rounded hover:bg-[#5a8cad] text-sm sm:text-base md:text-lg lg:text-xl"
      >
        Crear Album
      </button>
      <p className="absolute bottom-4 text-white text-center w-full text-sm sm:text-base md:text-lg lg:text-xl">
        ¿Ya tienes un código o un QR? Unirse a un álbum
      </p>
    </div>
  );
};

export default Landing;