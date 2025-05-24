import React from 'react';

const techLogoUrls = [
  'https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png',
  'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
  'https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png  ',
  'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png',
  'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  'https://cdn.dribbble.com/userupload/42461346/file/original-fb89310f46ff03f173c67db026ba6af5.gif',
  'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png',
  'https://cdn-icons-png.flaticon.com/512/2772/2772128.png',
  'https://www.mongodb.com/assets/images/global/leaf.png',
];

const Skills = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 to-indigo-400   text-black hover:text-gray-700
      mt-5 rounded-lg h-auto min-h-[310px] flex items-start px-10 gap-10 shadow-lg 
       hover:from-gray-500 hover:to-indigo-600 hover:shadow-xl hover:-translate-y-1
      transition-all duration-600">
      
      <div className="flex flex-col justify-start flex-1 mt-6 space-y-4">
      <p className="text-3xl font-bold text-left text-gray-900">
          Skills
        </p>

        <div className="flex flex-wrap gap-4">
          {techLogoUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Tech logo ${index}`}
              className="h-[50px] w-[50px] "
            />
          ))}
        </div>

        {/* Div software */}
       
        <div className="mt-4">
        <p className="font-bold text-gray-900 mb-2">Software</p>
            <div className="flex flex-wrap gap-4 text-gray-800">
                {['Figma', 'IntelliJ IDEA', 'Rider', 'GoLand', 'Visual Studio Code', 'GitHub'].map((tool, index) => (
                <span key={index} className="px-1 py-1 text-black">
                    {tool}
                </span>
                ))}
            </div>

        <div className="mt-4">
            <p className="font-bold text-gray-900 mb-2">Lingue</p>
                <div className="flex flex-wrap gap-4 text-gray-800">
                    {['Italiano', 'Inglese', 'Francese', 'Tedesco'].map((lang, index) => (
                      <span key={index} className="px-1 py-1 text-black">{lang}</span>))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
