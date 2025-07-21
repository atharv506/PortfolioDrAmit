import React from 'react'

import photo from "../assets/photoatharv.png";
import Research from './Research';
import Publications from './Publications';
import Links from './Links';
import Teaching from './Teaching';
import Contact from './Contact';
const Home = () => {
function handleclick() {
  window.location.hash = '#contact';
}
 const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/public/Dr_Amit_Goyal_CV.docx';
    link.download = 'Dr_Amit_Goyal_CV.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
     <div className="flex flex-col min-h-screen bg-gray-100">
  
    <main className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-24 py-12 gap-6 md:gap-10 flex-1">
      
      <section id='about' className="flex-shrink: 1 flex flex-col justify-center space-y-12 max-w-xl text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Dr. Amit Kumar Goyal
        </h1>
        <h2 className="text-xl md:text-2xl text-green-700 font-semibold">
          Specializing in Artificial Intelligence, Machine Learning, and Network Security and Protocols
        </h2>
        <p className="text-gray-600">
          Dr. Amit Kumar Goyal has 24 years of teaching experience and is presently working as a professor in the CSE department at Chandigarh University. He has research inclination in machine learning, deep learning, blockchain, cryptography, and network security. He has authored and presented more than 18 research papers at national and international conferences and published in peer-reviewed journals indexed by SCI, SCOPUS, Google Scholar, etc. He has been assigned the responsibility of a reviewer at various international conferences and international journals.
        </p>
        <div className="flex gap-10  justify-center md:justify-start">
          <button className="bg-green-500 text-white hover:bg-green-600 transition rounded-2xl h-10 min-w-[10rem] flex items-center justify-center shadow" onClick={handleclick}>
            <i className="fa-solid fa-envelope mr-2" ></i> Contact Me
          </button>
          <button className="bg-white border border-green-500 text-green-500 hover:bg-green-50 transition rounded-2xl h-10 min-w-[10rem] flex items-center justify-center shadow" onClick={handleDownloadCV}>
            <i className="fa-solid fa-file-pdf mr-2"></i> Download CV
          </button>
        </div>
      </section>
      
      <section className="flex justify-between md:justify-end flex-1">
        <img
  className="rounded-full w-50 h-50 md:w-64 md:h-64 object-cover border-4 border-green-200 shadow -translate-x-30  "
  src={photo}
  alt="Dr. Amit Kumar Goyal"
  loading="lazy"
/>
      </section>
    </main>
    <Research/>
    <Publications/>

    <Teaching/>
    <Links/>
    <Contact/>
  </div>
  )
}

export default Home
