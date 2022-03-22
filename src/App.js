import React, { useState } from "react";
import Nav from './components/Navigation';
import About from './components/About';
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('about');

  const changePage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'resume':
        return <Resume />;
      case 'portfolio':
        return <Portfolio />;
      default:
        return null;
    }
  }
  return (
    <div>
       <Nav
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
       ></Nav>
      <main>
        {changePage()}
      </main>
    </div>
  );
}

export default App;