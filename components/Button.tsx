import React from 'react';
import { useRouter } from 'next/router';

interface ResponsiveButtonProps {
  text: string;
  redirectTo: string;
  colorStart: string;
  colorEnd: string;
}

const ResponsiveButton: React.FC<ResponsiveButtonProps> = ({ text, redirectTo, colorStart, colorEnd }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(redirectTo);
  };

  return (
    <button
    onClick={handleClick}
      className="flex items-center justify-between w-full p-4 rounded-xl shadow-md hover:shadow-lg active:shadow-inner"
      style={{ background: `linear-gradient(to right, ${colorStart}, ${colorEnd})` }}
    >
      <button className="flex items-center justify-center w-12 h-12 bg-gray-200 text-white rounded-full hover:bg-gray-300 active:bg-gray-300">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
        </svg>
      </button>
      <span className="ml-4 text-lg text-white">{text}</span>
    </button>
  );
};

export default ResponsiveButton;