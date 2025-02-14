import React, { useState } from 'react';
import { useRouter } from 'next/router';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Duracion = () => {
  const router = useRouter();
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [country, setCountry] = useState('');
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(event.target.value);
  };

  const handleSwitchChange = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#ECECEC] p-4 relative overflow-y-auto">
      {/* header */}
      <div className="self-stretch flex items-center justify-between w-full px-4 py-2 mb-4">
        <div className="flex items-center justify-start cursor-pointer" onClick={() => router.push('/subpages/fotosevent')}>
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <span className="text-[#444444] font-semibold">Duración</span>
          <span className="text-[#B5B5B5]">PASO 1/4</span>
        </div>
      </div>

      {/* Contenedor principal */}
      <div className="flex flex-col items-center justify-start w-full h-full space-y-4 overflow-y-auto px-16">
        {/* Primer contenedor */}
        <div className="flex items-center justify-between w-full p-4 ">
          <span className="text-gray-700">Seleccionar país</span>
          <select
            value={country}
            onChange={handleCountryChange}
            className="bg-white text-[#444444] py-2 px-4 rounded-lg"
          >
            <option value="">Seleccionar</option>
            <option value="Argentina">Argentina</option>
            <option value="Brasil">Brasil</option>
            <option value="Chile">Chile</option>
            <option value="Colombia">Colombia</option>
            <option value="México">México</option>
            <option value="Perú">Perú</option>
          </select>
        </div>

        {/* Segundo contenedor */}
        <div className="flex flex-wrap items-center justify-between w-full p-4">
          <span className="text-gray-700">Fecha de inicio</span>
          <DatePicker
            selected={startDate}
            onChange={(date: Date | null) => setStartDate(date)}
            className="bg-white text-[#444444] py-2 px-4 rounded-lg"
          />
        </div>

        {/* Tercer contenedor */}
        <div className="flex flex-wrap items-center justify-between w-full p-4 ">
          <span className="text-gray-700">Fecha de fin</span>
          <DatePicker
            selected={endDate}
            onChange={(date: Date | null) => setEndDate(date)}
            className="bg-white text-[#444444] py-2 px-4 rounded-lg"
          />
        </div>

        {/* Cuarto contenedor */}
        <div className="flex items-center justify-between w-full p-4 ">
          <span className="text-gray-700">Activar notificaciones</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={isSwitchOn} onChange={handleSwitchChange} className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-gray-300 rounded-full peer dark:bg-white peer-checked:after:translate-x-full peer-checked:after:border-[#ECECEC] after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[#ECECEC] after:border-[#ECECEC] after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-[#6096B9] peer-checked:bg-[#6096B9]"></div>
          </label>
        </div>
      </div>

      {/* Botón continuar */}
      <button
        onClick={() => router.push('/subpages/planeacion')}
        className="absolute bottom-6 bg-[#6096B9] hover:bg-[#5989aa] rounded-md text-white text-center w-auto px-6 py-2 text-sm sm:text-base md:text-base lg:text-base"
      >
        Continuar
      </button>
    </div>
  );
};

export default Duracion;