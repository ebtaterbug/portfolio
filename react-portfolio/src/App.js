import React, { useState } from "react";
import Nav from './components/Navigation';
import Footer from './components/Footer';
import About from './components/About';
import Contact from "./components/Contact";
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('about');

  const changePage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
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
      <Footer />
    </div>
  );
}

export default App;
