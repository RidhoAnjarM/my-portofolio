'use client'
import React, { useState, useEffect, useRef } from 'react'
import Navigation from '../components/Navigation'

// Define the Project type
interface Project {
  id: number
  title: string
  subtitle: string
  image: string
  description: string
  svgPath: string
  demoLink: string
  sourceLink: string
}

export default function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [renderModal, setRenderModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: 'ForuMedia',
      subtitle: 'Website Forum Diskusi',
      image: '../img/cover cd.png',
      description: 'Ini adalah detail dari ForuMedia. Website ini merupakan platform untuk diskusi online.',
      svgPath: 'M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z',
      demoLink: 'https://forumedia.vercel.app',
      sourceLink: 'https://github.com/RidhoAnjarM/frontend-ukk'
    },
    {
      id: 2,
      title: 'Event Management System',
      subtitle: 'Website Manajemen Event',
      image: '',
      description: 'Ini adalah detail dari Event Management System. Website ini digunakan untuk mengelola event secara efisien.',
      svgPath: '',
      demoLink: '#',
      sourceLink: 'https://github.com/RidhoAnjarM/'
    },
    {
      id: 3,
      title: 'R.E.D Game',
      subtitle: 'Game FlappyRobot',
      image: '',
      description: 'Game ini adalah game loncat loncat',
      svgPath: 'M5 12h14m-7-7v14',
      demoLink: '#',
      sourceLink: 'https://github.com/RidhoAnjarM'
    }
  ]

  const toggleModal = (project: Project | null) => {
    setSelectedProject(project)
    setIsModalOpen(!isModalOpen)
  }

  useEffect(() => {
    if (isModalOpen) {
      setRenderModal(true)
      setTimeout(() => setIsVisible(true), 10) 
    } else {
      setIsVisible(false)
      const timeout = setTimeout(() => setRenderModal(false), 300)
      return () => clearTimeout(timeout)
    }
  }, [isModalOpen])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        toggleModal(null)
      }
    }

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isModalOpen])

  return (
    <div className='bg-hitam min-h-screen text-white'>
      <Navigation />

      <div className='relative w-full'>
        <div className="pt-[150px] mx-auto max-w-[312px] md:max-w-[480px] lg:float-right lg:mt-[150px] lg:mr-[200px] animate-slide-in relative">
          <h2 className='text-[20px] font-russo md:hidden lg:hidden'>Project</h2>
        </div>

        <div className="w-full relative flex gap-5 md:gap-7 overflow-x-auto overflow-y-hidden scrollbar-hide py-5 px-10 lg:gap-14 mt-[50px]">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative w-[300px] h-[280px] md:w-[350px] md:h-[330px] rounded-2xl bg-putih flex-shrink-0 overflow-hidden border-2 border-[#634647]"
            >
              <div className="w-[280px] h-[190px] md:w-[330px] md:h-[220px] bg-blue-500 rounded-xl mt-2.5 overflow-hidden mx-auto">
                <img src={project.image} alt={project.title} className='object-cover w-full h-full' />
              </div>

              <h3 className="absolute bottom-6 left-3 text-[16px] md:text-[18px] font-russo text-[#634647]">
                {project.title} <br />
                <span className='text-[13px] md:text-[15px] text-black font-poppins'>{project.subtitle}</span>
              </h3>

              <button
                onClick={() => toggleModal(project)}
                className="absolute bottom-6 right-6 md:bottom-7 md:right-7 bg-[#ddad81] text-[#634647] font-poppins font-semibold px-3 py-1 text-[14px] md:px-4 md:text-[16px] rounded-lg hover:bg-[#634647] hover:text-[#ddad81] transition-colors duration-300"
              >
                Detail
              </button>
            </div>
          ))}
        </div>
      </div>

      {renderModal && selectedProject && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            ref={modalRef}
            className={`bg-white rounded-lg p-6 w-[300px] md:w-[450px] mx-auto relative transform transition-transform duration-300 ${
              isVisible ? 'translate-y-0 scale-100' : 'translate-y-10 scale-95'
            }`}
          >
            {/* Close Button */}
            <button
              onClick={() => toggleModal(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Content */}
            <h3 className="text-lg font-bold text-[#634647] font-russo mb-4">{selectedProject.title}</h3>
            <div className="flex justify-center mb-4">
              <svg
                className="w-24 h-24 text-[#ddad81]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={selectedProject.svgPath}
                />
              </svg>
            </div>
            <p className="text-gray-700 font-poppins mb-6">{selectedProject.description}</p>

            {/* Buttons */}
            <div className="flex justify-between gap-4">
              <a
                href={selectedProject.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 bg-[#ddad81] text-[#634647] font-poppins font-semibold rounded-lg hover:bg-[#634647] hover:text-[#ddad81] transition-colors duration-300 text-center"
              >
                Demo
              </a>
              <a
                href={selectedProject.sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 bg-[#634647] text-[#ddad81] font-poppins font-semibold rounded-lg hover:bg-[#ddad81] hover:text-[#634647] transition-colors duration-300 text-center"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}