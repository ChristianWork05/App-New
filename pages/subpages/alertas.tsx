import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Alertas = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#ECECEC] p-4 gap-4 relative">
      {/* header */}
      <div className="self-stretch flex items-center justify-between w-full px-4 py-2 mb-4">
        <div className="flex items-center justify-start cursor-pointer" onClick={() => router.push('/subpages/planeacion')}>
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <span className="text-[#444444] font-semibold">Alertas</span>
          <span className="text-[#B5B5B5]">PASO 3/4</span>
        </div>
      </div>

      <div className='flex items-center justify-center w-full text-[#727272] text-center text-sm sm:text-base md:text-base lg:text-base font-normal'>
        Conéctate con tus invitados, notifica cambios y envía recordatorios fácilmente.
      </div>

      {/* Contenedor principal */}
      <div className="flex flex-col items-center justify-start w-full h-full space-y-4 overflow-y-auto px-16 mb-16">
        {/* Nuevo contenedor */}
        <div className="w-full bg-white p-4 rounded-lg shadow-md flex flex-col space-y-4">
          {/* Primer contenedor */}
          <div className="flex justify-end items-center space-x-2">
            <span className="text-gray-700">28 feb 2025, 12:05</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 lg:size-8 text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>

          </div>

          {/* Segundo contenedor */}
          <div className="flex flex-row gap-4 space-y-4">
            {/* Primer contenedor secundario */}
            <div className="self-stretch flex lg:w-full items-center justify-center space-x-4 bg-[#ECECEC] p-4 rounded-md">
              <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
              <img src="/images/cam.svg" alt="SVG Icon" className="w-4 h-4" />
              </div>
            </div>

            {/* Segundo contenedor secundario */}
            <div className="self-stretch flex flex-col lg:w-full space-y-2">
              <span className="text-lg font-semibold text-gray-700">¡Muchas gracias por venir!</span>
              <p className="text-gray-700">Me haría mucha ilusión que subieras todas las fotos y videos que hiciste ayer. Son recuerdos muy especiales para mi ¡Muchas gracias!</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => router.push('/subpages/alertas')}
          className="w-auto bg-white hover:bg-[#cacaca] rounded-lg text-[#6096B9] py-2 px-8 text-center"
        >
          + Añadir alerta
        </button>
      </div>

      {/* Botón continuar */}
      <button
        onClick={() => router.push('/subpages/infoevent')}
        className="absolute bottom-6 bg-[#6096B9] hover:bg-[#5989aa] rounded-md text-white text-center w-auto px-6 py-2 text-sm sm:text-base md:text-base lg:text-base"
      >
        Continuar
      </button>
    </div>
  );
};

export default Alertas;