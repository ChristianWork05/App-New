import React from 'react';
import { useRouter } from 'next/router';

const FotosEvent = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#ECECEC] p-4 relative overflow-y-auto">
      {/* header */}
      <div className="self-stretch flex items-center justify-between w-full px-4 py-2 mb-4">
        <div className="flex items-center cursor-pointer" onClick={() => router.push('/subpages/eleccion')}>
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          <span className="ml-2 text-[#444444] font-semibold">Álbum</span>
        </div>
      </div>

      {/* Contenedor principal */}
      <div className="flex flex-col items-center justify-start w-full h-full space-y-4 overflow-y-auto px-16">
        {/* Contenedor con borde redondeado */}
        <div className="w-full rounded-xl bg-[#DFDFDF] p-4 flex flex-col items-center">
          {/* Contenedor circular con SVG */}
          <div className="w-8 h-8 bg-[#CCCCCC] rounded-full shadow-md flex items-center justify-center mb-4">
          <img src="/images/cam.svg" alt="SVG Icon" className="w-4 h-4" />
          </div>
          {/* Texto debajo del contenedor circular */}
          <span className="text-sm sm:text-base md:text-base lg:text-lg text-[#444444] font-semibold">Foto de portada</span>
        </div>

        {/* Contenedor con texto y botón */}
        <div className="w-full flex flex-col items-start mt-4">
          <span className="text-sm sm:text-base md:text-base lg:text-lg font-semibold text-gray-700 mb-2">Nombre del álbum</span>
          <button className="w-full bg-white text-[#444444] py-2 rounded-lg font-semibold hover:bg-gray-200 active:bg-gray-300 ">
          Añade un nombre
          </button>
        </div>
          
          {/* texto y botón */}
          <button onClick={() => router.push('/subpages/duracion')}
          className="absolute bottom-6 bg-[#6096B9] hover:bg-[#5989aa] rounded-md text-white text-center w-auto px-6 py-2 text-sm sm:text-base md:text-base lg:text-base">
          Continuar
      </button>
      </div>
    </div>
  );
};

export default FotosEvent;