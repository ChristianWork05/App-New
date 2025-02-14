import React from 'react';
import { useRouter } from 'next/router';

const Album = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-[#ECECEC] via-[#ECECEC] to-[#6096B9] p-4 relative">
        {/* header */}
        <div className="self-stretch flex items-center justify-between w-full px-4 py-2 mb-4">
        <div className="flex items-center cursor-pointer" onClick={() => router.push('/subpages/eleccion')}>
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          <span className="ml-2 text-[#444444] font-semibold ">Nuevo álbum</span>
        </div>
        </div>

      <div className='flex items-center justify-center w-full text-[#727272] text-center text-sm sm:text-base md:text-base lg:text-base font-normal'>
      Únete a un álbum usando un código o escaneando el código QR del álbum.
      </div>

              {/* Segundo contenedor */}
      <div className="flex flex-col items-center justify-center flex-grow space-y-4 w-full font-semibold">
        <button onClick={() => router.push('/subpages/recuerdos')} className="relative w-full max-w-xs h-40 bg-white rounded-xl shadow-md flex flex-col gap-4 items-center justify-center hover:shadow-lg active:shadow-inner">
          <button className='flex bg-[#DFDFDF] text-[#727272] rounded-xl items-center justify-center py-2 px-8'>codigo</button>
          <span className="text-[#727272]">Introduce el código del álbum</span>
        </button>

        <button onClick={() => router.push('/subpages/eventos')} className="relative w-full max-w-xs h-40 bg-white rounded-xl shadow-md flex flex-col items-center justify-center hover:shadow-lg active:shadow-inner">
          <img src="/images/svgb3.svg" alt="SVG Icon" className="w-12 h-12 mb-2" />
          <span className="text-[#727272]">Escanea el código QR</span>
        </button>
      </div>
    </div>
  );
};

export default Album;