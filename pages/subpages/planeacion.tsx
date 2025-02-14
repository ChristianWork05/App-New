import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Planeacion = () => {
  const router = useRouter();
  const [checkboxes, setCheckboxes] = useState(Array(7).fill(false));

  const handleCheckboxChange = (index: number) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = !newCheckboxes[index];
    setCheckboxes(newCheckboxes);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#ECECEC] p-4 relative">
      {/* header */}
      <div className="self-stretch flex items-center justify-between w-full px-4 py-2 mb-4">
        <div className="flex items-center justify-start cursor-pointer" onClick={() => router.push('/subpages/duracion')}>
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <span className="text-[#444444] font-semibold">Planeación</span>
          <span className="text-[#B5B5B5]">PASO 2/4</span>
        </div>
      </div>

      <div className='flex items-center justify-center w-full text-[#727272] text-center text-sm sm:text-base md:text-base lg:text-base font-normal'>
        Incluye los momentos clave del evento.
      </div>

      {/* Contenedor principal */}
      <div className="flex flex-col items-center justify-start w-full h-full space-y-4 overflow-y-auto px-16 mb-16">
        {['Planificación', 'Recogida novio/a', 'Actividades', 'Comida', 'Cena', 'Fiesta', 'Post-evento'].map((momento, index) => (
          <div key={index} className="flex items-center justify-between w-full p-4">
            <span className="text-gray-700">{momento}</span>
            <input
              type="checkbox"
              checked={checkboxes[index]}
              onChange={() => handleCheckboxChange(index)}
              className="form-checkbox h-6 w-6 text-[#6096B9] border-[#444444] rounded focus:ring-0"
              style={{
                borderColor: checkboxes[index] ? '#6096B9' : '#444444',
                backgroundColor: checkboxes[index] ? '#6096B9' : 'white',
              }}
            />
          </div>
        ))}

        {/* Octavo contenedor */}
        <button
          onClick={() => router.push('/subpages/alertas')}
          className="w-auto bg-[#D2D2D2] hover:bg-[#c0c0c0] rounded-lg text-white py-2 px-8 text-center"
        >
          + Añadir etapa
        </button>
      </div>

      {/* Botón continuar */}
      <button
        onClick={() => router.push('/subpages/alertas')}
        className="absolute bottom-6 bg-[#6096B9] hover:bg-[#5989aa] rounded-md text-white text-center w-auto px-6 py-2 text-sm sm:text-base md:text-base lg:text-base"
      >
        Continuar
      </button>
    </div>
  );
};

export default Planeacion;