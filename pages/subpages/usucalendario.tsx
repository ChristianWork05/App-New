import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import 'react-calendar/dist/Calendar.css';

const Calendar = dynamic(() => import('react-calendar'), { ssr: false });

const UsuCalendario = () => {
  const router = useRouter();
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDateClick = (date: Date) => {
    const dateIndex = selectedDates.findIndex(selectedDate => selectedDate.toDateString() === date.toDateString());
    if (dateIndex >= 0) {
      setSelectedDates(selectedDates.filter((_, index) => index !== dateIndex));
    } else {
      setSelectedDates([...selectedDates, date]);
    }
  };

  const tileClassName = ({ date, view }: { date: Date, view: string }) => {
    if (view === 'month') {
      const isSelected = selectedDates.find(selectedDate => selectedDate.toDateString() === date.toDateString());
      return isSelected ? 'selected' : '';
    }
    return '';
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-[#ECECEC] via-[#ECECEC] to-[#6096B9] p-4 gap-4 relative">
      {/* header */}
      <div className="self-stretch flex items-center justify-between w-full px-4 py-2 mb-4">
        <div className="flex items-center justify-start cursor-pointer" onClick={() => router.push('/subpages/misalbum')}>
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </div>
        <button className='flex items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 lg:size-8 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
          </svg>
        </button>
      </div>

      <div className='flex flex-col items-center justify-center w-full text-[#727272] text-center text-sm sm:text-base md:text-base lg:text-lg font-semibold'>
        <span>Nombre del usuario</span>
        <span className='font-normal text-sm'>Febrero 2025</span>
      </div>

      {/* Contenedor principal */}
      <div className="flex flex-col items-center justify-between w-full h-full space-y-4 overflow-y-auto px-4 sm:px-8 md:px-16 lg:px-24 mb-16">
        {isClient && (
          <Calendar
            onClickDay={handleDateClick}
            tileClassName={tileClassName}
            className="w-full"
          />
        )}
      </div>

      {/* Botón continuar */}
      <button
        onClick={() => router.push('/subpages/landing')}
        className="absolute bottom-6 bg-[#6096B9] hover:bg-[#5989aa] rounded-md text-white text-center w-auto px-6 py-2 text-sm sm:text-base md:text-base lg:text-base"
      >
        Ver todos los álbumnes
      </button>

      <style jsx>{`
        .react-calendar__tile {
          background: #D2D7DB;
          border-radius: 8px;
          transition: background-color 0.3s;
        }
        .react-calendar__tile:hover {
          background: #B0B7C1;
        }
        .react-calendar__tile.selected {
          background: #6096B9;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default UsuCalendario;