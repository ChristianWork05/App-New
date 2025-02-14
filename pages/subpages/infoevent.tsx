import React from 'react';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Infoevent = () => {
  const router = useRouter();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '40px',
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-[#ECECEC] via-[#ECECEC] to-[#6096B9] p-4 gap-4 relative">
      {/* header */}
      <div className="self-stretch flex items-center justify-between w-full px-4 py-2 mb-4">
        <div className="flex items-center justify-start cursor-pointer" onClick={() => router.push('/subpages/alertas')}>
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </div>

        <div className="flex flex-row items-center">
          <button className='flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 lg:size-8 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
            </svg>
          </button>
          <button className='flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 lg:size-8 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
            </svg>
          </button>
        </div>
      </div>

      <div className='flex items-center justify-center w-full text-[#727272] text-center text-sm sm:text-base md:text-base lg:text-base font-normal'>
        Conéctate con tus invitados, notifica cambios y envía recordatorios fácilmente.
      </div>

      {/* Contenedor principal */}
      <div className="flex flex-col items-center justify-between w-full h-full space-y-4 overflow-y-auto px-16 mb-16">
        {/* Primer contenedor principal */}
        <div className="w-full h-1/3">
          <Slider {...settings}>
            <div className="bg-[#F6F6F6] p-4 rounded-lg shadow-md">
                <div className='flex items-center justify-center gap-2'>
                <span className='flex items-center justify-center text-[#444444] text-lg font-semibold'>
                Planificación
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-[#444444] ">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                </svg>

                </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center mb-2">
                  <img src="/images/cam.svg" alt="SVG Icon" className="w-4 h-4" />                </div>
                <span className="text-[#6096B9] ">Ver info</span>
              </div>

            </div>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <div className='flex items-center justify-center gap-2'>
                <span className='flex items-center justify-center text-[#444444] text-lg font-semibold'>
                Planificación
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-[#444444] ">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                </svg>

                </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center mb-2">
                  <img src="/images/cam.svg" alt="SVG Icon" className="w-4 h-4" />                </div>
                <span className="text-[#6096B9] ">Ver info</span>
              </div>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <div className='flex items-center justify-center gap-2'>
                <span className='flex items-center justify-center text-[#444444] text-lg font-semibold'>
                Planificación
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-[#444444] ">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                </svg>

                </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center mb-2">
                  <img src="/images/cam.svg" alt="SVG Icon" className="w-4 h-4" />                </div>
                <span className="text-[#6096B9] ">Ver info</span>
              </div>
            </div>
          </Slider>
        </div>

        <div className='flex flex-col items-center justify-center'>
        {/* Segundo contenedor principal */}
        <div className="w-full p-4 flex flex-col items-center justify-center">
          <span className="text-lg font-semibold text-gray-700">Cumpleaños Karina</span>
          <p className="text-gray-700">28 feb 2025, 12:05</p>
        </div>

        {/* Tercer contenedor principal */}
        <div className="w-full p-4 flex flex-row items-center justify-center gap-8">
          <div className="flex flex-col items-center">
            <img src="/images/info1.svg" alt="SVG Icon" className="w-10 h-10" />
            <span className="text-white">Subir</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/info2.svg" alt="SVG Icon" className="w-10 h-10" />
            <span className="text-white">Planificación</span>
          </div>
          <div className="flex flex-col items-center">
          <img src="/images/info3.svg" alt="SVG Icon" className="w-10 h-10" />
            <span className="text-white">1</span>
          </div>
        </div>
        </div>

      </div>

      {/* Botón continuar */}
      <button
        onClick={() => router.push('/subpages/landing')}
        className="absolute bottom-6 bg-[#6096B9] hover:bg-[#5989aa] rounded-md text-white text-center w-auto px-6 py-2 text-sm sm:text-base md:text-base lg:text-base"
      >
        Ver todos los álbumnes
      </button>
    </div>
  );
};

export default Infoevent;