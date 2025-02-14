import React from 'react';
import { useRouter } from 'next/router';

const Eleccion = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-[#ECECEC] via-[#ECECEC] to-[#6096B9] p-4 relative">
      {/* Primer contenedor */}
      <div className="self-stretch flex items-center justify-between w-full px-4 py-2 mb-4">
        <div className="flex items-center cursor-pointer" onClick={() => router.push('/subpages/landing')}>
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          <span className="ml-2 text-[#444444] font-semibold ">Nuevo álbum</span>
        </div>
      </div>

      {/* Segundo contenedor */}
      <div className="flex flex-col items-center justify-center flex-grow space-y-4 w-full font-semibold">
        <button onClick={() => router.push('/subpages/recuerdos')} className="relative w-full max-w-xs h-40 bg-white rounded-xl shadow-md flex flex-col items-center justify-center hover:shadow-lg active:shadow-inner">
          <button onClick={() => router.push('/subpages/misalbum')} className="absolute top-2 right-2 w-8 h-8 bg-gray-200 text-[#6096B9] rounded-full flex items-center justify-center hover:bg-[#5686a7] hover:text-white active:bg-[#5686a7]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
            </svg>
          </button>
          <img src="/images/svgb1.svg" alt="SVG Icon" className="w-12 h-12 mb-2" />
          <span className="text-[#727272]">Crear álbum de recuerdos</span>
        </button>

        <button onClick={() => router.push('/subpages/eventos')} className="relative w-full max-w-xs h-40 bg-white rounded-xl shadow-md flex flex-col items-center justify-center hover:shadow-lg active:shadow-inner">
          <button onClick={() => router.push('/subpages/misalbum')} className="absolute top-2 right-2 w-8 h-8 bg-gray-200 text-[#6096B9] rounded-full flex items-center justify-center hover:bg-[#5686a7] hover:text-white active:bg-[#5686a7]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
            </svg>
          </button>
          <img src="/images/svgb2.svg" alt="SVG Icon" className="w-12 h-12 mb-2" />
          <span className="text-[#727272]">Crear álbum de eventos</span>
        </button>

        <button onClick={() => router.push('/subpages/album')} className="relative w-full max-w-xs h-40 bg-white rounded-xl shadow-md flex flex-col items-center justify-center hover:shadow-lg active:shadow-inner">
          <button onClick={() => router.push('/subpages/misalbum')} className="absolute top-2 right-2 w-8 h-8 bg-gray-200 text-[#6096B9] rounded-full flex items-center justify-center hover:bg-[#5686a7] hover:text-white active:bg-[#5686a7]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
            </svg>
          </button>
          <img src="/images/svgb3.svg" alt="SVG Icon" className="w-12 h-12 mb-2" />
          <span className="text-[#727272]">Unirme a un álbum</span>
        </button>
      </div>
    </div>
  );
};

export default Eleccion;