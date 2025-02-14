import React from 'react';
import { useRouter } from 'next/router';

const MisAlbum = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-[#ECECEC] via-[#ECECEC] to-[#6096B9] p-4 gap-4 relative">
      {/* header */}
      <div className="self-stretch flex items-center justify-between w-full px-4 py-2 mb-4">
        <div className="flex items-center justify-start rounded-full bg-[#D9D9D9] p-2 cursor-pointer" onClick={() => router.push('/subpages/usucalendario')}>
          <img src="/images/info3.svg" alt="SVG Icon" className="w-6 h-6" />
        </div>
        <span className='flex items-center text-[#444444] text-sm sm:text-base md:text-lg lg:text-xl'>Mis álbumnes</span>
        <button onClick={() => router.push('/subpages/eleccion')} className="flex items-center justify-center w-8 h-8 bg-gray-200 text-[#6096B9] rounded-full hover:bg-gray-300 active:bg-gray-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
          </svg>
        </button>
      </div>

      {/* Contenedor principal */}
      <div className="flex flex-col items-center justify-between w-full h-full space-y-4 overflow-y-auto px-4 sm:px-8 md:px-16 lg:px-24 mb-16">
        
        {/* Nuevo contenedor */}
        <div className="w-full bg-white rounded-lg shadow-md flex flex-col space-y-4 p-4">
          {/* Primer contenedor principal */}
          <div className="flex flex-col min-w-full h-full rounded-lg bg-[#F6F6F6] p-4 space-y-4">
            {/* Primer sub contenedor */}
            <div className="flex flex-col space-y-2">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700">Nombre del álbum</span>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">Evento activo</p>
            </div>
            {/* Segundo sub contenedor */}
            <div className='flex w-full items-center justify-center'>
              <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                <img src="/images/cam.svg" alt="SVG Icon" className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Segundo contenedor principal */}
          <div className="flex h-1/3 justify-around py-2">
            {/* Primer contenedor */}
            <div className="flex flex-col items-center">
              <img src="/images/mensaje.svg" alt="SVG Icon" className="w-8 h-8" />
              <span className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">Chat</span>
            </div>
            {/* Segundo contenedor */}
            <div className="flex flex-col items-center">
              <img src="/images/masg.svg" alt="SVG Icon" className="w-8 h-8" />
              <span className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">Subir</span>
            </div>
            {/* Tercer contenedor */}
            <div className="flex flex-col items-center">
              <img src="/images/list.svg" alt="SVG Icon" className="w-8 h-8" />
              <span className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">Planificación</span>
            </div>
          </div>
        </div>
        {/* Nuevo contenedor 2 */}
        <div className="w-full bg-white rounded-lg shadow-md flex flex-col space-y-4 p-4">
          {/* Primer contenedor principal */}
          <div className="flex flex-col min-w-full h-full rounded-lg bg-[#F6F6F6] p-4 space-y-4">
            {/* Primer sub contenedor */}
            <div className="flex flex-col space-y-2">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700">Nombre del álbum</span>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">Evento activo</p>
            </div>
            {/* Segundo sub contenedor */}
            <div className='flex w-full items-center justify-center'>
              <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                <img src="/images/cam.svg" alt="SVG Icon" className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Segundo contenedor principal */}
          <div className="flex h-1/3 justify-around py-2">
            {/* Primer contenedor */}
            <div className="flex flex-col items-center">
              <img src="/images/mensaje.svg" alt="SVG Icon" className="w-8 h-8" />
              <span className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">Chat</span>
            </div>
            {/* Segundo contenedor */}
            <div className="flex flex-col items-center">
              <img src="/images/masg.svg" alt="SVG Icon" className="w-8 h-8" />
              <span className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">Subir</span>
            </div>
            {/* Tercer contenedor */}
            <div className="flex flex-col items-center">
              <img src="/images/list.svg" alt="SVG Icon" className="w-8 h-8" />
              <span className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">Planificación</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MisAlbum;