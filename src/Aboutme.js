import React from 'react';
import propic from './propic.png';
import linkedinLogo from './LinkedIn_icon.png';
import githubLog from './github-mark.svg';

const AboutMe = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 to-indigo-400  mt-5 rounded-lg min-h-[300px] flex flex-col md:flex-row items-start px-6 md:px-10 gap-6 md:gap-10 shadow-lg 
                    hover:from-gray-500 hover:to-indigo-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-600 mx-auto ">

      {/* Immagine e social */}
      <div className="mt-6 flex flex-col items-center flex-shrink-0">
        <img 
          src={propic} 
          className="h-[180px] w-[160px] md:h-[200px] md:w-[180px] rounded-full shadow-lg" 
          alt="Profile" 
        />
        <div className="flex flex-row space-x-4 justify-center mt-4">
          <a href="https://www.linkedin.com/in/fragtrotta/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} className="h-[25px] w-[25px]" alt="LinkedIn" />
          </a>
          <a href="https://github.com/MoonMr404" target="_blank" rel="noopener noreferrer">
            <img src={githubLog} className="h-[25px] w-[25px]" alt="GitHub" />
          </a>
        </div>
      </div>

      {/* Testo */}
      <div className="flex flex-col justify-start flex-1 mt-6 space-y-4 min-w-0">
        <p className="text-2xl md:text-3xl font-bold text-left text-gray-900">
          Francesco Giuseppe Trotta
        </p>

        <p className="text-lg md:text-xl text-left text-gray-900">
          Junior Developer
        </p>

        <p className="text-sm md:text-base text-gray-900 leading-6 md:leading-7 tracking-wide text-justify break-words">
          Sono uno studente iscritto al Terzo Anno del corso di Laurea Triennale in Informatica presso
          l’Università degli Studi di Salerno. Ho esperienza in sviluppo .
          Sono curioso e appassionato di sviluppo software, con particolare interesse verso i servizi con
          interazione client-server. Sono sempre pronto a imparare nuove tecnologie e strategie
          e a lavorare su nuovi progetti.<br />
          Sono appassionato di musica, videogiochi e il quello che concerne il mondo tech.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
