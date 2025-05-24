import React from 'react';

const Education = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 to-indigo-400 
      mt-5 rounded-lg h-[300px] flex items-start px-10 gap-10 shadow-lg
      hover:from-gray-500 hover:to-indigo-600 hover:shadow-xl hover:-translate-y-1
      transition-all duration-600 ">

      <div className="flex flex-col justify-start flex-1 mt-6 space-y-4">
        <p className="text-3xl font-bold text-left text-gray-900">
          Education
        </p>

        <div className='flex flex-row space-between'>
            <div className='flex flex-row gap-5'>
            <img src='https://liceoparmenidevallo.edu.it/wp-content/uploads/sites/437/logo_parmenide-blu-scontornato-PhotoRoom-e-pinetools.png?x23420' className='h-20 w-20 bg-gray-200 rounded-full'/>

                <p className="text-base text-gray-900 leading-7 tracking-wide text-justify">
                Liceo Parmenide <br /> Diploma Liceo Linguistico | 2017-2022</p>
        </div>

        <div className='flex flex-row space-between'>
            <div className='flex flex-row gap-5 ml-5'>
            <img src=' https://www.unisa.it/rescue/img/logo_standard.png' className='h-20 w-20 bg-gray-200 rounded-full'/>

                <p className="text-base text-gray-900 leading-7 tracking-wide text-justify">
                Università degli Studi di Salerno <br /> Laurea Triennale in Informatica | 2022 - In corso</p>
        </div>




           
                </div>
            </div>
        </div>
    </div>
  );
};

export default Education;
