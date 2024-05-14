import './App.css';
import { Card } from './components/Card';
import { Hero } from './components/Hero';
import { NavBar } from './components/NavBar';
import { TimeLine } from './components/TimeLine';

function App() {
  return (
    <div className="App bg-base-200">
      <NavBar />
      <Hero />
      <div className="flex flex-col w-full">
        <div className="divider"></div> 
      </div>
      <TimeLine />
      <div className="flex flex-col w-full">
        <div className="divider"></div> 
      </div>
      <h1 className='text-5xl font-bold text-center pb-5 ml-10 mt-10'>Projects</h1>
      <div className='flex flex-wrap justify-center'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
