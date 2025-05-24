import React from 'react';

const projects = [
  {
    title: 'MeerKat',
    description:
      'Desktop app in C# per organizzare e monitorare progetti software, sviluppata in team per l’esame di Ingegneria del Software.',
    link: 'https://github.com/MoonMr404/MeerKat',
  },
  {
    title: 'SweetSavor',
    description:
      'Sito e-commerce creato con HTML, CSS e JavaScript per l’esame di Tecnologie Software per il Web, realizzato in team.',
    link: 'https://github.com/MoonMr404/SweetSavor',
  },
  {
    title: 'PokeBrain',
    description:
      'Agente AI sviluppato in Python per combattere in modo autonomo su Pokémon Showdown, realizzato per un progetto di Intelligenza Artificiale.',
    link: 'https://github.com/MoonMr404/PokeBrain-AI',
  },
  {
    title: 'LifeSync',
    description:
      'App full-stack in Go, React e MongoDB per la gestione delle attività personali e la produttività. Progetto in sviluppo.',
    link: '',
  },
];

const Progetti = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 to-indigo-400  mt-5 rounded-lg min-h-[500px] flex flex-col md:flex-row items-start px-6 md:px-10 gap-6 md:gap-10 shadow-lg 
    hover:from-gray-500 hover:to-indigo-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-600 mx-auto ">
        
      <div className="flex flex-col space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Projects</h2>

        {projects.map((project, index) => (
          <div key={index} className="text-gray-900">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-base mt-1">{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-200 hover:text-white"
              >
                Link al progetto
              </a>
            )}
            {!project.link && (
              <p className="text-sm italic text-yellow-200">Progetto in sviluppo</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progetti;
