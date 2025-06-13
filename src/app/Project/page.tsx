'use client'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'

export default function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className='bg-hitam min-h-screen text-white'>
      <Navigation />

      <div className='relative w-full'>
        <div className="pt-[150px] mx-auto max-w-[312px] md:max-w-[480px] lg:float-right lg:mt-[150px] lg:mr-[200px] animate-slide-in relative">
          <h2 className='text-[20px] font-russo md:hidden lg:hidden'>Project</h2>
        </div>

        <div className="w-full relative flex gap-4 overflow-x-auto overflow-y-hidden scrollbar-hide py-5 px-10 lg:gap-5">
          <div className="relative w-[300px] h-[280px] md:w-[350px] md:h-[330px] lg:w-[370px] lg:h-[360px] rounded-2xl bg-putih flex-shrink-0 overflow-hidden shadow-lg">
            <div className="w-[280px] h-[190px] md:w-[330px] md:h-[220px] lg:w-[350px] lg:h-[250px] bg-blue-500 rounded-xl mt-2.5 overflow-hidden mx-auto">
              <img src="../img/cover cd.png" alt="" className='object-cover w-full h-full'/>
            </div>

            <h3 className="absolute bottom-6 left-3 text-[16px] font-poppins text-[#634647] ">ForuMedia <br /> <span className='text-[13px]'>Website Forum Diskusi</span></h3>

            <button
              onClick={toggleModal}
              className="absolute bottom-6 right-6 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10 bg-[#ddad81] text-[#634647] font-poppins font-semibold px-5 py-1 rounded-lg hover:bg-[#634647] hover:text-[#ddad81] transition-colors duration-300"
            >
              Detail
            </button>
          </div>
          <div className="relative w-[300px] h-[280px] md:w-[350px] md:h-[330px] lg:w-[370px] lg:h-[360px] rounded-2xl bg-putih flex-shrink-0 overflow-hidden shadow-lg"></div>
          <div className="relative w-[300px] h-[280px] md:w-[350px] md:h-[330px] lg:w-[370px] lg:h-[360px] rounded-2xl bg-putih flex-shrink-0 overflow-hidden shadow-lg"></div>
        </div>

      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md mx-auto">
            <h3 className="text-lg font-bold mb-4">Detail Card</h3>
            <p className="text-gray-700 mb-4">
              Ini adalah detail dari card. Anda bisa menambahkan informasi seperti deskripsi, harga, atau lainnya di sini.
            </p>
            <button
              onClick={toggleModal}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
