import React from 'react';
import { useRouter } from 'next/router';
import ResponsiveButton from '../../components/Button';

const Recuerdos = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-[#ECECEC] via-[#ECECEC] to-[#6096B9] p-4 relative  overflow-y-auto">
      {/* header */}
      <div className="self-stretch flex items-center justify-between w-full px-4 py-2 mb-4">
        <div className="flex items-center cursor-pointer" onClick={() => router.push('/subpages/eleccion')}>
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          <span className="ml-2 text-[#444444] font-semibold">Nuevo álbum</span>
        </div>
      </div>

      {/* Contenedor principal */}
      <div className="flex flex-col items-center justify-start w-full h-full space-y-4 overflow-y-auto px-16">
        <ResponsiveButton text="Amigos" redirectTo="/subpages/fotosevent" colorStart='#F1A5ED' colorEnd='#C66DAF'/>
        <ResponsiveButton text="Pareja" redirectTo="/subpages/fotosevent" colorStart='#D342B9' colorEnd='#C5288F'/>
        <ResponsiveButton text="Familia" redirectTo="/subpages/fotosevent" colorStart='#B2A6F0' colorEnd='#B69CFF'/>
        <ResponsiveButton text="Hija/o" redirectTo="/subpages/fotosevent" colorStart='#7A49E0' colorEnd='#7226C6'/>
        <ResponsiveButton text="Mascota" redirectTo="/subpages/fotosevent" colorStart='#A9D4F4' colorEnd='#4DACDC'/>
        <ResponsiveButton text="Individual" redirectTo="/subpages/fotosevent" colorStart='#82E8F4' colorEnd='#6696AC'/>
        <ResponsiveButton text="Trabajo" redirectTo="/subpages/fotosevent" colorStart='#A7F1C0' colorEnd='#66AC90'/>
        <ResponsiveButton text="Otros" redirectTo="/subpages/fotosevent" colorStart='#F1E3BF' colorEnd='#84665C'/>
      </div>
    </div>
  );
};

export default Recuerdos;