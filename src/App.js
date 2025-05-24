import './App.css';
import AboutMe from './Aboutme';
import Progetti from './Progetti';
import Education from './Education';
import Skills from './Skills';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-indigo-400 pb-20">
      <div className="container mx-auto px-2 py-4">
        <AboutMe />

        <hr className='mt-5 border-black'/>        
        <Education/>

        <hr className='mt-5 border-black'/>        
        <Progetti />

        <hr className='mt-5  border-black'/>
        <Skills/>
      </div>
    </div>
  );
}

export default App;
